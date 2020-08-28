<template>
    <div class="w-full flex flex-wrap justify-center items-center mt-10 lg:mt-0 p-10 lg:p-32" id="about">
        <div class="max-w-2xl lg:max-w-full w-full lg:w-1/2 flex flex-wrap justify-start items-center pl-0 lg:pl-20 cursor-default text-base">
            <h2 v-scroll-reveal="{ delay: 200, mobile: false, origin: 'bottom', easing: 'cubic-bezier(0.5, 0, 0, 1)', distance: '80px'}" class="relative w-full text-left flex flex-wrap justify-start">
                <span class="mr-3 text-teal-400 text-base lg:text-2xl font-medium font-mono leading-tight self-end">01.</span>
                <span class="text-gray-400 text-xl lg:text-3xl font-bold leading-tight self-center">About Me</span>
                <span class="flex-auto bg-gray-600 self-center ml-3" style="height:0.5px;"></span>
            </h2>
            <p v-scroll-reveal="{ delay: 400, mobile: false, origin: 'bottom', easing: 'cubic-bezier(0.5, 0, 0, 1)', distance: '80px'}" class="mt-5 text-gray-500 tracking-wide">
                Hello, I'm Smit, a computer programmer based in Winnipeg, MB.
            </p>
            <p v-scroll-reveal="{ delay: 500, mobile: false, origin: 'bottom', easing: 'cubic-bezier(0.5, 0, 0, 1)', distance: '80px'}" class="mt-5 text-gray-500 tracking-wide">
                I enjoy inventing and building things for Web. My goal is to build attractive and smooth Apps, that all users enjoy using.
                Working with a lot of diversed people, while still maintaining performance makes me different.
            </p>
            <p v-scroll-reveal="{ delay: 600, mobile: false, origin: 'bottom', easing: 'cubic-bezier(0.5, 0, 0, 1)', distance: '80px'}" class="mt-5 text-gray-500 tracking-wide">
                Before my second year in <a class="text-teal-500 inline-flex cursor-pointer focus:underline focus:outline-none hover:underline transition-all" href="https://durhamcollege.ca" target="_blank">Durham College</a>, I started my Freelancing Business. Providing excellent solutions to Business, which can lead their business and reflect my efforts, is always been my Core Strength. 
            </p>
            <h2 v-scroll-reveal="{ delay: 700, mobile: false, origin: 'bottom', easing: 'cubic-bezier(0.5, 0, 0, 1)', distance: '80px'}" class="mt-5 text-teal-500 tracking-wide font-medium">Here are some technologies, I have been working on lately:</h2>
            <div class="mt-5 w-full flex flex-wrap flex-row text-gray-600 font-mono text-sm">
                <p v-scroll-reveal="{ delay: (i*50)+700, mobile: false, origin: 'bottom', easing: 'cubic-bezier(0.5, 0, 0, 1)', distance: '80px'}" v-for="(item, i) in skills" :key="i" class="w-1/2 flex flex-wrap justify-start items-center mb-1">
                    <svg class="inline-block w-4 h-2 fill-current text-teal-400 mr-2" viewBox="0 0 24 24"><path fill-rule="evenodd" clip-rule="evenodd" d="M5.5208 2.1223a1 1 0 011.02.0365l14 9a1 1 0 010 1.6824l-14 9A1 1 0 015 21V3a1 1 0 01.5208-.8777zM7 4.8317v14.3366L18.1507 12 7 4.8317z" /></svg>
                    {{item}}
                </p>
            </div>
        </div>
        <div class="flex w-full lg:w-1/2 py-8 md:p-16">
            <div v-lazy-container="{ selector: 'img' }" v-scroll-reveal="{ mobile: false, origin: 'bottom', easing: 'cubic-bezier(0.5, 0, 0, 1)', distance: '80px'}" class="w-full flex flex-wrap justify-center items-center relative mt-10 lg:mt-0">
                <img :data-src="require('~/static/smit-3.png?webp')" 
                    :data-loading="require('~/static/smit-3.png?webp?lqip')" 
                    alt="Smit Patel" title="Smit Patel" class="w-2/3 z-10 rounded-lg">
                <div class="w-2/3 absolute top-0 right-0 z-0 border-2 border-teal-500 bg-transparent h-full mt-8 mr-12 md:mr-16 rounded-lg"></div>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    data(){
        return{
            skills:[
                'Node.js',
                'PHP',
                'Vue.js',
                'SCSS',
                'PostgreSQL',
                'GraphQL',
                'MongoDB',
                'Python',
            ]
        }
    }
}
</script>
<style lang="scss" scoped>
    img[lazy='loading'] {
        filter: blur(15px);
    }
</style>