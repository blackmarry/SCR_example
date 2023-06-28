import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
	history: createWebHistory(import.meta.env.BASE_URL),
	routes: [
		{
			path: '/',
			name: 'home',
			component: () => import('@/views/Home.vue')
		},
		{
			path: '/about',
			name: 'about',
			component: () => import('@/views/About.vue')
		},
		{
			path: '/blog',
			name: 'blog',
			component: () => import('@/views/BlogListing.vue')
		},
		{
			path: '/contact',
			name: 'contact',
			component: () => import('@/views/Contact.vue')
		},
		{
			path: '/article',
			name: 'article',
			component: () => import('@/views/PostDetail.vue')
		},
	]
})

export default router
