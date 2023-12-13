<template>

    <section>
		<h1 class="text-red-500 text-2xl m-2 sm:text-4xl sm:m-4">Signup Page</h1>
        <form @submit.prevent="handleSubmit">
            <input type="text" placeholder="Display Name" v-model="displayName" required />
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
import {ref} from 'vue'
import {useRouter} from 'vue-router'
import {signUp, error} from '../composables/useSignup'
export default {
    name: 'Signup',
    setup() {
        const displayName = ref('')
        const email = ref('')
        const password = ref('')
        const router = useRouter()

        const handleSubmit = async () => {
            console.log(displayName.value, email.value, password.value)
            await signUp(email.value, password.value, displayName.value)
            if(!error.value) {
                router.push('/')
            }
            
        }

        return {
            displayName, email, password, handleSubmit, error
        }
    }
}
</script>

<style></style>