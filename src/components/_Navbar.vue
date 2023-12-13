<template>
    <nav class="flex flex-col gap-5 text-center sm:flex-row">
        <h1 class="text-2xl sm:text-4xl text-rose-600 sm:pr-3 pr-0"> CHAT APP </h1>
        <button @click="$router.push('/')">Anasayfa</button>
        <button @click="$router.push('/chatroom')" v-if="isAuth">Chat Room</button>
        <button @click="$router.push('/login')" v-if="isAuth==false">Giriş Yap</button>
        <button @click="$router.push('/signup')" v-if="isAuth==false">Kaydol</button>
        <button @click="handleSubmit" v-if="isAuth">Çıkış Yap</button>
        <span v-if="isAuth" class="text-red-600"> display name: {{ user.displayName }} </span>
    </nav>
</template>

<script>
    import { defineComponent } from 'vue'
    import getUser from '../composables/getUser'
    import {error,useLogout} from '../composables/useLogout'
    export default defineComponent({
        name: 'Navbar',
        setup() {

            const {user, isAuth} = getUser()

            async function handleSubmit(){
                await useLogout()
                if(!error.value) {
                    //pass   
                }
            }

            return {
                handleSubmit, error, user, isAuth
            }
        }
    })
</script>