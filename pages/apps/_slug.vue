<template>
  <div class="w-full flex flex-wrap py-10 bg-gray-100 invert" >
    <div class="w-full px-6 lg:px-10 -mt-10 pb-6 md:pb-16 flex flex-wrap justify-between items-center">
      <nuxt-link to="/apps/" class="text-gray-800 font-medium text-xl no-underline hover:underline flex flex-wrap items-center justify-center">
        <svg class="w-6 h-6 inline-block mr-2 fill-current text-blue-500" viewBox="0 0 24 24"><path fill-rule="evenodd" d="M15.7 5.3c.4.4.4 1 0 1.4L10.4 12l5.3 5.3a1 1 0 01-1.4 1.4l-6-6a1 1 0 010-1.4l6-6a1 1 0 011.4 0z" clip-rule="evenodd"/></svg>
        Return to Apps
      </nuxt-link>
      <a :href="article.download_url" target="_blank" class="btn-primary">
        Download
        <svg class="w-5 h-5 ml-3 inline-block fill-current" viewBox="0 0 24 24"><path fill-rule="evenodd" d="M3 14c.6 0 1 .4 1 1v4a1 1 0 001 1h14a1 1 0 001-1v-4a1 1 0 112 0v4a3 3 0 01-3 3H5a3 3 0 01-3-3v-4c0-.6.4-1 1-1z" clip-rule="evenodd"/><path fill-rule="evenodd" d="M6.3 9.3a1 1 0 011.4 0l4.3 4.3 4.3-4.3a1 1 0 111.4 1.4l-5 5a1 1 0 01-1.4 0l-5-5a1 1 0 010-1.4z" clip-rule="evenodd"/><path fill-rule="evenodd" d="M12 2c.6 0 1 .4 1 1v12a1 1 0 11-2 0V3c0-.6.4-1 1-1z" clip-rule="evenodd"/></svg>
      </a>
    </div>
    <div class="px-0 md:px-6 lg:px-10 w-full flex flex-wrap justify-center items-center" v-lazy-container="{ selector: 'img' }">
      <img v-if="article.banner_url" :data-src="require(`~/static/${article.banner_url}?webp`)"
          :data-loading="require(`~/static/${article.banner_url}?lqip`)"
          class="min:h-10 min:w-10 w-full h-24rem self-center inline-block rounded-none md:rounded-lg shadow-lg" :alt="article.title">
      <img v-if="!article.banner_url" :data-src="require(`~/static/noimage.png`)"
        :data-loading="require(`~/static/noimage.png?lqip`)" 
        class="min:h-10 min:w-10 w-full h-24rem self-center inline-block rounded-none md:rounded-lg shadow-lg" :alt="article.title">
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
  @apply break-words w-full block mt-4;
}

.btn-primary{
  @apply bg-transparent px-5 py-2 text-blue-600 rounded-md text-base font-mono font-semibold flex flex-wrap justify-center items-center text-center shadow-2xl transition-all duration-300;
  background: rgba(47, 140, 246, 0.25);
  transition: all 0.4s;

  &:hover{
    @apply shadow-xl transition-all duration-300 ease-in-out text-blue-700 border-none;
    background: rgba(47, 140, 246, 0.4);
  }

  &:focus{
    @apply transition-all duration-300 ease-in-out text-blue-700 shadow-outline outline-none;
    background: rgba(47, 140, 246, 0.4);
  }
}

.h-24rem{
  max-height: 24rem;
}

</style>