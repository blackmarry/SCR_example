<template>
	<div class="bg-primary p-4 fw-bold fst-italic">
		{{ content }}
	</div>
</template>

<script setup lang="ts">
defineProps<{
	content: string
}>()
</script>
