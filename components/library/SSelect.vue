<template>
    <div v-click-outside="()=>show=false" v-focus-outside="()=>show=false">
        <button type="button" @click="show=!show" class="w-full h-auto form-select" :tabindex="tabindex" v-html="output">
        </button>
        <div class="form-drop-down" v-if="show">
            <span tabindex="9" v-for="(option, i) in options" :key="i" @keydown.enter="select(option)" @click="select(option)">{{option.text}}</span>
        </div>
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
<style lang="scss">
.form-drop-down{
    @apply w-full shadow-lg absolute select-none bg-gray-200 border border-gray-400 rounded z-50 px-1 mt-2 grid grid-cols-1 items-stretch justify-center;
    top: 100%;
    width: 100%;
    border-radius: 5px;
    max-height: 12rem;
    overflow-x: hidden;
    overflow-y: scroll;
    -ms-overflow-style: none;
    scrollbar-width: none;

    &::-webkit-scrollbar {
        display: none;
    }

    & > span {
        @apply outline-none;
        width: 100%;
        padding: 0.5rem 0.75rem;
        display: block;
        text-align: left;
        border-radius: 5px;
        color: #4a5568;
        font-weight: 400;
        user-select: none;

        &:hover{
            @apply bg-white;
        }

        &:focus{
            @apply outline-none underline;
        }

        &:nth-child(1){
            margin-top: 0.3rem;
        }

        &:nth-last-child(1){
            margin-bottom: 0.3rem;
        }
    }
}

.form-select{
    @apply  text-blue-800 py-2 px-3 text-left relative rounded bg-gray-300 antialiased text-lg  border-2 border-transparent transition-all duration-300;

    &:focus{
        @apply bg-gray-500 text-white outline-none shadow-outline transition-all duration-300;

        &::placeholder{
            @apply text-white;
        }

        &::after{
            border-top: 8px solid #ffffff;
        }
    }

    &::placeholder{
        @apply text-gray-600 transition-all duration-300;
    }

    &::after{
        content: '';
        position: absolute;
        display: inline-block;
        height: 0;
        width: 0;
        right: 0;
        top: 50%;
        transform: translateY(-50%);
        border-left: 5px solid transparent;
        border-right: 5px solid transparent;
        border-top: 8px solid #4299e1;
        margin: 0 15px 0 0;
    }
}
</style>