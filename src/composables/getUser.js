import {onAuthStateChanged} from 'firebase/auth'
import {ref} from 'vue'

import {auth} from '../config/firebase'
const user = ref(auth.currentUser)

onAuthStateChanged(auth, (currentUser) => {
    user.value = currentUser
})

const getUser = () => {
    return {user}
}

export default getUser


