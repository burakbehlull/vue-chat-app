<template>
    <h1>Chat Room</h1>

    <form>

        <textarea 
        placeholder="message"
        v-model="message"
        @keypress.enter.prevent="handleSubmit"
        required
        ></textarea>

    </form>


    <div v-if="error">
        {{ error }}
    </div>
</template>

<script>
import { watch, ref } from 'vue';
import { useRoute } from 'vue-router';
import getUser from '../composables/getUser'
import { Timestamp } from 'firebase/firestore';
import useCollections from '../composables/useCollections'
export default {
    name: 'Chatroom',
    setup() {
        const {user} = getUser()
        const router = useRoute()
        const {add, error} = useCollections('chat')

        const message = ref('')

        const handleSubmit = async () => {
            const chat = {
                name: user.value.displayName,
                message: message.value,
                createdAt: Timestamp.now()
            }
            console.log(chat)
            message.value = ''
            await add(chat)
        }

        watch(user, () => {
            if(user.value === null) {
                router.push('/login')
            }
        })
        return {
            message, handleSubmit, error, user
        }
    }
}
</script>

<style scoped>
</style>