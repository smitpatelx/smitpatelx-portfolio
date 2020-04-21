<template>
  <div>
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

export default {
  components: {
    FadeTransition,
    Header,
    SideBars
  },
}
</script>

<style lang="scss">
  html, body{
    @apply text-gray-100;
    background-color: rgb(10, 25, 47);
    width: 100%;
    overflow-x: hidden;
  }

  *::selection {
    @apply text-white bg-teal-300;
  }
</style>