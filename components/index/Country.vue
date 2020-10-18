<template>
    <div v-click-outside="hide_menu" class="flex cursor-pointer bg-gray-300 rounded items-stretch justify-center" >
        <button tabindex="2" class="flex items-center justify-center rounded py-1 px-4 focus:outline-none" v-lazy-container="{ selector: 'img' }" @click.prevent="open_menu()" @keydown.enter="menu_state ? ()=>{} : open_menu()" @keydown.prevent.up="up_one" @keydown.prevent.down="down_one">
            <picture class="inline-block rounded-sm">
                <source :srcSet="require(`~/static/flags/${current_country}.webp`)" type="image/webp" />
                <source :srcSet="require(`~/static/flags/${current_country}.webp?jpeg`)" type="image/jpeg" />
                <img class="h-5 w-8 inline-block rounded-sm" :data-src="require(`~/static/flags/${current_country}.webp`)" :data-loading="require(`~/static/image-loading.gif`)" />
            </picture>
        </button>
        <slide-y-down-transition>
            <div @blur="hide_menu" v-if="menu_state" class="mt-12 absolute custom_scroll flex flex-col w-56 bg-gray-800 border-2 border-gray-600 rounded h-48 overflow-y-scroll scrolling-touch top-0 left-0">
                <div class="p-0 flex items-stretch justify-center w-full">
                    <input :autocomplete="random_alpha" id="search_country" @keydown.esc="search=''" @keydown.prevent.enter="select_first" tabindex="3" type="text" v-model="search" class="bg-gray-700 text-gray-200 focus:outline-none w-full shadow rounded-sm py-2 px-2" placeholder="Seach...">
                </div>
                <span tabindex="3" @keydown.prevent.enter="select(ct.alpha2Code, i)" v-for="(ct, i) in new_array" :key="i" class="py-1 px-2 text-sm w-full text-gray-300 hover:underline bg-gray-800 hover:bg-gray-700 focus:outline-none focus:text-gray-100 focus:bg-blue-500" @click="select(ct.alpha2Code, i)">
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
            current_index: 42,
            countryData:[],
            menu_state: false,
            search:'',
            new_array:[]
        }
    },
    methods:{
        load_countries(){
            this.$axios.$get('/json/name_alpha2_calling_codes.json')
            .then(res=>{
                this.countryData = res;
                this.new_array = res;
            })
            .catch(err=>{
                console.error(err)
            })
        },
        select(val, i){
            this.current_index=i;
            this.current_country = val.toLowerCase();
            this.search=''
            this.hide_menu();
        },
        open_menu(){
            this.menu_state = true;
            if (this.countryData.length == 0) { this.load_countries() }
            setTimeout(()=>{
                document.getElementById("search_country").focus();
            },200);
        },
        hide_menu(){
            this.menu_state = false;
            this.$emit('countrySelected', this.current_country)
        },
        select_first(){
            this.select(this.new_array[0].alpha2Code, 0)
        },
    },
    computed:{
        random_alpha(){
            let length=9;
            var result           = '';
            var characters       = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
            var charactersLength = characters.length;
            for ( var i = 0; i < length; i++ ) {
                result += characters.charAt(Math.floor(Math.random() * charactersLength));
            }
            return result;
        },
        image_url(){
            return `~/static/flags/${this.current_country}.webp?png`;
        }
    },
    watch:{
        search(val){
            let pattern=new RegExp(this.search.toLowerCase(),"g")
            let search_arr = this.countryData.filter(function(arr,index){
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
<style lang="scss" scoped>
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