<template>
    <layout-card class="mt-3" style="height: 82vh;">
        <template #title>
        <p class="text-lg font-extralight p-2 tracking-wide border-white border-solid border-b-2 title w-5/6 bg-gray-200 z-10">
            Flex布局<span class="text-sm text-yellow-900">[flex flex-direction flex-wrap flex-1 flex-grow flex-shrink order]</span>
        </p>
        </template>
        <template #content>
            <figure class="grid grid-cols-2 gap-2 mt-12">
                <!-- 1.justify-between items-center -->
                <article>
                    <section class="p-3 h-52 flex border border-solid border-gray-300 m-2 justify-between items-center">
                        <div class="w-20 h-20 border border-solid border-gray-200 bg-red-300 text-white text-lg flex justify-center items-center" v-for="item in 3" :key="item">{{item}}</div>
                    </section>
                    <code-area codeTitle="flex：" :codeContent="['justify-between <主轴排列方式>', 'items-center <交叉轴排列方式>']"></code-area>
                </article>
                <!-- 2.justify-around items-center -->
                <article>
                    <section class="p-3 h-52 flex border border-solid border-gray-300 m-2 justify-around items-start">
                        <div class="w-20 h-20 border border-solid border-gray-200 bg-blue-300 text-white text-lg flex justify-center items-center" v-for="item in 3" :key="item">{{item}}</div>
                    </section>
                    <code-area codeTitle="flex：" :codeContent="['justify-around <主轴排列方式>', 'items-start <交叉轴排列方式>']"></code-area>
                </article>
                <!-- 3.justify-evenly items-center -->
                <article>
                    <section class="p-3 h-52 flex border border-solid border-gray-300 m-2 justify-evenly items-end">
                        <div class="w-20 h-20 border border-solid border-gray-200 bg-pink-300 text-white text-lg flex justify-center items-center" v-for="item in 3" :key="item">{{item}}</div>
                    </section>
                    <code-area codeTitle="flex：" :codeContent="['justify-evenly <主轴排列方式>', 'items-end <交叉轴排列方式>']"></code-area>
                </article>
                <!-- 4.justify-center items-center -->
                <article>
                    <section class="p-3 h-52 flex border border-solid border-gray-300 m-2 justify-center items-baseline">
                        <div class="w-20 h-20 border border-solid border-gray-200 bg-purple-300 text-white text-lg flex justify-center items-center" v-for="item in 3" :key="item">{{item}}</div>
                        <p class="border border-dashed border-gray-300">我是一段文本</p>
                    </section>
                    <code-area codeTitle="flex：" :codeContent="['justify-center <主轴排列方式>', 'items-baseline <交叉轴排列方式>']"></code-area>
                </article>
                <!-- 5.flex-direction justify-center items-center -->
                <article>
                    <section class="p-3 h-52 flex flex-col border border-solid border-gray-300 m-2 justify-between items-center">
                        <div class="w-20 h-12 border border-solid border-gray-200 bg-purple-300 text-white text-lg flex justify-center items-center" v-for="item in 3" :key="item">{{item}}</div>
                    </section>
                    <code-area codeTitle="flex-direction：" :codeContent="['flex-col <更换主轴方向>', 'justify-between <主轴排列方式>', 'items-center <交叉轴排列方式>']"></code-area>
                </article>
                <!-- 6.flex-direction justify-center items-center -->
                <article>
                    <section class="p-3 h-52 flex flex-col-reverse border border-solid border-gray-300 m-2 justify-around items-center">
                        <div class="w-20 h-12 border border-solid border-gray-200 bg-purple-300 text-white text-lg flex justify-center items-center" v-for="item in 3" :key="item">{{item}}</div>
                    </section>
                    <code-area codeTitle="flex-direction：" :codeContent="['flex-col-reverse <更换主轴方向>', 'justify-around <主轴排列方式>', 'items-center <交叉轴排列方式>']"></code-area>
                </article>
                <!-- 7.flex-wrap -->
                <article>
                    <section class="p-3 h-52 flex flex-col flex-nowrap border border-solid border-gray-300 m-2 justify-around items-center">
                        <div class="w-20 h-12 border border-solid border-gray-200 bg-purple-300 text-white text-lg flex justify-center items-center" v-for="item in 8" :key="item">{{item}}</div>
                    </section>
                    <code-area codeTitle="flex-wrap：" :codeContent="['flex-nowrap <默认不换行>']"></code-area>
                </article>
                <!-- 8.flex-wrap -->
                <article>
                    <section class="p-3 h-52 flex flex-col flex-wrap border border-solid border-gray-300 m-2 justify-around items-center">
                        <div class="w-20 h-12 border border-solid border-gray-200 bg-purple-300 text-white text-lg flex justify-center items-center" v-for="item in 8" :key="item">{{item}}</div>
                    </section>
                    <code-area codeTitle="flex-wrap：" :codeContent="['flex-wrap <自动换行>']"></code-area>
                </article>
                <!-- 9.flex -->
                <article>
                    <section class="p-3 h-36 flex flex-col border border-solid border-gray-300 m-2 justify-between">
                        <div class="flex items-center">
                            <div class="flex-1 w-20 h-12 border border-solid border-gray-200 bg-purple-300 text-white text-lg flex justify-center items-center">flex-1</div>
                            <div class="w-20 h-12 border border-solid border-gray-200 bg-yellow-300 text-white text-lg flex justify-center items-center">-</div>
                            <div class="w-20 h-12 border border-solid border-gray-200 bg-green-300 text-white text-lg flex justify-center items-center">-</div>
                        </div>
                        <div class="flex items-center">
                            <div class="w-20 h-12 border border-solid border-gray-200 bg-purple-300 text-white text-lg flex justify-center items-center">-</div>
                            <div class="flex-auto w-20 h-12 border border-solid border-gray-200 bg-yellow-300 text-white text-lg flex justify-center items-center">flex-auto this is a placeholder.</div>
                            <div class="flex-1 w-20 h-12 border border-solid border-gray-200 bg-green-300 text-white text-lg flex justify-center items-center">flex-1</div>
                        </div>
                    </section>
                    <code-area codeTitle="flex<flex-grow flex-shrink flex-basis>：" :codeContent="['flex-1 -> flex: 1 1 0%; <不考虑自身初始尺寸，随意放大缩小>', 'flex-auto -> flex: 1 1 auto; <考虑自身初始尺寸放大缩小>']"></code-area>
                </article>
                <!-- 10.flex -->
                <article>
                    <section class="p-3 h-36 flex flex-col border border-solid border-gray-300 m-2 justify-center">
                        <div class="flex items-center">
                            <div class="flex-initial w-40 h-12 border border-solid border-gray-200 bg-purple-300 text-white text-lg flex justify-center items-center">flex-initial w-40</div>
                            <div class="flex-1 w-20 h-12 border border-solid border-gray-200 bg-yellow-300 text-white text-lg flex justify-center items-center">flex-1</div>
                            <div class="flex-1 w-20 h-12 border border-solid border-gray-200 bg-green-300 text-white text-lg flex justify-center items-center">flex-1</div>
                        </div>
                        <div class="flex items-center">
                            <div class="flex-1 w-20 h-12 border border-solid border-gray-200 bg-purple-300 text-white text-lg flex justify-center items-center">flex-1</div>
                            <div class="flex-none w-30 h-12 border border-solid border-gray-200 bg-yellow-300 text-white text-lg flex justify-center items-center">flex-none w-30.</div>
                            <div class="flex-1 w-20 h-12 border border-solid border-gray-200 bg-green-300 text-white text-lg flex justify-center items-center">flex-1</div>
                        </div>
                    </section>
                    <code-area codeTitle="flex<放大 缩小 是否考虑初始尺寸>：" :codeContent="['flex-initial -> flex: 0 1 auto; <考虑自身初始尺寸，缩小不能放大>', 'flex-none -> flex: none; <禁止放大缩小>']"></code-area>
                </article>
                <!-- 11.flex-grow -->
                <article>
                    <section class="p-3 h-52 flex border border-solid border-gray-300 m-2 justify-around items-center">
                        <div class="flex-grow w-20 h-12 border border-solid border-gray-200 bg-indigo-300 text-white text-lg flex justify-center items-center">flex-grow</div>
                        <div class="flex-grow-0 w-20 h-12 border border-solid border-gray-200 bg-indigo-300 text-white text-sm flex justify-center items-center">flex-grow-0</div>
                        <div class="w-20 h-12 border border-solid border-gray-200 bg-indigo-300 text-white text-lg flex justify-center items-center">-</div>
                    </section>
                    <code-area codeTitle="flex-grow：" :codeContent="['flex-grow-0 <阻止一个flex项目放大>']"></code-area>
                </article>
                <!-- 12.flex-grow -->
                <article>
                    <section class="p-3 h-52 flex border border-solid border-gray-300 m-2 justify-around items-center">
                        <div class="w-20 h-12 border border-solid border-gray-200 bg-red-300 text-white text-lg flex justify-center items-center">-</div>
                        <div class="w-20 h-12 border border-solid border-gray-200 bg-red-300 text-white text-lg flex justify-center items-center">-</div>
                        <div class="flex-grow w-20 h-12 border border-solid border-gray-200 bg-red-300 text-white text-lg flex justify-center items-center">flew-grow</div>
                    </section>
                    <code-area codeTitle="flex-grow：" :codeContent="['flex-grow <允许一个flex项目放大，以填充任何可用空间>']"></code-area>
                </article>
                <!-- 13.flex-shrink -->
                <article>
                    <section class="p-3 h-52 flex border border-solid border-gray-300 m-2 justify-around items-center">
                        <div class="w-20 h-12 border border-solid border-gray-200 bg-red-300 text-white text-lg flex justify-center items-center">-</div>
                        <div class="flex-shrink-0 w-30 h-12 border border-solid border-gray-200 bg-red-300 text-white text-lg flex justify-center items-center">--- flex-shrink-0 w-30 ---</div>
                        <div class="flex-shrink w-30 h-12 border border-solid border-gray-200 bg-red-300 text-white text-lg flex justify-center items-center">flex-shrink w-30</div>
                    </section>
                    <code-area codeTitle="flex-shrink：" :codeContent="['flex-shrink <允许一个flex项目在必要的时候缩小>', 'flex-shrink-0 <阻止一个flex项目缩小>']"></code-area>
                </article>
                <!-- 14.order -->
                <article>
                    <section class="p-3 h-52 flex border border-solid border-gray-300 m-2 justify-around items-center">
                        <div class="order-last w-24 h-12 border border-solid border-gray-200 bg-red-300 text-white text-sm flex justify-center items-center">order-last 一</div>
                        <div class="order-3 w-24 h-12 border border-solid border-gray-200 bg-red-300 text-white text-sm flex justify-center items-center">order-3 二</div>
                        <div class="order-1 w-24 h-12 border border-solid border-gray-200 bg-red-300 text-white text-sm flex justify-center items-center">order-1 三</div>
                        <div class="order-2 w-24 h-12 border border-solid border-gray-200 bg-red-300 text-white text-sm flex justify-center items-center">order-2 四</div>
                        <div class="order-4 w-24 h-12 border border-solid border-gray-200 bg-red-300 text-white text-sm flex justify-center items-center">order-4 五</div>
                        <div class="order-first w-24 h-12 border border-solid border-gray-200 bg-red-300 text-white text-sm flex justify-center items-center">order-first 六</div>
                    </section>
                    <code-area codeTitle="order：" :codeContent="['order <给flex项目编号，让flex项目按指定编号排列>', 'order-first <-9999>', 'order-last <9999>', 'order-none <0>']"></code-area>
                </article>
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

<style>

</style>