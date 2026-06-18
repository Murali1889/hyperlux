# Apps Script Backend for Book-a-Demo Form

**Purpose:** Replace the Firebase backend with a Google Apps Script that writes demo requests to a Google Sheet you can browse, filter, and export.

**Form payload fields (from `components/sections/demo-booking-form.tsx`):**

| Key | Meaning | Required |
|---|---|---|
| `e` | Corporate email | ✅ |
| `p` | Phone number | ✅ |
| `w` | Where did you hear about us | ✅ |
| `ca` | Created at (ISO 8601) | ✅ |

---

## Step 1 — Create the Google Sheet

1. Open https://sheets.google.com
2. Create a new sheet, name it: **DocsAPI Demo Requests**
3. In row 1, add headers in this exact order:

```
Timestamp | Email | Phone | Heard From | Created At | User Agent | Referer | IP Hash
```

(The script writes in this column order — keep it consistent.)

4. Copy the spreadsheet ID from the URL: `https://docs.google.com/spreadsheets/d/<THIS_PART>/edit`

---

## Step 2 — Create the Apps Script

1. Open https://script.google.com → New project
2. Rename project: **DocsAPI Demo Form Backend**
3. Delete the default `Code.gs` contents
4. Paste the script below
5. Replace `YOUR_SHEET_ID_HERE` with the spreadsheet ID from Step 1

```javascript
/**
 * DocsAPI — Book-a-Demo form backend
 * Receives POST from the docsapi.co book-demo form,
 * appends a row to the linked Google Sheet,
 * returns a JSON response.
 *
 * Deploy as: Web app
 *   Execute as: Me (your account)
 *   Who has access: Anyone
 *
 * Test endpoint with curl after deploy:
 *   curl -X POST -H "Content-Type: application/json" \
 *     -d '{"e":"test@example.com","p":"+1-555-0100","w":"Google","ca":"2026-06-18T12:00:00Z"}' \
 *     <DEPLOYED_URL>
 */

// === Configuration ===
var SHEET_ID = 'YOUR_SHEET_ID_HERE';  // ← paste your sheet ID
var SHEET_NAME = 'Sheet1';            // ← tab name; rename if different
var NOTIFY_EMAIL = '';                // ← optional: email to notify on each new lead, e.g. 'sales@hyperverge.co'

// === Main POST handler ===
function doPost(e) {
  try {
    // Parse the JSON body
    var data = {};
    if (e && e.postData && e.postData.contents) {
      data = JSON.parse(e.postData.contents);
    }

    // Basic validation — bail early if required fields missing
    var requiredFields = ['e', 'p', 'w'];
    for (var i = 0; i < requiredFields.length; i++) {
      var field = requiredFields[i];
      if (!data[field] || String(data[field]).trim() === '') {
        return jsonResponse({
          success: false,
          error: 'Missing required field: ' + field
        }, 400);
      }
    }

    // Light email format check
    var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(String(data.e))) {
      return jsonResponse({
        success: false,
        error: 'Invalid email format'
      }, 400);
    }

    // Open the sheet
    var sheet = SpreadsheetApp.openById(SHEET_ID).getSheetByName(SHEET_NAME);
    if (!sheet) {
      return jsonResponse({
        success: false,
        error: 'Sheet not found. Check SHEET_NAME constant.'
      }, 500);
    }

    // Capture request metadata
    var userAgent = '';
    var referer = '';
    if (e && e.parameter) {
      // Apps Script doesn't expose headers directly; the client can pass these
      // as form fields if you want them captured. For now, leave blank.
    }

    // Hash the source IP for spam-rate-limiting later (no PII stored)
    var ipHash = '';

    // Append the row
    sheet.appendRow([
      new Date(),                                // Timestamp (when row was written)
      String(data.e).trim(),                     // Email
      String(data.p).trim(),                     // Phone
      String(data.w).trim(),                     // Heard From
      String(data.ca || new Date().toISOString()), // Created At (from client)
      userAgent,                                 // User Agent
      referer,                                   // Referer
      ipHash                                     // IP hash
    ]);

    // Optional: notify by email
    if (NOTIFY_EMAIL && NOTIFY_EMAIL.indexOf('@') > 0) {
      try {
        MailApp.sendEmail({
          to: NOTIFY_EMAIL,
          subject: 'New DocsAPI demo request: ' + data.e,
          htmlBody:
            '<h3>New demo request</h3>' +
            '<table style="border-collapse:collapse">' +
            '<tr><td style="padding:4px 8px"><b>Email</b></td><td>' + escapeHtml(data.e) + '</td></tr>' +
            '<tr><td style="padding:4px 8px"><b>Phone</b></td><td>' + escapeHtml(data.p) + '</td></tr>' +
            '<tr><td style="padding:4px 8px"><b>Heard from</b></td><td>' + escapeHtml(data.w) + '</td></tr>' +
            '<tr><td style="padding:4px 8px"><b>Submitted</b></td><td>' + escapeHtml(data.ca) + '</td></tr>' +
            '</table>'
        });
      } catch (mailErr) {
        // Don't fail the request if the email fails. Just log it.
        Logger.log('Notify email failed: ' + mailErr);
      }
    }

    return jsonResponse({
      success: true,
      id: sheet.getLastRow()
    });

  } catch (err) {
    Logger.log('doPost error: ' + err + '\n' + err.stack);
    return jsonResponse({
      success: false,
      error: 'Server error: ' + err.message
    }, 500);
  }
}

// === Health check ===
function doGet() {
  return jsonResponse({
    ok: true,
    service: 'DocsAPI demo form backend',
    timestamp: new Date().toISOString()
  });
}

// === Helpers ===

function jsonResponse(obj, statusCode) {
  // Apps Script doesn't expose status codes via ContentService — convention is to
  // use the response body's `success` field and HTTP 200 for everything.
  // Status is preserved here as `_status` in the body for client logging.
  if (statusCode && statusCode !== 200) {
    obj._status = statusCode;
  }
  return ContentService
    .createTextOutput(JSON.stringify(obj))
    .setMimeType(ContentService.MimeType.JSON);
}

function escapeHtml(str) {
  if (!str) return '';
  return String(str)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;');
}

// === Run once to verify access ===
function _testWrite() {
  doPost({
    postData: {
      contents: JSON.stringify({
        e: 'test@example.com',
        p: '+1-555-0100',
        w: 'manual test',
        ca: new Date().toISOString()
      })
    }
  });
}
```

