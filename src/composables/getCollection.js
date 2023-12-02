import { ref } from 'vue';
import { db } from '../config/firebase';
import { collection, onSnapshot, orderBy, query } from 'firebase/firestore';

const getCollection = () => {
    const documents = ref(null);
    const error = ref(null);

    let collectionRef = collection(db, 'messages');
    let q = query(collectionRef, orderBy('createdAt'));

    onSnapshot(q, snap => {
        let results = [];
        snap.docs.forEach(doc => {
            doc.data().createdAt && results.push({ ...doc.data(), id: doc.id });
        });
        documents.value = results;
        error.value = null;
    }, err => {
        documents.value = null;
        error.value = 'Could not fetch data';
    });

    return { documents, error };
}

export default getCollection;
