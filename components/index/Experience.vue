<template>
    <div class="w-full h-screen flex flex-wrap justify-center items-center mt-10 lg:mt-0 p-10 lg:p-32" id="experience">
        <div class=" max-w-2xl flex flex-wrap justify-start items-center cursor-default">
            <h2 class="w-full text-left flex flex-wrap justify-start items-center">
                <span class="mr-3 text-teal-400 text-2xl font-medium font-mono leading-tight">02.</span>
                <span class="text-gray-400 text-3xl font-bold leading-tight mb-2">Experience</span>
                <div class="bg-gray-700 ml-4" style="padding-top:0.6px; min-width:19rem;"></div>
            </h2>
            <div class="w-full h-full flex flex-wrap mt-8">
                <div class="w-full lg:w-1/5 text-gray-600 flex flex-wrap flex-row lg:flex-col text-center items-center justify-start font-mono tracking-tight">
                    <button type="button" class="w-auto px-4 lg:px-0 lg:w-full border-l-2 border-blue-900 focus:border-teal-400 focus:outline-none btn-anim-1 focus:text-teal-400">Netdevv</button>
                    <button type="button" class="w-auto px-4 lg:px-0 lg:w-full border-l-2 border-blue-900 focus:border-teal-400 focus:outline-none btn-anim-1 focus:text-teal-400">Netdevv</button>
                </div>
                <div class="w-full lg:w-4/5 pl-4 mt-6 lg:mt-0">
                    <p class="text-xl font-medium text-gray-400">Full-stack Developer<span class="pl-2 text-teal-400">@ Netdevv</span></p>
                    <p class="text-sm text-gray-500 font-mono mt-3">Oct 2017 – Apr 2020</p>
                    <ul class="text-gray-500 pt-6 text-base">
                        <li>Advanced PHP, Nodejs, MongoDB, Firebase, PostgreSQL and MySQL</li>
                        <li>Front-End based on Javascript (Vue), CSS, HTML</li>
                        <li>Git Version-Control in a team setting.</li>
                        <li>Maintaining GitHub repository issues, answering questions and merging pull requests.</li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    
}
</script>
<style lang="scss" scoped>
.btn-anim-1{
    transition: all 0.4s ease-in-out;
    @apply text-center items-center justify-center py-2;

    &:hover{
        background-color: rgb(23, 42, 69);
    }
}

li{
    @apply mb-2 flex w-full;

    &::before{
        content:'';
        display:inline-flex; 
        height:1em; 
        width:1em; 
        background-image:url('/assets/list-style-svg.svg'); 
        background-size:contain; 
        background-repeat:no-repeat; 
        padding-left: 2em;
        margin-top: 5px;
        @apply justify-center items-start;  
    }
}
</style>