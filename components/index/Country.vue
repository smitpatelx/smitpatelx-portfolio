<template>
    <div v-click-outside="hide_menu" v-focus-outside="hide_menu" class="flex cursor-pointer bg-gray-300 rounded items-stretch justify-center z-50" >
        <button tabindex="2" class="flex items-center justify-center rounded py-1 px-4 focus:outline-none" v-lazy-container="{ selector: 'img' }" @click.prevent="open_menu()" @keydown.enter="menu_state ? ()=>{} : open_menu()" @keydown.prevent.up="up_one" @keydown.prevent.down="down_one">
            <picture class="inline-block rounded-sm">
                <source :srcSet="require(`~/static/flags/${current_country}.webp`)" type="image/webp" />
                <source :srcSet="require(`~/static/flags/${current_country}.webp?jpeg`)" type="image/jpeg" />
                <img class="h-5 w-8 inline-block rounded-sm" :data-src="require(`~/static/flags/${current_country}.webp`)" :data-loading="require(`~/static/image-loading.gif`)" />
            </picture>
        </button>
        <transition name="slide">
            <div @blur="hide_menu" v-if="menu_state" class="mt-12 shadow-lg absolute custom_scroll flex flex-col w-64 bg-gray-200 border border-gray-400 rounded-md top-0 left-0">
                <div class="relative w-full">
                    <div class="p-0 flex items-stretch justify-center w-full sticky top-0 left-0">
                        <input @input="e => search = e.target.value" :autocomplete="random_alpha" id="search_country" @keydown.esc="search=''" @keydown.prevent.enter="select_first" tabindex="3" type="text" :value="search" class="bg-gray-400 text-gray-800 focus:outline-none w-full rounded-t-md py-2 px-4 placeholder-gray-700 text-base mb-1" placeholder="Seach...">
                    </div>
                </div>
                <div class="pt-1 px-1 flex flex-row flex-wrap items-start justify-start content-start h-56 overflow-y-scroll overflow-x-hidden scrolling-touch">
                    <span tabindex="3" @keydown.prevent.enter="select(ct.alpha2Code, i)" v-for="(ct, i) in new_array" :key="i" class="rounded-md py-2 px-3 text-base w-full text-gray-800 focus:underline bg-gray-200 hover:bg-white focus:outline-none focus:text-gray-800" @click="select(ct.alpha2Code, i)">
                        {{ct.name}}
                    </span>
                </div>
            </div>
        </transition>
    </div>
</template>
<script>
import ClickOutside from 'vue-click-outside'
import focusOutside from 'vue-focus-outside'

export default {
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
        search_data(e){
            let val = e.target.value;
            let pattern=new RegExp(val.toLowerCase(),"g")
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
            let pattern=new RegExp(val.toLowerCase(),"g")
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
        ClickOutside,
        focusOutside
    }
}
</script>
<style lang="scss" scoped>
@import url('@/assets/scss/country.scss');
</style>