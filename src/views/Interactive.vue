<template>
    <layout-card class="mt-3" style="height: 82vh;">
        <template #title>
            <p class="text-lg font-extralight p-2 tracking-wide border-white border-solid border-b-2 title w-5/6 bg-gray-200 z-10">
                交互<span class="text-sm text-yellow-900">[表单外观、光标效果、轮廓、指向事件、大小调整、用户选择]</span>
            </p>
        </template>
        <template #content>
            <figure class="mt-12 column">
                <!-- 1.清除游览器默认样式 -->
                <article>
                    <section class="h-20 p-2 flex justify-around items-center rounded-lg bg-blue-100">
                        <div>
                            <select>
                                <option>Yes</option>
                                <option>No</option>
                                <option>Maybe</option>
                            </select>
                            <span class="font-light text-sm ml-4">游览器默认样式</span>
                        </div>
                        <div>
                            <select class="appearance-none">
                                <option>Yes</option>
                                <option>No</option>
                                <option>Maybe</option>
                            </select>
                            <span class="font-light text-sm ml-4">清除游览器默认样式</span>
                        </div>
                    </section>
                    <code-area codeTitle="表单外观：" :codeContent="code1"></code-area>
                </article>
                <!-- 2.用户选择 -->
                <article>
                    <section class="h-20 p-2 flex justify-around items-center rounded-lg bg-red-100">
                        <div class="p-2 bg-red-200 text-gray-400 select-none">这是一句用户无法复制的文本</div>
                        <div class="p-2 bg-red-200 text-gray-400 select-all">这是一句文本。点击一键全选</div>
                    </section>
                    <code-area codeTitle="用户选择：" :codeContent="code2"></code-area>
                </article>
                <!-- 3.调整大小 -->
                <article>
                    <section class="h-72 p-2 flex flex-col justify-around rounded-lg bg-green-100">
                        <textarea class="resize-y" cols="10" rows="2" value="resize-y"></textarea>
                        <textarea class="resize-x" cols="10" rows="2" value="resize-x"></textarea>
                        <textarea class="resize" cols="10" rows="2" value="resize"></textarea>
                        <textarea class="resize-none" cols="10" rows="2" value="resize"></textarea>
                    </section>
                    <code-area codeTitle="调整大小：" :codeContent="code3"></code-area>
                </article>
                <!-- 4.光标效果 -->
                <article>
                    <section class="h-64 p-2 grid grid-cols-2 gap-1 rounded-lg bg-pink-100">
                        <div class="h-12 p-2 flex justify-center items-center bg-pink-200 cursor-auto">cursor-auto</div>
                        <div class="h-12 p-2 flex justify-center items-center bg-pink-200 text-green-600 cursor-pointer">cursor-pointer</div>
                        <div class="h-12 p-2 flex justify-center items-center bg-pink-200 text-blue-600 cursor-wait">cursor-wait</div>
                        <div class="h-12 p-2 flex justify-center items-center bg-pink-200 text-gray-600 cursor-default">cursor-default</div>
                        <div class="h-12 p-2 flex justify-center items-center bg-pink-200 text-red-600 cursor-text">cursor-text</div>
                        <div class="h-12 p-2 flex justify-center items-center bg-pink-200 text-purple-600 cursor-move">cursor-move</div>
                        <div class="h-12 p-2 flex justify-center items-center bg-pink-200 text-indigo-600 cursor-not-allowed">cursor-not-allowed</div>
                    </section>
                    <code-area codeTitle="光标效果：" :codeContent="code4"></code-area>
                </article>
                <!-- 5.轮廓 -->
                <article>
                    <section class="h-52 p-2 flex flex-col rounded-lg bg-purple-100">
                        <div class="p-4 flex justify-around items-center">
                            <input type="text" class="p-2 rounded-md" placeholder="默认获取焦点轮廓样式">
                            <input type="text" class="p-2 outline-none focus:ring focus:ring-pink-300 rounded-md" placeholder="自定义获取焦点轮廓样式">
                        </div>
                        <div class="p-4 flex justify-around items-center">
                            <div class="bg-white p-2"><button class="bg-blue-500 rounded-lg p-3 text-white focus:outline-black">Button outline-black</button></div>
                            <div class="bg-blue-500 p-2"><button class="bg-pink-500 rounded-lg p-3 text-white focus:outline-white">Button outline-white</button></div>
                        </div>
                    </section>
                    <code-area codeTitle="轮廓：" :codeContent="code5"></code-area>
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
        LayoutCard, CodeArea
    },
    setup() {
        const code1 = ['appearance-none：重置一个元素的所有浏览器特定样式']
        const code2 = ['select-none：禁用文本选择', 'select-text：允许选择', 'select-all：一键全选', 'select-auto：使用游览器默认行为']
        const code3 = ['resize-none：禁止调整大小', 'resize-y：仅允许y轴方向', 'resize-x：仅允许x轴方向', 'resize：任意方向']
        const code4 = ['cursor-auto：自动', 'cursor-default：始终保持一个箭头', 'cursor-pointer：指向性的手', 'cursor-wait：等待图标', 'cursor-text：文本', 'cursor-move：表示可以移动的东西', 'cursor-not-allowed：不能与其交互或点击']
        const code5 = ['outline-none：隐藏焦点元素的默认浏览器轮廓', 'outline-white、outline-black：在元素周围添加一个 2px 的点状边框，并有 2px 的偏移。']
        return {
            code1,
            code2,
            code3,
            code4,
            code5
        }
    }
})
</script>

<style scoped>
.column {
    column-count: 2;
}
article {
    position: relative;
    break-inside: avoid;
    margin-bottom: .8rem;
}
</style>