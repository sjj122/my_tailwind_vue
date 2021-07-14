<template>
    <layout-card class="mt-3" style="height: 82vh;">
        <template #title>
        <p class="text-lg font-extralight p-2 tracking-wide border-white border-solid border-b-2">
            交互<span class="text-sm text-yellow-900">[表单外观、光标效果、轮廓、指向事件、大小调整、用户选择]</span>
        </p>
        </template>
        <template #content>
            <figure class="grid grid-cols-2">
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
        return {
            code1
        }
    }
})
</script>

<style>

</style>