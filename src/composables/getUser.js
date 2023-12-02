import {onAuthStateChanged} from 'firebase/auth'
import {ref} from 'vue'

import {auth} from '../config/firebase'
const user = ref(auth.currentUser)
const isAuth = ref(false)

onAuthStateChanged(auth, (currentUser) => {
    user.value = currentUser
    if(currentUser) {
        isAuth.value = true
    } else {
        isAuth.value = false
    }
})

const getUser = () => {
    return {user, isAuth}
}

export default getUser


