// This script is for one-time data push to Firestore. 
// It is not included in the tsconfig, because it will only be compiled when ran with ts-node
// Run manually using "npm run push-data"


const { readFileSync } = require('fs');
var admin = require('firebase-admin');

var serviceAccount = require('./blendz-firestore-admin-sdk.json');

admin.initializeApp({
   credential: admin.credential.cert(serviceAccount) 
});

const db = admin.firestore()

async function pushData(data, destination) {
    const collectionRef = db.collection(destination);

    for (const obj of data) {
        const docRef = collectionRef.doc(obj.name)
        await docRef.set(obj)
    }
}

function readJsonFile(path) {
    const data = readFileSync(path, 'utf-8');
    return JSON.parse(data);
}

async function pushJson(path, destination) {
    try {
        // Read the data
        const json = readJsonFile(path);
    
        // Push the data
        await pushData(json, destination);
        console.log(`Successfully pushed ${json.length} items to ${destination} collection`);
    } catch (error) {
        console.error("Error pushing json data", error);
    } 
}

pushJson('src/data/ingredients.json', 'ingredients');
pushJson('src/data/smoothie.json', 'smoothies');
