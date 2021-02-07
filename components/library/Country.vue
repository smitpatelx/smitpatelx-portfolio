<template>
    <div v-click-outside="()=>{menu_state=false}" v-focus-outside="()=>{menu_state=false}" class="flex cursor-pointer bg-gray-200 rounded items-stretch justify-center z-20" >
        <button tabindex="2" class="flex-1 items-center content-center justify-center self-stretch rounded py-1 px-2 focus:outline-none"  @click.prevent="open_menu()" @keydown.enter="menu_state ? ()=>{} : open_menu()" @keydown.38="up_one" @keydown.40="down_one">
            <div class="w-full flex flex-wrap items-center justify-center">
                <nuxt-picture
                    placeholder
                    :src="`/flags/${current_country}.svg`"
                    class="h-5 w-8 inline-block rounded-sm"
                    :title="current_country"
                    :alt="current_country"
                    width="40"
                    height="30"
                />
            </div>
        </button>
        <transition name="slide">
            <div @blur="hide_menu" v-if="menu_state" class="mt-12 shadow-lg absolute custom_scroll flex flex-col w-64 bg-gray-100 border border-gray-300 rounded-md top-0 left-0">
                <div class="relative w-full">
                    <div class="p-0 flex items-stretch justify-center w-full sticky top-0 left-0">
                        <input @input="e => search = e.target.value" :autocomplete="random_alpha" id="search_country" @keydown.38="up_one(current_el_focus)" @keydown.40="down_one(current_el_focus)" @keydown.esc="search=''" @keydown.prevent.enter="select_first" tabindex="3" type="text" :value="search" class="bg-gray-300 text-gray-800 focus:outline-none w-full rounded-t-md py-2 px-4 placeholder-gray-700 text-base mb-1" placeholder="Seach...">
                    </div>
                </div>
                <div class="pt-1 px-1 flex flex-row flex-wrap items-start justify-start content-start h-56 overflow-y-scroll overflow-x-hidden scrolling-touch">
                    <span tabindex="3" :ref="'country_'+i" @keydown.prevent.enter="select(ct.alpha2Code, i)" v-for="(ct, i) in new_array" :key="i" class="rounded-md py-2 px-3 text-base w-full text-gray-800 focus:underline bg-gray-100 hover:bg-white focus:outline-none focus:text-gray-800" @click="select(ct.alpha2Code, i)" @keydown.prevent.38="up_one(i)" @keydown.prevent.40="down_one(i)">
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
            new_array:[],
        }
    },
    fetchOnServer: true,
    methods:{
        load_countries(){
            this.$axios.$get("https://static.smitpatelx.com/smitpatelx/json/name_alpha2_calling_codes.json")
            .then(res=>{
                this.countryData = res;
                this.new_array = res;
            }).catch(err=>{
                console.log("Error: Fetching Country Codes. Refresh the page or try again later.")
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
        },
        down_one(i){
            let reff = 'country_'+(i+1);
            if(typeof this.$refs[reff]  !== 'undefined'){
                if(typeof this.$refs[reff][0] !== 'undefined'){
                    this.$refs[reff][0].focus();
                } else {
                    this.$refs['country_0'][0].focus();
                }
            } else {
                this.$refs['country_0'][0].focus();
            }
        },
        up_one(i){
            let reff = 'country_'+(i-1);
            if(typeof this.$refs[reff]  !== 'undefined'){
                if(typeof this.$refs[reff][0] !== 'undefined'){
                    this.$refs[reff][0].focus();
                } else {
                    this.$refs['country_'+(this.new_array.length-1)][0].focus();
                }
            } else {
                this.$refs['country_'+(this.new_array.length-1)][0].focus();
            }
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
        },
        current_el_focus(){
            if(typeof this.$refs['country_'+this.current_index] == 'undefined'){
                return 0;
            } else {
                return this.current_index;
            }
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