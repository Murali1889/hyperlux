import { db, collection, addDoc } from './firebase';

export const submitDemoForm = async (data: any) => {
  try {
    const docRef = await addDoc(collection(db, 'book_demo'), data);
    return { success: true, id: docRef.id };
  } catch (e: any) {
    console.error('Error adding demo form document:', e);
    return { success: false, error: e.message };
  }
};