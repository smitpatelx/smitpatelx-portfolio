<template>
  <div class="w-full">
    <slide-y-down-transition>
      <nuxt-link
        v-if="isVisible"
        to="./"
        @click.native="scrollUp"
        class="w-10 h-10 bg-gray-800 hover:bg-opacity-75 text-gray-200 hover:text-opacity-75 transition-all duration-300 ease-in-out rounded-full flex flex-wrap justify-center items-center fixed bottom-0 right-0 mr-10 lg:mr-24 mb-10 focus:outline-none focus:ring-2 ring-blue-500 z-20"
      >
        <svg class="w-5 fill-current" viewBox="0 0 24 24"><path d="M11.2929 8.2929c.3905-.3905 1.0237-.3905 1.4142 0l6 6c.3905.3905.3905 1.0237 0 1.4142-.3905.3905-1.0237.3905-1.4142 0L12 10.4142l-5.2929 5.2929c-.3905.3905-1.0237.3905-1.4142 0-.3905-.3905-.3905-1.0237 0-1.4142l6-6z" /></svg>
      </nuxt-link>
    </slide-y-down-transition>
    <div class="w-full flex flex-wrap items-center justify-start bg-gray-200 clip-path-1 relative">
      <div class="container mx-auto pt-32 pb-24">
        <div class="w-full flex flex-wrap items-start justify-center content-center space-x-2">
          <div class="flex-1 px-5 py-5 space-y-3">
            <img src="/smitpatelx/smit-dark.svg" class="h-8" />
            <div class="flex flex-wrap flex-col items-start justify-center space-y-2">
                <a class="text-base text-gray-800 mt-6 flex flex-wrap items-center justify-center">
                    <svg class="w-5 h-5 fill-current inline-block mr-2" viewBox="0 0 24 24"> <path fill-rule="evenodd" d="M12 2c-2.12173 0-4.15656.84285-5.65685 2.34315C4.84285 5.84344 4 7.87827 4 10c0 3.0981 2.01574 6.1042 4.22595 8.4373 1.08466 1.1449 2.17275 2.0822 2.99075 2.7335.3044.2425.5703.4444.7833.6018.213-.1574.4789-.3593.7833-.6018.818-.6513 1.9061-1.5886 2.9907-2.7335C17.9843 16.1042 20 13.0981 20 10c0-2.12173-.8429-4.15656-2.3431-5.65685C16.1566 2.84285 14.1217 2 12 2zm0 21c-.5547.8321-.555.8319-.5552.8317l-.0029-.0019-.0067-.0045-.0229-.0155c-.0195-.0132-.0472-.0322-.0827-.0568-.0711-.0492-.1731-.1209-.3018-.2138-.2573-.1858-.6214-.457-1.05698-.8038-.86949-.6924-2.03143-1.6926-3.19677-2.9227C4.48426 17.3958 2 13.9019 2 10c0-2.65216 1.05357-5.1957 2.92893-7.07107C6.8043 1.05357 9.34784 0 12 0c2.6522 0 5.1957 1.05357 7.0711 2.92893C20.9464 4.8043 22 7.34784 22 10c0 3.9019-2.4843 7.3958-4.774 9.8127-1.1654 1.2301-2.3273 2.2303-3.1968 2.9227-.4356.3468-.7997.618-1.057.8038-.1287.0929-.2307.1646-.3018.2138-.0355.0246-.0632.0436-.0827.0568l-.0229.0155-.0067.0045-.0021.0014c-.0003.0002-.0013.0009-.556-.8312zm0 0l.5547.8321c-.3359.2239-.774.2235-1.1099-.0004L12 23z" clip-rule="evenodd"/> <path fill-rule="evenodd" d="M12 8c-1.1046 0-2 .89543-2 2 0 1.1046.8954 2 2 2s2-.8954 2-2c0-1.10457-.8954-2-2-2zm-4 2c0-2.20914 1.79086-4 4-4 2.2091 0 4 1.79086 4 4 0 2.2091-1.7909 4-4 4-2.20914 0-4-1.7909-4-4z" clip-rule="evenodd" /> </svg>
                    Canada
                </a>
                <a class="text-base text-gray-800 mt-6 flex flex-wrap items-center justify-center">
                    <svg class="w-5 h-5 fill-current inline-block mr-2" viewBox="0 0 22 20"><path fill-rule="evenodd" d="M11.855 13.67c.14-.36.0499-.77-.23-1.05l-2.09009-2.06.03003-.03C11.3049 8.59003 12.5449 6.35999 13.2749 4h1.9401c.54 0 .99-.45001.99-.98999v-.02002c0-.53998-.45-.98999-.99-.98999H9.20496V1c0-.549988-.44996-1-1-1-.55005 0-1 .450012-1 1v1H1.19495c-.540043 0-.989994.45001-.989994.98999 0 .54999.449951.98999.989994.98999H11.375c-.67 1.94-1.7301 3.77002-3.17004 5.37-.81006-.88996-1.48999-1.85999-2.06006-2.88001C5.98499 6.17999 5.69495 6 5.36499 6c-.69006 0-1.13.75-.79004 1.34998C5.20496 8.47998 5.97498 9.56 6.875 10.56l-4.37 4.31c-.40002.39-.40002 1.03 0 1.42.3899.39 1.0199.39 1.41993 0L8.20496 12l2.02004 2.02c.51.51 1.38.32 1.63-.35zM16.705 8c-.6 0-1.1401.37-1.35.94l-3.6701 9.8c-.24.61.22 1.26.87 1.26.39 0 .74-.24.88-.61L14.325 17h4.75l.9 2.39c.1399.36.49.61.88.61.6499 0 1.11-.65.8799-1.26l-3.67-9.8c-.2199-.57-.76-.94-1.3599-.94zm0 2.67L15.085 15h3.24l-1.62-4.33z" clip-rule="evenodd"/></svg>
                    English
                </a>
            </div>
          </div>
          <div class="flex-1 px-5 py-5 space-y-2 flex flex-wrap flex-col items-center content-start justify-start">
            <span class="w-full text-left text-lg font-secondary mb-3 text-gray-800">Navigation</span>
            <nuxt-link to="/" class="nav-links-footer">Home</nuxt-link>
            <nuxt-link to="#services" class="nav-links-footer">Services</nuxt-link>
            <nuxt-link to="#about" class="nav-links-footer">About</nuxt-link>
            <nuxt-link to="#experience" class="nav-links-footer">Experience</nuxt-link>
            <nuxt-link to="#work" class="nav-links-footer">Work</nuxt-link>
            <nuxt-link to="#contact" class="nav-links-footer">Contact</nuxt-link>
          </div>
          <div class="flex-1 px-5 py-5 flex flex-wrap items-center justify-center">
            <subscription-form></subscription-form>
          </div>
          <div class="w-full text-center text-sm text-blue-dark absolute bottom-0 py-3 px-12">
            Copyright 2020 - Smit Patel
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { SlideYDownTransition } from "vue2-transitions";
import SubscriptionForm from "@/components/library/SubscriptionForm";

export default {
  data() {
    return {
      isVisible: false,
      lastScrollPosition: 0,
    };
  },
  methods: {
    scrollUp() {
      // window.scrollTo(0,0);
      window.scrollTo(0, 0, 0, undefined, true);
    },
    handleScroll(e) {
      let scrollPos = window.scrollY;
      // let winHeight = window.innerHeight
      // let docHeight = document.documentElement.scrollHeight

      if (scrollPos > 250) {
        this.isVisible = true;
      } else {
        this.isVisible = false;
      }
    },
  },
  mounted() {
    window.addEventListener("scroll", this.handleScroll);
  },
  components: {
    SlideYDownTransition,
    SubscriptionForm,
  },
};
</script>
<style lang="scss">
.clip-path-1 {
  clip-path: polygon(0 15%, 100% 0, 100% 100%, 0% 100%);

  @media (min-width: 768px) {
    clip-path: polygon(0 15%, 100% 0, 100% 100%, 0% 100%);
  }
}

.nav-links-footer {
    @apply w-full text-left text-base font-light text-gray-800 hover:text-gray-700 focus:underline focus:outline-none;
}
</style>
