<template>
  <layout-card class="mt-3" style="height: 82vh;">
    <template #title>
      <p class="text-lg font-extralight p-2 tracking-wide border-white border-solid border-b-2">
        Grid布局<span class="text-sm text-yellow-900">[grid grid-col(row)-[x] col-start-[x] col-end-[x] col-span-[x]]</span>
      </p>
    </template>
    <template #content>
      <figure class="flex items-center justify-around flex-wrap">
        <!-- 1. -->
        <article class="w-1/3">
          <section class="p-3 grid grid-cols-3 gap-2 transform -rotate-1 rounded-lg text-blue-400 bg-indigo-400 text-2xl">
            <div v-for="item in 4" :key="item" class="p-10 transform rotate-1 rounded-xl bg-gray-100 flex justify-center items-center w-full h-full">{{ item }}</div>
            <div class="col-span-2 p-10 transform rotate-1 rounded-xl bg-gray-100 flex justify-center items-center w-full h-full">5</div>
          </section>
          <code-area codeTitle="Gird列基本布局+横跨：" :codeContent="code1"></code-area>
        </article>
        <!-- 2. -->
        <article class="w-1/2">
          <section class="p-3 grid grid-cols-6 gap-3 rounded-lg bg-pink-300 text-xl text-indigo-400">
            <div :class="`col-start-2 col-span-4 ${code2_str}`">1</div>
            <div :class="`col-start-1 col-end-3 ${code2_str}`">2</div>
            <div :class="`col-end-7 col-span-2 ${code2_str}`">3</div>
            <div :class="`col-start-1 col-end-7 ${code2_str}`">4</div>
          </section>
          <code-area codeTitle="Grid列起始终止线+横跨:" :codeContent="code2"></code-area>
        </article>
        <!-- 3. -->
        <article class="w-1/2">
          <section class="p-3 grid grid-rows-3 gap-2 grid-flow-col rounded-lg text-blue-400 bg-purple-400 text-2xl">
            <div class="row-span-3 p-6 rounded-xl bg-gray-100 flex justify-center items-center w-full h-full">1</div>
            <div class="col-span-2 p-6 rounded-xl bg-gray-100 flex justify-center items-center w-full h-full">2</div>
            <div class="row-span-2 col-span-2 p-6 rounded-xl bg-gray-100 flex justify-center items-center w-full h-full">3</div>
          </section>
          <code-area codeTitle="Gird行基本布局+横跨：" :codeContent="code3"></code-area>
        </article>
        <!-- 4. -->
        <article class="w-1/3">
          <section class="p-3 grid grid-rows-3 grid-flow-col gap-2 rounded-lg text-blue-400 bg-pink-400 text-2xl">
            <div class="row-start-2 row-span-2 p-10 rounded-xl bg-gray-100 flex justify-center items-center w-full h-full">1</div>
            <div class="row-end-3 row-span-2 p-10 rounded-xl bg-gray-100 flex justify-center items-center w-full h-full">2</div>
            <div class="row-start-1 row-end-4 p-10 rounded-xl bg-gray-100 flex justify-center items-center w-full h-full">3</div>
          </section>
          <code-area codeTitle="Gird行起始终止线+横跨：" :codeContent="code4"></code-area>
        </article>
        <!-- 5. -->
        <article class="w-1/3 mt-1">
          <section class="p-3 grid grid-flow-col grid-rows-3 grid-cols-3 gap-2 rounded-lg text-blue-400 bg-green-500 text-2xl">
            <div v-for="item in 9" :key="item"
                 class="p-10 rounded-xl bg-gray-100 flex justify-center items-center w-full h-full">
                 {{ item }}
            </div>
          </section>
          <code-area codeTitle="Gird控制网格中元素如何放置：" :codeContent="code5"></code-area>
        </article>
        <!-- 6. -->
        <article class="w-1/2">
          <section class="p-3 grid grid-cols-3 auto-cols-fr gap-2 rounded-lg text-blue-400 bg-red-400 text-2xl">
            <div v-for="item in 3" :key="item"
                 class="p-10 rounded-xl bg-gray-100 flex justify-center items-center w-full h-1/2">
                 {{ item }}
            </div>
            <div v-for="item in 3" :key="item"
                 class="p-10 rounded-xl bg-gray-100 flex justify-center items-center w-1/2 h-full">
                 {{ 3 + item }}
            </div>
          </section>
          <code-area codeTitle="Gird隐式创建的网格列的大小" :codeContent="code6"></code-area>
        </article>
      </figure>
    </template>
  </layout-card>
</template>

<script>
import LayoutCard from '@/components/layout-card.vue'
import CodeArea from '@/components/codeArea.vue'
import { defineComponent } from 'vue'
export default defineComponent({
    components: {
        LayoutCard,CodeArea
    },
    setup() {
      const code1 = ['grid', 'grid-cols-3', 'gap-2', 'col-span-2']
      const code2 = ['col-start-2','col-span-4','col-start-1','col-end-3']
      const code2_str = 'bg-gray-100 flex justify-center items-center p-6 rounded-lg'
      const code3 = ['grid-flow-col', 'grid-rows-3','row-span-2']
      const code4 = ['grid-flow-col', 'row-start-2', 'row-end-4']
      const code5 = ['grid-flow-col - 列优先', 'grid-flow-row - 行优先(默认)', 'grid-flow-row-dense', 'grid-flow-col-dense']
      const code6 = ['auto-cols(rows)-auto','auto-cols(rows)-min','auto-cols(rows)-max', 'auto-cols(rows)-fr']
      return {
        code1,
        code2,
        code2_str,
        code3,
        code4,
        code5,
        code6
      }
    }
})
</script>

<style>

</style>