<template>
  <div>
    <client-only>
      <fade-transition>
        <loading-amination v-if="loading"/>
      </fade-transition>
    </client-only>
    <div v-if="!loading">
      <Header/>
      <fade-transition>
        <nuxt />
      </fade-transition>
      <SideBars></SideBars>
      <Footer/>
    </div>
  </div>
</template>

<script>
import { FadeTransition } from 'vue2-transitions';
import Header from '@/components/Header.vue';
import Footer from '@/components/Footer.vue';
import SideBars from '@/components/SideBars.vue';
import LoadingAmination from '@/components/LoadingAmination.vue';

export default {
  components: {
    FadeTransition,
    Header,
    SideBars,
    LoadingAmination,
    Footer
  },
  data(){
    return{
      loading: true
    }
  },
  created(){
    setTimeout(()=>{
      this.loading = false;
    }, 3000);
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