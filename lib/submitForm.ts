export interface DemoFormPayload {
  e: string
  p: string
  w: string
  ca: string
}

export interface DemoFormResult {
  success: boolean
  error?: string
}

export const submitDemoForm = async (data: DemoFormPayload): Promise<DemoFormResult> => {
  try {
    const res = await fetch("/api/book-demo", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    })

    const json = await res.json().catch(() => ({}) as { success?: boolean; error?: string })

    if (!res.ok || !json.success) {
      return { success: false, error: json.error ?? `Request failed (${res.status})` }
    }

    return { success: true }
  } catch (e) {
    const message = e instanceof Error ? e.message : "Network error"
    console.error("submitDemoForm error:", message)
    return { success: false, error: message }
  }
}
