<template>
  <div class="pt-4 select-none z-30 relative">
    <div v-click-outside="hideIt" class="w-full flex-wrap justify-between items-center flex relative container-spx">
      <div class="w-full flex-wrap justify-between items-center flex">
        <nuxt-link v-scroll-reveal="{ delay: 0, mobile: true, origin: 'top', easing: 'ease-in', distance: '40px'}" to="/" class="focus:outline-none py-3 z-20">
          <img src="/smitpatelx/smit.svg" class=" h-8"/>
        </nuxt-link>
        <div class="hidden lg:flex flex-wrap justify-center items-center relative">
          <nuxt-link v-scroll-reveal="{ delay: i*100, mobile: true, origin: 'top', easing: 'ease-in', distance: '40px' }" v-for="(data, i) in nav_links" :key="i" :to="`/${data.href}`" exact class="focus:outline-none text-white text-base mx-4 my-2 hover:back-color focus:underline text-opacity-100 hover:text-opacity-50 z-20">
            {{data.name}}
          </nuxt-link>
          <a href="/resume-smit-patel.pdf" target="_blank" v-scroll-reveal="{ delay: 500, mobile: true, origin: 'top', easing: 'ease-in', distance: '40px'}" class="focus:outline-none resume_button flex flex-wrap justify-center items-center ml-6">
            <span>Resume</span>
            <svg class="w-5 h-5 inline-block ml-2 fill-current" viewBox="0 0 24 24"><path fill-rule="evenodd" d="M3 14c.55228 0 1 .4477 1 1v4c0 .2652.10536.5196.29289.7071C4.48043 19.8946 4.73478 20 5 20h14c.2652 0 .5196-.1054.7071-.2929S20 19.2652 20 19v-4c0-.5523.4477-1 1-1s1 .4477 1 1v4c0 .7957-.3161 1.5587-.8787 2.1213C20.5587 21.6839 19.7957 22 19 22H5c-.79565 0-1.55871-.3161-2.12132-.8787C2.31607 20.5587 2 19.7956 2 19v-4c0-.5523.44772-1 1-1z" clip-rule="evenodd"/><path fill-rule="evenodd" d="M6.29289 9.29289c.39053-.39052 1.02369-.39052 1.41422 0L12 13.5858l4.2929-4.29291c.3905-.39052 1.0237-.39052 1.4142 0 .3905.39053.3905 1.02371 0 1.41421l-5 5c-.3905.3905-1.0237.3905-1.4142 0l-5.00001-5c-.39052-.3905-.39052-1.02368 0-1.41421z" clip-rule="evenodd"/><path fill-rule="evenodd" d="M12 2c.5523 0 1 .44772 1 1v12c0 .5523-.4477 1-1 1s-1-.4477-1-1V3c0-.55228.4477-1 1-1z" clip-rule="evenodd"/></svg>
          </a>
        </div>
        <button class="flex lg:hidden flex-wrap justify-center items-center focus:outline-none select-none z-20" @click="menu=!menu">
          <svg class="w-8 h-8 fill-current text-white inline-block" viewBox="0 0 24 24"><path fill-rule="evenodd" clip-rule="evenodd" d="M9 6c0-.5523.4477-1 1-1h10c.5523 0 1 .4477 1 1s-.4477 1-1 1H10c-.5523 0-1-.4477-1-1zM3 12c0-.5523.4477-1 1-1h16c.5523 0 1 .4477 1 1s-.4477 1-1 1H4c-.5523 0-1-.4477-1-1zM13 18c0-.5523.4477-1 1-1h6c.5523 0 1 .4477 1 1s-.4477 1-1 1h-6c-.5523 0-1-.4477-1-1z"/></svg>
        </button>
      </div>
      <ZoomCenterTransition>
        <div :key="0" style="border-radius:1.6rem;" class="z-50 absolute pt-6 pb-8 px-2 bg-white top-0 left-1/2 transform -translate-x-1/2 lg:hidden" v-if="menu">
          <div class="flex flex-wrap flex-col w-full items-center h-full">
            <div class="flex flex-wrap flex-col w-full">
              <button class="pb-3 -mt-1 flex flex-wrap justify-end items-center focus:outline-none select-none" @click="menu=!menu">
                <svg class="w-8 h-8 fill-current text-gray-700 inline-block select-none" viewBox="0 0 24 24"><path d="M18.3 5.71a.996.996 0 00-1.41 0L12 10.59 7.11 5.7a.9959.9959 0 00-1.41 0c-.39.39-.39 1.02 0 1.41L10.59 12 5.7 16.89c-.39.39-.39 1.02 0 1.41.39.39 1.02.39 1.41 0L12 13.41l4.89 4.89c.39.39 1.02.39 1.41 0 .39-.39.39-1.02 0-1.41L13.41 12l4.89-4.89c.38-.38.38-1.02 0-1.4z" /></svg>
              </button>
              <nuxt-link @click.native="menu=false" v-for="(data, i) in nav_links" :key="i" :to="`/${data.href}`" exact class="select-none focus:outline-none text-4xl leading-none font-bold bg-transparent hover:text-opacity-75 text-gray-700 rounded-lg px-4 py-1 felx flex-wrap items-center justify-center">
                {{data.name}}
              </nuxt-link>
            </div>
            <div class="w-full mt-10 px-2 flex flex-wrap items-center justify-between">
              <a href="/resume-smit-patel.pdf" target="_blank" v-scroll-reveal="{ delay: 500, mobile: true, origin: 'top', easing: 'ease-in', distance: '40px'}" class="focus:outline-none resume_button flex flex-wrap justify-center items-center">
                <span>Resume</span>
                <svg class="w-5 h-5 inline-block ml-2 fill-current" viewBox="0 0 24 24"><path fill-rule="evenodd" d="M3 14c.55228 0 1 .4477 1 1v4c0 .2652.10536.5196.29289.7071C4.48043 19.8946 4.73478 20 5 20h14c.2652 0 .5196-.1054.7071-.2929S20 19.2652 20 19v-4c0-.5523.4477-1 1-1s1 .4477 1 1v4c0 .7957-.3161 1.5587-.8787 2.1213C20.5587 21.6839 19.7957 22 19 22H5c-.79565 0-1.55871-.3161-2.12132-.8787C2.31607 20.5587 2 19.7956 2 19v-4c0-.5523.44772-1 1-1z" clip-rule="evenodd"/><path fill-rule="evenodd" d="M6.29289 9.29289c.39053-.39052 1.02369-.39052 1.41422 0L12 13.5858l4.2929-4.29291c.3905-.39052 1.0237-.39052 1.4142 0 .3905.39053.3905 1.02371 0 1.41421l-5 5c-.3905.3905-1.0237.3905-1.4142 0l-5.00001-5c-.39052-.3905-.39052-1.02368 0-1.41421z" clip-rule="evenodd"/><path fill-rule="evenodd" d="M12 2c.5523 0 1 .44772 1 1v12c0 .5523-.4477 1-1 1s-1-.4477-1-1V3c0-.55228.4477-1 1-1z" clip-rule="evenodd"/></svg>
              </a>
              <div class="flex flex-wrap items-center justify-center">
                <a href="https://github.com/smitpatelx" target="_blank" class="text-gray-800 hover:text-gray-600 p-1 rounded-full transition-all">
                  <svg class=" fill-current w-5 h-5" viewBox="0 0 24 24"><path d="M16 23c-.6 0-1-.4-1-1v-3.9c.1-.8-.2-1.4-.7-1.9-.3-.3-.4-.7-.2-1 .1-.4.5-.6.8-.7 2.9-.3 5.6-1.3 5.6-6 0-1.1-.4-2.2-1.2-3.1-.3-.3-.3-.7-.2-1 .3-.8.3-1.6.1-2.4-.5.1-1.3.4-2.6 1.3-.2.2-.5.2-.8.1-2.1-.6-4.4-.6-6.5 0-.3.1-.6.1-.9-.1C7.2 2.4 6.3 2.1 5.8 2c-.2.8-.2 1.6.1 2.4.1.4.1.8-.2 1-.8.9-1.2 2-1.2 3.1 0 4.7 2.7 5.7 5.6 6 .4 0 .7.3.8.7.1.4 0 .8-.2 1-.5.5-.7 1.1-.7 1.8v3.9c0 .6-.4 1-1 1s-1-.4-1-1v-1.7c-3 .5-4.3-1.2-5.2-2.3-.4-.5-.7-.9-1.1-1-.5-.1-.9-.7-.7-1.2.1-.5.7-.9 1.2-.7 1 .3 1.6 1 2.2 1.7.8 1.1 1.5 1.9 3.6 1.5v-.1c0-.6.1-1.3.3-1.8-2.8-.6-5.8-2.4-5.8-7.7 0-1.5.5-2.9 1.4-4-.4-1.4-.3-2.7.3-4 .1-.3.3-.5.6-.6.4-.1 1.7-.3 4.4 1.4 2.2-.5 4.5-.5 6.6 0 2.6-1.7 4-1.5 4.4-1.4.3.1.5.3.6.6.5 1.3.6 2.6.3 3.9.9 1.1 1.4 2.5 1.4 4 0 5.7-3.4 7.2-5.8 7.8.2.6.3 1.3.3 1.9V22c0 .6-.4 1-1 1z" /><defs><clipPath id="clip0"><path d="M0 0h24v24H0V0z"/></clipPath></defs></svg>
                </a>
                <a href="https://www.linkedin.com/in/smitpatelx/" target="_blank" class="text-gray-800 hover:text-gray-600 p-1 rounded-full transition-all">
                  <svg class=" fill-current w-5 h-5" viewBox="0 0 24 24"><path fill-rule="evenodd" clip-rule="evenodd" d="M16 9a4.9997 4.9997 0 00-5 5v6h2v-6a3 3 0 016 0v6h2v-6a4.9997 4.9997 0 00-5-5zm0-2a6.9998 6.9998 0 00-7 7v7c0 .5523.4477 1 1 1h4c.5523 0 1-.4477 1-1v-7a1.0001 1.0001 0 012 0v7c0 .5523.4477 1 1 1h4c.5523 0 1-.4477 1-1v-7a6.9999 6.9999 0 00-7-7zM1 9c0-.5523.4477-1 1-1h4c.5523 0 1 .4477 1 1v12c0 .5523-.4477 1-1 1H2c-.5523 0-1-.4477-1-1V9zm2 1v10h2V10H3zM4 3c-.5523 0-1 .4477-1 1s.4477 1 1 1 1-.4477 1-1-.4477-1-1-1zM1 4c0-1.6568 1.3432-3 3-3 1.6569 0 3 1.3432 3 3 0 1.6569-1.3431 3-3 3-1.6568 0-3-1.3431-3-3z"/></svg>
                </a>
                <a href="https://www.instagram.com/smit.dev/" target="_blank" class="text-gray-800 hover:text-gray-600 p-1 rounded-full transition-all">
                  <svg class=" fill-current w-5 h-5" viewBox="0 0 24 24"><path fill-rule="evenodd" clip-rule="evenodd" d="M7 3C4.7909 3 3 4.7909 3 7v10c0 2.2091 1.7909 4 4 4h10c2.2091 0 4-1.7909 4-4V7c0-2.2091-1.7909-4-4-4H7zM1 7c0-3.3137 2.6863-6 6-6h10c3.3137 0 6 2.6863 6 6v10c0 3.3137-2.6863 6-6 6H7c-3.3137 0-6-2.6863-6-6V7z" /><path fill-rule="evenodd" clip-rule="evenodd" d="M12.4833 8.9892a2.9998 2.9998 0 00-3.402 3.4441 3.0002 3.0002 0 002.4854 2.4853 2.9996 2.9996 0 003.4441-3.4019 3 3 0 00-2.5275-2.5275zM9.7404 7.5186a5 5 0 114.6058 8.8764 5 5 0 01-4.6058-8.8764z" /></svg>
                </a>
                <a href="https://twitter.com/smitpatelx" target="_blank" class="text-gray-800 hover:text-gray-600 p-1 rounded-full transition-all">
                  <svg class=" fill-current w-5 h-5" viewBox="0 0 24 24"><path d="M8.3 21.9c-2.6 0-5.3-.7-7.7-2.1-.4-.2-.6-.7-.5-1.1.1-.4.5-.7.9-.7 1.7.1 3.4-.3 4.9-1-3.7-2.3-4.7-5.5-4.8-8-.1-2.9.9-5.3 1-5.4.1-.3.4-.6.8-.6s.7.1.9.4C5.5 5.8 8.1 7.3 11 7.5c0-1.6.7-3.1 1.9-4.2 2.1-1.8 5.2-1.8 7.3 0 .8-.3 1.6-.7 2.3-1.2.3-.2.8-.2 1.1 0 .3.2.5.7.4 1.1-.3 1.4-1 2.7-2 3.8v.5c0 5.5-2.4 10.1-6.7 12.5-2.1 1.3-4.5 1.9-7 1.9zM5 19.5c3.3.8 6.6.4 9.4-1.2 3.6-2.1 5.7-6.1 5.7-10.8 0-.2 0-.4-.1-.6-.1-.3 0-.7.3-.9.2-.2.4-.5.6-.7-.2.1-.5.2-.7.2-.4.1-.8 0-1-.3-1.3-1.4-3.5-1.6-4.9-.3-.9.6-1.3 1.6-1.3 2.6v1c0 .5-.4 1-1 1-3.3.1-6.4-1.2-8.6-3.5-.6 2.6-.8 7.5 5 10 .3.2.6.5.6.9s-.1.7-.4.9c-1.2.8-2.4 1.4-3.6 1.7z" /><defs><clipPath id="clip0"><path d="M0 0h24v24H0V0z" /></clipPath></defs></svg>
                </a>
              </div>
            </div>
          </div>
        </div>
      </ZoomCenterTransition>
      <transition name="fade-in">
        <div @click="hideIt" :key="1" class="z-30 fixed w-full py-12 px-4 bg-blur top-0 right-0 lg:hidden h-screen" v-if="menu">
        </div>
      </transition>
    </div>
  </div>
