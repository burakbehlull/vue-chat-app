<template>
    <nav>
        <button @click="$router.push('/')">Anasayfa</button>
        <button @click="$router.push('/chatroom')">Chat Room</button>
        <button @click="$router.push('/login')">Giriş Yap</button>
        <button @click="$router.push('/signup')">Kaydol</button>
        <button @click="handleSubmit">Çıkış Yap</button>
        <p v-if="user"> {{ user.displayName }}  - {{ user.email }}</p>
        <p v-else> Giriş Yapılmadı </p>
    </nav>
</template>

<script>
    import { defineComponent } from 'vue'
    import getUser from '../composables/getUser'
    import {error,useLogout} from '../composables/useLogout'
    export default defineComponent({
        name: 'Navbar',
        setup() {

            const {user} = getUser()

            async function handleSubmit(){
                await useLogout()
                if(!error.value) {
                    //pass   
                }
            }

            return {
                handleSubmit, error, user
            }
        }
    })
</script>

<style lang="scss" scoped>

</style>