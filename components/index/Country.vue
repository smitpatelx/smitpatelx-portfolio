<template>
    <div class="flex cursor-pointer bg-gray-800 rounded-l items-stretch justify-center border-r-2 border-primary" v-click-outside="hide_menu">
        <button class="flex items-center justify-center rounded-l py-1 px-4 focus:outline-none border border-transparent focus:border-teal-400" @click.prevent="open_menu()" @focus.prevent="open_menu">
            <img loading="lazy" class="h-4 w-6 inline-block rounded-sm" :src="`/flags/${current_country}.webp`" :alt="`${current_country}`" :title="`${current_country.toUpperCase()}`">
        </button>
        <slide-y-down-transition>
            <div v-if="menu_state" class="mt-12 absolute custom_scroll flex flex-col w-56 bg-gray-900 border-2 border-gray-700 rounded h-48 overflow-y-scroll scrolling-touch top-0 left-0">
                <div class="p-2 flex items-stretch justify-center w-full">
                    <input id="search_country" @keydown.prevent.enter="select_first" tabindex="1" type="text" v-model="search" class="bg-gray-800 text-gray-200 focus:outline-none focus:bg-gray-700 w-full shadow rounded py-1 px-2" placeholder="Seach">
                </div>
                <span @keydown.prevent.enter="select(ct.alpha2Code)" tabindex="2" v-for="(ct, i) in new_array" :key="i" class="py-1 px-2 text-sm w-full text-gray-300 hover:underline bg-gray-800 hover:bg-gray-700 focus:outline-none focus:bg-gray-700" @click="select(ct.alpha2Code)">
                    {{ct.name}}
                </span>
            </div>
        </slide-y-down-transition>
    </div>
</template>
<script>
import { SlideYDownTransition } from 'vue2-transitions'
import ClickOutside from 'vue-click-outside'
export default {
    components:{
        SlideYDownTransition
    },
    data(){
        return{
            current_country: 'ca',
            data:[],
            menu_state: false,
            search:'',
            new_array:[]
        }
    },
    methods:{
        async load_countries(){
            await this.$axios.$get('/json/name_alpha2_calling_codes.json')
            .then(res=>{
                this.data = res;
                this.new_array = res;
            })
            .catch(err=>{
                console.error(err)
            })
        },
        select(val){
            this.current_country = val.toLowerCase();
            this.search=''
            this.hide_menu();
        },
        open_menu(){
            this.menu_state = true;
            this.load_countries();
            setTimeout(()=>{
                document.getElementById("search_country").focus();
            },200);
        },
        hide_menu(){
            this.menu_state = false;
            this.$emit('countrySelected', this.current_country)
        },
        select_first(){
            this.select(this.new_array[0].alpha2Code)
        }
    },
    created() {
        // this.load_countries();
    },
    watch:{
        search(val){
            let pattern=new RegExp(this.search.toLowerCase(),"g")
            let search_arr = this.data.filter(function(arr,index){
                if(arr.name.toLowerCase().match(pattern) || arr.alpha2Code.toLowerCase().match(pattern)){
                    return true;
                }else{
                    return false;
                }   
            });
            this.new_array = search_arr;
        }
    },
    directives: {
        ClickOutside
    }
}
</script>
<style lang="scss">
    .custom_scroll{
        &::-webkit-scrollbar-track
        {
            -webkit-box-shadow: inset 0 0 6px rgba(0,0,0,0.3);
            border-radius: 0px;
            background-color: rgb(42, 42, 42);
        }

        &::-webkit-scrollbar
        {
            width: 12px;
            background-color: #F5F5F5;
            display: none;
        }

        &::-webkit-scrollbar-thumb
        {
            border-radius: 10px;
            -webkit-box-shadow: inset 0 0 6px rgba(0,0,0,.3);
            background-color: #31bbce;
        }
    }
</style>