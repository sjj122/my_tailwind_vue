<template>
  <layout-card class="mt-3" style="height: 82vh;">
    <template #title>
      <p class="text-lg font-extralight p-2 tracking-wide border-white border-solid border-b-2 title w-5/6 bg-gray-200 z-10">
        边框<span class="text-sm text-yellow-900">[rounded-md | border | border-black | border-opacity-5 | border-solid | divide-y&lt;-x&gt; | divide-black | divide-opacity-5 | divide-solid | ring | ring-black | ring-opacity-5 | ring-offset-1 | ring-offset-black]</span>
      </p>
    </template>
    <template #content>
      <div class="m-4 content-container mt-20">
        <ring-button class="ring-button" v-for="(item, index) in btn_or_input_lists" :key="index" :elementType="item.isBtn" :code="item.code" :eleStyle="item.eleStyle" :text="item.text"></ring-button>
      </div>
    </template>
  </layout-card>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import LayoutCard from '@/components/layout-card.vue'
import RingButton from '@/components/RingButton.vue'
import { btn_or_input_lists } from '@/utils/constance.ts'   // 导入数据
export default defineComponent({
  components: {
    LayoutCard, RingButton
  },
  setup() {
    return { btn_or_input_lists }
  }
})
</script>

<style scoped>
  .content-container {
    column-count: 4;
    column-gap: 1.5vw;

  }
  .ring-button {
    position: relative;
    break-inside: avoid;
  }
</style>
