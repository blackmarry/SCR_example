<template>
	<BlogCardGroup>
		<BlogCard
			v-for="post in allPosts"
			:key="post.id"
			:post="post"
		/>
	</BlogCardGroup>
	
	<img src="../../reference/p2.jpg" class="debug-img">
</template>

<script setup lang="ts">
import BlogCardGroup from '@/components/BlogCardGroup.vue'
import BlogCard from '@/components/BlogCard.vue'
import { useBlogStore } from '@/stores/blog.store'
import { storeToRefs } from 'pinia'

const { allPosts } = storeToRefs(useBlogStore())
</script>
