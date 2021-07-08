<template>
  <layout-card class="mt-3" style="height: 82vh;">
    <template #title>
      <p class="text-lg font-extralight p-2 tracking-wide border-white border-solid border-b-2">
        变换<span class="text-sm text-yellow-900">[transform transition translate rotate scale skew animate]</span>
      </p>
    </template>
    <template #content>
      <figure class="flex flex-col justify-evenly items-center">
            <!-- 小方块 transform -->
            <div class="w-full flex justify-between mt-1 border-b-2 border-white border-solid">
                <div class="w-1/4 font-medium rounded-lg bg-black bg-opacity-75 overflow-x-auto p-4 text-sm text-white">
                    <p class="text-lg mb-1 text-red-300">Translate：</p>
                    <p class="font-mono">translate(x, y)</p>
                    <p class="font-mono">translateX()</p>
                    <p class="font-mono">translateY()</p>
                </div>
                <div class="w-3/4 flex flex-col justify-between rounded-lg ml-1">
                    <div class="w-14 h-10 bg-black animate-moveLinear"></div>
                    <div class="w-14 h-10 bg-gray-400 animate-moveEaseInOut"></div>
                    <div class="w-14 h-10 bg-gray-500 animate-moveCubicBezier"></div>
                    <div class="w-10 h-10 bg-blue-500 animate-moveDIY"></div>
                </div>
            </div>
            <!-- 小圆形 scale -->
            <div class="w-full flex justify-between mt-1 border-b-2 border-white border-solid">
                <div class="w-1/4 font-medium rounded-lg bg-black bg-opacity-75 overflow-y-auto p-4 text-sm text-white scroll-bar">
                    <p class="text-lg mb-1 text-red-300">Scale：</p>
                    <p class="font-mono">@keyframes</p>
                    <p class="font-mono whitespace-nowrap">animation: name duration timing-function delay iteration-count </p>
                    <p class="font-mono">scale(2)</p>
                    <p class="font-mono">scale(.8)</p>
                </div>
                <div class="w-3/4 flex justify-evenly items-center rounded-lg ml-1">
                    <div class="flex-1 text-center border-r-2 border-dashed border-white-400">
                        <span class="absolute w-10 h-10 bg-pink-400 opacity-75 rounded-full animate-ping"></span>
                        <span class="relative inline-flex rounded-full h-10 w-10 bg-pink-500"></span>
                    </div>
                    <div class="flex-1 text-center">
                        <span class="w-8 h-8 bg-pink-400 inline-flex rounded-full animate-small"></span>
                        <span class="w-8 h-8 bg-green-400 inline-flex rounded-full animate-small1"></span>
                        <span class="w-8 h-8 bg-red-400 inline-flex rounded-full animate-small2"></span>
                        <span class="w-8 h-8 bg-blue-400 inline-flex rounded-full animate-small3"></span>
                        <span class="w-8 h-8 bg-purple-400 inline-flex rounded-full animate-small4"></span>
                        <span class="w-8 h-8 bg-gray-400 inline-flex rounded-full animate-small5"></span>
                    </div>
                </div>
            </div>
            <!-- 小方块 rotate -->
            <div class="w-full flex justify-between mt-1 border-b-2 border-white border-solid">
                <div class="w-1/4 font-medium rounded-lg bg-black bg-opacity-75 overflow-y-auto p-4 text-sm text-white scroll-bar">
                    <p class="text-lg mb-1 text-red-300">Rotate：</p>
                    <p class="font-mono">rotate(x, y)</p>
                    <p class="font-mono">rotateX(0deg)</p>
                    <p class="font-mono">rotateY(0deg)</p>
                </div>
                <div class="w-3/4 flex justify-evenly items-center rounded-lg ml-1">
                    <template v-for="(item, index) in rotateRing" :key="index">
                        <span>{{ item }}：</span>
                        <rotate-ring :speed="item"></rotate-ring>
                    </template>
                </div>
            </div>
            <!-- 小方块 skew -->
            <div class="w-full flex justify-between mt-1 border-b-2 border-white border-solid">
                <div class="w-1/4 font-medium rounded-lg bg-black bg-opacity-75 overflow-y-auto p-4 text-sm text-white scroll-bar">
                    <p class="text-lg mb-1 text-red-300">Skew：</p>
                    <p class="font-mono">skew(x, y)</p>
                    <p class="font-mono">skewX(0deg)</p>
                    <p class="font-mono">skewY(0deg)</p>
                </div>
                <div class="w-3/4 relative flex justify-evenly items-center rounded-lg ml-1">
                    <!-- 单 -->
                    <div class="w-12 h-12 bg-gray-400 animate-skew">
                        <span class="w-2 h-2 inline-flex rounded-full bg-white ml-2"></span>
                        <span class="w-2 h-2 inline-flex rounded-full bg-white ml-4"></span>
                        <span class="w-6 h-6 inline-flex border-b-2 border-solid border-white rounded-full ml-2 -mt-4"></span>
                    </div>
                    <!-- 细 -->
                    <div>
                        <div class="w-12 h-12 bg-gray-400 animate-skew">
                            <span class="w-2 h-2 inline-flex rounded-full bg-white ml-2"></span>
                            <span class="w-2 h-2 inline-flex rounded-full bg-white ml-4"></span>
                            <span class="w-6 h-6 inline-flex border-b-2 border-solid border-white rounded-sm ml-2 -mt-4"></span>
                        </div>
                        <div class="w-12 h-12 bg-gray-400 text-center animate-skew_reverse">
                            <span class="w-px h-12 inline-flex bg-white"></span>
                        </div>
                    </div>
                    <!-- 粗 -->
                    <div>
                        <div class="relative">
                            <span class="w-10 h-12 inline-flex bg-gray-400 animate-skew">
                                <span class="w-2 h-2 absolute rounded-full bg-white ml-2 mt-2"></span>
                                <span class="w-2 h-3 absolute border-l-2 border-solid border-white bottom-3 transform -rotate-45" style="right:0;"></span>
                            </span>
                            <span class="w-10 h-12 inline-flex bg-gray-400 animate-skew">
                                <span class="w-2 h-2 absolute rounded-full bg-white ml-2 mt-2"></span>
                                <span class="w-2 h-3 absolute border-r-2 border-solid border-white bottom-3 transform rotate-45 " style="left:-4px;"></span>
                            </span>
                        </div>
                        <div class="-mt-2">
                            <span class="w-10 h-12 inline-flex bg-gray-400 animate-skew_reverse">
                                <span class="w-px h-2 absolute bg-white bottom-0 left-2"></span>
                                <span class="w-px h-2 absolute bg-white bottom-0 left-4"></span>
                                <span class="w-px h-2 absolute bg-white bottom-0 left-6"></span>
                                <span class="w-px h-2 absolute bg-white bottom-0 left-8"></span>
                                <span class="w-px h-12 absolute bg-white right-0"></span>
                            </span>
                            <span class="w-10 h-12 inline-flex bg-gray-400 animate-skew_reverse">
                                <span class="w-px h-2 absolute bg-white bottom-0 left-2"></span>
                                <span class="w-px h-2 absolute bg-white bottom-0 left-4"></span>
                                <span class="w-px h-2 absolute bg-white bottom-0 left-6"></span>
                                <span class="w-px h-2 absolute bg-white bottom-0 left-8"></span>
                            </span>
                        </div>
                    </div>
                </div>
            </div>
      </figure>
    </template>
  </layout-card>
</template>

<script>
import RotateRing from '@/components/transform/rotating-ring.vue'
import LayoutCard from '@/components/layout-card.vue'
import { defineComponent } from 'vue'
export default defineComponent({
    components: {
        LayoutCard, RotateRing
    },
    setup() {
        const rotateRing = ['fast', 'normal', 'slow']
        return {
            rotateRing
        }
    }
})
</script>

<style scoped>

</style>