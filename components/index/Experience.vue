<template>
    <section class="w-full flex flex-wrap justify-center items-center mt-24 lg:mt-0 mb-24 lg:mb-10 p-4 md:p-10 lg:p-32" id="experience">
        <div class="max-w-2xl flex flex-wrap justify-start items-center cursor-default">
            <h2 v-scroll-reveal="{ delay: 100, mobile: true, origin: 'bottom', easing: 'cubic-bezier(0.5, 0, 0, 1)', distance: '80px'}" class="w-full text-gray-700 text-3xl md:text-4xl font-semibold leading-tight text-center mb-10">
                My Experience
            </h2>
            <div class="w-full h-full flex flex-wrap mt-2">
                <div class="w-full flex flex-wrap items-center justify-center">
                    <div class="mb-4 flex flex-wrap items-center justify-center leading-none relative">
                        <span class="absolute bg-indigo-500 bg-opacity-25 h-8 w-26 rounded-md top-0 transition-all duration-300 ease-in-out z-0" :style="`left:${current_company*6.5}rem`"></span>
                        <button role="tab" aria-selected="true" type="button" @click="change_company(0)" class="text-nav">Netdevv</button>
                        <button role="tab" aria-selected="false" type="button" @click="change_company(1)" class="text-nav">Blabbly</button>
                    </div>
                </div>
                <div class="w-full relative antialiased" style="min-height: 80vh;">
                    <div v-if="!current_company" class="w-full flex flex-wrap flex-col pl-4 mt-6 lg:mt-0">
                        <div class="w-full flex flex-wrap flex-col items-center justify-center">
                            <p class="text-xl font-secondary text-gray-800">Full-stack Developer <span class="pl-2 text-indigo-500 whitespace-no-wrap">@ Netdevv</span></p>
                            <p class="text-base font-secondary text-gray-500 font-mono mt-3">Oct 2017 – Apr 2020</p>
                        </div>
                        <ul class="text-gray-800 pt-6 text-base font-light w-full">
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
                    <div v-if="current_company" class="w-full flex flex-wrap flex-col pl-4 mt-6 lg:mt-0">
                        <div class="w-full flex flex-wrap flex-col items-center justify-center">
                            <p class="text-xl font-secondary text-gray-800">Director of Web Development<span class="pl-2 text-indigo-500 whitespace-no-wrap">@ Blabbly</span></p>
                            <p class="text-base font-secondary text-gray-500 font-mono mt-3">June 2020 - Present</p>
                        </div>
                        <ul class="text-gray-800 pt-6 text-base font-light">
                            <li>Perform web development tasks utilizing PHP/NodeJs Framework, Web Services, and SQL Server</li>
                            <li>Lead design and implementation of solutions for our corporate websites and microsites</li>
                            <li>Design and evolve highly interactive user interfaces and HTML prototypes for web and email initiatives</li>
                            <li>Work as part of an agile team fostering teamwork, mentoring others, and striving for overall excellence</li>
                            <li>Utilize social media platforms, support advanced online Marketing activities, and integrate with internal systems.</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </section>
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
.w-26 {
    width: 6.5rem;
}

.text-nav {
 @apply z-20 text-center self-center text-gray-800 transition-all duration-300 ease-out text-base font-secondary tracking-wider py-2 px-3 rounded-md leading-4;
 width: 6.5rem;
    &:focus{
        @apply outline-none select-none bg-transparent text-indigo-600;
    }

    &:hover {
        @apply text-gray-600;
    }
}

.btn-anim-1{
    transition: all 0.4s ease-in-out;
    @apply text-left items-center justify-center py-2;

    &:hover{
        background-color: rgba(99, 179, 237, 0.191);
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
        margin-top: 7px;
    }
}
</style>