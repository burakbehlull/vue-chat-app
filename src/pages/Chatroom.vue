<template>
    <section>
        <h1 class="text-red-500 text-2xl m-2 sm:text-4xl sm:m-4">Chat Room</h1>

        <form class="max-w-[80vw] pt-3">
            <ChatWindow />
            <textarea class="resize-none max-w-[75vw]"			
            placeholder="message"
            v-model="message"
			rows="4" cols="50"
            @keypress.enter.prevent="handleSubmit"
            required
            ></textarea>

        </form>


        <div v-if="error">
            {{ error }}
        </div>
    </section>
</template>

<script>
import { watch, ref } from 'vue';

import ChatWindow from './ChatWindow.vue';

import { useRoute } from 'vue-router';
import getUser from '../composables/getUser'
import { Timestamp } from 'firebase/firestore';
import useCollections from '../composables/useCollections'
export default {
    name: 'Chatroom',
    components: {
        ChatWindow
    },
    setup() {
        const {user} = getUser()
        const router = useRoute()
        const {add, error} = useCollections()

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