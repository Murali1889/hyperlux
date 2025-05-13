import { db, collection, addDoc } from './firebase';
import { generateBlogPost } from '../utils/blogGenerator';

export const generateAndStoreBlog = async (formData: {
    primaryKeyword: string;
    secondaryKeywords: string[];
    competitorLinks: string[];
    blogIntent: string;
}) => {
    try {
        // Generate the blog post using the blog generator
        const blogContent = await generateBlogPost(
            formData.primaryKeyword,
            formData.secondaryKeywords,
            formData.blogIntent,
            formData.competitorLinks
        );

        // Create a blog document with the generated content
        const blogData = {
            title: blogContent.title,
            metaDescription: blogContent.meta,
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