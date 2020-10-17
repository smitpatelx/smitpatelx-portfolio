<template>
    <div class="w-full">
        <slide-y-down-transition>
            <nuxt-link v-if="isVisible" to="./" @click.native="scrollUp" class="w-10 h-10 bg-blue-500 hover:bg-blue-400 text-white hover:text-blue-800 trans-1 flex flex-wrap justify-center items-center fixed bottom-0 right-0 mr-10 lg:mr-24 mb-10 focus:outline-none focus:shadow-outline z-20">
                <svg class="w-5 fill-current" viewBox="0 0 24 24"><path d="M11.2929 8.2929c.3905-.3905 1.0237-.3905 1.4142 0l6 6c.3905.3905.3905 1.0237 0 1.4142-.3905.3905-1.0237.3905-1.4142 0L12 10.4142l-5.2929 5.2929c-.3905.3905-1.0237.3905-1.4142 0-.3905-.3905-.3905-1.0237 0-1.4142l6-6z" /></svg>
            </nuxt-link>
        </slide-y-down-transition>
        <div class="w-full">
        </div>
    </div>
</template>
<script>
import { SlideYDownTransition } from 'vue2-transitions'

export default {
    data(){
        return{
            isVisible: false,
            lastScrollPosition: 0
        }
    },
    methods:{
        scrollUp(){
            // window.scrollTo(0,0);
            window.scrollTo(0,0,0, undefined, true);
        },
        handleScroll(e) {
            let scrollPos = window.scrollY
            // let winHeight = window.innerHeight
            // let docHeight = document.documentElement.scrollHeight

            if(scrollPos > 250) {
                this.isVisible = true;
            } else {
                this.isVisible = false;
            }
        },
    },
    mounted () {
        window.addEventListener('scroll', this.handleScroll);
    },
    components: {
        SlideYDownTransition
    },
}
</script>
<style lang="scss" scoped>
    .trans-1{
        transition: all 0.5s;
    }
</style>