</template>

<script>
import { ZoomCenterTransition } from 'vue2-transitions'
import ClickOutside from 'vue-click-outside'

export default {
  components: {
    ZoomCenterTransition
  },
  data(){
    return{
      menu: false,
      nav_links: [
        {
          name: 'About',
          href: '#about'
        },
        {
          name: 'Experience',
          href: '#experience'
        },
        {
          name: 'Work',
          href: '#work'
        },
        {
          name: 'Contact',
          href: '#contact'
        },
        {
          name: 'Blog',
          href: 'blog/'
        },
        {
          name: 'Apps',
          href: 'apps/'
        }
      ]
    }
  },
  methods:{
    hideIt(){
      this.menu = false
    }
  },
  directives: {
    ClickOutside
  }
}
</script>
<style lang="scss">
.nuxt-link-exact-active {
    @apply text-opacity-60 underline;
}

.left-1\/2{
  left: 50%;
  width: 90%;
}

.bg-blur{
  background: rgba(0, 0, 0, 0.185);
  backdrop-filter: blur(5px);
  -webkit-backdrop-filter: blur(5px);
  filter: brightness(60%) blur(5px);
}

.resume_button{
  @apply bg-gray-900 z-20 px-5 py-2 leading-none text-white rounded-full text-base font-secondary transition-all duration-300 ease-out;

  @media (min-width: 740px) { 
    @apply bg-white bg-opacity-25 hover:bg-opacity-50;

    &:focus{
      @apply transition-all duration-300 ease-out;
      --bg-opacity: 0.40;
    }
  }

  &:hover{
    @apply transition-all duration-300 ease-out;
    --bg-opacity: 0.40;
  }

  &:focus{
    @apply transition-all duration-300 ease-out;
    --bg-opacity: 0.80;
  }
}

.select-none{
  -webkit-tap-highlight-color: transparent;
}

@font-face {
  font-family: "sohne-var";
  src: url('/sohne-var.woff2') format("woff2");
  font-weight: 1 1000;
}

// @font-face { font-family: "sohne-var"; src: url("https://b.stripecdn.com/mkt/assets/d5dd9f5d.woff2") format("woff2-variations"); font-weight: 1 1000; font-display: block; unicode-range: U+0-7E; }
// @font-face { font-family: "sohne-var"; src: url("https://b.stripecdn.com/mkt/assets/c6e75166.woff2") format("woff2-variations"); font-weight: 1 1000; font-display: block; unicode-range: U+7F-FFFF; }
</style>
