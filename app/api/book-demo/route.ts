import { NextRequest, NextResponse } from "next/server"

export async function POST(req: NextRequest) {
  const appsScriptUrl = process.env.APPS_SCRIPT_BOOK_DEMO_URL
  if (!appsScriptUrl) {
    return NextResponse.json(
      { success: false, error: "Backend URL not configured" },
      { status: 500 },
    )
  }

  try {
    const body = await req.json()

    const upstream = await fetch(appsScriptUrl, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(body),
      redirect: "follow",
    })

    const text = await upstream.text()

    let payload: unknown
    try {
      payload = JSON.parse(text)
    } catch {
      payload = { raw: text }
    }

    return NextResponse.json(payload, { status: upstream.ok ? 200 : 502 })
  } catch (err) {
    const message = err instanceof Error ? err.message : "Unknown error"
    return NextResponse.json({ success: false, error: message }, { status: 500 })
  }
}
