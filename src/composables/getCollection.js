import {ref} from 'vue'

import {db} from '../config/firebase'
import {collection, onSnapshot} from 'firebase/firestore'
const getCollection = () => {
    const documents = ref(null)
    const error = ref(null)

    let collectionRef = collection(db, 'messages')


    onSnapshot(collectionRef,snap => {
        let results = []
        snap.docs.forEach(doc => {
            doc.data().createdAt && results.push({...doc.data(), id: doc.id})
        })
        documents.value = results
        error.value = null
    }, err => {
        console.log(err.message)
        documents.value = null
        error.value = 'Could not fetch data'
    })

    return {documents, error}
}

export default getCollection