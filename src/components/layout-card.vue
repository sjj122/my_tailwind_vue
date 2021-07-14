<template>
  <div class="w-5/6 mx-auto shadow bg-gray-200 text-gray-500 rounded-sm overflow-auto scroll-bar">
    <slot name="title"></slot>
    <slot name="content"></slot>
  </div>
</template>

<script>
import { defineComponent } from 'vue'
export default defineComponent({
    
})
</script>

<style>

</style>