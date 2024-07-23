// Firebase
import { initializeApp } from "firebase/app"
import { getFirestore, getDocs, collection, setDoc, doc, query, limit, deleteDoc } from "firebase/firestore"


const firebaseApp = initializeApp({
    apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
    authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
    projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
    storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET,
    messagingSenderId: process.env.REACT_APP_FIREBASE_MESSAGING_SENDER_ID,
    appId: process.env.REACT_APP_FIREBASE_APP_ID,
    measurementId: process.env.REACT_APP_FIREBASE_MEASUREMENT_ID
});
  
const db = getFirestore(firebaseApp);

async function writeData(collectionName: string, data: fireObj, docId: string) {
    const collectionRef = collection(db, collectionName);
    const docRef = doc(collectionRef, docId);
    await setDoc(docRef, data);
}

async function deleteEntry(collectionName: string, docId: string) {
    const collectionRef = collection(db, collectionName);
    const docRef = doc(collectionRef, docId);
    await deleteDoc(docRef);
}

export interface fireObj {
    [key: string]: any
}

async function queryCollection(name: string, maxResults: number | null = null): Promise<fireObj[]> {
    const collectionRef = collection(db, name);
    let querySnapshot;
    if (maxResults === null) {
        querySnapshot = await getDocs(collectionRef);
    } else {
        const q = query(collectionRef, limit(maxResults));
        querySnapshot = await getDocs(q);
    }

    const documents = querySnapshot.docs.map(doc => ({id: doc.id, ...doc.data()}));
    
    return documents
}

export { queryCollection, writeData, deleteEntry };