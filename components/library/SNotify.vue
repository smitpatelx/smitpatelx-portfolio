<template>
    <div class="s-notification-container">
        <transition-group name="notify">
            <div v-for="(note,i) in notificationQue" :key="i" class="s-notification" :class="note.class" @click="hideMe(i)">
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
            notificationQue:[]
        }
    },
    methods:{
        addNew(obj){
            this.notificationQue.push(obj);
            setTimeout(()=>{
                this.notificationQue.shift();
            }, 5000);
        },
        default(obj){
            let newNotificationObj = {
                title: obj.title+"",
                text: obj.text+"",
                class: obj.class+""
            }
            this.addNew(newNotificationObj);
        },
        error(text){
            let newNotificationObj = {
                title: "Error",
                text: text,
                class: "error"
            }
            this.addNew(newNotificationObj);
        },
        warn(text){
            let newNotificationObj = {
                title: "Warning",
                text: text,
                class: "warn"
            }
            this.addNew(newNotificationObj);
        },
        success(text){
            let newNotificationObj = {
                title: "Success",
                text: text,
                class: "success"
            }
            this.addNew(newNotificationObj);
        },
        hideMe(i){
            this.notificationQue.splice(i,1);
        }
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
        z-index: 20;

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
                @apply text-gray-500 text-lg font-medium inline-block pb-1 px-2 w-full text-left leading-tight;
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