<template>
    <nav>
        <button @click="$router.push('/')">Anasayfa</button>
        <button @click="$router.push('/login')">Giriş Yap</button>
        <button @click="$router.push('/signup')">Kaydol</button>
        <button @click="handleSubmit">Çıkış Yap</button>

    </nav>
</template>

<script>
    import { defineComponent } from 'vue'
    import {error,useLogout} from '../composables/useLogout'
    export default defineComponent({
        name: 'Navbar',
        setup() {

            async function handleSubmit(){
                await useLogout()
                if(!error.value) {
                    //pass   
                }
            }

            return {
                handleSubmit, error
            }
        }
    })
</script>