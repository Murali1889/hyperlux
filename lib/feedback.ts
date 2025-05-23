import { db, collection, addDoc } from './firebase';

export const submitFeedback = async (data: any) => {
  try {
    const docRef = await addDoc(collection(db, 'feedback'), data);
    return { success: true, id: docRef.id };
  } catch (e: any) {
    console.error('Error adding feedback document:', e);
    return { success: false, error: e.message };
  }
};
