<template>

    <section>
		<h1 class="text-red-500 text-2xl m-2 sm:text-4xl sm:m-4">Login Page</h1>
        <form @submit.prevent="handleSubmit">
			<input type="email" placeholder="E-Mail" v-model="email" required />
			<input type="password" placeholder="Password Here" v-model="password" required />
			<div v-if="error">
				{{ error }}
			</div>

			<button>Gönder</button>
        </form>
    </section>
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