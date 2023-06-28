<template>
	<dialog @click="closeModal" ref="modalDialog" @cancel="closeModal" class="modal-dialog modal-xl m-auto fixed">
		<slot></slot>
	</dialog>
</template>

<script setup lang="ts">
import { ref, watch } from 'vue'

const props = withDefaults(
	defineProps<{ opened: boolean }>(), { opened: false}
)
const emit = defineEmits<{
	(event: 'update:opened', val: boolean): void
}>()

watch(() => props.opened, (newVal) => {
	if (newVal) {
		openModal()
	}
})

const modalDialog = ref<HTMLDialogElement>()

function openModal () {
	modalDialog.value?.showModal()
}

function closeModal () {
	modalDialog.value?.close()
	emit('update:opened', false)
}
</script>

<style scoped lang="scss">
dialog::backdrop {
  background: rgb(0 0 0 / .4)
}
.close-pos{
  position: absolute;
  top: 0.1rem;
  right: 0.1rem;
  border: 0;
  border-radius: 4rem;
  cursor: pointer;
}
.fixed {
  position: fixed;
}
</style>
