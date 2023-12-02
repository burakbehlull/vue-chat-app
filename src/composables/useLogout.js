
import {signOut} from 'firebase/auth'
import {ref} from 'vue'
import {auth} from '../config/firebase'

const error = ref(null)
const useLogout = async () => {
    error.value = null
    try {
         const res = await signOut(auth)
         return res
    } catch (err) {
        error.value = err.message
        console.log(err.message)
    }
}


export {useLogout, error}
