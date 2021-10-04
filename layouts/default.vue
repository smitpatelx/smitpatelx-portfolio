<template>
  <div>
    <!-- <client-only>
      <fade-transition :duration="1200">
        <loading-amination v-if="loading"/>
      </fade-transition>
    </client-only> -->
    <!-- <div :class="loading ? 'hidden' : 'block'" v-if="!loading"> -->
    <div class="relative">
      <Header />
      <!-- <SideBars></SideBars> -->
      <fade-transition :duration="{ enter: 900, leave: 600 }">
        <nuxt />
      </fade-transition>
      <Footer />
      <s-notify></s-notify>
    </div>
    <hero-gradient></hero-gradient>
  </div>
</template>

<script>
import HeroGradient from "@/components/library/hero-gradient.vue";
import { FadeTransition } from "vue2-transitions";
import Header from "@/components/Header.vue";
import Footer from "@/components/Footer.vue";
import SNotify from '@/components/library/SNotify.vue'
// import SideBars from '@/components/SideBars.vue';
// import LoadingAmination from '@/components/LoadingAmination.vue';

export default {
  components: {
    HeroGradient,
    FadeTransition,
    Header,
    // SideBars,
    // LoadingAmination,
    Footer,
    SNotify,
  },
  data() {
    return {
      loading: true,
    };
  },
};
</script>

<style lang="scss">

html,
body {
  @apply bg-primary;
  width: 100%;
  overflow-x: hidden;
  scroll-behavior: smooth;
}

*::selection {
  @apply text-white bg-blue-300;
}

/* Image lazy loading filter */
img[lazy='loading'] {
    filter: blur(15px);
}

/* Vue Transition - slide (up) */
.slide-leave-active,
.slide-enter-active {
  transition: 0.3s ease-in-out;
}
.slide-enter {
  transform: translate(0, 25%);
  opacity: 0;
}
.slide-leave-to {
  transform: translate(0, 25%);
  opacity: 0;
}

/* Vue Transition - fade-in */
.fade-in-leave-active,
.fade-in-enter-active {
  transition: 0.3s ease-in-out;
}
.fade-in-enter {
  opacity: 0;
}
.fade-in-leave-to {
  opacity: 0;
}

/* Zoom In Start */
.zoom-in-enter-active {
    animation: zoom-in .3s ease-in-out;
}
.zoom-in-leave-active {
    animation: zoom-in .3s reverse ease-in-out;
}

@keyframes zoom-in {
    0% {
        transform: scale(0) translateX(80%);
    }
    100% {
        transform: scale(1) translateX(0%);
    }
}
/* Zoom In End */

.container-spx{
  @apply px-6 md:px-10 lg:px-16 xl:px-24 mx-auto;
  max-width: 1800px;
}
</style>
