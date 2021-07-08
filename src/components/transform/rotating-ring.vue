<template>
    <article v-if="speed === 'fast'" class="flex-1 flex justify-center items-center">
        <div class="absolute w-20 h-20 border border-solid border-gray-800 rounded-full animate-rotateX_f"></div>
        <div class="absolute w-20 h-20 border border-solid border-gray-700 rounded-full animate-rotateX1_f"></div>
        <div class="absolute w-20 h-20 border border-solid border-gray-600 rounded-full animate-rotateX2_f"></div>
        <div class="absolute w-20 h-20 border border-solid border-gray-500 rounded-full animate-rotateX3_f"></div>
        <div class="absolute w-20 h-20 border border-solid border-gray-500 rounded-full animate-rotateY_f"></div>
        <div class="absolute w-20 h-20 border border-solid border-gray-600 rounded-full animate-rotateY1_f"></div>
        <div class="absolute w-20 h-20 border border-solid border-gray-700 rounded-full animate-rotateY2_f"></div>
        <div class="absolute w-20 h-20 border border-solid border-gray-800 rounded-full animate-rotateY3_f"></div>
    </article>
    <!--  -->
    <article v-else-if="speed === 'normal'" class="flex-1 flex justify-center items-center">
        <div class="absolute w-20 h-20 border border-solid border-gray-800 rounded-full animate-rotateX_n"></div>
        <div class="absolute w-20 h-20 border border-solid border-gray-700 rounded-full animate-rotateX1_n"></div>
        <div class="absolute w-20 h-20 border border-solid border-gray-600 rounded-full animate-rotateX2_n"></div>
        <div class="absolute w-20 h-20 border border-solid border-gray-500 rounded-full animate-rotateX3_n"></div>
        <div class="absolute w-20 h-20 border border-solid border-gray-500 rounded-full animate-rotateY_n"></div>
        <div class="absolute w-20 h-20 border border-solid border-gray-600 rounded-full animate-rotateY1_n"></div>
        <div class="absolute w-20 h-20 border border-solid border-gray-700 rounded-full animate-rotateY2_n"></div>
        <div class="absolute w-20 h-20 border border-solid border-gray-800 rounded-full animate-rotateY3_n"></div>
    </article>
    <!--  -->
    <article v-else class="flex-1 flex justify-center items-center">
        <div class="absolute w-20 h-20 border border-solid border-gray-800 rounded-full animate-rotateX_s"></div>
        <div class="absolute w-20 h-20 border border-solid border-gray-700 rounded-full animate-rotateX1_s"></div>
        <div class="absolute w-20 h-20 border border-solid border-gray-600 rounded-full animate-rotateX2_s"></div>
        <div class="absolute w-20 h-20 border border-solid border-gray-500 rounded-full animate-rotateX3_s"></div>
        <div class="absolute w-20 h-20 border border-solid border-gray-500 rounded-full animate-rotateY_s"></div>
        <div class="absolute w-20 h-20 border border-solid border-gray-600 rounded-full animate-rotateY1_s"></div>
        <div class="absolute w-20 h-20 border border-solid border-gray-700 rounded-full animate-rotateY2_s"></div>
        <div class="absolute w-20 h-20 border border-solid border-gray-800 rounded-full animate-rotateY3_s"></div>
    </article>
</template>

<script>
import { defineComponent } from 'vue'
export default defineComponent({
    props: {
        speed: {
            type: String,
            default() {
                return 'normal'
            }
        }
    }
})
</script>

<style>

</style>