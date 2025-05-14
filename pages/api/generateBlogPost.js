import axios from 'axios'

const ANTHROPIC_API_KEY = process.env.ANTHROPIC_API_KEY || ''
const MODEL = 'claude-3-7-sonnet-20250219'

export default async function handler(req, res) {
  console.log('Received request body:', req.body)

  if (req.method === 'POST') {
    const { prompt } = req.body

    try {
      console.log('Generated Prompt:', prompt)

      // Request to Anthropic API
      const response = await axios.post(
        'https://api.anthropic.com/v1/messages',
        {
          model: MODEL,
          messages: [{ role: 'user', content: prompt }],
          max_tokens: 3500,
          temperature: 0.7,
          system: "You are an expert SEO blog writer. Your task is to generate high-quality, original blog posts as Humanize in structured JSON format`."
        },
        {
          headers: {
            'x-api-key': ANTHROPIC_API_KEY,
            'content-type': 'application/json',
          }
        }
      )

      const rawContent = response.data?.content?.[0]?.text || ''
      console.log('Raw content from Anthropic:', rawContent)

      // Attempt to match the JSON block within the response content
      const jsonMatch = rawContent.match(/```json([\s\S]*?)```/)

      if (!jsonMatch) {
        // Return error if no valid JSON is found in the response
        return res.status(500).json({
          error: 'No valid JSON block found in the response from the model.'
        })
      }

      // Parse the JSON content from the response
      try {
        const parsed = JSON.parse(jsonMatch[1].trim())
        return res.status(200).json({
          title: parsed.title || 'N/A',
          excerpt: parsed.excerpt || 'N/A',
          metaTag: parsed.meta_tag || 'N/A',
          content: parsed.html_content || '',
          imagePrompt: parsed.image_prompt || ''
        })
      } catch (err) {
        console.error('Error parsing JSON:', err)
        return res.status(500).json({
          error: 'Failed to parse JSON from model output.'
        })
      }

    } catch (error) {
      console.error('Error generating blog post:', error.response?.data || error.message)
      return res.status(500).json({
        error: 'Failed to generate blog post due to API error.',
        details: error.response?.data || error.message
      })
    }
  } else {
    res.status(405).json({ error: 'Method Not Allowed' })
  }
}
