<template>
    <div class="w-full h-screen flex flex-wrap justify-center items-center mt-10 lg:mt-0 p-10 lg:p-32 mb-32" id="experience">
        <div class="max-w-2xl flex flex-wrap justify-start items-center cursor-default">
            <h2 v-scroll-reveal.reset="{ delay: 300, mobile: false, origin: 'bottom', easing: 'cubic-bezier(0.5, 0, 0, 1)', distance: '80px'}" class="relative w-full text-left flex flex-wrap justify-start">
                <span class="mr-3 text-teal-400 text-base lg:text-2xl font-medium font-mono leading-tight self-end">02.</span>
                <span class="text-gray-400 text-xl lg:text-3xl font-bold leading-tight self-center">Experience</span>
                <span class="flex-auto bg-gray-600 self-center ml-3" style="height:0.5px;"></span>
            </h2>
            <div class="w-full h-full flex flex-wrap mt-8">
                <div v-scroll-reveal.reset="{ delay: 400, mobile: false, origin: 'bottom', easing: 'cubic-bezier(0.5, 0, 0, 1)', distance: '80px'}" class="relative w-full lg:w-1/5 text-gray-600 flex flex-wrap flex-row lg:flex-col items-center justify-start font-mono tracking-tight text-sm">
                    <button role="tab" aria-selected="true" type="button" @click="change_company(0)" class="w-auto lg:w-full px-4 lg:pr-0 lg:pl-6 lg:border-l-2 border-blue-900 focus:outline-none btn-anim-1 focus:text-teal-400">Netdevv</button>
                    <!-- <button role="tab" aria-selected="false" type="button" @click="change_company(1)" class="w-auto lg:w-full px-4 lg:pr-0 lg:pl-6 lg:border-l-2 border-blue-900 focus:outline-none btn-anim-1 focus:text-teal-400">Netdevv</button> -->
                    <span class="bg-teal-400 absolute left-0 hidden lg:block" style="width:2px; height: 36px; margin-top: -0px; transition:all 0.5s; transition-timing-function: cubic-bezier(.17,.67,0,.96);" :style='"transform: translateY("+ (36*current_company) +"px);"'></span>
                    <span class="bg-teal-400 absolute left-0 block lg:hidden" style="width:90px; height: 2px; margin-top: 17px; transition:all 0.5s; transition-timing-function: cubic-bezier(.17,.67,0,.96);" :style='"transform: translateX("+ (90*current_company) +"px);"'></span>
                </div>
                <div class="w-full lg:w-4/5 flex block relative antialiased" style="height:25em;">
                    <div v-if="current_company==0" class="w-full pl-4 mt-6 lg:mt-0">
                        <p class="text-xl font-medium text-gray-400">Full-stack Developer <span class="pl-2 text-teal-400 whitespace-no-wrap">@ Netdevv</span></p>
                        <p class="text-sm text-gray-500 font-mono mt-3">Oct 2017 – Apr 2020</p>
                        <ul class="text-gray-500 pt-6 text-sm">
                            <li>Building Backend API using Node.js, PHP, ASP.NET, JAVA to serve 10,000+ requests and server content on front-end.</li>
                            <li>Setup containers on Debian based systems to host Nginx and Apache servers. </li>
                            <li>Improve security of websites using LetsEncrypt’s Certbot on linux and configure certificates for nginx and apache.</li>
                            <li>Setup docker containers for Postgres, MySql and MongoDB to improve stability and scalability of projects.</li>
                            <li>Develop UI/UX by using tools like AdobeXD, Figma and collobrate with other developers to improve design.</li>
                            <li>Prototype responsive websites using Nuxt.js; design interactions using SCSS, TailwindCss and BootStrap.</li>
                            <li>Use version control on Github and Gitlabs to collobrate with team and share my code as OpenSource.</li>
                            <li>Work as part of an agile team fostering teamwork, mentoring others, and striving for overall excellence.</li>
                        </ul>
                    </div>
                    <!-- <div v-if="current_company==1" class="w-full pl-4 mt-6 lg:mt-0">
                        <p class="text-xl font-medium text-gray-400">Project Lead Developer<span class="pl-2 text-teal-400 whitespace-no-wrap">@ Netdevv</span></p>
                        <p class="text-sm text-gray-500 font-mono mt-3">Oct 2017 – Apr 2020</p>
                        <ul class="text-gray-500 pt-6 text-sm">
                            <li>Perform web development tasks utilizing PHP/NodeJs Framework, Web Services, and SQL Server</li>
                            <li>Lead design and implementation of solutions for our corporate websites and microsites</li>
                            <li>Design and evolve highly interactive user interfaces and HTML prototypes for web and email initiatives</li>
                            <li>Work as part of an agile team fostering teamwork, mentoring others, and striving for overall excellence</li>
                            <li>Utilize social media platforms, support advanced online Marketing activities, and integrate with internal systems.</li>
                        </ul>
                    </div> -->
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import { SlideXRightTransition } from 'vue2-transitions'

export default {
    components: {
        SlideXRightTransition,
    },
    data(){
        return{
            current_company: 0
        }
    },
    methods: {
        change_company(val){
            this.current_company = val;
        }
    },
}
</script>
<style lang="scss" scoped>
.btn-anim-1{
    transition: all 0.4s ease-in-out;
    @apply text-left items-center justify-center py-2;

    &:hover{
        background-color: rgb(23, 42, 69);
    }
}

li{
    @apply mb-2 flex w-full;

    &::before{
        content:'';
        display:inline-flex; 
        height:0.7em; 
        width:1em; 
        background-image:url('/assets/list-style-svg.svg'); 
        background-size:contain; 
        background-repeat:no-repeat; 
        padding-left: 2em;
        margin-top: 5px;
    }
}
</style>