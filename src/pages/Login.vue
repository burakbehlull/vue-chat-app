<template>

    <form @submit.prevent="handleSubmit">
        <input type="email" placeholder="E-Mail" v-model="email" required />
        <input type="password" placeholder="Password Here" v-model="password" required />

        <button>Giriş Yap</button>
    </form>

</template>

<script>
import {ref} from 'vue'
export default {
    name: 'Login',
    setup() {
        const email = ref('')
        const password = ref('')

        function handleSubmit(){
            console.log(email.value, password.value)
        }

        return {
            email, password, handleSubmit
        }
    }
}
</script>

<style></style>