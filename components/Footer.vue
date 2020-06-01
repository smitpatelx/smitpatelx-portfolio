<template>
    <div class="w-full">
        <nuxt-link to="/" @click.native="scrollUp" class="w-10 h-10 bg-teal-500 hover:bg-teal-400 text-white hover:text-teal-800 trans-1 flex flex-wrap justify-center items-center fixed bottom-0 right-0 mr-10 lg:mr-24 mb-10 focus:outline-none focus:shadow-outline">
            <svg class="w-5 fill-current" viewBox="0 0 24 24"><path d="M11.2929 8.2929c.3905-.3905 1.0237-.3905 1.4142 0l6 6c.3905.3905.3905 1.0237 0 1.4142-.3905.3905-1.0237.3905-1.4142 0L12 10.4142l-5.2929 5.2929c-.3905.3905-1.0237.3905-1.4142 0-.3905-.3905-.3905-1.0237 0-1.4142l6-6z" /></svg>
        </nuxt-link>
    </div>
</template>
<script>
export default {
    data(){
        return{

        }
    },
    methods:{
        scrollUp(){
            window.scrollTo(0,0);
        }
    }
}
</script>
<style lang="scss" scoped>
    .trans-1{
        transition: all 0.5s;
    }
</style>