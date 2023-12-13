<script>
    import { defineComponent } from 'vue'
    export default defineComponent({
        name: 'Home',
        setup() {
            return {
                burakbehlull: "Welcome to a full-time chat-app project."
            }
        }
    })
</script>

<template>
    <div>
        <h2 class="p-3 text-2x1 tracking-tighter"> {{ burakbehlull }} <a href="https://github.com/burakbehlull/vue-chat-app" target="_blank" class="underline decoration-rose-300">Github..</a></h2>
    </div>
</template>

<style lang="scss">
    
</style>