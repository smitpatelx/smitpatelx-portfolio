<template>
  <div class="w-full flex flex-wrap py-10 bg-gray-100 invert" v-lazy-container="{ selector: 'img' }">
    <div class="w-full px-0 md:px-6 lg:px-10 py-4">
      <nuxt-link to="/apps/" class="text-gray-800 font-medium text-xl w-full mb-6 no-underline hover:underline">
        <svg class="w-6 h-6 inline-block mr-2 fill-current text-blue-500" viewBox="0 0 24 24"><path fill-rule="evenodd" d="M15.7 5.3c.4.4.4 1 0 1.4L10.4 12l5.3 5.3a1 1 0 01-1.4 1.4l-6-6a1 1 0 010-1.4l6-6a1 1 0 011.4 0z" clip-rule="evenodd"/></svg>
        Apps
      </nuxt-link>
    </div>
    <div class="px-0 md:px-6 lg:px-10">
      <img :data-src="require(`~/static/${article.banner_url}?webp`)"
          :data-loading="require(`~/static/${article.banner_url}?lqip`)"
          class="min:h-10 min:w-10 w-full h-full self-center inline-block rounded-none md:rounded-lg shadow-lg" :alt="article.title">
    </div>
    <article class="px-5 md:px-8 lg:px-20 pt-5">
      <nuxt-content :document="article" class="markdown" />
        <div class="leading-none w-full py-5 mt-4 border-t border-gray-400 flex flex-wrap">
        <span v-for="(tag,i) in article.tags" :key="i" class="text-sm leading-none font-medium uppercase mr-3 my-1 bg-blue-300 text-blue-700 py-2 px-4 rounded-full">{{tag}}</span>
        </div>
    </article>
  </div>
</template>
<script>
  export default {
    layout: 'apps',
    async asyncData({ $content, params }) {
        const article = await $content('apps', params.slug).fetch()
        return { article }
    },
    data(){
        return{
            
        }
    },
    
  }
</script>
<style lang="scss">
article{
  @apply break-words w-full block;
}
</style>