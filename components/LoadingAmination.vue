<template>
    <div class="fixed h-screen w-full bg-gray-200 z-50 overflow-hidden loading">
        <div class="w-full h-full flex flex-wrap justify-center items-center svg-loading">
            <svg class="h-32 lines" viewBox="0 0 200 200" fill="none">
                <path d="M72.8635 85.312C70.8095 85.312 68.8205 85 66.8965 84.376C64.9985 83.726 63.5035 82.894 62.4115 81.88L63.8545 78.838C64.8945 79.774 66.2205 80.541 67.8325 81.139C69.4705 81.711 71.1475 81.997 72.8635 81.997C75.1255 81.997 76.8155 81.62 77.9335 80.866C79.0515 80.086 79.6105 79.059 79.6105 77.785C79.6105 76.849 79.2985 76.095 78.6745 75.523C78.0765 74.925 77.3225 74.47 76.4125 74.158C75.5285 73.846 74.2675 73.495 72.6295 73.105C70.5755 72.611 68.9115 72.117 67.6375 71.623C66.3895 71.129 65.3105 70.375 64.4005 69.361C63.5165 68.321 63.0745 66.93 63.0745 65.188C63.0745 63.732 63.4515 62.419 64.2055 61.249C64.9855 60.079 66.1555 59.143 67.7155 58.441C69.2755 57.739 71.2125 57.388 73.5265 57.388C75.1385 57.388 76.7245 57.596 78.2845 58.012C79.8445 58.428 81.1835 59.026 82.3015 59.806L81.0145 62.926C79.8705 62.198 78.6485 61.652 77.3485 61.288C76.0485 60.898 74.7745 60.703 73.5265 60.703C71.3165 60.703 69.6525 61.106 68.5345 61.912C67.4425 62.718 66.8965 63.758 66.8965 65.032C66.8965 65.968 67.2085 66.735 67.8325 67.333C68.4565 67.905 69.2235 68.36 70.1335 68.698C71.0695 69.01 72.3305 69.348 73.9165 69.712C75.9705 70.206 77.6215 70.7 78.8695 71.194C80.1175 71.688 81.1835 72.442 82.0675 73.456C82.9775 74.47 83.4325 75.835 83.4325 77.551C83.4325 78.981 83.0425 80.294 82.2625 81.49C81.4825 82.66 80.2995 83.596 78.7135 84.298C77.1275 84.974 75.1775 85.312 72.8635 85.312Z" stroke="#4a5568" stroke-width="2"/>
                <path d="M70.475 118.7H74.375V146H70.475V118.7Z" stroke="#4a5568" stroke-width="2"/>
                <path d="M132.002 87L131.963 67.11L122.096 83.685H120.302L110.435 67.227V87H106.691V59.7H109.889L121.277 78.888L132.509 59.7H135.707L135.746 87H132.002Z" stroke="#4a5568" stroke-width="2"/>
                <path d="M119.571 121.093H110.211V117.7H132.792V121.093H123.432V145H119.571V121.093Z" stroke="#4a5568" stroke-width="2"/>
                <rect x="42" y="33" width="117" height="134" stroke="#4299e1" stroke-width="6"/>
            </svg>
        </div>
    </div>
</template>
<script>
import anime from 'animejs/lib/anime.es';

export default {
    data(){
        return{
   
        }
    },
    mounted(){
        document.querySelector('html, body').style.overflowY = 'hidden';

        anime({
            targets: '.svg-loading .lines path',
            strokeDashoffset: [anime.setDashoffset, 0],
            easing: 'easeInOutSine',
            duration: 1300,
            delay: anime.stagger(300, {easing: 'easeOutQuad'}),
            direction: 'normal',
            loop: false
        });
        anime({
            targets: '.svg-loading .lines rect',
            strokeDashoffset: [anime.setDashoffset, 0],
            easing: 'easeInOutQuart',
            duration: 1000,
            delay: 1000,
            direction: 'normal',
            loop: false
        });
        anime({
            targets: '.svg-loading .lines',
            scale: '0',
            easing: 'easeInOutQuart',
            duration: 300,
            delay: 2500,
            direction: 'normal',
            loop: false
        });

        setTimeout(()=>{
            document.querySelector('html, body').style.overflowY = 'scroll';
        }, 3500);
    }
}
</script>
<style lang="scss" scoped>
    html, body { 
        // height: 100% !important; 
        // overflow-y: hidden !important;
        // @apply bg-blue-500
    }
</style>