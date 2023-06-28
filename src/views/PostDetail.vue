<template>
	<template v-if="loading">
		...loading
	</template>
	<template v-else-if="!blogPost">
		<h3>Article not found.</h3>
	</template>
	<template v-else>
		<BlogTitle :title="blogPost.title" />

		<div class="container">
			<template v-for="(content, index) in blogPost.content" :key="index">

				<div class="mb-3">
					<template v-if="content.type === 'image'">
						<img :src="content.value" class="img-fluid">
					</template>
	
					<template v-else-if="content.type === 'quote'">
						<BlogQuote :content="content.value" />
					</template>
	
					<template v-else>
						<p>{{ content.value }}</p>
					</template>
				</div>

			</template>

		</div>
	</template>
	<!-- <img src="../../reference/p3.jpg" class="debug-img"> -->
</template>

<script setup lang="ts">
import { useRoute } from 'vue-router'
import { useBlogStore } from '@/stores/blog.store'
import BlogTitle from '@/components/BlogTitle.vue'
import BlogQuote from '@/components/BlogQuote.vue'
import { onMounted, ref } from 'vue'

import { type BlogPost } from '@/services/blog.service'

const { query } = useRoute()
const { getPost } = useBlogStore()

const loading = ref(true)
const blogPost = ref<BlogPost>()

onMounted(async () => {
	blogPost.value = await getPost(Number(query.id))
	loading.value = false
})
</script>
