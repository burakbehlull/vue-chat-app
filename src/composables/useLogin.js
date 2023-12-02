

import { ref } from 'vue'

import { auth } from '../config/firebase'
import { signInWithEmailAndPassword } from 'firebase/auth'
const error = ref(null)
const useLogin = async (email, password) => {
    error.value = null
    try {
        const res = await signInWithEmailAndPassword(auth, email, password)
        error.value = null
        return res
    } catch (err) {
        error.value = err.message
    }
}

export {useLogin, error}