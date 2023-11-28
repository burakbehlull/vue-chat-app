import { ref } from 'vue'
import { auth } from '../config/firebase'
import {createUserWithEmailAndPassword, updateProfile} from 'firebase/auth'

const error = ref(null)
const signUp = async (email, password, displayName) => {
    error.value = null
    try {
        const res = await createUserWithEmailAndPassword(auth, email, password)
        console.log("useSignup: ", res)
        if (!res) {
            throw new Error('Giriş yapılmadı!')
        }
        await updateProfile({ displayName })
        error.value = null
        return res
    } catch (err) {
        console.log(err.message)
        error.value = err.message
    }
}

export { signUp, error }