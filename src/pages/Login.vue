<template>

    <form @submit.prevent="handleSubmit">
        <input type="email" placeholder="E-Mail" v-model="email" required />
        <input type="password" placeholder="Password Here" v-model="password" required />

        <button>Gönder</button>
    </form>

</template>

<script>
import { ref } from 'vue'
import {useRouter} from 'vue-router'
import {error, useLogin} from '../composables/useLogin'
export default {
    name: 'Login',
    setup() {
        const email = ref('')
        const password = ref('')
        const router = useRouter()

        const handleSubmit = async ()=> {
            console.log(email.value, password.value)
            await useLogin(email.value, password.value)
            if(!error.value) {
                router.push({name: 'Chatroom'})
            }

            
        }

        return {
            email, password, handleSubmit, error
        }
    }
}
</script>

<style></style>