<template>
  <layout-card class="mt-3" style="height: 82vh;">
        <template #title>
        <p class="text-lg font-extralight p-2 tracking-wide border-white border-solid border-b-2 title w-5/6 bg-gray-200 z-10">
            排版<span class="text-sm text-yellow-900">[]</span>
        </p>
        </template>
        <template #content>
            <figure class="mt-12">
                <article class="p-2 mt-14 mx-2 bg-purple-200 rounded-sm">
                    <p><span class="text-red-800">字体family：</span><span class="font-sans mr-4">font-sans</span><span class="font-serif mr-4">font-serif</span><span class="font-mono">font-mono</span></p>
                    <div>
                        <p class="text-red-800">字体大小：</p>
                        <p class="text-xs">事在人为。人定胜天！</p>
                        <p class="text-sm">事在人为。人定胜天！</p>
                        <p class="text-base">事在人为。人定胜天！</p>
                        <p class="text-lg">事在人为。人定胜天！</p>
                        <p class="text-xl">事在人为。人定胜天！</p>
                        <p class="text-2xl">事在人为。人定胜天！</p>
                    </div>
                    <p><span class="text-red-800">字体平滑度：</span><span class="antialiased mr-4">antialiased</span><span class="subpixel-antialiased mr-4">subpixel-antialiased</span></p>
                    <p><span class="text-red-800">字体样式：</span><span class="italic mr-4">italic</span><span class="italic mr-4">italic <span class="not-italic">not-italic</span> italic</span></p>
                    <div>
                        <p class="text-red-800">字体粗细：</p>
                        <p class="font-thin">勇敢牛牛，不怕困难！</p>
                        <p class="font-extralight">勇敢牛牛，不怕困难！</p>
                        <p class="font-light">勇敢牛牛，不怕困难！</p>
                        <p class="font-normal">勇敢牛牛，不怕困难！</p>
                        <p class="font-medium">勇敢牛牛，不怕困难！</p>
                        <p class="font-semibold">勇敢牛牛，不怕困难！</p>
                        <p class="font-bold">勇敢牛牛，不怕困难！</p>
                        <p class="font-extrabold">勇敢牛牛，不怕困难！</p>
                        <p class="font-black">勇敢牛牛，不怕困难！</p>
                    </div>
                    <p>
                        <span class="text-red-800">数字变形：</span>
                        <span class="normal-nums mr-4">123</span>
                        <span class="ordinal mr-4">1st</span>
                        <span class="slashed-zero mr-4">0</span>
                        <span class="oldstyle-nums mr-4">0123456</span>
                    </p>
                    <div>
                        <p class="text-red-800">字母间距：</p>
                        <p class="mr-4 tracking-tighter">new boy</p>
                        <p class="mr-4 tracking-tight">new boy</p>
                        <p class="mr-4 tracking-normal">new boy</p>
                        <p class="mr-4 tracking-wide">new boy</p>
                        <p class="mr-4 tracking-wider">new boy</p>
                        <p class="mr-4 tracking-widest">new boy</p>
                    </div>
                    <p class="text-red-800">行高</p>
                    <p class="text-red-800">列表项标记类型</p>
                    <p class="text-red-800">列表项标记位置</p>
                </article>
                <code-area codeTitle="字体：" :codeContent="code1"></code-area>
                <article class="p-2 m-2 bg-green-200 rounded-sm">
                    
                </article>
                <code-area codeTitle="文本：" :codeContent="code2"></code-area>
            </figure>
        </template>
  </layout-card>
</template>

<script>
import CodeArea from '@/components/codeArea.vue'
import LayoutCard from '@/components/layout-card.vue'
import { defineComponent } from 'vue'
export default defineComponent({
    components: {
        LayoutCard, CodeArea
    },
    setup() {
        const code1 = [
            '字体family：font-sans font-serif font-mono',
            '字体大小：text-xs text-sm text-base text-lg text-xl text-2xl text-3xl text-4xl text-5xl text-6xl text-7xl text-8xl text-9xl',
            '字体平滑度：antialiased subpixel-antialiased',
            '字体样式：italic not-italic(通常用于在不同的断点处重置斜体文字)',
            '字体粗细：font-thin font-extralight font-light font-normal font-medium font-semibold font-bold font-extrabold font-black',
            '数字变形：normal-nums ordinal slashed-zero lining-nums oldstyle-nums proportional-nums tabular-nums diagonal-fractions stacked-fractions',
            '字母间距：tracking-tighter tracking-tight tracking-normal tracking-wide tracking-wider tracking-widest',
            '行高：leading-3 leading-4 leading-5 leading-6 leading-7 leading-8 leading-9 leading-10 leading-none leading-tight leading-snug leading-normal leading-relaxed leading-loose',
            '列表项标记类型：list-none list-disc list-decimal',
            '列表项标记位置：list-inside list-outside'
        ]
        const code2 = [
            '占位文本颜色：',
            '占位文本不透明度：',
            '文本对齐：',
            '文本颜色：',
            '文本颜色不透明度：',
            '文本装饰：',
            '文本转换：',
            '文本溢出：',
            '垂直对齐：',
            '空格：',
            '文本换行：'
        ]
        return {
            code1,
            code2
        }
    }
})
</script>

<style scoped>

</style>