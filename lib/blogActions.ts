import { db, collection, addDoc } from './firebase';
import { generateBlogPost, constructPrompt, analyzeCompetitors } from '../utils/blogGenerator';

export const generateAndStoreBlog = async (formData: {
    primaryKeyword: string;
    secondaryKeywords: string[];
    competitorLinks: string[];
    blogIntent: string;
}) => {
    try {
        // Analyze the competitors
        // const competitorSummary = await analyzeCompetitors(formData.competitorLinks)
        const competitorSummary = ""

        // Construct the prompt using the form data
        const prompt = constructPrompt(
            formData.primaryKeyword,
            formData.secondaryKeywords,
            formData.blogIntent,
            competitorSummary,
            'general audience',
            'informative, engaging',
            1200
        );

        // Generate the blog post using the constructed prompt
        const blogContent = await generateBlogPost(prompt);

        // Create a blog document with the generated content
        const blogData = {
            title: blogContent.title,
            metaTag: blogContent.metaTag,
            content: blogContent.body,
            imagePrompt: blogContent.imagePrompt,
            primaryKeyword: formData.primaryKeyword,
            secondaryKeywords: formData.secondaryKeywords,
            intent: formData.blogIntent,
            createdAt: new Date().toISOString(),
            status: 'draft'
        };

        // Store in Firebase
        const docRef = await addDoc(collection(db, 'blogs'), blogData);

        return {
            success: true,
            id: docRef.id,
            blog: blogData
        };
    } catch (error: any) {
        console.error('Error generating and storing blog:', error);
        return {
            success: false,
            error: error.message
        };
    }
}; 