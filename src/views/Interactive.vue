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
        return {
            code1,
            code2,
            code3
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