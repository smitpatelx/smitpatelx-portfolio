<template>
  <section class="overflow-hidden w-full flex flex-wrap items-stretch justify-center" >
    <div class="w-full flex flex-wrap justify-center items-start  pt-12 pb-20 lg:py-20 relative antialiased container-spx">
      <div class="w-full md:w-1/2 flex flex-wrap items-start justify-start content-start">
        <div class="w-full relative min-h-20">
          <h1 style="mix-blend-mode: color-burn;color: #3a3a3a; z-index: 2;" class="dbi_txt text-6xl md:text-8xl font-semibold w-full leading-none opacity-75 absolute">Developing<br/>Beautiful<br/>Interfaces</h1>
          <h1 style="color: #3a3a3a; opacity: 0.3; z-index: 2;" class="dbi_txt text-6xl md:text-8xl font-semibold w-full leading-none absolute">Developing<br/>Beautiful<br/>Interfaces</h1>
          <h1 style="color: #bdc6d2;" class="dbi_txt text-6xl md:text-8xl font-semibold w-full leading-none opacity-75 absolute">Developing<br/>Beautiful<br/>Interfaces</h1>
        </div>
        <h3 v-scroll-reveal="{ delay: 1400, mobile: true, origin: 'bottom', easing: 'cubic-bezier(0.5, 0, 0, 1)', distance: '80px'}" class="text-lg lg:text-xl text-gray-600 w-full z-10 my-6 md:my-6 font-light">
          I'm a Full Stack Software Engineer based in Winnipeg.<br/>
          Specialised in building and designing websites and applications.
        </h3>
        <div v-scroll-reveal="{ delay: 1500, mobile: true, origin: 'right', easing: 'cubic-bezier(0.5, 0, 0, 1)', distance: '180px'}" class="w-full z-10 flex flex-wrap justify-start items-center pt-4">
          <nuxt-link to="#contact" class="base-btn bg-gray-900 text-white">
            <span>Get in Touch</span>
            <svg class="fill-current h-3 inline-block ml-2" viewBox="0 0 16 16"><path fill-rule="evenodd" d="M8.70711.292893c-.39053-.390524-1.02369-.390524-1.41422 0-.39052.390524-.39052 1.023687 0 1.414217L12.5858 7H1c-.552285 0-1 .44772-1 1 0 .55229.447715 1 1 1h11.5858l-5.29291 5.2929c-.39052.3905-.39052 1.0237 0 1.4142.39053.3905 1.02369.3905 1.41422 0l6.99999-6.99999c.3905-.39053.3905-1.02369 0-1.41422L8.70711.292893z" clip-rule="evenodd"/></svg>
          </nuxt-link>
          <nuxt-link to="#services" class="base-btn bg-transparent text-gray-800 font-secondary ml-1 md:ml-4">
            <span class="leading-none">View services</span>
            <svg class="fill-current h-3 inline-block ml-2 transform rotate-90" viewBox="0 0 16 16"><path fill-rule="evenodd" d="M8.70711.292893c-.39053-.390524-1.02369-.390524-1.41422 0-.39052.390524-.39052 1.023687 0 1.414217L12.5858 7H1c-.552285 0-1 .44772-1 1 0 .55229.447715 1 1 1h11.5858l-5.29291 5.2929c-.39052.3905-.39052 1.0237 0 1.4142.39053.3905 1.02369.3905 1.41422 0l6.99999-6.99999c.3905-.39053.3905-1.02369 0-1.41422L8.70711.292893z" clip-rule="evenodd"/></svg>
          </nuxt-link>
        </div>
      </div>
      <div class="grid grid-cols-2 gap-x-4 p-0 md:p-6 w-full md:w-1/2 pt-24 md:pt-0" >
        <nuxt-picture
          placeholder
          src="/assets/bg-hero-3-min.svg"
          class="shadow-lg rounded-xl z-20"
          alt="Hero Mockup 1"
          width="100"
          height="210"
        />
        <nuxt-picture
          placeholder
          src="/assets/bg-hero-2-min.svg"
          class="shadow-lg rounded-xl z-20"
          alt="Hero Mockup 2"
          width="100"
          height="210"
        />
      </div>
    </div>
    <div class="flex flex-wrap flex-col justify-center items-center">
      <Services/>
      <AboutMe/>
      <Experience/>
      <Work/>
      <Apps :data="apps"/>
      <Blog :data="blog"/>
      <Contact/>
    </div>
  </section>
</template>

<script>

export default {
  scrollToTop: false,
  async asyncData({ $content, params }) {
    const apps = await $content('apps').fetch();
    const blog = await $content('blog').fetch();
    return { apps, blog }
  },
  components:{
    Services: () => import('@/components/index/Services.vue'),
    AboutMe: () => import('@/components/index/AboutMe.vue'),
    Experience: () => import('@/components/index/Experience.vue'),
    Work: () => import('@/components/index/Work.vue'),
    Contact: () => import('@/components/index/Contact.vue'),
    Apps: () => import('@/components/index/Apps.vue'),
    Blog: () => import('@/components/index/Blog.vue'),
    timeout: 3000
  },
  data(){
    return {
      name: 'smitpatelx'
    }
  },
}
</script>

<style lang="scss">
.hero-img-container{
  height:auto;
  transform: translateX(0%);

  @media (min-width: 740px) {
    height:100%;
    transform: translateX(30%);
  }
  @media (min-width: 1024px) {
    transform: translateX(12rem);
  }
}

.w-20vw{
  width: 15rem;

  @media (min-width: 740px) {
    width: 15rem;
  }
  @media (min-width: 1024px) {
    width: 18rem;
  }
}

.min-h-20{
  min-height:14rem;

  @media (min-width: 740px) {
    min-height:16rem;
  }
  @media (min-width: 1024px) {
    min-height:20rem;
  }
}
.base-btn{
  @apply cursor-pointer select-none py-3 px-5 rounded-full leading-none text-base flex flex-wrap justify-center items-center content-center text-center transition-all duration-300 ease-in-out;

  &:hover{
    @apply transition-all duration-300 ease-in-out bg-opacity-80 text-opacity-70;
  }

  &:focus{
    @apply outline-none ring ring-blue-400 transition-all duration-300 ease-out bg-opacity-80 text-opacity-70;
  }
}

.md\:text-8xl{
  @media (min-width: 768px){
    font-size: 5.5rem;
  }
}

@media (min-width: 1024px) {
  .text-8xl{
    font-size: 5.5rem;
  }
}

.cube-hero-section{
  filter: blur(4px);

  @media (min-width: 740px) {
      filter: blur(0px);
  }
}
</style>
