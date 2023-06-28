import { blogService, type BlogPost } from '@/services/blog.service'
import { defineStore } from 'pinia'
import { computed, ref } from 'vue'


export const useBlogStore = defineStore('blog', () => {
	const list = ref<BlogPost[]>([])
	let loaded = false

	const loadPosts = async () => {
		if (loaded) return
		list.value = await blogService.getAllPosts()
		loaded = true
	}

	const getPost = async (id: number): Promise<BlogPost | undefined> => {
		const post = list.value.find(o => o.id === id)
		if (post) {
			for (const content of post.content) {
				if (content.type === 'image') {
					content.value = await blogService.getImage()
				}
			}
		}
		return post
	}

	const exclusivePosts = computed(() => list.value.slice(0, 4))
	const cardPosts = computed(() => list.value.slice(4))
	const allPosts = computed(() => list.value)

	return {
		exclusivePosts,
		cardPosts,
		allPosts,
		loadPosts,
		getPost,
	}
})
