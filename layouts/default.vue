<template>
  <div>
    <client-only>
      <fade-transition>
        <loading-amination v-if="loading"/>
      </fade-transition>
    </client-only>
    <Header></Header>
    <fade-transition>
      <nuxt />
    </fade-transition>
    <SideBars></SideBars>
  </div>
</template>

<script>
import { FadeTransition } from 'vue2-transitions';
import Header from '@/components/Header.vue';
import SideBars from '@/components/SideBars.vue';
import LoadingAmination from '@/components/LoadingAmination.vue';
// import SmoothScroll from 'smooth-scroll/dist/smooth-scroll.polyfills'

export default {
  components: {
    FadeTransition,
    Header,
    SideBars,
    LoadingAmination
  },
  data(){
    return{
      loading: true
    }
  },
  created(){
    setTimeout(()=>{
      this.loading = false;
    }, 3500);
    // var scroll = new SmoothScroll('a[href*="#"]');
  }
}
</script>

<style lang="scss">
  html, body{
    @apply text-gray-100;
    background-color: rgb(10, 25, 47);
    width: 100%;
    overflow-x: hidden;
    scroll-behavior: smooth;
  }

  *::selection {
    @apply text-white bg-teal-300;
  }
</style>