// 'use client'
// import { createContext, useContext, useState, ReactNode, useEffect } from 'react';
// import { db, collection, getDocs, doc, updateDoc, deleteDoc } from '@/lib/firebase';
// import type { BlogPost } from "@/types/resources";


// // Define the shape of the context
// interface BlogContextType {
//   blogs: BlogPost[];
//   loading: boolean;
//   fetchBlogs: () => Promise<void>;
//   updateBlog: (id: string, blogData: Partial<BlogPost>) => Promise<{ success: boolean; error?: string }>;
//   deleteBlog: (id: string) => Promise<{ success: boolean; error?: string }>;
// }

// // Create the context
// const BlogContext = createContext<BlogContextType | undefined>(undefined);

// // Blog Provider Props
// interface BlogProviderProps {
//   children: ReactNode;
// }

// // Blog Provider
// export const BlogProvider = ({ children }: BlogProviderProps) => {
//   const [blogs, setBlogs] = useState<BlogPost[]>([]);
//   const [loading, setLoading] = useState<boolean>(false);

//   // 1. Fetch all blogs
//   const fetchBlogs = async () => {
//     try {
//       setLoading(true);
//       const querySnapshot = await getDocs(collection(db, 'blogs'));
//       const blogList: BlogPost[] = querySnapshot.docs.map((doc: any) => ({
//         id: doc.id,
//         ...doc.data(),
//       } as BlogPost));
//       console.log("blogList: ", blogList);
//       setBlogs(blogList);
//     } catch (error: any) {
//       console.error('Error fetching blogs:', error);
//     } finally {
//       setLoading(false);
//     }
//   };

//   useEffect(() => {
//     fetchBlogs();
//   }, []);

//   // 2. Update an existing blog
//   const updateBlog = async (id: string, blogData: Partial<BlogPost>) => {
//     try {
//       setLoading(true);
//       const blogRef = doc(db, 'blogs', id);
//       await updateDoc(blogRef, {
//         ...blogData,
//         updatedAt: new Date().toISOString(),
//       });
//       setBlogs(prev =>
//         prev.map(blog =>
//           blog.id === id ? { ...blog, ...blogData } : blog
//         )
//       );
//       return { success: true };
//     } catch (error: any) {
//       console.error('Error updating blog:', error);
//       return { success: false, error: error.message };
//     } finally {
//       setLoading(false);
//     }
//   };

//   // 3. Delete an existing blog
//   const deleteBlog = async (id: string) => {
//     try {
//       setLoading(true);
//       const blogRef = doc(db, 'blogs', id);
//       await deleteDoc(blogRef);
//       setBlogs(prev => prev.filter(blog => blog.id !== id));
//       return { success: true };
//     } catch (error: any) {
//       console.error('Error deleting blog:', error);
//       return { success: false, error: error.message };
//     } finally {
//       setLoading(false);
//     }
//   };

//   return (
//     <BlogContext.Provider
//       value={{
//         blogs,
//         loading,
//         fetchBlogs,
//         updateBlog,
//         deleteBlog,
//       }}
//     >
//       {children}
//     </BlogContext.Provider>
//   );
// };

// // Custom hook to use the BlogContext
// export const useBlogs = () => {
//   const context = useContext(BlogContext);
//   if (!context) {
//     throw new Error('useBlogs must be used within a BlogProvider');
//   }
//   return context;
// };