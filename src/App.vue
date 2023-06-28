<template>
	<AppBar />
	<RouterView />
</template>

<script setup lang="ts">
import { onMounted } from 'vue'
import { RouterView } from 'vue-router'
import AppBar from './components/AppBar.vue'
import { useBlogStore } from './stores/blog.store'

const { loadPosts } = useBlogStore()
onMounted(loadPosts)
</script>