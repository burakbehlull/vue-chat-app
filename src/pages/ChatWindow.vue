<template>
    <div class="chat-window">
        <p v-if="error">{{ error }}</p>
        <div v-if="documents" class="max-w-[80vw] max-h-[40vh] overflow-auto">
            <div v-for="doc in documents" :key="doc.id" class="border border-zinc-200 m-2 p-2 rounded-t">
                <h3 class="tracking-wide text-zinc-600"><span class="text-black text-xl text-semibold text-center">{{ doc.name }}: </span>{{ doc.message }}</h3>
                <h4 class="text-xs pt-2">{{ doc.createdAt.toDate() }}</h4>
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
