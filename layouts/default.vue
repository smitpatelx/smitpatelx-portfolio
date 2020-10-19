<template>
  <div>
    <!-- <client-only>
      <fade-transition :duration="1200">
        <loading-amination v-if="loading"/>
      </fade-transition>
    </client-only> -->
    <!-- <div :class="loading ? 'hidden' : 'block'" v-if="!loading"> -->
    <div>
      <Header/>
      <SideBars></SideBars>
      <fade-transition :duration="{enter: 900, leave: 600}">
        <nuxt/>
      </fade-transition>
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
      @apply bg-primary;
      width: 100%;
      overflow-x: hidden;
      scroll-behavior: smooth;
    }

  *::selection {
    @apply text-white bg-blue-300;
  }

</style>