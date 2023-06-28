<template>
	<div class="container-fluid bg-primary p-5 mb-5">
		<h2 class="fw-bold text-capitalize p-md-5">
			{{ title }}
		</h2>
	</div>
</template>

<script setup lang="ts">
defineProps<{
	title: string
}>()
</script>
