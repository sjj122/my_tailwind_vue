<template>
  <div>
    <layout-card>
      <template #title>
          <p class="text-2xl text-center p-3">tailwind CSS Style List</p>
      </template>
      <template #content>
          <article class="grid grid-cols-4 gap-2 text-sm">
            <div class="btn-blue" @click="jumpPage('/ring-button')">按钮、输入框边框</div>
            <div class="btn-yellow" @click="jumpPage(2)">资料卡片</div>
            <div class="btn-red" @click="jumpPage(3)">变换</div>
            <div class="btn-green" @click="jumpPage(4)">flex与grid布局</div>
            <div class="btn-green">Click me!</div>
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

</style>
