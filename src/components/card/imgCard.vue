<template>
    <figure class="p-2 w-3/4">
        <div class="relative lg:flex border-2 border-dashed border-gray-300">
            <i @mousedown="onmousedown" @mousemove="onmousemove" @mouseup="onmouseup" class="w-10 h-10 text-center leading-10 iconfont icon-icon-sync absolute font-semibold cursor-move right-0 bottom-1/2 transform translate-y-1/2 translate-x-1/2 bg-blue-500 rounded-full text-white" style="font-size: 30px;"></i>
            <img class="md:w-full md:h-full lg:w-1/2 lg:h-auto" src="https://cdn.pixabay.com/photo/2021/06/04/15/10/sand-6310114__340.jpg">
            <section class="pr-5 flex flex-col justify-around items-center">
              <p class="text-black text-center text-lg font-semibold mt-3">Staff Engineer, Algolia</p>
              <p class="text-gary-400 text-center text-sm"> “Tailwind CSS is the only framework that I've seen scale on large teams. It’s easy to customize, adapts to any design, and the build size is tiny.”</p>
              <div class="btn-blue flex justify-center items-center sm:w-24 sm:h-6 sm:text-xs lg:w-32 lg:h-10 lg:text-base">Show me!</div>
            </section>
        </div>
        <code-area codeTitle="card:" :codeContent="code1"></code-area>
    </figure>
</template>

<script>
import { defineComponent } from 'vue'
import CodeArea from '@/components/codeArea.vue'
export default defineComponent({
    components: {
      CodeArea
    },
    setup() {
      function onmousedown(e) {
        console.log(e)
      }
      function onmousemove(e) {
        console.log()
      }
      function onmouseup(e) {
        console.log(e)
      }
      const code1 = ['box: lg:flex','img: md:w-auto md:h-full lg:w-1/2 lg:h-auto','button: sm:w-24 sm:h-6 sm:text-xs lg:w-32 lg:h-10 lg:text-base']
      return {
        onmousedown,
        onmousemove,
        onmouseup,
        code1
      }
    }
})
</script>

<style>

</style>