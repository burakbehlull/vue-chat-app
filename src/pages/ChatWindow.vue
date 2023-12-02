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
import { computed, ref, onUpdated } from 'vue'
import getCollection from '../composables/getCollection'
import {formatDistanceToNow} from 'date-fns'
const {documents, error} = getCollection()
export default {
    setup() {
		/*
        const formatedDocuments = computed(()=>{
            if(documents.value) {
                return documents.value.map(doc => {
                    let time = formatDistanceToNow(doc.createdAt.toDate())
                    return {...doc, createdAt: time}
                })
            }
        
        })
		*/
		
		const messages = ref(null)
		/*
		onUpdated(()=> {
		messages.value.scrollTop = messages.value.scrollHeight
		})
		*/
        return {
            documents, error, documents
        }
    }
}
</script>
