<template>
  <layout-card class="mt-3" style="height: 82vh;">
        <template #title>
        <p class="text-lg font-extralight p-2 tracking-wide border-white border-solid border-b-2 title w-5/6 bg-gray-200 z-10">
            表格<span class="text-sm text-yellow-900">[ 边框：border-separate | border-collapse ；布局： ]</span>
        </p>
        </template>
        <template #content>
            <figure class="mt-12">
                <!-- 1.表格边框 -->
                <article class="p-2 grid grid-cols-2 gap-2">
                    <table class="border-separate border border-green-800">
                        <thead>
                            <tr>
                                <th class="border border-green-600 bg-green-200">table</th>
                                <th class="border border-green-600 bg-green-200">border-separate</th>
                            </tr>
                        </thead>
                        <tbody class="text-center">
                            <tr>
                                <td class="p-3 border border-green-600"><div class="w-12 h-1.5 bg-green-400 rounded-full"></div></td>
                                <td class="p-3 border border-green-600"><div class="w-52 h-1.5 bg-green-400 rounded-full"></div></td>
                            </tr>
                            <tr>
                                <td class="p-3 border border-green-600"><div class="w-12 h-1.5 bg-green-400 rounded-full"></div></td>
                                <td class="p-3 border border-green-600"><div class="w-52 h-1.5 bg-green-400 rounded-full"></div></td>
                            </tr>
                            <tr>
                                <td class="p-3 border border-green-600"><div class="w-12 h-1.5 bg-green-400 rounded-full"></div></td>
                                <td class="p-3 border border-green-600"><div class="w-52 h-1.5 bg-green-400 rounded-full"></div></td>
                            </tr>
                        </tbody>
                    </table>
                    <table class="border-collapse border border-green-800">
                        <thead>
                            <tr>
                                <th class="border border-green-600">table</th>
                                <th class="border border-green-600">border-collapse</th>
                            </tr>
                        </thead>
                        <tbody class="text-center">
                            <tr>
                            <td class="border border-green-600">---</td>
                            <td class="border border-green-600">---</td>
                            </tr>
                            <tr>
                            <td class="border border-green-600">---</td>
                            <td class="border border-green-600">---</td>
                            </tr>
                            <tr>
                            <td class="border border-green-600">---</td>
                            <td class="border border-green-600">---</td>
                            </tr>
                        </tbody>
                    </table>
                </article>
                <code-area codeTitle="表格边框：" :codeContent="['border-separate：强调每个单元格显示自己的独立边框', 'border-collapse：将相邻的单元格边框合并为一个边框。注意，这包括折叠顶层<table>标签上的边框。']"></code-area>
                <!-- 2.表格布局 -->
                <article class="p-2 mt-2 grid grid-cols-2 gap-2">
                    <table class="table-auto border-collapse border border-blue-300">
                        <thead>
                            <tr>
                                <th class="border border-blue-300">table-auto</th>
                                <th class="border border-blue-300">---</th>
                                <th class="border border-blue-300">---</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td class="border border-blue-300">---</td>
                                <td class="border border-blue-300">---</td>
                                <td class="border border-blue-300">---</td>
                            </tr>
                            <tr class="bg-blue-200">
                                <td class="border border-blue-300">-----------------------------------------------------------------------</td>
                                <td class="border border-blue-300">---</td>
                                <td class="border border-blue-300">---</td>
                            </tr>
                            <tr>
                                <td class="border border-blue-300">---</td>
                                <td class="border border-blue-300">---</td>
                                <td class="border border-blue-300">---</td>
                            </tr>
                        </tbody>
                    </table>
                    <table class="table-fixed border-collapse border border-blue-300">
                        <thead>
                            <tr>
                                <th class="border border-blue-300">table-fixed</th>
                                <th class="border border-blue-300">---</th>
                                <th class="border border-blue-300">---</th>
                            </tr>
                        </thead>
                        <tbody class="text-center">
                            <tr>
                                <td class="border border-blue-300">---</td>
                                <td class="border border-blue-300">---</td>
                                <td class="border border-blue-300">---</td>
                            </tr>
                            <tr class="bg-purple-200">
                                <td class="border border-blue-300 w-1/2 h-24">w-1/2 h-24</td>
                                <td class="border border-blue-300">---</td>
                                <td class="border border-blue-300">---</td>
                            </tr>
                            <tr>
                                <td class="border border-blue-300">---</td>
                                <td class="border border-blue-300">---</td>
                                <td class="border border-blue-300">---</td>
                            </tr>
                        </tbody>
                    </table>
                </article>
                <code-area codeTitle="布局" :codeContent="['table-auto：允许表格自动调整列的大小以适应单元格的内容', 'table-fixed：允许表格忽略内容，使用固定的列宽。第一行的宽度将设置整个表格的列宽。您可以手动设置一些列的宽度，其余的可用宽度将被平均分配给没有明确宽度的列。']"></code-area>
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
    }
})
</script>

<style scoped>

</style>