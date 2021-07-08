<template>
  <layout-card class="mt-3" style="height: 82vh;">
    <template #title>
      <p class="text-lg font-extralight p-2 tracking-wide border-white border-solid border-b-2">
        响应式的资料卡片<span class="text-sm text-yellow-900">[最小宽度:sm-640px;md-768px;lg-1024px;xl-1280px;2xl-1536px;]</span>
      </p>
    </template>
    <template #content>
      <img-card></img-card>
    </template>
  </layout-card>
</template>

<script>
import LayoutCard from '@/components/layout-card.vue'
import ImgCard from '@/components/card/imgCard.vue'
import { defineComponent } from 'vue'
export default defineComponent({
    components: {
        LayoutCard,
        ImgCard
    },
    setup() {
      
      return {
        
      }
    }
})
</script>

<style scoped>
</style>