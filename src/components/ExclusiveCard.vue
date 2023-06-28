<template>
	<div class="card text-center">
		<img class="card-img-top" :src="`https://picsum.photos/id/${post.id + 25}/200/240`" alt="Card image cap">
		<div class="card-img-overlay text-white overlay-dark d-flex justify-content-end flex-column mx-1">
			<div>
				<h6 class="card-subtitle text-uppercase fw-light py12">{{ post.group }}</h6>
				<h2 class="card-title py-3">{{ post.title }}</h2>
				<a class="btn btn-outline-light mb-4" @click="push(`/article?id=${post.id}`)">Read More</a>
			</div>
		</div>
	</div>
</template>

<script setup lang="ts">
import type { BlogPost } from '@/services/blog.service'
import { useRouter } from 'vue-router'

defineProps<{ post: BlogPost }>()
const { push } = useRouter()
</script>

<style scoped lang="scss">
.overlay-dark {
  background: rgb(12, 1, 24);
  background: linear-gradient(180deg, transparent 0, transparent 30%, rgba(12, 1, 24, 0.7));
}

.overlay-dark:hover {
  background: transparent;
}
</style>