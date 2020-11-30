<template>
    <div class="flex flex-wrap flex-row items-center justify-center content-start">
        <!-- <transition-group name="img-slide"> -->
        <div v-show="show==i" :key="i" v-for="(img,i) in images" class="shadow-lg rounded-lg my-4 w-full flex flex-wrap items-stretch place-items-stretch justify-center ring-1 ring-gray-300">
            <img :src="img.src" :alt="img.name" style="margin:0 !important;"
                class="w-auto self-center block rounded-t-lg">
            <p style="margin:0 !important;" class="w-full block text-center leading-none bg-gray-200 text-gray-700 text-sm md:text-base py-1.5 md:py-1 px-2 md:px-4 rounded-b-lg">{{img.name}}</p>
        </div>
        <!-- </transition-group> -->
        <div class="w-full flex flex-wrap justify-between">
            <button @click="pre" class="btn-next" type="button">
                <svg class="mr-1 -ml-1" viewBox="0 0 24 24"><path fill-rule="evenodd" d="M15.7071 5.29289c.3905.39053.3905 1.02369 0 1.41422L10.4142 12l5.2929 5.2929c.3905.3905.3905 1.0237 0 1.4142-.3905.3905-1.0237.3905-1.4142 0l-6.00001-6c-.39052-.3905-.39052-1.0237 0-1.4142l6.00001-6.00001c.3905-.39052 1.0237-.39052 1.4142 0z" clip-rule="evenodd"/></svg>
                Pre
            </button>
            <button @click="next" class="btn-next" type="button">
                Next
                <svg class="ml-1 -mr-1" viewBox="0 0 24 24"><path fill-rule="evenodd" d="M8.29289 5.29289c.39053-.39052 1.02369-.39052 1.41422 0l5.99999 6.00001c.3905.3905.3905 1.0237 0 1.4142l-5.99999 6c-.39053.3905-1.02369.3905-1.41422 0-.39052-.3905-.39052-1.0237 0-1.4142L13.5858 12 8.29289 6.70711c-.39052-.39053-.39052-1.02369 0-1.41422z" clip-rule="evenodd"/></svg>
            </button>
        </div>
    </div>
</template>
<script>
export default {
    data(){
        return{
            show: 0
        }
    },
    props:{
        images:{
            type: Array,
            default: [],
        }
    },
    methods: {
        pre(){
            if (this.show !== 0){
                this.show--;
            } else {
                this.show = this.images.length - 1;
            }
        },
        next(){
            if (this.show < this.images.length - 1){
                this.show++;
            } else {
                this.show = 0;
            }
        }
    },
}
</script>

<style lang="scss">
    .btn-next {
        @apply py-2 px-4 text-sm bg-blue-500 text-white rounded shadow-lg flex flex-wrap justify-items-stretch items-center transition-all duration-300 ease-out;

        & > svg {
            @apply h-4 w-4 inline-block fill-current;
        }

        &:focus {
            @apply outline-none ring ring-blue-400 bg-blue-200 text-blue-700 transition-all duration-300 ease-out;
        }

        &:hover {
            @apply  bg-blue-200 text-blue-700 transition-all duration-300 ease-out;
        }

        @media (min-width: 640px) { 
            @apply text-base;
         }
    }

    .img-slide-enter-active, .img-slide-leave-active {
        transition: all 0.5s;
    }
    .img-slide-enter, .img-slide-leave-to /* .list-leave-active below version 2.1.8 */ {
        opacity: 0;
        filter: blur(4px);
    }
</style>