function doPost(e) {
  var data = JSON.parse(e.postData.contents)
  var sheet = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet()
  sheet.appendRow([new Date(), data.e, data.p, data.w, data.ca])
  return ContentService
    .createTextOutput(JSON.stringify({ success: true }))
    .setMimeType(ContentService.MimeType.JSON)
}
