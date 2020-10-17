<template>
  <div class="overflow-hidden">
    <div class="w-full flex flex-wrap justify-center items-center pt-16 pb-10 lg:py-24 container mx-auto px-10 lg:px-20 relative antialiased relative">
      <!-- <div class="w-2/3 flex flex-wrap"> -->
        <p v-scroll-reveal="{ delay: 800, mobile: false, origin: 'bottom', easing: 'cubic-bezier(0.5, 0, 0, 1)', distance: '80px'}" class="text-lg lg:text-xl font-mono text-blue-400 w-full z-10">Hello, I'm</p>
        <h1 v-scroll-reveal="{ delay: 1000, mobile: false, origin: 'bottom', easing: 'cubic-bezier(0.5, 0, 0, 1)', distance: '80px'}" class="text-8xl font-semibold text-gray-700 w-full z-10 leading-tight">Smit Patel.</h1>
        <h2 v-scroll-reveal="{ delay: 1200, mobile: false, origin: 'bottom', easing: 'cubic-bezier(0.5, 0, 0, 1)', distance: '80px'}" class="text-4xl font-semibold text-gray-600 w-full z-10 leading-tight">I build web apps</h2>
        <h3 v-scroll-reveal="{ delay: 1300, mobile: false, origin: 'bottom', easing: 'cubic-bezier(0.5, 0, 0, 1)', distance: '80px'}" class="text-lg lg:text-xl text-gray-600 w-full z-10 mt-16 mb-20">
          I'm a <span class="text-gray-600">Full Stack Developer</span> based in Winnipeg, MB <svg class="fill-current w-5 h-5 text-blue-500 mx-1 -mt-1 inline-block" viewBox="0 0 1182 1280"><path d="M563 52.2c-15 28.2-38.6 72.2-52.2 97.8-27.1 50.6-29 53.4-38.6 57-13.4 5-20 2.8-70.7-23.5-22.7-11.8-41.5-21.5-41.7-21.5-.2 0 1 7.8 2.8 17.2 5.1 26.7 42.8 227.7 49 260.3 5.8 31.3 6.5 40.3 3.8 49.5-3.2 10.7-12.2 16.2-22.8 14-11.5-2.4-11.3-2.2-84-83.8-37.3-41.9-68.1-76.1-68.3-75.9-.2.2-5.3 17.7-11.3 38.8-6.5 22.5-11.9 39.7-13.3 41.6-3.1 4.7-9.9 9-16.1 10.3-6.3 1.3-.7 2.3-99.4-18.5-40.9-8.6-74.5-15.5-74.7-15.3-.2.2 2.1 9.4 5.1 20.3C71.4 569.2 74.7 581.4 76 589.4c2 12.3-1.4 19.4-11.5 24.4-2.2 1.1-17.3 8.2-33.5 15.8-16.2 7.6-29.8 14-30.1 14.3-.4.3 63.2 52.6 141.3 116.1 78.1 63.5 143.8 117.4 146 119.8 2.2 2.4 5.2 6.9 6.6 10 2.3 4.8 2.7 7.1 2.7 14.2-.1 7.7-.8 10.8-7.9 34-12.2 39.7-17.5 57.4-17.3 57.6.1.1 63.9-7.2 141.7-16.2 77.8-9 143-16.2 144.8-15.9 1.8.4 4.7 1.9 6.5 3.4 2.8 2.6 3.2 3.5 3.5 9.7.2 3.8-.6 22.6-1.7 41.9-2.3 38.3-6.5 111.2-11.1 192-1.6 28.6-3.2 55.9-3.6 60.7l-.6 8.8h78.4l-.6-8.7c-.4-4.9-2-32.4-3.6-61.3-4.7-82.5-8.8-153.5-11.1-191.5-1.1-19.3-1.9-38.1-1.7-41.9.3-6.2.7-7.1 3.5-9.7 1.8-1.5 4.7-3 6.5-3.4 1.8-.3 67 6.9 144.8 15.9 77.8 9 141.6 16.3 141.7 16.2.2-.2-5.1-17.9-17.3-57.6-7.1-23.2-7.8-26.3-7.9-34 0-7.1.4-9.4 2.7-14.2 1.4-3.1 4.4-7.6 6.6-10 2.2-2.4 67.9-56.3 146-119.8s141.7-115.8 141.3-116.1c-.3-.3-13.9-6.7-30.1-14.3-16.2-7.6-31.3-14.7-33.5-15.8-10.1-5-13.5-12.1-11.5-24.4 1.3-8 4.6-20.2 45.4-168.9 3-10.9 5.3-20.1 5.1-20.3-.2-.2-33.8 6.7-74.7 15.3-98.7 20.8-93.1 19.8-99.4 18.5-6.2-1.3-13-5.6-16.1-10.3-1.4-1.9-6.8-19.1-13.3-41.6-6-21.1-11.1-38.6-11.3-38.8-.2-.2-31 34-68.3 75.9-72.7 81.6-72.5 81.4-84 83.8-7.1 1.5-12.7-.1-17.5-4.9-7.3-7.3-8.6-19.4-4.5-42.2 2-10.8 38.1-203.3 51.9-276.2 1.8-9.7 3.1-17.7 2.9-17.7-.2 0-19 9.7-41.7 21.5-45.1 23.4-51.9 26.1-63 25.3-7.2-.6-12.6-3.2-17.7-8.5-3.2-3.2-39.7-70.6-103.8-191.1-2.4-4.5-4.7-8.2-5-8.2-.3 0-12.9 23.1-28 51.2z"/></svg><br/> 
          Specialised in building and designing websites and applications.
        </h3>
        <div v-scroll-reveal="{ delay: 1300, mobile: false, origin: 'bottom', easing: 'cubic-bezier(0.5, 0, 0, 1)', distance: '80px'}" class="w-full z-10 flex flex-wrap justify-start items-center">
          <a href="mailto:smitpatel.dev@gmail.com" class="focus:outline-none focus:shadow-outline get_in_touch select-none tracking-wider">
            <span>Get in Touch</span>
            <svg class="fill-current w-8 h-6 inline-block ml-1" viewBox="0 0 24 24"><path fill-rule="evenodd" clip-rule="evenodd" d="M8.2929 5.2929c.3905-.3905 1.0237-.3905 1.4142 0l6 6c.3905.3905.3905 1.0237 0 1.4142l-6 6c-.3905.3905-1.0237.3905-1.4142 0-.3905-.3905-.3905-1.0237 0-1.4142L13.5858 12l-5.293-5.2929c-.3904-.3905-.3904-1.0237 0-1.4142z"/></svg>
          </a>
        </div>
        <div class="absolute w-full md:1-/3 lg:w-1/2 right-0 object-cover">
            <picture class="w-full object-cover z-0">
                <source :srcSet="require(`~/static/cubes-2-min.png?webp`)" type="image/webp" />
                <source :srcSet="require(`~/static/cubes-2-min.png`)" type="image/png" />
                <img :data-src="require(`~/static/cubes-2-min.png?webp`)" :data-loading="require(`~/static/cubes-2-min.png?lqip`)"/>
            </picture>
        </div>
    </div>
    <div class="flex flex-wrap flex-col justify-center items-center">
      <AboutMe/>
      <Experience/>
      <Work/>
      <Contact/>
    </div>
  </div>
