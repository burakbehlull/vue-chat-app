<template>

    <form @submit.prevent="handleSubmit">
        <input type="text" placeholder="Display Name" v-model="displayName" required />
        <input type="email" placeholder="E-Mail" v-model="email" required />
        <input type="password" placeholder="Password Here" v-model="password" required />

        <button>Kaydol</button>
    </form>

</template>

<script>
import {ref} from 'vue'
import {signUp} from '../composables/useSignup'
export default {
    name: 'Signup',
    setup() {
        const displayName = ref('')
        const email = ref('')
        const password = ref('')

        const handleSubmit = async () => {
            console.log(displayName.value, email.value, password.value)
            await signUp(email.value, password.value, displayName.value)
        }

        return {
            displayName, email, password, handleSubmit
        }
    }
}
</script>

<style></style>