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
                <div v-scroll-reveal="{ delay: i*100, mobile: false, origin: 'top', easing: 'ease-in', distance: '40px' }" v-for="(app, i) in apps" :key="i" class="w-full rounded-lg duration-300 transition-all border border-blue-500 bg-gray-200 grid grid-cols-1 shadow-xl">
                    <div class="flex flex-wrap max:h-10 rounded-t-md md:rounded-t-lg">
                        <img :data-src="require(`~/static/${app.icon_url}?webp`)"
                            :data-loading="require(`~/static/${app.icon_url}?webp?lqip`)"
                            class="w-full h-full block rounded-t-md md:rounded-t-lg" :alt="app.title">
                    </div>
                    <div class="px-5 pt-6 pb-5 bg-gray-100 rounded-b-md md:rounded-b-lg">
                        <h2 class="text-xl font-bold text-blue-600">{{app.title}}</h2>
                        <p class="text-base text-gray-500 leading-tight mt-1">{{app.description | desc}}</p>
                        <div class="text-sm font-medium mt-4 flex flex-wrap justify-between items-center">
                            <nuxt-link :to="`${app.path}/`" class="py-1 font-normal text-lg duration-300 transition-colors text-blue-600 hover:text-gray-500 rounded">
                                Read More
                                <svg class="w-5 h-5 inline-block fill-current ml-1" viewBox="0 0 24 24"><path fill-rule="evenodd" d="M12.7 4.3a1 1 0 10-1.4 1.4l5.3 5.3H5a1 1 0 100 2h11.6l-5.3 5.3a1 1 0 001.4 1.4l7-7c.4-.4.4-1 0-1.4l-7-7z" clip-rule="evenodd"/></svg>
                            </nuxt-link>
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
            return val.split(" ")[0].toUpperCase() + " " + str_arrs.join(" ").toLowerCase();
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
</style>