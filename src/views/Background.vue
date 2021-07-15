<template>
  <layout-card class="mt-3" style="height: 82vh;">
        <template #title>
        <p class="text-lg font-extralight p-2 tracking-wide border-white border-solid border-b-2 title w-5/6 bg-gray-200 z-10">
            背景<span class="text-sm text-yellow-900">[]</span>
        </p>
        </template>
        <template #content>
        </template>
  </layout-card>
</template>

<script>
import LayoutCard from '@/components/layout-card.vue'
import { defineComponent } from 'vue'
export default defineComponent({
    components: {
        LayoutCard
    }
})
</script>

<style scoped>

</style>