<template>
	<ExclusiveCardGroup>
		<ExclusiveCard
			v-for="post in exclusivePosts"
			:key="post.id"
			:post="post"
		/>
	</ExclusiveCardGroup>
	
	<BlogCardGroup>
		<BlogCard
			v-for="post in cardPosts"
			:key="post.id"
			:post="post"
		/>
	</BlogCardGroup>
</template>

<script setup lang="ts">
import ExclusiveCardGroup from '@/components/ExclusiveCardGroup.vue'
import ExclusiveCard from '@/components/ExclusiveCard.vue'
import BlogCardGroup from '@/components/BlogCardGroup.vue'
import BlogCard from '@/components/BlogCard.vue'
import { useBlogStore } from '@/stores/blog.store'
import { storeToRefs } from 'pinia'

const { exclusivePosts, cardPosts } = storeToRefs(useBlogStore())
</script>
