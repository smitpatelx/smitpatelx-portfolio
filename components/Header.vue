<template>
  <div class="px-12 select-none">
    <div class="w-full flex flex-wrap justify-between items-center">
      <nuxt-link to="/" class="focus:outline-none focus:shadow-outline p-3">
        <img src="/logo.png" class="w-24 h-24"/>
      </nuxt-link>
      <div class="flex flex-wrap justify-center items-center">
        <nuxt-link v-for="(data, i) in nav_links" :key="i" :to="data.href" exact class="focus:underline focus:outline-none text-gray-400 text-lg hover:text-teal-400 px-4 py-2">
          <span class="text-teal-400 text-sm mr-2 font-mono">0{{i+1}}.</span>
          {{data.name}}
        </nuxt-link>
        <a href="#" class="focus:outline-none focus:shadow-outline resume_button flex flex-wrap justify-center items-center">
          <span>Resume</span>
          <svg class="w-5 h-5 fill-current text-teal-400 inline-block ml-3" viewBox="0 0 24 24"><path fill-rule="evenodd" clip-rule="evenodd" d="M3.8787 1.8787A3 3 0 016 1h8a1 1 0 01.7071.2929l6 6C20.8946 7.4804 21 7.7348 21 8v12a3 3 0 01-3 3H6a3 3 0 01-3-3V4a3 3 0 01.8787-2.1213zM6 3a1 1 0 00-1 1v16a1 1 0 001 1h12a1.0001 1.0001 0 001-1V8.4142L13.5858 3H6z" /><path fill-rule="evenodd" clip-rule="evenodd" d="M14 1c.5523 0 1 .4477 1 1v5h5c.5523 0 1 .4477 1 1s-.4477 1-1 1h-6c-.5523 0-1-.4477-1-1V2c0-.5523.4477-1 1-1zM7 13c0-.5523.4477-1 1-1h8c.5523 0 1 .4477 1 1s-.4477 1-1 1H8c-.5523 0-1-.4477-1-1zM7 17c0-.5523.4477-1 1-1h8c.5523 0 1 .4477 1 1s-.4477 1-1 1H8c-.5523 0-1-.4477-1-1zM7 9c0-.5523.4477-1 1-1h2c.5523 0 1 .4477 1 1s-.4477 1-1 1H8c-.5523 0-1-.4477-1-1z" /></svg>
        </a>
      </div>
    </div>
    
  </div>
</template>

<script>
export default {
  data(){
    return{
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
  }
}
</script>
<style lang="scss" scoped>
.resume_button{
  @apply bg-transparent px-6 py-3 ml-10 text-teal-400 border border-teal-400 rounded-md text-lg;
  transition: background 0.4s;

  &:hover{
    background: rgba(31, 248, 255, 0.151);
  }
}
</style>
