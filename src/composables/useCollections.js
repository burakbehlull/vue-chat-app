import { ref } from 'vue'
import {collection, addDoc} from 'firebase/firestore'
import {auth, db} from '../config/firebase'
const useCollections = () => {
    const error = ref(null)
    const add = async (doc) => {
        error.value = null
        const col = collection(db, 'messages')
        try {
            await addDoc(col, doc)
        } catch (err) {
            error.value = 'could not send the message'
        }
    }
    return { error, add }
}

export default useCollections