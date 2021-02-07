<template>
    <div class="s-notification-container">
        <transition-group name="notify">
            <div v-for="(note,i) in notificationQue" :key="i+note.title+note.text" class="s-notification" :class="note.class" @click="$store.commit('HIDE_NOTIFY', i);">
                <span class="title">{{note.title}}</span>
                <span class="text">{{note.text}}</span>
            </div>
        </transition-group>
    </div>
</template>
<script>
export default {
    data(){
        return{
            show_notification: false,
        }
    },
    computed:{
        notificationQue () {
            return this.$store.state.notificationQue
        }
    },
    methods:{
    },
}
</script>
<style lang="scss">
    /* Vue Transition - Notify */
    .notify-leave-active, .notify-enter-active {
        transition: 0.3s ease-out;
    }
    .notify-enter {
        transform: translateX(25%);
        opacity: 0;
    }
    .notify-leave-to {
        transform: translateX(25%);
        opacity: 0;
    }



    .s-notification-container{
        @apply fixed top-0 grid grid-cols-1 gap-y-1;
        right: 0%;
        margin: 0;
        z-index: 50;

        @media (min-width: 720px) {
            & {
                margin: 2rem 2rem 0 0;
            }
        }

        .s-notification {
            @apply bg-white px-4 py-2 mb-2 border flex-wrap border border-gray-200 select-none cursor-pointer;
            box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05),
                        inset 0 2px 4px 0 rgba(0, 0, 0, 0.06);
            width: 100vw;

            @media (min-width: 720px) {
                & { 
                    @apply bg-white px-5 py-4 mb-2 rounded-lg border flex-wrap border border-gray-200 select-none cursor-pointer;
                    display: flex;
                    width: 24rem; 
                }
            }

            .title{
                @apply text-gray-500 text-lg font-secondary inline-block pb-1 px-2 w-full text-left leading-tight;
            }

            .text{
                @apply text-sm font-light px-2 w-full text-left leading-tight;
            }
        }

        .error .text {
            @apply text-red-500;
        }
        .warn .text {
            @apply text-yellow-500;
        }
        .success .text {
            @apply text-green-500;
        }

    }
</style>