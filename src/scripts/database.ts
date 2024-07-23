// Firebase
import { initializeApp } from "firebase/app"
import { getAnalytics } from "firebase/analytics";
import { getFirestore, getDocs, collection } from "firebase/firestore"


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

function writeData(): void {
    const data = db.toJSON();
    console.log(data);
}

export interface fireObj {
    [key: string]: any
}

async function queryCollection(name: string): Promise<fireObj[]> {
    const collectionRef = collection(db, name);
    const querySnapshot = await getDocs(collectionRef);

    const documents = querySnapshot.docs.map(doc => ({id: doc.id, ...doc.data()}));
    
    return documents
}

export { queryCollection };