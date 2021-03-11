<template>
  <div class="w-full flex flex-wrap py-10 invert container mx-auto z-20" >
    <div class="w-full px-6 lg:px-20 pb-6 md:pb-16 flex flex-wrap justify-between items-center z-20">
      <nuxt-link to="/apps/" class="z-20 focus:outline-none text-white hover:text-opacity-50 flex flex-wrap justify-center items-center">
        <div class="py-2 px-1 mr-2 flex items-center justify-center leading-none rounded-full bg-white bg-opacity-50">
          <svg class="w-3 h-3 inline-block mr-2 fill-current transform translate-x-1" viewBox="0 0 8 14"><path fill-rule="evenodd" d="M7.70711.292893c.39052.390524.39052 1.023687 0 1.414217L2.41421 7l5.2929 5.2929c.39052.3905.39052 1.0237 0 1.4142-.39053.3905-1.02369.3905-1.41422 0L.292893 7.70711c-.390524-.39053-.390524-1.02369 0-1.41422L6.29289.292893c.39053-.390524 1.02369-.390524 1.41422 0z" clip-rule="evenodd"/></svg>
        </div>
        All Apps
      </nuxt-link>
    </div>
    <div class="flex w-full flex-wrap-reverse lg:flex-wrap justify-center items-start z-20">
      <article class="w-full lg:w-4/6 m-0 px-5 md:px-8 lg:px-20">
        <div class="px-0 md:px-4 lg:px-0 mb-8 py-0 w-full flex flex-wrap justify-start items-start" >
          <nuxt-picture
            v-if="article.banner_url"
            placeholder
            :src="`/${this.article.banner_url}`"
            class="min:h-10 min:w-10 w-full h-24rem self-center inline-block rounded-none md:rounded-lg shadow-lg"
            :title="article.title"
            :alt="article.title"
            width="1200"
            height="337"
          />
          <nuxt-picture
            v-if="!article.banner_url"
            placeholder
            src="noimage.png"
            class="min:h-10 min:w-10 w-full h-24rem self-center inline-block rounded-none md:rounded-lg shadow-lg"
            :title="article.title"
            :alt="article.title"
            width="1200"
            height="337"
          />
        </div>
        <nuxt-content :document="article" class="prose" />
      </article>
      <section class="w-full lg:w-2/6 flex flex-wrap items-start justify-center px-6 lg:pr-8">
        <div class="py-4 md:py-12 mb-16 px-6 md:px-10 bg-white shadow-xl antialiased rounded-lg w-full flex flex-wrap justify-start items-start">
          <div class="mb-2 block w-full">
            <span class="font-secondary text-blue-800">Author:</span>
            <span class="font-light text-gray-600 ml-1">{{article.author}}</span>
          </div>
          <div class="mb-2 block w-full">
            <span class="font-secondary text-blue-800">Description:</span>
            <span class="font-light text-gray-600 ml-1">{{article.description}}</span>
          </div>
          <div class="mb-2 block w-full">
            <span class="font-secondary text-blue-800">Tags:</span>
            <div class="pt-1 flex flex-wrap justify-start items-start">
              <span v-for="(tag,i) in article.tags" :key="i"
                class="bg-gradient-to-r from-blue-s to-indigo-500 leading-none rounded-full py-2 px-3 m-1 text-sm font-light shadow-lg text-gray-100">{{tag}}</span>
            </div>
          </div>
          <div class="mb-2 block w-full">
            <span class="font-secondary text-blue-800">Resease Date:</span>
            <span class="font-light text-gray-600 font-mono ml-1">{{article.reseaseDate}}</span>
          </div>
          <div class="mb-2 block w-full">
            <span class="font-secondary text-blue-800">Contributors:</span>
            <span class="font-light text-gray-600 ml-1">{{article.contributors}}</span>
          </div>
          <div class="mb-2 block w-full">
            <span class="font-secondary text-blue-800">Required WP Version:</span>
            <span class="font-light text-gray-600 ml-1">{{article.requires_at_least}}</span>
          </div>
          <div class="mb-2 block w-full">
            <span class="font-secondary text-blue-800">Tested up to:</span>
            <span class="font-light text-gray-600 ml-1">{{article.tested_up_to}}</span>
          </div>
          <div class="mb-2 block w-full">
            <span class="font-secondary text-blue-800">Stable Release:</span>
            <span class="font-light text-gray-600 ml-1">{{article.stable_tag}}</span>
          </div>
          <div class="mb-2 block w-full">
            <span class="font-secondary text-blue-800">License:</span>
            <span class="font-light text-gray-600 ml-1">{{article.license}}</span>
          </div>
          <div class="w-full flex justify-center items-center pt-8 pb-2">
            <a :href="article.download_url" target="_blank" class="base-btn bg-blue-600 text-gray-100">
              Download
              <svg class="w-5 h-5 ml-3 inline-block fill-current" viewBox="0 0 24 24"><path fill-rule="evenodd" d="M3 14c.6 0 1 .4 1 1v4a1 1 0 001 1h14a1 1 0 001-1v-4a1 1 0 112 0v4a3 3 0 01-3 3H5a3 3 0 01-3-3v-4c0-.6.4-1 1-1z" clip-rule="evenodd"/><path fill-rule="evenodd" d="M6.3 9.3a1 1 0 011.4 0l4.3 4.3 4.3-4.3a1 1 0 111.4 1.4l-5 5a1 1 0 01-1.4 0l-5-5a1 1 0 010-1.4z" clip-rule="evenodd"/><path fill-rule="evenodd" d="M12 2c.6 0 1 .4 1 1v12a1 1 0 11-2 0V3c0-.6.4-1 1-1z" clip-rule="evenodd"/></svg>
            </a>
          </div>
        </div>
      </section>
    </div>
  </div>
</template>
<script>
import ScrollingImages from '@/components/library/ScrollingImages.vue';
  export default {
    async asyncData({ $content, params }) {
      const article = await $content('apps', params.slug).fetch()
      return { article }
    },
    data(){
      return{

      }
    },
    filters:{
      truncate: (val)=>{
        let str_arrs = val.split(" ");
        str_arrs.length = 20;

        return str_arrs.join(" ");
      },
    },
    components:{
      ScrollingImages,
    },
    created() {
      if(process.client){
        window.scrollTo(0,0);
      }
    },
    computed:{
      article_image(){
        if (!this.article.banner_url) {
          return
        }
        return `~@/static/${this.article.banner_url}`;
      }
    }
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
    @apply transition-all duration-300 ease-in-out text-blue-700 ring-2 ring-blue-500 outline-none;
    background: rgba(47, 140, 246, 0.4);
  }
}

.h-24rem{
  max-height: 24rem;
}

.min-h-64{
  min-height: 24rem;
}

</style>
