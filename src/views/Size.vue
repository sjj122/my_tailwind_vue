<template>
  <layout-card class="mt-3" style="height: 82vh;">
        <template #title>
        <p class="text-lg font-extralight p-2 tracking-wide border-white border-solid border-b-2 title w-5/6 bg-gray-200 z-10">
            尺寸<span class="text-sm text-yellow-900">[宽度：w-{width} | w-px w-auto w-1/2 w-screen&lt;vw&gt; w-full&lt;%&gt; w-min w-max；高度：h-{width} | h-px h-auto h-1/2 h-screen&lt;vw&gt; h-full&lt;%&gt;]</span>
        </p>
        </template>
        <template #content>
            <figure class="mt-12">
                <article class="m-2 p-3">
                    <section>
                        <div v-for="item in 7" :key="item" :class="`w-${item / 2} h-1 bg-blue-300 mt-1.5 relative`"><span class="-top-1.5 -right-12 inline-block w-10 absolute text-xs">{{`w-${item / 2}`}}</span></div>
                        <div v-for="item in 9" :key="item+3" :class="`w-${item + 3} h-1 bg-blue-300 mt-1.5 relative`"><span class="-top-2 -right-12 inline-block w-10 absolute text-xs">{{`w-${item + 3}`}}</span></div>
                        <div class="w-14 h-1 bg-blue-300 mt-1.5 relative"><span class="-top-2 -right-12 inline-block w-10 absolute text-xs">w-14</span></div>
                        <div class="w-16 h-1 bg-blue-300 mt-1.5 relative"><span class="-top-2 -right-12 inline-block w-10 absolute text-xs">w-16</span></div>
                        <div class="w-20 h-1 bg-blue-300 mt-1.5 relative"><span class="-top-2 -right-12 inline-block w-10 absolute text-xs">w-20</span></div>
                        <div class="w-24 h-1 bg-blue-300 mt-1.5 relative"><span class="-top-2 -right-12 inline-block w-10 absolute text-xs">w-24</span></div>
                        <div class="w-28 h-1 bg-blue-300 mt-1.5 relative"><span class="-top-2 -right-12 inline-block w-10 absolute text-xs">w-28</span></div>
                        <div class="w-32 h-1 bg-blue-300 mt-1.5 relative"><span class="-top-2 -right-12 inline-block w-10 absolute text-xs">w-32</span></div>
                        <div class="w-36 h-1 bg-blue-300 mt-1.5 relative"><span class="-top-2 -right-12 inline-block w-10 absolute text-xs">w-36</span></div>
                        <div class="w-40 h-1 bg-blue-300 mt-1.5 relative"><span class="-top-2 -right-12 inline-block w-10 absolute text-xs">w-40</span></div>
                        <div class="w-44 h-1 bg-blue-300 mt-1.5 relative"><span class="-top-2 -right-12 inline-block w-10 absolute text-xs">w-44</span></div>
                        <div class="w-52 h-1 bg-blue-300 mt-1.5 relative"><span class="-top-2 -right-12 inline-block w-10 absolute text-xs">w-52</span></div>
                        <div class="w-56 h-1 bg-blue-300 mt-1.5 relative"><span class="-top-2 -right-12 inline-block w-10 absolute text-xs">w-56</span></div>
                        <div class="w-60 h-1 bg-blue-300 mt-1.5 relative"><span class="-top-2 -right-12 inline-block w-10 absolute text-xs">w-60</span></div>
                        <div class="w-64 h-1 bg-blue-300 mt-1.5 relative"><span class="-top-2 -right-12 inline-block w-10 absolute text-xs">w-64</span></div>
                        <div class="w-72 h-1 bg-blue-300 mt-1.5 relative"><span class="-top-2 -right-12 inline-block w-10 absolute text-xs">w-72</span></div>
                        <div class="w-80 h-1 bg-blue-300 mt-1.5 relative"><span class="-top-2 -right-12 inline-block w-10 absolute text-xs">w-80</span></div>
                        <div class="w-96 h-1 bg-blue-300 mt-1.5 relative"><span class="-top-2 -right-12 inline-block w-10 absolute text-xs">w-96</span></div>
                        <div class="w-auto h-1 bg-blue-300 mt-1.5 relative"><span class="-top-2 -right-14 inline-block w-12 absolute text-xs">w-auto</span></div>
                        <div class="w-px h-1 bg-blue-300 mt-1.5 relative"><span class="-top-2 -right-12 inline-block w-10 absolute text-xs">w-px</span></div>
                        <div class="w-1/2 h-1 bg-blue-300 mt-1.5 relative"><span class="-top-2 -right-12 inline-block w-10 absolute text-xs">w-1/2</span></div>
                        <!-- 1/3 -->
                        <div class="w-1/3 h-1 bg-blue-300 mt-1.5 relative"><span class="-top-2 -right-12 inline-block w-10 absolute text-xs">w-1/3</span></div>
                        <div class="w-2/3 h-1 bg-blue-300 mt-1.5 relative"><span class="-top-2 -right-12 inline-block w-10 absolute text-xs">w-2/3</span></div>
                        <!-- 1/4 -->
                        <div class="w-1/4 h-1 bg-blue-300 mt-1.5 relative"><span class="-top-2 -right-12 inline-block w-10 absolute text-xs">w-1/4</span></div>
                        <div class="w-2/4 h-1 bg-blue-300 mt-1.5 relative"><span class="-top-2 -right-12 inline-block w-10 absolute text-xs">w-2/4</span></div>
                        <div class="w-3/4 h-1 bg-blue-300 mt-1.5 relative"><span class="-top-2 -right-12 inline-block w-10 absolute text-xs">w-3/4</span></div>
                        <!-- 1/5 -->
                        <div class="w-1/5 h-1 bg-blue-300 mt-1.5 relative"><span class="-top-2 -right-12 inline-block w-10 absolute text-xs">w-1/5</span></div>
                        <div class="w-2/5 h-1 bg-blue-300 mt-1.5 relative"><span class="-top-2 -right-12 inline-block w-10 absolute text-xs">w-2/5</span></div>
                        <div class="w-3/5 h-1 bg-blue-300 mt-1.5 relative"><span class="-top-2 -right-12 inline-block w-10 absolute text-xs">w-3/5</span></div>
                        <div class="w-4/5 h-1 bg-blue-300 mt-1.5 relative"><span class="-top-2 -right-12 inline-block w-10 absolute text-xs">w-4/5</span></div>
                        <!-- 1/6 -->
                        <div class="w-1/6 h-1 bg-blue-300 mt-1.5 relative"><span class="-top-2 -right-12 inline-block w-10 absolute text-xs">w-1/6</span></div>
                        <div class="w-2/6 h-1 bg-blue-300 mt-1.5 relative"><span class="-top-2 -right-12 inline-block w-10 absolute text-xs">w-2/6</span></div>
                        <div class="w-3/6 h-1 bg-blue-300 mt-1.5 relative"><span class="-top-2 -right-12 inline-block w-10 absolute text-xs">w-3/6</span></div>
                        <div class="w-4/6 h-1 bg-blue-300 mt-1.5 relative"><span class="-top-2 -right-12 inline-block w-10 absolute text-xs">w-4/6</span></div>
                        <div class="w-5/6 h-1 bg-blue-300 mt-1.5 relative"><span class="-top-2 -right-12 inline-block w-10 absolute text-xs">w-5/6</span></div>
                        <!-- 1/12 -->
                        <div class="w-1/12 h-1 bg-blue-300 mt-1.5 relative"><span class="-top-2 -right-14 inline-block w-12 absolute text-xs">w-1/12</span></div>
                        <div class="w-2/12 h-1 bg-blue-300 mt-1.5 relative"><span class="-top-2 -right-14 inline-block w-12 absolute text-xs">w-2/12</span></div>
                        <div class="w-3/12 h-1 bg-blue-300 mt-1.5 relative"><span class="-top-2 -right-14 inline-block w-12 absolute text-xs">w-3/12</span></div>
                        <div class="w-4/12 h-1 bg-blue-300 mt-1.5 relative"><span class="-top-2 -right-14 inline-block w-12 absolute text-xs">w-4/12</span></div>
                        <div class="w-5/12 h-1 bg-blue-300 mt-1.5 relative"><span class="-top-2 -right-14 inline-block w-12 absolute text-xs">w-5/12</span></div>
                        <div class="w-6/12 h-1 bg-blue-300 mt-1.5 relative"><span class="-top-2 -right-14 inline-block w-12 absolute text-xs">w-6/12</span></div>
                        <div class="w-7/12 h-1 bg-blue-300 mt-1.5 relative"><span class="-top-2 -right-14 inline-block w-12 absolute text-xs">w-7/12</span></div>
                        <div class="w-8/12 h-1 bg-blue-300 mt-1.5 relative"><span class="-top-2 -right-14 inline-block w-12 absolute text-xs">w-8/12</span></div>
                        <div class="w-9/12 h-1 bg-blue-300 mt-1.5 relative"><span class="-top-2 -right-14 inline-block w-12 absolute text-xs">w-9/12</span></div>
                        <div class="w-10/12 h-1 bg-blue-300 mt-1.5 relative"><span class="-top-2 -right-14 inline-block w-12 absolute text-xs">w-10/12</span></div>
                        <div class="w-11/12 h-1 bg-blue-300 mt-1.5 relative"><span class="-top-2 -right-14 inline-block w-12 absolute text-xs">w-11/12</span></div>
                        <!-- ohter -->
                        <div class="w-full h-1 bg-blue-300 mt-1.5 relative"><span class="-top-2 -right-12 inline-block w-10 absolute text-xs">w-full</span></div>
                        <div class="w-screen h-1 bg-blue-300 mt-1.5 relative"><span class="-top-2 -right-16 inline-block w-14 absolute text-xs">w-screen</span></div>
                    </section>
                    <code-area class="mt-1" codeTitle="宽度" :codeContent="code1"></code-area>
                </article>
                <article class="m-2 p-3">
                    <section>
                        <div class="min-w-full h-5 bg-pink-300 rounded-md text-sm mb-1">min-w-full</div>
                        <div class="max-w-xs h-5 bg-pink-300 rounded-md text-sm mb-1">max-w-xs</div>
                        <div class="max-w-sm h-5 bg-pink-300 rounded-md text-sm mb-1">max-w-sm</div>
                        <div class="max-w-md h-5 bg-pink-300 rounded-md text-sm mb-1">max-w-md</div>
                        <div class="max-w-lg h-5 bg-pink-300 rounded-md text-sm mb-1">max-w-lg</div>
                        <div class="max-w-xl h-5 bg-pink-300 rounded-md text-sm mb-1">max-w-xl</div>
                        <div class="max-w-screen-sm h-5 bg-pink-300 rounded-md text-sm mb-1">max-w-screen-sm</div>
                        <div class="max-w-screen-md h-5 bg-pink-300 rounded-md text-sm mb-1">max-w-screen-md</div>
                        <div class="max-w-screen-lg h-5 bg-pink-300 rounded-md text-sm mb-1">max-w-screen-lg</div>
                        <div class="max-w-screen-xl h-5 bg-pink-300 rounded-md text-sm mb-1">max-w-screen-xl</div>
                    </section>
                    <code-area codeTitle="最小/最大宽度" :codeContent="code2"></code-area>
                </article>
                <article class="mx-1 p-3">
                    <section class="flex justify-around h-screen my-2">
                        <div v-for="item in 7" :key="item" :class="`h-${item / 2} w-1 bg-blue-300 mt-1.5 relative`"><span class="-top-4 -left-1 inline-block w-10 absolute text-xs">{{item / 2}}</span></div>
                        <div v-for="item in 9" :key="item+3" :class="`h-${item + 3} w-1 bg-blue-300 mt-1.5 relative`"><span class="-top-4 -left-0.5 inline-block w-10 absolute text-xs">{{item + 3}}</span></div>
                        <div class="h-14 w-1 bg-blue-300 mt-1.5 relative"><span class="-top-4 -left-2 inline-block w-10 absolute text-xs">14</span></div>
                        <div class="h-16 w-1 bg-blue-300 mt-1.5 relative"><span class="-top-4 -left-2 inline-block w-10 absolute text-xs">16</span></div>
                        <div class="h-20 w-1 bg-blue-300 mt-1.5 relative"><span class="-top-4 -left-2 inline-block w-10 absolute text-xs">20</span></div>
                        <div class="h-24 w-1 bg-blue-300 mt-1.5 relative"><span class="-top-4 -left-2 inline-block w-10 absolute text-xs">24</span></div>
                        <div class="h-28 w-1 bg-blue-300 mt-1.5 relative"><span class="-top-4 -left-2 inline-block w-10 absolute text-xs">28</span></div>
                        <div class="h-32 w-1 bg-blue-300 mt-1.5 relative"><span class="-top-4 -left-2 inline-block w-10 absolute text-xs">32</span></div>
                        <div class="h-36 w-1 bg-blue-300 mt-1.5 relative"><span class="-top-4 -left-2 inline-block w-10 absolute text-xs">36</span></div>
                        <div class="h-40 w-1 bg-blue-300 mt-1.5 relative"><span class="-top-4 -left-2 inline-block w-10 absolute text-xs">40</span></div>
                        <div class="h-44 w-1 bg-blue-300 mt-1.5 relative"><span class="-top-4 -left-2 inline-block w-10 absolute text-xs">44</span></div>
                        <div class="h-52 w-1 bg-blue-300 mt-1.5 relative"><span class="-top-4 -left-2 inline-block w-10 absolute text-xs">52</span></div>
                        <div class="h-56 w-1 bg-blue-300 mt-1.5 relative"><span class="-top-4 -left-2 inline-block w-10 absolute text-xs">56</span></div>
                        <div class="h-64 w-1 bg-blue-300 mt-1.5 relative"><span class="-top-4 -left-2 inline-block w-10 absolute text-xs">64</span></div>
                        <div class="h-72 w-1 bg-blue-300 mt-1.5 relative"><span class="-top-4 -left-2 inline-block w-10 absolute text-xs">72</span></div>
                        <div class="h-80 w-1 bg-blue-300 mt-1.5 relative"><span class="-top-4 -left-2 inline-block w-10 absolute text-xs">80</span></div>
                        <div class="h-96 w-1 bg-blue-300 mt-1.5 relative"><span class="-top-4 -left-2 inline-block w-10 absolute text-xs">96</span></div>
                        <div class="h-1/2 w-1 bg-blue-300 mt-1.5 relative"><span class="-top-4 -left-2 inline-block w-10 absolute text-xs">1/2</span></div>
                        <div class="h-1/3 w-1 bg-blue-300 mt-1.5 relative"><span class="-top-4 -left-2 inline-block w-10 absolute text-xs">1/3</span></div>
                        <div class="h-2/3 w-1 bg-blue-300 mt-1.5 relative"><span class="-top-4 -left-2 inline-block w-10 absolute text-xs">2/3</span></div>
                        <div class="h-1/4 w-1 bg-blue-300 mt-1.5 relative"><span class="-top-4 -left-2 inline-block w-10 absolute text-xs">1/4</span></div>
                        <div class="h-2/4 w-1 bg-blue-300 mt-1.5 relative"><span class="-top-4 -left-2 inline-block w-10 absolute text-xs">2/4</span></div>
                        <div class="h-3/4 w-1 bg-blue-300 mt-1.5 relative"><span class="-top-4 -left-2 inline-block w-10 absolute text-xs">3/4</span></div>
                        <div class="h-1/5 w-1 bg-blue-300 mt-1.5 relative"><span class="-top-4 -left-2 inline-block w-10 absolute text-xs">1/5</span></div>
                        <div class="h-2/5 w-1 bg-blue-300 mt-1.5 relative"><span class="-top-4 -left-2 inline-block w-10 absolute text-xs">2/5</span></div>
                        <div class="h-3/5 w-1 bg-blue-300 mt-1.5 relative"><span class="-top-4 -left-2 inline-block w-10 absolute text-xs">3/5</span></div>
                        <div class="h-4/5 w-1 bg-blue-300 mt-1.5 relative"><span class="-top-4 -left-2 inline-block w-10 absolute text-xs">4/5</span></div>
                        <div class="h-1/6 w-1 bg-blue-300 mt-1.5 relative"><span class="-top-4 -left-2 inline-block w-10 absolute text-xs">1/6</span></div>
                        <div class="h-2/6 w-1 bg-blue-300 mt-1.5 relative"><span class="-top-4 -left-2 inline-block w-10 absolute text-xs">2/6</span></div>
                        <div class="h-3/6 w-1 bg-blue-300 mt-1.5 relative"><span class="-top-4 -left-2 inline-block w-10 absolute text-xs">3/6</span></div>
                        <div class="h-4/6 w-1 bg-blue-300 mt-1.5 relative"><span class="-top-4 -left-2 inline-block w-10 absolute text-xs">4/6</span></div>
                        <div class="h-5/6 w-1 bg-blue-300 mt-1.5 relative"><span class="-top-4 -left-2 inline-block w-10 absolute text-xs">5/6</span></div>
                        <div class="h-full w-1 bg-blue-300 mt-1.5 relative"><span class="-top-4 -left-2 inline-block w-10 absolute text-xs">full</span></div>
                        <div class="h-screen w-1 bg-blue-300 mt-1.5 relative"><span class="-top-4 -left-2 inline-block w-10 absolute text-xs">screen</span></div>
                    </section>
                    <code-area class="mt-1" codeTitle="高度" :codeContent="code3"></code-area>
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
    },
    setup() {
        const code1 = [
            'w-{width} | 0.5 1 1.5 2 2.5 3 3.5 4 5 6 7 8 9 10 11 12 14 16 20 24 28 32 36 40 44 48 52 56 60 64 72 80 96',
            'w-px w-1/2 w-1/3 w-2/3 w-1/4 w-2/4 w-3/4 w-1/5 w-2/5 w-3/5 w-4/5 w-1/6 w-2/6 w-3/6 w-4/6 w-5/6 w-1/12 w-2/12 w-3/12 w-4/12 w-5/12 w-6/12 w-7/12 w-8/12 w-9/12 w-10/12 w-11/12',
            'w-full w-screen w-min w-max'
        ]
        const code2 = [
            '最小宽度：','min-w-0','min-w-full','min-w-min','min-w-max',
            '最大宽度：','max-w-0','max-w-none','max-w-xs 20rem','max-w-sm 24rem','max-w-md 28rem','max-w-lg 32rem','max-w-xl 36rem','max-w-2xl 42rem','max-w-3xl 48rem','max-w-4xl 56rem','max-w-5xl 64rem','max-w-6xl 72rem','max-w-7xl 80rem','max-w-full 100%',
            'max-w-screen-sm 640px','max-w-screen-md 768px','max-w-screen-lg 1024px','max-w-screen-xl 1280px','max-w-screen-2xl 1536px'
        ]
        const code3 = [
            'h-{height} | 0.5 1 1.5 2 2.5 3 3.5 4 5 6 7 8 9 10 11 12 14 16 20 24 28 32 36 40 44 48 52 56 60 64 72 80 96',
            'h-px h-1/2 h-1/3 h-2/3 h-1/4 h-2/4 h-3/4 h-1/5 h-2/5 h-3/5 h-4/5 h-1/6 h-2/6 h-3/6 h-4/6 h-5/6',
            'h-full h-screen'
        ]
        return {
            code1,
            code2,
            code3
        }
    }
})
</script>

<style scoped>

</style>