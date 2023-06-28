<template>
	<div class="col">
		<div  class="card">
			<img :src="`https://picsum.photos/id/${post.id + 28}/200/160`" @click="modalOpened = true" class="card-img-top img-fluid" alt="Card image">
			<div class="card-body">
				<h6 class="card-subtitle text-uppercase py-3 text-muted">{{ post.group }}</h6>
				<h2 class="card-title fw-bold mb-4">{{ post.title }}</h2>
				<hr class="mx-auto my-4" /> 
				<p class="card-text text-muted">{{ post.preview }}</p>
				<a class="btn btn-outline-dark btn-text" @click="push(`/article?id=${post.id}`)">Read More</a>
			</div>
		</div>
	</div>

	<Modal v-model:opened="modalOpened">
		<img :src="`https://picsum.photos/id/${post.id + 28}/800/800`" class="img-fluid mx-auto" alt="Image">
	</Modal>
</template>

<script setup lang="ts">
import type { BlogPost } from '@/services/blog.service'
import { useRouter } from 'vue-router'
import  {ref } from 'vue'
import Modal from '@/components/Modal.vue'

defineProps<{ post: BlogPost }>()
const { push } = useRouter()

const modalOpened = ref(false)
</script>


<style scoped lang="scss">
.btn-text {
	border-width: 0;
}

hr {
	width: 6rem;
	border-top: 0.2rem solid;
}
</style>