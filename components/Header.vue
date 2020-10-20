<template>
  <div class="px-4 lg:px-12 select-none z-30">
    <div v-click-outside="hideIt" class="w-full flex-wrap justify-between items-center flex relative">
      <div class="w-full flex-wrap justify-between items-center flex">
        <nuxt-link v-scroll-reveal="{ delay: 0, mobile: false, origin: 'top', easing: 'ease-in', distance: '40px'}" to="/" class="focus:outline-none py-3">
          <img src="/smitpatelx/Logo_1.svg" class="h-24 w-24"/>
        </nuxt-link>
        <div class="hidden lg:flex flex-wrap justify-center items-center relative">
          <nuxt-link v-scroll-reveal="{ delay: i*100, mobile: false, origin: 'top', easing: 'ease-in', distance: '40px' }" v-for="(data, i) in nav_links" :key="i" :to="`/${data.href}`" exact class="focus:outline-none text-gray-600 text-base mx-4 my-2 hover:back-color">
            <!-- <span class="text-blue-500 text-sm mr-2 font-mono">0{{i+1}}.</span> -->
            {{data.name}}
          </nuxt-link>
          <a href="/resume-smit-patel.pdf" target="_blank" v-scroll-reveal="{ delay: 500, mobile: false, origin: 'top', easing: 'ease-in', distance: '40px'}" class="focus:outline-none focus:shadow-outline resume_button flex flex-wrap justify-center items-center ml-6">
            <span>Resume</span>
            <svg class="w-5 h-5 fill-current text-blue-500 inline-block ml-3" viewBox="0 0 24 24"><path fill-rule="evenodd" clip-rule="evenodd" d="M3.8787 1.8787A3 3 0 016 1h8a1 1 0 01.7071.2929l6 6C20.8946 7.4804 21 7.7348 21 8v12a3 3 0 01-3 3H6a3 3 0 01-3-3V4a3 3 0 01.8787-2.1213zM6 3a1 1 0 00-1 1v16a1 1 0 001 1h12a1.0001 1.0001 0 001-1V8.4142L13.5858 3H6z" /><path fill-rule="evenodd" clip-rule="evenodd" d="M14 1c.5523 0 1 .4477 1 1v5h5c.5523 0 1 .4477 1 1s-.4477 1-1 1h-6c-.5523 0-1-.4477-1-1V2c0-.5523.4477-1 1-1zM7 13c0-.5523.4477-1 1-1h8c.5523 0 1 .4477 1 1s-.4477 1-1 1H8c-.5523 0-1-.4477-1-1zM7 17c0-.5523.4477-1 1-1h8c.5523 0 1 .4477 1 1s-.4477 1-1 1H8c-.5523 0-1-.4477-1-1zM7 9c0-.5523.4477-1 1-1h2c.5523 0 1 .4477 1 1s-.4477 1-1 1H8c-.5523 0-1-.4477-1-1z" /></svg>
          </a>
        </div>
        <button class="flex lg:hidden flex-wrap justify-center items-center focus:outline-none select-none" @click="menu=!menu">
          <svg class="w-8 h-8 fill-current text-blue-500 inline-block" viewBox="0 0 24 24"><path fill-rule="evenodd" clip-rule="evenodd" d="M9 6c0-.5523.4477-1 1-1h10c.5523 0 1 .4477 1 1s-.4477 1-1 1H10c-.5523 0-1-.4477-1-1zM3 12c0-.5523.4477-1 1-1h16c.5523 0 1 .4477 1 1s-.4477 1-1 1H4c-.5523 0-1-.4477-1-1zM13 18c0-.5523.4477-1 1-1h6c.5523 0 1 .4477 1 1s-.4477 1-1 1h-6c-.5523 0-1-.4477-1-1z"/></svg>
        </button>
      </div>
      <slide-x-right-transition>
        <div :key="0" class="z-40 fixed w-64 py-12 px-4 bg-white top-0 right-0 lg:hidden h-screen" v-if="menu">
          <div class="flex flex-wrap flex-col w-full items-center h-full">
            <div class="flex flex-wrap flex-col w-full">
              <button class="pb-3 flex flex-wrap justify-end items-center focus:outline-none select-none" @click="menu=!menu">
                <svg class="w-8 h-8 fill-current text-blue-500 inline-block select-none" viewBox="0 0 24 24"><path d="M18.3 5.71a.996.996 0 00-1.41 0L12 10.59 7.11 5.7a.9959.9959 0 00-1.41 0c-.39.39-.39 1.02 0 1.41L10.59 12 5.7 16.89c-.39.39-.39 1.02 0 1.41.39.39 1.02.39 1.41 0L12 13.41l4.89 4.89c.39.39 1.02.39 1.41 0 .39-.39.39-1.02 0-1.41L13.41 12l4.89-4.89c.38-.38.38-1.02 0-1.4z" /></svg>
              </button>
              <nuxt-link v-for="(data, i) in nav_links" :key="i" :to="`/${data.href}`" exact class="select-none focus:underline focus:outline-none text-base font-medium bg-transparent hover:bg-blue-600 text-blue-700 hover:text-white rounded-lg px-4 py-2 felx flex-wrap items-center justify-center">
                {{data.name}}
              </nuxt-link>
            </div>
            <a href="/resume-smit-patel.pdf" target="_blank" class="mb-10 focus:outline-none focus:shadow-outline resume_button flex flex-wrap justify-center items-center self-stretch mt-auto mx-2">
              <span>Resume</span>
              <svg class="w-5 h-5 fill-current text-blue-500 inline-block ml-3" viewBox="0 0 24 24"><path fill-rule="evenodd" clip-rule="evenodd" d="M3.8787 1.8787A3 3 0 016 1h8a1 1 0 01.7071.2929l6 6C20.8946 7.4804 21 7.7348 21 8v12a3 3 0 01-3 3H6a3 3 0 01-3-3V4a3 3 0 01.8787-2.1213zM6 3a1 1 0 00-1 1v16a1 1 0 001 1h12a1.0001 1.0001 0 001-1V8.4142L13.5858 3H6z" /><path fill-rule="evenodd" clip-rule="evenodd" d="M14 1c.5523 0 1 .4477 1 1v5h5c.5523 0 1 .4477 1 1s-.4477 1-1 1h-6c-.5523 0-1-.4477-1-1V2c0-.5523.4477-1 1-1zM7 13c0-.5523.4477-1 1-1h8c.5523 0 1 .4477 1 1s-.4477 1-1 1H8c-.5523 0-1-.4477-1-1zM7 17c0-.5523.4477-1 1-1h8c.5523 0 1 .4477 1 1s-.4477 1-1 1H8c-.5523 0-1-.4477-1-1zM7 9c0-.5523.4477-1 1-1h2c.5523 0 1 .4477 1 1s-.4477 1-1 1H8c-.5523 0-1-.4477-1-1z" /></svg>
            </a>
          </div>
        </div>
      </slide-x-right-transition>
      <fade-transition>
        <div :key="1" class="z-30 fixed w-full py-12 px-4 bg-blur top-0 right-0 lg:hidden h-screen" v-if="menu">
        </div>
      </fade-transition>
    </div>
  </div>