</template>

<script>
import AboutMe from '@/components/index/AboutMe.vue';
import Experience from '@/components/index/Experience.vue';
import Work from '@/components/index/Work.vue';
import Contact from '@/components/index/Contact.vue';
import anime from 'animejs/lib/anime.es';

export default {
  scrollToTop: false,
  components:{
    AboutMe,
    Experience,
    Work,
    Contact
  },
  data(){
    return {
      name: 'smitpatelx'
    }
  },
  mounted(){
      anime({
          targets: '.circles circle',
          translateX: 200,
          translateY: 50,
          duration: 1200,
          delay: function(el, i) { return i * 250 },
          endDelay: function(el, i) { return i * 250 },
          easing: 'easeInOutBack',
          direction: 'alternate',
          loop: true
      });
    }
}
</script>

<style lang="scss" scoped>
.get_in_touch{
  @apply bg-transparent pl-8 pr-5 py-3 text-blue-500 rounded-md text-base font-mono font-semibold flex flex-wrap justify-center items-center text-center shadow-2xl;
  background: rgba(47, 140, 246, 0.25);
  transition: all 0.4s;
  backdrop-filter: blur(5px);

  &:hover{
    @apply shadow-xl transition-all duration-300 ease-in-out text-blue-700;
    background: rgba(47, 140, 246, 0.4);
  }
}

.text-8xl{
  font-size: 3.5rem;
}

@media (min-width: 1024px) {
  .text-8xl{
    font-size: 4rem;
  }
}

.get_in_touch_btn{
  background: rgba(47, 140, 246, 0.3);
  transition: background 0.4s;

  &:hover{
    background: rgba(47, 140, 246, 0.151);
  }
}

</style>
