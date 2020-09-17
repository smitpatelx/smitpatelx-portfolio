<template>
    <div class="w-full flex flex-col md:flex-row flex-wrap items-stretch justify-center py-10" v-lazy-container="{ selector: 'img' }">
        <div class="w-full flex flex-wrap items-center justify-center" >
            <lottie :options="defaultOptions" :height="400" :width="400" v-on:animCreated="handleAnimation"/>
        </div>
        <div class="max-w-4xl px-6 lg:px-10 py-10 flex flex-wrap relative items-start justify-center">
            <div class="w-full h-16 flex flex-wrap items-center justify-start mb-10">
                <span class="font-bold text-2xl md:text-4xl text-blue-600" v-scroll-reveal="{ mobile: false, origin: 'top', easing: 'cubic-bezier(0.5, 0, 0, 1)', distance: '80px'}">Apps</span>
                <span class="flex-auto bg-gray-600 self-center ml-3" style="height:0.5px;"></span>
            </div>
            <div class="w-full grid grid-cols-1 md:grid-cols-2 gap-4">
                <div v-scroll-reveal="{ delay: i*100, mobile: false, origin: 'top', easing: 'ease-in', distance: '40px' }" v-for="(app, i) in apps" :key="i" class="w-full rounded-lg duration-300 transition-all bg-gray-200 grid grid-cols-1 shadow-xl">
                    <div class="flex flex-wrap max:h-10 rounded-t-md md:rounded-t-lg">
                        <img :data-src="require(`~/static/${app.icon_url}?webp`)"
                            :data-loading="require(`~/static/${app.icon_url}?webp?lqip`)"
                            class="w-full h-full block rounded-t-md md:rounded-t-lg card-img" :alt="app.title">
                    </div>
                    <div class="px-5 pt-6 pb-5 bg-white rounded-b-md md:rounded-b-lg">
                        <h2 class="text-xl font-bold text-blue-600">{{app.title}}</h2>
                        <p class="text-base text-gray-500 leading-tight mt-1">{{app.description | desc}}</p>
                        <div class="text-sm font-medium mt-4 flex flex-wrap justify-between items-center">
                            <div class="flex flex-wrap justify-center items-center">
                                <nuxt-link :to="`${app.path}/`" class="btn-secondary focus:shadow-outline">
                                    Read More
                                </nuxt-link>
                                <a :href="`${app.download_url}`" target="_blank" class="btn-primary ml-4">
                                    <svg class="w-6 h-6 inline-block fill-current" viewBox="0 0 24 24"><path fill-rule="evenodd" d="M3 14c.6 0 1 .4 1 1v4a1 1 0 001 1h14a1 1 0 001-1v-4a1 1 0 112 0v4a3 3 0 01-3 3H5a3 3 0 01-3-3v-4c0-.6.4-1 1-1z" clip-rule="evenodd"/><path fill-rule="evenodd" d="M6.3 9.3a1 1 0 011.4 0l4.3 4.3 4.3-4.3a1 1 0 111.4 1.4l-5 5a1 1 0 01-1.4 0l-5-5a1 1 0 010-1.4z" clip-rule="evenodd"/><path fill-rule="evenodd" d="M12 2c.6 0 1 .4 1 1v12a1 1 0 11-2 0V3c0-.6.4-1 1-1z" clip-rule="evenodd"/></svg>
                                </a>
                            </div>
                            <span class="font-normal text-gray-600">{{app.reseaseDate | date}}</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import Lottie from '@/components/apps/lottie.vue';
import animationData from '@/static/json/idea_anim.json';
export default {
    layout: 'apps',
    components:{
        'lottie': Lottie
    },
    data(){
        return{
            defaultOptions: {animationData, animationData }
        }
    },
    async asyncData({ $content, params }) {
        const apps = await $content('apps').fetch()
        return { apps }
    },
    filters:{
        desc: val=>{
            let str_arrs = val.split(" ");
            str_arrs.shift();
            let capitalize = (s) => {
                if (typeof s !== 'string') return ''
                return s.charAt(0).toUpperCase() + s.slice(1).toLowerCase()
            }
            return capitalize(val.split(" ")[0]) + " " + str_arrs.join(" ").toLowerCase();
        },
        date: val=>{
            const monthNames = ["Jan", "Feb", "Mar", "Apr", "May", "Jun",
                                "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"
                                ];
            let new_date = new Date(val);
            return new_date.getDate() + " " + monthNames[new_date.getMonth()] + " " + new_date.getFullYear();
        }
    },
    methods:{
        handleAnimation: function (anim) {
            this.anim = anim;
        },
    }
}
</script>
<style lang="scss" scoped>
.filter-img{
    filter: hue-rotate(20deg);
}

.min\:h-10{
    min-height: 2.5rem;
} 

.min\:w-10{
    min-width: 2.5rem;
}

.max\:h-10{
    max-height: 12rem;
    overflow: hidden;
}

.btn-secondary{
  @apply bg-transparent px-5 py-2 text-blue-600 rounded-md text-base font-mono font-semibold flex flex-wrap justify-center items-center text-center shadow-2xl transition-all duration-300;
  background: rgba(47, 140, 246, 0.25);
  transition: all 0.4s;

  &:hover{
    @apply shadow-xl transition-all duration-300 ease-in-out text-blue-700 border-none;
    background: rgba(47, 140, 246, 0.4);
  }

  &:focus{
    @apply transition-all duration-300 ease-in-out text-blue-700 shadow-outline outline-none;
    background: rgba(47, 140, 246, 0.4);
  }
}

.btn-primary{
  @apply bg-transparent text-base flex flex-wrap justify-center items-center text-center;
  color: rgba(47, 140, 246, 0.7);
  transition: all 0.4s;

  &:hover{
    @apply transition-all duration-300 ease-in-out outline-none;
    color: rgba(47, 140, 246, 0.9);
  }
}

.card-img{
    filter: blur(5px);
    transition: all 0.6 ease-in;

    &:hover{
        filter: blur(0px);
        transition: all 0.6 ease-in-out;
    }
}
</style>