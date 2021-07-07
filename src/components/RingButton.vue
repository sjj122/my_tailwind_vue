<template>
  <div class="container pt-2">
    <div v-if="elementType" :class="`py-2 px-4 cursor-pointer ${eleStyle}`">{{ text }}</div>
    <div v-else><input :class="`w-full focus:outline-none text-black border border-gray-300 rounded-md py-2 pl-2 ${eleStyle}`" :placeholder="text" type="text"></div>
    <div class="mt-2 rounded-lg bg-black bg-opacity-75 overflow-x-auto p-6 text-sm text-white">
        <p v-for="(item, index) in code" :key="index" class="font-mono">{{ item }}</p>
    </div>
</div>
</template>

<script>
import { defineComponent } from 'vue'
export default defineComponent({
    props: {
        elementType: {
            type: Boolean,
            default() {
                return true
            }
        },
        code: {
            type: Array,
            default() {
                return []
            }
        },
        eleStyle: {
            type: String,
            default() {
                return ''
            }
        },
        text: {
            type: String,
            default() {
                return 'Click me!'
            }
        }
    }
})
</script>

<style>

</style>