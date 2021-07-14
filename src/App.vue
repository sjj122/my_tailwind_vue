<template>
  <div>
    <layout-card>
      <template #title>
          <p class="text-2xl text-center p-3">tailwind CSS Style List</p>
      </template>
      <template #content>
          <article class="grid grid-cols-12 gap-2 text-md text-center">
            <div class="btn-blue h-20" @click="jumpPage('/ring-button')">按钮、输入框边框</div>
            <div class="btn-yellow" @click="jumpPage('/card')">响应式的资料卡片</div>
            <div class="btn-red" @click="jumpPage('/transform')">变换</div>
            <div class="btn-green" @click="jumpPage('/grid')">Grid布局</div>
            <div class="btn-yellow" @click="jumpPage('/flex')">Flex布局</div>
            <div class="btn-blue" @click="jumpPage('/interactive')">交互</div>
          </article>
      </template>
    </layout-card>
    <!-- 路由跳转显示 -->
    <router-view />
  </div>
</template>
<script>
import LayoutCard from '@/components/layout-card.vue'
import { defineComponent } from 'vue'
import { useRouter } from 'vue-router'
export default defineComponent({
  components: {
    LayoutCard
  },
  setup() {
    document.title = 'Coding for you. -- tailwindcss'
    const $router = useRouter()
    function jumpPage(url) {
        $router.push(url)
    }
    return {
        jumpPage
    }
  }
})
</script>
<style scoped>
@import url('//at.alicdn.com/t/font_2642879_rmhr708gcf.css');
</style>
