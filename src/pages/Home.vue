<script>
    import { defineComponent } from 'vue'
    export default defineComponent({
        name: 'Home',
        setup() {
            return {
                merhaba: "Chat-App Project"
            }
        }
    })
</script>

<template>
    <div>
        <h1>Home Page</h1>
        <h2> {{ merhaba }} </h2>
    </div>
</template>