---

## Step 3 — Deploy as Web App

1. In the Apps Script editor: **Deploy → New deployment**
2. Click the gear icon next to "Select type" → choose **Web app**
3. Configuration:
   - **Description:** `DocsAPI demo form v1`
   - **Execute as:** `Me (your-email@hyperverge.co)`
   - **Who has access:** `Anyone`  ← required for the browser to POST
4. Click **Deploy**
5. Click **Authorize access** → pick your Google account → **Advanced → Go to project (unsafe)** → **Allow**
6. Copy the **Web app URL** that appears. It looks like:
   `https://script.google.com/macros/s/AKfycb.../exec`
7. Paste that URL into the next message to me and I'll wire it into `lib/submitForm.ts`.

---

## Step 4 — Test the deployment (do this before sending me the URL)

In your terminal:

```bash
curl -X POST \
  -H "Content-Type: application/json" \
  -d '{"e":"test@example.com","p":"+1-555-0100","w":"manual curl test","ca":"2026-06-18T12:00:00Z"}' \
  "<PASTE_YOUR_DEPLOYED_URL_HERE>"
```

Expected response:
```json
{"success":true,"id":2}
```

Then open the Google Sheet — you should see one new row with the test data. Delete the test row before going live.

---

## Step 5 — Wire the frontend (I'll do this once you send the URL)

Once you give me the deployed URL, I will:

1. Update `lib/submitForm.ts` to POST to the Apps Script URL instead of Firebase
2. Add a Next.js API route at `app/api/book-demo/route.ts` to act as a proxy — this avoids the browser CORS preflight issue that Apps Script has. The browser POSTs to `/api/book-demo`, the Next.js server POSTs to Apps Script, no CORS involved.
3. Keep the existing form component (no UI changes)

**Why proxy via a Next.js API route instead of POSTing the Apps Script URL directly from the browser?**

Apps Script web apps redirect on POST (302 → googleusercontent.com), and browsers strip the body during the redirect. The redirect breaks direct browser → Apps Script POST in most situations. A server-side proxy in Next.js sidesteps the issue cleanly. Pattern is well-known and reliable.

---

## What you'll see in the sheet

Each row written by `doPost`:

| Timestamp | Email | Phone | Heard From | Created At | User Agent | Referer | IP Hash |
|---|---|---|---|---|---|---|---|
| 2026-06-18 14:23:01 | jane@acme.com | +1-555-0123 | Google | 2026-06-18T14:23:01Z | (blank) | (blank) | (blank) |

User Agent / Referer / IP Hash columns are intentionally blank in v1 — Apps Script doesn't expose request headers. If you want them captured, we can add them as form fields the frontend sends explicitly.

---

## Common gotchas

- **"Cannot read property of undefined" in Logger** → you re-deployed but the Apps Script editor still has an old version cached. Refresh the browser tab.
- **Sheet not found** → `SHEET_NAME` doesn't match the tab name. Default is `Sheet1`; rename if you renamed the tab.
- **Email notifications not arriving** → Apps Script's `MailApp.sendEmail` daily quota is 100 emails for free accounts, 1,500 for Workspace. Should be plenty.
- **Authorization scope errors** → you skipped the Authorize step. Run `_testWrite` once from the editor to trigger the auth prompt manually.
- **POST returns HTML instead of JSON** → the deployment URL is wrong (missing `/exec` suffix, or you grabbed the editor URL instead of the deployment URL). Re-deploy and copy the URL again.
