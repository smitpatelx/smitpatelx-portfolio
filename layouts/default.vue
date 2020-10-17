<template>
  <div>
    <!-- <client-only>
      <fade-transition>
        <loading-amination v-if="loading"/>
      </fade-transition>
    </client-only> -->
    <!-- <div :class="loading ? 'hidden' : 'visible'" v-if="!loading"> -->
    <div class="filter-1">
      <div class="absolute bg-cover bg-center top-0 z-0">
        <!-- <picture class="w-full z-0">
            <source :srcSet="require(`~/static/cubes-1.jpg?webp`)" type="image/webp" />
            <source :srcSet="require(`~/static/cubes-1.jpg`)" type="image/png" />
            <img :data-src="require(`~/static/cubes-1.jpg?webp`)" :data-loading="require(`~/static/cubes-1.jpg?lqip`)"/>
        </picture> -->
      </div>
      <Header/>
      <fade-transition :duration="{enter: 900, leave: 600}">
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
// import LoadingAmination from '@/components/LoadingAmination.vue';

export default {
  components: {
    FadeTransition,
    Header,
    SideBars,
    // LoadingAmination,
    Footer
  },
  data(){
    return{
      // loading: true
    }
  },
  created(){
    // setTimeout(()=>{
    //   this.loading = false;
    // }, 3000);
  }
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

  .filter-1{
    filter: brightness(100%);
    opacity: 1;
    // background: linear-gradient(180deg, rgba(255, 255, 255, 0.527) 0%, rgba(247,250,252,1) 100%), url('/cubes-1-min.png');
    background-position: top center;
    background-size: contain;
    background-repeat: no-repeat;
    background-blend-mode: darken;

    &::before{
      content: '';
      width: 100%;
      width: 80vh;
      display: block;
      position: absolute;
      top: 0;
      z-index: 10;
      background: rgb(2,0,36);
      background: linear-gradient(180deg, rgba(255, 255, 255, 0.376) 0%, rgba(247,250,252,1) 100%);
    }
  }
</style>