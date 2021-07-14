<template>
    <!-- 代码区 -->
    <div :class="`${width} font-medium rounded-lg bg-black bg-opacity-75 overflow-y-auto p-4 text-sm text-white scroll-bar`">
        <p class="text-lg mb-1 text-red-300 tracking-wider">{{ codeTitle }}</p>
        <p class="font-mono" v-for="(item, index) in codeContent" :key="index">{{ item }}</p>
    </div>
</template>

<script>
import { defineComponent } from 'vue'
export default defineComponent({
    props: {
        codeTitle: {
            type: String,
            default() {
                return 'Title：'
            }
        },
        codeContent: {
            type: Array,
            default() {
                return []
            }
        },
        width: {
            type: String,
            default() {
                return ''
            }
        }
    }
})
</script>

<style>

</style>