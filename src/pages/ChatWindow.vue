<template>
    <div class="chat-window">
        <p v-if="error">{{ error }}</p>
        <div v-if="documents">
            <div v-for="doc in documents" :key="doc.id">
                <h2>{{ doc.name }}</h2>
                <h3>{{ doc.message }}</h3>
                <h4>{{ doc.createdAt.toDate() }}</h4>
            </div>
        </div>
    </div>
</template>

<script>
import getCollection from '../composables/getCollection'
const {documents, error} = getCollection()
export default {
    setup() {
        return {
            documents, error
        }
    }
}
</script>
