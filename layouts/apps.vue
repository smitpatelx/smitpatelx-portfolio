<template>
  <div>
    <div>
      <Header/>
      <fade-transition :duration="{enter: 900, leave: 600}">
        <nuxt />
      </fade-transition>
      <Footer/>
    </div>
  </div>
</template>

<script>
import { FadeTransition } from 'vue2-transitions';
import Header from '@/components/Header.vue';
import Footer from '@/components/Footer.vue';

export default {
  components: {
    FadeTransition,
    Header,
    Footer
  },
  data(){
    return{
      // loading: true
    }
  },
}
</script>

<style lang="scss">
  html, body{
    background-color: rgb(247, 250, 252);
    width: 100%;
    overflow-x: hidden;
    scroll-behavior: smooth;
  }

  *::selection {
    @apply text-white bg-blue-300;
  }
</style>