</template>

<script>
import { SlideXRightTransition, FadeTransition } from 'vue2-transitions'
import ClickOutside from 'vue-click-outside'

export default {
  components: {
    SlideXRightTransition,
    FadeTransition
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
.hover\:back-color{
  z-index: 2;

  &::after{
    content: '';
    width: 0%;
    background: linear-gradient(90deg, rgba(49, 130, 206, 1) 0%, rgba(49, 130, 206, 1) 100%);
    height: 0.1rem;
    display: block;
    position: absolute;
    transition: all 0.3s ease-out;
    transform: translateY(-0.2rem);
    z-index: 0;
  }

  &:hover, &:focus{
    &::after{
      width: 100%;
      transition: all 0.2s ease-in;
    }
  }
}

.bg-blur{
  background: rgba(0, 0, 0, 0.185);
  backdrop-filter: blur(5px);
  -webkit-backdrop-filter:blur(5px);
  filter: brightness(60%);
}

.resume_button{
  @apply bg-transparent px-5 py-2 text-blue-500 border border-blue-400 rounded-md text-lg;
  transition: background 0.4s;

  &:hover{
    background: rgba(99, 179, 237, 0.151);
  }
}

.select-none{
  -webkit-tap-highlight-color: transparent;
}

@font-face {
  font-family: "sohne-var";
  src: url('/sohne-var.woff2') format("woff2"),;
  font-weight: 400, 500, 600;
}

</style>
