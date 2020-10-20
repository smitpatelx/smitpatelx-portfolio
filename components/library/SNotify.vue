<template>
    <div class="s-notification-container">
        <transition name="notify">
            <div class="s-notification" @click="show_notification=false" v-if="show_notification">
                <span class="title">{{sTitle}}</span>
                <span class="text">{{sText}}</span>
            </div>
        </transition>
    </div>
</template>
<script>
export default {
    data(){
        return{
            sTitle: 'Default Title',
            sText: 'Default notification text',
            show_notification: false
        }
    },
    methods:{
        error(text){
            
        },
        warn(text){
            this.$notify({
                group: 'warn',
                title: 'Warn',
                text: text,
            });
        },
        success(text){
            this.$notify({
                group: 'success',
                title: 'Success',
                text: text,
            });
        },
        hideMe(e){
            e.target.className = "hidden"
        }
    },
    created(){
        setTimeout(()=>{
            this.show_notification = true;
        }, 500);
    }
}
</script>
<style lang="scss">
    .s-notification-container{
        @apply fixed top-0;
        right: 0%;
        transform: translateX(-10%) translateY(20%);
        z-index: 10;

        .s-notification {
            @apply bg-white px-5 py-4 rounded-lg border-none flex flex-wrap border border-gray-200 select-none cursor-pointer;
            box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05),
                        inset 0 2px 4px 0 rgba(0, 0, 0, 0.06);
            .title{
                @apply text-gray-500 text-base font-medium inline-block pb-1 px-2 w-full text-left leading-tight;
            }

            .text{
                @apply text-green-500 text-sm font-light px-2 w-full text-left leading-tight;
            }
        }

    }
</style>