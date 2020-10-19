<template>
    <div v-click-outside="()=>show=false" v-focus-outside="()=>show=false">
        <button type="button" @click="show=!show" class="w-full h-auto form-select" :tabindex="tabindex" v-html="output">
        </button>
        <transition name="slide">
            <div class="form-drop-down" v-if="show">
                <span tabindex="9" v-for="(option, i) in options" :key="i" @keydown.enter="select(option)" @click="select(option)">{{option.text}}</span>
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
            current_text: ''
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
        select(data){
            this.current_selection = data.val;
            this.current_text = data.text;
            this.show=false;
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