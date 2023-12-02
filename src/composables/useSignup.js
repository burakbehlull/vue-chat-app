import { ref } from 'vue'
import { auth } from '../config/firebase'
import {createUserWithEmailAndPassword, updateProfile } from 'firebase/auth'

const error = ref(null)
const signUp = async (email, password, dN) => {
    error.value = null
    try {
        const res = await createUserWithEmailAndPassword(auth, email, password)
        if (!res) {
            throw new Error('Giriş yapılmadı!')
        }
        await updateProfile(auth.currentUser, {
            displayName: dN
        })
        error.value = null
        return res
    } catch (err) {
        error.value = err.message
    }
}

export { signUp, error }