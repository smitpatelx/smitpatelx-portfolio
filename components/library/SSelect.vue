<template>
    <div v-click-outside="()=>show=false" v-focus-outside="()=>show=false">
        <button type="button" @click="show=!show" class="w-full h-auto form-select" :tabindex="tabindex" v-html="output">
        </button>
        <transition name="slide">
            <div class="form-drop-down" v-if="show">
                <span tabindex="9" v-for="(option, i) in options" :key="i" :ref="'select_'+i" 
                    @keydown.prevent.38="up_one(i)" @keydown.prevent.40="down_one(i)" 
                    @keydown.enter="select(option, i)" @click="select(option, i)" >
                    {{option.text}}
                </span>
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
            show: false,
            current_selection: '',
            current_text: '',
            current_index: 0
        }
    },
    props:{
        title: {
            type: String,
            default: 'Please select one'
        },
        tabindex: {
            type: Number,
            default: 0
        },
        options: {
            type: Array,
            default: [],
        }
    },
    computed:{
        output(){
            return this.current_text=='' ? this.title : this.current_text;
        }
    },
    methods:{
        select(data, i){
            this.current_selection = data.val;
            this.current_text = data.text;
            this.current_index = i;
            this.$emit('s-modal', data.val)
            this.show=false;
        },
        down_one(i){
            let reff = 'select_'+(i+1);
            if(typeof this.$refs[reff]  !== 'undefined'){
                if(typeof this.$refs[reff][0] !== 'undefined'){
                    this.$refs[reff][0].focus();
                } else {
                    this.$refs['select_0'][0].focus();
                }
            } else {
                this.$refs['select_0'][0].focus();
            }
        },
        up_one(i){
            let reff = 'select_'+(i-1);
            if(typeof this.$refs[reff]  !== 'undefined'){
                if(typeof this.$refs[reff][0] !== 'undefined'){
                    this.$refs[reff][0].focus();
                } else {
                    this.$refs['select_'+(this.options.length-1)][0].focus();
                }
            } else {
                this.$refs['select_'+(this.options.length-1)][0].focus();
            }
        }
    },
    watch:{
        show(val){
            if (val==true){
                setTimeout(()=>{
                    this.$refs['select_0'][0].focus();
                },300);
            } else {
                
            }
        }
    },
    directives: {
        ClickOutside,
        focusOutside
    }
}
</script>
<style lang="scss" scoped>
@import url('@/assets/scss/s-select.scss');
</style>