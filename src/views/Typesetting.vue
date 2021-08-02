<template>
  <layout-card class="mt-3" style="height: 82vh;">
        <template #title>
        <p class="text-lg font-extralight p-2 tracking-wide border-white border-solid border-b-2 title w-5/6 bg-gray-200 z-10">
            排版<span class="text-sm text-yellow-900">[字体(大小，平滑度，样式，粗细，数字变形) | 行高 | 列表项标记类型及位置 | 占位文本颜色及不透明度 | 文本对齐，颜色，不透明度，装饰，转换，溢出 | 垂直对齐 | 空格 | 文本换行]</span>
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
                    <p><span class="text-red-800">占位文本颜色、不透明度：</span></p>
                    <input type="text" class="p-2 border border-red-300 placeholder-red-300 outline-none focus:ring-1 focus:ring-red-300" placeholder="请输入内容...">
                    <input type="text" class="ml-2 p-2 border border-red-300 placeholder-red-300 placeholder-opacity-50 outline-none focus:ring-1 focus:ring-red-300" placeholder="请输入内容...">
                    <p><span class="text-red-800">文本对齐：</span></p>
                    <p class="border border-blue-300 p-2 text-left">1、沪港通：复星医药、万华化学、中国平安北向资金分别净买入7.92亿、3.90亿、2.20亿；北方稀土、贵州茅台、隆基股份遭北向资金净卖出6.07亿、6.82亿、7.02亿。
2、深港通：京东方A、五粮液、TCL科技北向资金净买入7.47亿、6.62亿、2.14亿；宁德时代遭北向资金净卖出9.58亿。</p>
                    <p class="border border-blue-300 mt-2 p-2 text-center">1、沪港通：复星医药、万华化学、中国平安北向资金分别净买入7.92亿、3.90亿、2.20亿；北方稀土、贵州茅台、隆基股份遭北向资金净卖出6.07亿、6.82亿、7.02亿。
2、深港通：京东方A、五粮液、TCL科技北向资金净买入7.47亿、6.62亿、2.14亿；宁德时代遭北向资金净卖出9.58亿。</p>
                    <p class="border border-blue-300 mt-2 p-2 text-right">1、沪港通：复星医药、万华化学、中国平安北向资金分别净买入7.92亿、3.90亿、2.20亿；北方稀土、贵州茅台、隆基股份遭北向资金净卖出6.07亿、6.82亿、7.02亿。
2、深港通：京东方A、五粮液、TCL科技北向资金净买入7.47亿、6.62亿、2.14亿；宁德时代遭北向资金净卖出9.58亿。</p>
                    <p class="border border-blue-300 mt-2 p-2 text-justify">1、沪港通：复星医药、万华化学、中国平安北向资金分别净买入7.92亿、3.90亿、2.20亿；北方稀土、贵州茅台、隆基股份遭北向资金净卖出6.07亿、6.82亿、7.02亿。
2、深港通：京东方A、五粮液、TCL科技北向资金净买入7.47亿、6.62亿、2.14亿；宁德时代遭北向资金净卖出9.58亿。</p>
                    <p><span class="text-red-800">文本颜色：</span></p>
                    <p class="text-current">text-current 五粮液、TCL科技北向资金净买入7.47亿、6.62亿、2.14亿；宁德时代遭北向资金净卖出9.58亿。</p>
                    <p class="text-gray-100">text-gray-100 五粮液、TCL科技北向资金净买入7.47亿、6.62亿、2.14亿；宁德时代遭北向资金净卖出9.58亿。</p>
                    <p class="text-red-800 text-opacity-50">text-red-800 text-opacity-50 五粮液、TCL科技北向资金净买入7.47亿、6.62亿、2.14亿；宁德时代遭北向资金净卖出9.58亿。</p>
                    <p><span class="text-red-800">文本装饰：</span></p>
                    <p class="underline">underline用于控制文本装饰的实用功能类。</p>
                    <p class="line-through">line-through用于控制文本装饰的实用功能类。</p>
                    <p class="no-underline">no-underline用于控制文本装饰的实用功能类。</p>
                    <p><span class="text-red-800">文本转换：</span></p>
                    <p class="uppercase">uppercase my name is sjj</p>
                    <p class="lowercase">lowercase MY name IS sjj</p>
                    <p class="capitalize">capitalize my name is sjj</p>
                    <p><span class="text-red-800">文本溢出：</span></p>
                    <p class="w-64 truncate">truncate 不换行 用于控制元素中文本溢出的功能类。</p>
                    <p class="w-64 overflow-ellipsis overflow-hidden">overflow-ellipsis 用于控制元素中文本溢出的功能类。</p>
                    <p class="w-64 border overflow-clip overflow-hidden">overflow-clip 在极限边界裁剪 用于控制元素中文本溢出的功能类。</p>
                    <p><span class="text-red-800">垂直对齐(对准基线)：</span></p>
                    <p class="h-8 mb-1 align-baseline border border-blue-300">align-baseline 用于控制内联或表格单元格的垂直对齐的功能类</p>
                    <p class="h-8 mb-1 align-top border border-blue-300">align-top 用于控制内联或表格单元格的垂直对齐的功能类</p>
                    <p class="h-8 mb-1 align-middle border border-blue-300">align-middle 用于控制内联或表格单元格的垂直对齐的功能类</p>
                    <p class="h-8 mb-1 align-bottom border border-blue-300">align-bottom 用于控制内联或表格单元格的垂直对齐的功能类</p>
                    <p class="h-8 mb-1 align-text-top border border-blue-300">align-text-top 用于控制内联或表格单元格的垂直对齐的功能类</p>
                    <p class="h-8 mb-1 align-text-bottom border border-blue-300">align-text-bottom 用于控制内联或表格单元格的垂直对齐的功能类</p>
                    <p><span class="text-red-800">空格：</span></p>
                    <p class=" whitespace-nowrap">whitespace-nowrap 
                        来防止文本在元素中被包裹。换行和空格将被折叠。</p>
                    <p class=" whitespace-pre">whitespace-pre 保留元素中的换行和空格。
                        文本不会被包装。</p>
                    <p class=" whitespace-pre-line">whitespace-pre-line 保留换行，但不保留元素中的空格。
                        
                        文本将被正常包装。</p>
                    <p class=" whitespace-pre-wrap">whitespace-pre-wrap 来保留元素中的换行和空格。          
                        
                        文本将被正常包装。</p>
                    <p><span class="text-red-800">文本换行：</span></p>
                    <p class="w-52 break-normal">break-normal 只在正常的换行点添加换行符 Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
                    <p class="w-52 break-words">break-words 在词中间添加换行符 Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
                    <p class="w-52 break-all">break-all 在必要的时候添加换行符，而不是试图保留整个单词 Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
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
            '占位文本颜色：placeholder-{color}-{number}',
            '占位文本不透明度：placeholder-opacity-{number}',
            '文本对齐：text-left text-center text-right text-justify(尽量充斥整个容器)',
            '文本颜色：text-transparent text-current text-{color}-{number}',
            '文本颜色不透明度：text-opacity-{number}',
            '文本装饰：underline line-through no-underline',
            '文本转换：uppercase lowercase capitalize normal-case',
            '文本溢出：truncate overflow-ellipsis overflow-clip',
            '垂直对齐：align-baseline align-top align-middle align-bottom align-text-top align-text-bottom',
            '空格：whitespace-normal whitespace-nowrap whitespace-pre whitespace-pre-line whitespace-pre-wrap',
            '文本换行：break-normal break-words break-all'
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