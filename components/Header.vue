<template>
  <div class="px-12 select-none">
    <div v-click-outside="hideIt" class="w-full flex-wrap justify-between items-center flex relative">
      <nuxt-link v-scroll-reveal="{ delay: 0, mobile: false, origin: 'top', easing: 'ease-in', distance: '40px'}" to="/" class="focus:outline-none focus:shadow-outline py-3">
        <img src="/logo.png" class="h-20 w-20"/>
      </nuxt-link>
      <div class="hidden lg:flex flex-wrap justify-center items-center">
        <nuxt-link v-scroll-reveal="{ delay: i*150, mobile: false, origin: 'top', easing: 'ease-in', distance: '40px' }" v-for="(data, i) in nav_links" :key="i" :to="data.href" exact class="focus:underline focus:outline-none text-gray-400 text-sm hover:text-teal-400 px-4 py-2">
          <span class="text-teal-400 text-sm mr-2 font-mono">0{{i+1}}.</span>
          {{data.name}}
        </nuxt-link>
        <a href="#" v-scroll-reveal="{ delay: 600, mobile: false, origin: 'top', easing: 'ease-in', distance: '40px'}" class="focus:outline-none focus:shadow-outline resume_button flex flex-wrap justify-center items-center ml-6">
          <span>Resume</span>
          <svg class="w-4 h-4 fill-current text-teal-400 inline-block ml-3" viewBox="0 0 24 24"><path fill-rule="evenodd" clip-rule="evenodd" d="M3.8787 1.8787A3 3 0 016 1h8a1 1 0 01.7071.2929l6 6C20.8946 7.4804 21 7.7348 21 8v12a3 3 0 01-3 3H6a3 3 0 01-3-3V4a3 3 0 01.8787-2.1213zM6 3a1 1 0 00-1 1v16a1 1 0 001 1h12a1.0001 1.0001 0 001-1V8.4142L13.5858 3H6z" /><path fill-rule="evenodd" clip-rule="evenodd" d="M14 1c.5523 0 1 .4477 1 1v5h5c.5523 0 1 .4477 1 1s-.4477 1-1 1h-6c-.5523 0-1-.4477-1-1V2c0-.5523.4477-1 1-1zM7 13c0-.5523.4477-1 1-1h8c.5523 0 1 .4477 1 1s-.4477 1-1 1H8c-.5523 0-1-.4477-1-1zM7 17c0-.5523.4477-1 1-1h8c.5523 0 1 .4477 1 1s-.4477 1-1 1H8c-.5523 0-1-.4477-1-1zM7 9c0-.5523.4477-1 1-1h2c.5523 0 1 .4477 1 1s-.4477 1-1 1H8c-.5523 0-1-.4477-1-1z" /></svg>
        </a>
      </div>
      <button class="flex lg:hidden flex-wrap justify-center items-center focus:outline-none select-none" @click="menu=!menu">
        <svg class="w-8 h-8 fill-current text-teal-400 inline-block" fill="none" viewBox="0 0 24 24"><path fill-rule="evenodd" clip-rule="evenodd" d="M4 8c-.55 0-1-.45-1-1s.45-1 1-1h16c.55 0 1 .45 1 1s-.45 1-1 1H4zm0 5h16c.55 0 1-.45 1-1s-.45-1-1-1H4c-.55 0-1 .45-1 1s.45 1 1 1zm0 5h16c.55 0 1-.45 1-1s-.45-1-1-1H4c-.55 0-1 .45-1 1s.45 1 1 1z" /></svg>
      </button>
      <slide-x-right-transition>
      <div class="z-20 fixed w-64 p-10 bg-secondary h-screen top-0 right-0 border-l border-teal-600 lg:hidden h-screen" v-if="menu">
        <div class="flex flex-wrap flex-col w-full items-center h-full">
          <div class="flex flex-wrap flex-col">
            <button class="pb-3 flex flex-wrap justify-end items-center focus:outline-none select-none" @click="menu=!menu">
              <svg class="w-8 h-8 fill-current text-teal-400 inline-block select-none" viewBox="0 0 24 24"><path d="M18.3 5.71a.996.996 0 00-1.41 0L12 10.59 7.11 5.7a.9959.9959 0 00-1.41 0c-.39.39-.39 1.02 0 1.41L10.59 12 5.7 16.89c-.39.39-.39 1.02 0 1.41.39.39 1.02.39 1.41 0L12 13.41l4.89 4.89c.39.39 1.02.39 1.41 0 .39-.39.39-1.02 0-1.41L13.41 12l4.89-4.89c.38-.38.38-1.02 0-1.4z" /></svg>
            </button>
            <nuxt-link v-for="(data, i) in nav_links" :key="i" :to="data.href" exact class="select-none focus:underline focus:outline-none text-gray-400 text-sm hover:text-teal-400 px-4 py-2">
              <span class="text-teal-400 text-sm mr-2 font-mono">0{{i+1}}.</span>
              {{data.name}}
            </nuxt-link>
          </div>
          <a href="#" class="mb-10 focus:outline-none focus:shadow-outline resume_button flex flex-wrap justify-center items-center self-stretch mt-auto">
            <span>Resume</span>
            <svg class="w-4 h-4 fill-current text-teal-400 inline-block ml-3" viewBox="0 0 24 24"><path fill-rule="evenodd" clip-rule="evenodd" d="M3.8787 1.8787A3 3 0 016 1h8a1 1 0 01.7071.2929l6 6C20.8946 7.4804 21 7.7348 21 8v12a3 3 0 01-3 3H6a3 3 0 01-3-3V4a3 3 0 01.8787-2.1213zM6 3a1 1 0 00-1 1v16a1 1 0 001 1h12a1.0001 1.0001 0 001-1V8.4142L13.5858 3H6z" /><path fill-rule="evenodd" clip-rule="evenodd" d="M14 1c.5523 0 1 .4477 1 1v5h5c.5523 0 1 .4477 1 1s-.4477 1-1 1h-6c-.5523 0-1-.4477-1-1V2c0-.5523.4477-1 1-1zM7 13c0-.5523.4477-1 1-1h8c.5523 0 1 .4477 1 1s-.4477 1-1 1H8c-.5523 0-1-.4477-1-1zM7 17c0-.5523.4477-1 1-1h8c.5523 0 1 .4477 1 1s-.4477 1-1 1H8c-.5523 0-1-.4477-1-1zM7 9c0-.5523.4477-1 1-1h2c.5523 0 1 .4477 1 1s-.4477 1-1 1H8c-.5523 0-1-.4477-1-1z" /></svg>
          </a>
          </div>
        </div>
      </slide-x-right-transition>
    </div>
  </div>
</template>

<script>
import { SlideXRightTransition } from 'vue2-transitions'
import ClickOutside from 'vue-click-outside'

export default {
  components: {
    SlideXRightTransition,
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
<style lang="scss" scoped>
.resume_button{
  @apply bg-transparent px-5 py-2 text-teal-400 border border-teal-400 rounded-md text-base;
  transition: background 0.4s;

  &:hover{
    background: rgba(31, 248, 255, 0.151);
  }
}

.select-none{
  -webkit-tap-highlight-color: transparent;
}
</style>
