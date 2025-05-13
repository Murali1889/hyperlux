import axios from 'axios'
import * as cheerio from 'cheerio'

export async function getTextFromUrl(url: string): Promise<{ text: string; headings: string[] }> {
    try {
        const response = await axios.get(url, {
            headers: {
                'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) Chrome/91.0.4472.124'
            },
            timeout: 15000
        })

        const $ = cheerio.load(response.data)
        let text = ''
        const selectors = ['article', 'main', '.main-content', '#content']

        for (const selector of selectors) {
            const main = $(selector)
            if (main.length > 0) {
                main.find('p').each((_i, el) => {
                    text += $(el).text().trim() + ' '
                })
                break
            }
        }

        if (!text.trim()) {
            $('p').each((_i, el) => {
                text += $(el).text().trim() + ' '
            })
        }

        const headings: string[] = []
        $('h1, h2, h3').each((_i, el) => {
            headings.push(`${el.tagName.toUpperCase()}: ${$(el).text().trim()}`)
        })

        return {
            text: text.trim().replace(/\s+/g, ' '),
            headings
        }
    } catch (error) {
        console.error(`Error fetching ${url}:`, error)
        return { text: '', headings: [] }
    }
}

// export async function analyzeCompetitors(urls: string[]): Promise<string> {
//     const insights: string[] = []
//     for (let i = 0; i < urls.length; i++) {
//         const { text, headings } = await getTextFromUrl(urls[i])
//         const excerpt = text.slice(0, 800)
//         insights.push(`Competitor ${i + 1} (${urls[i]}):\nHeadings:\n${headings.slice(0, 4).join('\n')}\nContent Excerpt:\n${excerpt}\n`)
//     }
//     return insights.join('\n') || 'No competitor insights gathered.'
// }

export function constructPrompt(
    primary: string,
    secondary: string[],
    intent: string,
    summary: string,
    audience = 'general audience',
    tone = 'informative, engaging',
    wordCount = 1200
): string {
    return `You are an expert SEO blog writer. Your task is to generate a high-quality, original blog post in structured JSON format. The blog will be published directly, so follow all instructions carefully.
    ## INSTRUCTIONS

    1. Format the response as **valid JSON**.
    2. Use only standard HTML5 tags inside \`html_content\`.
    - Allowed tags: <h1>, <h2>, <h3>, <p>, <ul>, <li>, <strong>, <em>, <a>
    - Do **not** use Markdown, emojis, special characters (*, #, -, etc.), or non-ASCII text.
    3. The content must be SEO-friendly and readable by humans.
    4. The content must be like it was written by humans, not AI.
    4. Keep paragraphs short and easy to scan.
    5. Use semantic headings to organize the blog well.
    6. The response must include a descriptive **image_prompt** to be used for generating a blog hero image using an image generation model.

    ## INPUTS

    - Primary Keyword: "${primary}"
    - Secondary Keywords: ${secondary.join(', ')}
    - Intent: "${intent}"
    - Audience: "${audience}"
    - Tone: "${tone}"
    - Word Count: ~${wordCount} words

    ## COMPETITOR INSIGHTS:
    ${summary}

    ## OUTPUT FORMAT

    Return your response in the following JSON structure:

    \`\`\`json
    {
    "title": "An SEO-optimized blog title here",
    "meta_description": "A short engaging meta description including the primary keyword.",
    "html_content": "<h1>Heading</h1><p>Intro paragraph...</p><h2>Subheading</h2><p>Content...</p>",
    "image_prompt": "A realistic illustration of [describe the blog topic visually]."
    }
    \`\`\`

    Do not include anything outside the JSON block. Do not escape HTML inside \`html_content\`. Do not use invalid characters. Output only the JSON.`
}

export async function generateBlogPost(
    primary: string,
    secondary: string[],
    intent: string,
    competitorUrls: string[],
    audience = 'general audience',
    tone = 'informative, engaging',
    wordCount = 1200
) {
    try {
        console.log('Generating blog post...')
        const response = await axios.post('/api/generateBlogPost', {
            primary,
            secondary,
            intent,
            competitorUrls,
            audience,
            tone,
            wordCount,
        })

        if (!response) {
            throw new Error('Failed to generate blog post')
        }

        const data = response.data

        return {
            title: data.title || 'N/A',
            meta: data.meta || 'N/A',
            body: data.body || '',
            imagePrompt: data.imagePrompt || '',
        }
    } catch (error) {
        console.error('Error fetching blog post:', error)
        return {
            title: 'N/A',
            meta: 'N/A',
            body: 'Failed to fetch blog content.',
            imagePrompt: '',
        }
    }
}

