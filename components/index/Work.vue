<template>
    <section class="w-full min-h-screen flex flex-wrap justify-center items-center mt-5 lg:mt-0 p-10 lg:p-32 my-16" id="work">
        <div class="flex flex-wrap justify-start items-center cursor-default work-w">
            <h2 v-scroll-reveal="{ delay: 100, mobile: true, viewOffset: { top: 50, right: 0, bottom: 0, left: 0, }, origin: 'bottom', easing: 'cubic-bezier(0.5, 0, 0, 1)', distance: '80px'}" class="w-full text-gray-700 text-3xl md:text-4xl font-semibold leading-tight text-center mb-12">
                My Work
            </h2>
            <div class="w-full h-full flex flex-wrap pb-10 justify-center items-center">
                <!-- Project 1 - Start -->
                <div class="w-full flex flex-wrap relative justify-end rounded mb-10" >
                    <a href="https://4unaturalistic.com/" target="_blank"  v-scroll-reveal="{ delay: 300, mobile: true, viewOffset: { top: 50, right: 0, bottom: 0, left: 0, }, origin: 'left', easing: 'cubic-bezier(0.5, 0, 0, 1)', distance: '80px'}" class="w-full md:w-1/2 md:h-full z-0 rounded flex justify-center items-center shadow-xl focus:outline-none focus:ring focus:ring-blue-400">
											<nuxt-picture
												placeholder
												src="/projects/4unaturalistic.png"
												class="rounded-sm project-img w-full"
												title="4unaturalistic.com"
												alt="4unaturalistic.com"
												width="480"
												height="245"
											/>
                    </a>
                    <div v-scroll-reveal="{ delay: 300, mobile: true, viewOffset: { top: 50, right: 0, bottom: 0, left: 0, }, origin: 'right', easing: 'cubic-bezier(0.5, 0, 0, 1)', distance: '80px'}" class="w-full md:w-1/2 z-10 flex flex-wrap flex-col justify-start items-end py-5 md:min-h-full">
                        <h3 class="font-mono text-blue-600 text-sm text-right">Featured Project</h3>
                        <h4 class="font-sans text-gray-700 text-2xl text-right font-medium tracking-wider">4unaturalistic</h4>
                        <div class="text-sm md:text-base text-gray-300 font-light mt-6 justify-end px-5 py-4 text-left ml-0 md:-ml-10 bg-blue-dark shadow-xl">
                            This is a sales funnel website for a nateropathic doctor. Includes functionalities like blogging, appoinment booking and faq sections.
                        </div>
                        <div class="w-full flex flex-wrap px-2 pt-4 text-sm tracking-wide text-gray-700 justify-center items-center">
                            <span class="mx-2">Wordpress</span>
                            <span class="mx-2">Elementor</span>
                            <span class="mx-2">Contact Form 7</span>
                            <span class="mx-2">Mailchimp</span>
                        </div>
                        <div class="w-full flex justify-center items-center pt-4 px-10">
                            <a href="https://4unaturalistic.com" target="_blank" class="mx-2 text-gray-500 hover:text-opacity-75 rounded-md">
                                <svg class="fill-current h-6 w-6" viewBox="0 0 24 24"><path fill-rule="evenodd" clip-rule="evenodd" d="M5 7a1 1 0 00-1 1v11a1 1 0 001 1h11a1.0001 1.0001 0 001-1v-6c0-.5523.4477-1 1-1s1 .4477 1 1v6a3 3 0 01-3 3H5a3 3 0 01-3-3V8a3 3 0 013-3h6c.5523 0 1 .4477 1 1s-.4477 1-1 1H5zM14 3c0-.5523.4477-1 1-1h6c.5523 0 1 .4477 1 1v6c0 .5523-.4477 1-1 1s-1-.4477-1-1V4h-5c-.5523 0-1-.4477-1-1z"/><path fill-rule="evenodd" clip-rule="evenodd" d="M21.7071 2.2929c.3905.3905.3905 1.0237 0 1.4142l-11 11c-.3905.3905-1.0237.3905-1.4142 0-.3905-.3905-.3905-1.0237 0-1.4142l11-11c.3905-.3905 1.0237-.3905 1.4142 0z" /></svg>
                            </a>
                        </div>
                    </div>
                </div>
                <!-- Project 1 - End -->
                <!-- Project 2 - Start -->
                <div class="w-full flex flex-wrap-reverse md:flex-wrap relative justify-end rounded mb-10" >
                    <div v-scroll-reveal="{ delay: 300, mobile: true, viewOffset: { top: 50, right: 0, bottom: 0, left: 0, }, origin: 'left', easing: 'cubic-bezier(0.5, 0, 0, 1)', distance: '80px'}" class="w-full md:w-1/2 z-10 flex flex-wrap flex-col justify-start items-start py-5 md:min-h-full">
                        <h3 class="font-mono text-blue-600 text-sm text-right">Featured Project</h3>
                        <h4 class="font-sans text-gray-700 text-2xl text-right mt-1 font-medium tracking-wider">4unaturalistic</h4>
                        <div class="text-sm md:text-base text-gray-300 font-light mt-6 justify-end px-5 py-4 text-left md:text-left mr-0 md:-mr-10 bg-blue-dark shadow-xl">
                            This is a custom website for a nateropathic doctor. Includes functionalities like blogging, commenting, live search, appoinment booking and faq sections.
                        </div>
                        <div class="w-full flex flex-wrap px-2 pt-4 text-sm tracking-wide text-gray-700 justify-center items-center">
                            <span class="mx-2">Gridsome</span>
                            <span class="mx-2">Tailwindcss</span>
                            <span class="mx-2">Algolia</span>
                            <span class="mx-2">SCSS</span>
                        </div>
                        <div class="w-full flex justify-center items-center pt-4 px-10">
                            <a href="https://github.com/smitpatelx/4unaturalistic_gridsome" target="_blank" class="mx-2 text-gray-500 hover:text-opacity-75 rounded-md">
                                <svg class="fill-current h-6 w-6" viewBox="0 0 24 24"><g clip-path="url(#clip0)"><path d="M16 23c-.6 0-1-.4-1-1v-3.9c.1-.8-.2-1.4-.7-1.9-.3-.3-.4-.7-.2-1 .1-.4.5-.6.8-.7 2.9-.3 5.6-1.3 5.6-6 0-1.1-.4-2.2-1.2-3.1-.3-.3-.3-.7-.2-1 .3-.8.3-1.6.1-2.4-.5.1-1.3.4-2.6 1.3-.2.2-.5.2-.8.1-2.1-.6-4.4-.6-6.5 0-.3.1-.6.1-.9-.1C7.2 2.4 6.3 2.1 5.8 2c-.2.8-.2 1.6.1 2.4.1.4.1.8-.2 1-.8.9-1.2 2-1.2 3.1 0 4.7 2.7 5.7 5.6 6 .4 0 .7.3.8.7.1.4 0 .8-.2 1-.5.5-.7 1.1-.7 1.8v3.9c0 .6-.4 1-1 1s-1-.4-1-1v-1.7c-3 .5-4.3-1.2-5.2-2.3-.4-.5-.7-.9-1.1-1-.5-.1-.9-.7-.7-1.2.1-.5.7-.9 1.2-.7 1 .3 1.6 1 2.2 1.7.8 1.1 1.5 1.9 3.6 1.5v-.1c0-.6.1-1.3.3-1.8-2.8-.6-5.8-2.4-5.8-7.7 0-1.5.5-2.9 1.4-4-.4-1.4-.3-2.7.3-4 .1-.3.3-.5.6-.6.4-.1 1.7-.3 4.4 1.4 2.2-.5 4.5-.5 6.6 0 2.6-1.7 4-1.5 4.4-1.4.3.1.5.3.6.6.5 1.3.6 2.6.3 3.9.9 1.1 1.4 2.5 1.4 4 0 5.7-3.4 7.2-5.8 7.8.2.6.3 1.3.3 1.9V22c0 .6-.4 1-1 1z" /></g><defs><clipPath id="clip0"><path d="M0 0h24v24H0z"/></clipPath></defs></svg>
                            </a>
                            <a href="https://4unaturalistic.netlify.app" target="_blank" class="mx-2 text-gray-500 hover:text-opacity-75 rounded-md">
                                <svg class="fill-current h-6 w-6" viewBox="0 0 24 24"><path fill-rule="evenodd" clip-rule="evenodd" d="M5 7a1 1 0 00-1 1v11a1 1 0 001 1h11a1.0001 1.0001 0 001-1v-6c0-.5523.4477-1 1-1s1 .4477 1 1v6a3 3 0 01-3 3H5a3 3 0 01-3-3V8a3 3 0 013-3h6c.5523 0 1 .4477 1 1s-.4477 1-1 1H5zM14 3c0-.5523.4477-1 1-1h6c.5523 0 1 .4477 1 1v6c0 .5523-.4477 1-1 1s-1-.4477-1-1V4h-5c-.5523 0-1-.4477-1-1z"/><path fill-rule="evenodd" clip-rule="evenodd" d="M21.7071 2.2929c.3905.3905.3905 1.0237 0 1.4142l-11 11c-.3905.3905-1.0237.3905-1.4142 0-.3905-.3905-.3905-1.0237 0-1.4142l11-11c.3905-.3905 1.0237-.3905 1.4142 0z" /></svg>
                            </a>
                        </div>
                    </div>
                    <a href="https://4unaturalistic.netlify.app" target="_blank"  v-scroll-reveal="{ delay: 300, mobile: true, viewOffset: { top: 50, right: 0, bottom: 0, left: 0, }, origin: 'right', easing: 'cubic-bezier(0.5, 0, 0, 1)', distance: '80px'}" class="w-full md:w-1/2 md:h-full z-0 rounded flex justify-center items-center shadow-xl focus:outline-none focus:ring focus:ring-blue-400">
											<nuxt-picture
												placeholder
												src="/projects/4unaturalistic-netlify.png"
												class="rounded-sm project-img w-full"
												title="4unaturalistic.netlify.app"
												alt="4unaturalistic.netlify.app"
												width="480"
												height="245"
											/>
                    </a>
                </div>
                <!-- Project 2 - End -->
                <!-- Project 3 - Start -->
                <div class="w-full flex flex-wrap relative justify-end rounded mb-10" >
                    <a href="https://avenest.smitpatelx.com" target="_blank"  v-scroll-reveal="{ delay: 300, mobile: true, viewOffset: { top: 50, right: 0, bottom: 0, left: 0, }, origin: 'left', easing: 'cubic-bezier(0.5, 0, 0, 1)', distance: '80px'}" class="w-full md:w-1/2 md:h-full z-0 rounded flex justify-center items-center shadow-xl focus:outline-none focus:ring focus:ring-blue-400">
											<nuxt-picture
												placeholder
												src="/projects/avenest.png"
												class="rounded-sm project-img w-full"
												title="avenest.smitpatelx.com"
												alt="avenest.smitpatelx.com"
												width="480"
												height="245"
											/>
                    </a>
                    <div v-scroll-reveal="{ delay: 300, mobile: true, viewOffset: { top: 50, right: 0, bottom: 0, left: 0, }, origin: 'right', easing: 'cubic-bezier(0.5, 0, 0, 1)', distance: '80px'}" class="w-full md:w-1/2 z-10 flex flex-wrap flex-col justify-start items-end py-5 md:min-h-full">
                        <h3 class="font-mono text-blue-600 text-sm text-right">Featured Project</h3>
                        <h4 class="font-sans text-gray-700 text-2xl text-right mt-1 font-medium tracking-wider">Avenest</h4>
                        <div class="text-sm md:text-base text-gray-300 font-light mt-6 justify-end px-5 py-4 text-left ml-0 md:-ml-10 bg-blue-dark shadow-xl">
                            This is a real estate listing website. Includes functionalities like login, register, user management, moderation and API.
                        </div>
                        <div class="w-full flex flex-wrap px-2 pt-4 text-sm tracking-wide text-gray-700 justify-center items-center">
                            <span class="mx-2">Php</span>
                            <span class="mx-2">Vue.js</span>
                            <span class="mx-2">Tailwind</span>
                            <span class="mx-2">PostgreSQL</span>
                        </div>
                        <div class="w-full flex justify-center items-center pt-4 px-10">
                            <a href="https://github.com/smitpatelx/avenest" target="_blank" class="mx-2 text-gray-500 hover:text-opacity-75 rounded-md">
                                <svg class="fill-current h-6 w-6" viewBox="0 0 24 24"><g clip-path="url(#clip0)"><path d="M16 23c-.6 0-1-.4-1-1v-3.9c.1-.8-.2-1.4-.7-1.9-.3-.3-.4-.7-.2-1 .1-.4.5-.6.8-.7 2.9-.3 5.6-1.3 5.6-6 0-1.1-.4-2.2-1.2-3.1-.3-.3-.3-.7-.2-1 .3-.8.3-1.6.1-2.4-.5.1-1.3.4-2.6 1.3-.2.2-.5.2-.8.1-2.1-.6-4.4-.6-6.5 0-.3.1-.6.1-.9-.1C7.2 2.4 6.3 2.1 5.8 2c-.2.8-.2 1.6.1 2.4.1.4.1.8-.2 1-.8.9-1.2 2-1.2 3.1 0 4.7 2.7 5.7 5.6 6 .4 0 .7.3.8.7.1.4 0 .8-.2 1-.5.5-.7 1.1-.7 1.8v3.9c0 .6-.4 1-1 1s-1-.4-1-1v-1.7c-3 .5-4.3-1.2-5.2-2.3-.4-.5-.7-.9-1.1-1-.5-.1-.9-.7-.7-1.2.1-.5.7-.9 1.2-.7 1 .3 1.6 1 2.2 1.7.8 1.1 1.5 1.9 3.6 1.5v-.1c0-.6.1-1.3.3-1.8-2.8-.6-5.8-2.4-5.8-7.7 0-1.5.5-2.9 1.4-4-.4-1.4-.3-2.7.3-4 .1-.3.3-.5.6-.6.4-.1 1.7-.3 4.4 1.4 2.2-.5 4.5-.5 6.6 0 2.6-1.7 4-1.5 4.4-1.4.3.1.5.3.6.6.5 1.3.6 2.6.3 3.9.9 1.1 1.4 2.5 1.4 4 0 5.7-3.4 7.2-5.8 7.8.2.6.3 1.3.3 1.9V22c0 .6-.4 1-1 1z" /></g><defs><clipPath id="clip0"><path d="M0 0h24v24H0z"/></clipPath></defs></svg>
                            </a>
                            <a href="https://avenest.smitpatelx.com" target="_blank" class="mx-2 text-gray-500 hover:text-opacity-75 rounded-md">
                                <svg class="fill-current h-6 w-6" viewBox="0 0 24 24"><path fill-rule="evenodd" clip-rule="evenodd" d="M5 7a1 1 0 00-1 1v11a1 1 0 001 1h11a1.0001 1.0001 0 001-1v-6c0-.5523.4477-1 1-1s1 .4477 1 1v6a3 3 0 01-3 3H5a3 3 0 01-3-3V8a3 3 0 013-3h6c.5523 0 1 .4477 1 1s-.4477 1-1 1H5zM14 3c0-.5523.4477-1 1-1h6c.5523 0 1 .4477 1 1v6c0 .5523-.4477 1-1 1s-1-.4477-1-1V4h-5c-.5523 0-1-.4477-1-1z"/><path fill-rule="evenodd" clip-rule="evenodd" d="M21.7071 2.2929c.3905.3905.3905 1.0237 0 1.4142l-11 11c-.3905.3905-1.0237.3905-1.4142 0-.3905-.3905-.3905-1.0237 0-1.4142l11-11c.3905-.3905 1.0237-.3905 1.4142 0z" /></svg>
                            </a>
                        </div>
                    </div>
                </div>
                <!-- Project 3 - End -->
                <!-- Project 4 - Start -->
                <div class="w-full flex flex-wrap-reverse md:flex-wrap relative justify-end rounded mb-10" >
                    <div v-scroll-reveal="{ delay: 300, mobile: true, viewOffset: { top: 50, right: 0, bottom: 0, left: 0, }, origin: 'left', easing: 'cubic-bezier(0.5, 0, 0, 1)', distance: '80px'}" class="w-full md:w-1/2 z-10 flex flex-wrap flex-col justify-start items-start py-5 md:min-h-full">
                        <h3 class="font-mono text-blue-600 text-sm text-right">Featured Project</h3>
                        <h4 class="font-sans text-gray-700 text-2xl text-right mt-1 font-medium tracking-wider">Snapi</h4>
                        <div class="text-sm md:text-base text-gray-300 font-light mt-6 justify-end px-5 py-4 text-left mr-0 md:-mr-10 bg-blue-dark shadow-xl">
                            This is a SAS software website. Includes functionalities like product showcase, mega menu, login, register, subscribtion and many more. 
                        </div>
                        <div class="w-full flex flex-wrap px-2 pt-4 text-sm tracking-wide text-gray-700 justify-center items-center">
                            <span class="mx-2">Nuxt-js</span>
                            <span class="mx-2">Tailwindcss</span>
                            <span class="mx-2">NodeJs</span>
                            <span class="mx-2">SCSS</span>
                        </div>
                        <div class="w-full flex justify-center items-center pt-4 px-10">
                            <a href="https://github.com/smitpatelx/snapi_main_web" target="_blank" class="mx-2 text-gray-500 hover:text-opacity-75 rounded-md">
                                <svg class="fill-current h-6 w-6" viewBox="0 0 24 24"><g clip-path="url(#clip0)"><path d="M16 23c-.6 0-1-.4-1-1v-3.9c.1-.8-.2-1.4-.7-1.9-.3-.3-.4-.7-.2-1 .1-.4.5-.6.8-.7 2.9-.3 5.6-1.3 5.6-6 0-1.1-.4-2.2-1.2-3.1-.3-.3-.3-.7-.2-1 .3-.8.3-1.6.1-2.4-.5.1-1.3.4-2.6 1.3-.2.2-.5.2-.8.1-2.1-.6-4.4-.6-6.5 0-.3.1-.6.1-.9-.1C7.2 2.4 6.3 2.1 5.8 2c-.2.8-.2 1.6.1 2.4.1.4.1.8-.2 1-.8.9-1.2 2-1.2 3.1 0 4.7 2.7 5.7 5.6 6 .4 0 .7.3.8.7.1.4 0 .8-.2 1-.5.5-.7 1.1-.7 1.8v3.9c0 .6-.4 1-1 1s-1-.4-1-1v-1.7c-3 .5-4.3-1.2-5.2-2.3-.4-.5-.7-.9-1.1-1-.5-.1-.9-.7-.7-1.2.1-.5.7-.9 1.2-.7 1 .3 1.6 1 2.2 1.7.8 1.1 1.5 1.9 3.6 1.5v-.1c0-.6.1-1.3.3-1.8-2.8-.6-5.8-2.4-5.8-7.7 0-1.5.5-2.9 1.4-4-.4-1.4-.3-2.7.3-4 .1-.3.3-.5.6-.6.4-.1 1.7-.3 4.4 1.4 2.2-.5 4.5-.5 6.6 0 2.6-1.7 4-1.5 4.4-1.4.3.1.5.3.6.6.5 1.3.6 2.6.3 3.9.9 1.1 1.4 2.5 1.4 4 0 5.7-3.4 7.2-5.8 7.8.2.6.3 1.3.3 1.9V22c0 .6-.4 1-1 1z" /></g><defs><clipPath id="clip0"><path d="M0 0h24v24H0z"/></clipPath></defs></svg>
                            </a>
                            <a href="https://snapi.netlify.app/" target="_blank" class="mx-2 text-gray-500 hover:text-opacity-75 rounded-md">
                                <svg class="fill-current h-6 w-6" viewBox="0 0 24 24"><path fill-rule="evenodd" clip-rule="evenodd" d="M5 7a1 1 0 00-1 1v11a1 1 0 001 1h11a1.0001 1.0001 0 001-1v-6c0-.5523.4477-1 1-1s1 .4477 1 1v6a3 3 0 01-3 3H5a3 3 0 01-3-3V8a3 3 0 013-3h6c.5523 0 1 .4477 1 1s-.4477 1-1 1H5zM14 3c0-.5523.4477-1 1-1h6c.5523 0 1 .4477 1 1v6c0 .5523-.4477 1-1 1s-1-.4477-1-1V4h-5c-.5523 0-1-.4477-1-1z"/><path fill-rule="evenodd" clip-rule="evenodd" d="M21.7071 2.2929c.3905.3905.3905 1.0237 0 1.4142l-11 11c-.3905.3905-1.0237.3905-1.4142 0-.3905-.3905-.3905-1.0237 0-1.4142l11-11c.3905-.3905 1.0237-.3905 1.4142 0z" /></svg>
                            </a>
                        </div>
                    </div>
                    <a href="https://snapi.netlify.app/" target="_blank"  v-scroll-reveal="{ delay: 300, mobile: true, viewOffset: { top: 50, right: 0, bottom: 0, left: 0, }, origin: 'right', easing: 'cubic-bezier(0.5, 0, 0, 1)', distance: '80px'}" class="w-full md:w-1/2 md:h-full z-0 rounded flex justify-center items-center shadow-xl focus:outline-none focus:ring focus:ring-blue-400">
											<nuxt-picture
												placeholder
												src="/projects/snapi.png"
												class="rounded-sm project-img w-full"
												title="snapi.netlify.app"
												alt="snapi.netlify.app"
												width="480"
												height="245"
											/>
                    </a>
                </div>
                <!-- Project 4 - End -->
                <!-- Project 5 - Start -->
                <div class="w-full flex flex-wrap relative justify-end rounded mb-10" >
                    <a href="https://dcwebd.netlify.app/" target="_blank"  v-scroll-reveal="{ delay: 300, mobile: true, viewOffset: { top: 50, right: 0, bottom: 0, left: 0, }, origin: 'left', easing: 'cubic-bezier(0.5, 0, 0, 1)', distance: '80px'}" class="w-full md:w-1/2 md:h-full z-0 rounded flex justify-center items-center shadow-xl focus:outline-none focus:ring focus:ring-blue-400">
                      <nuxt-picture
												placeholder
												src="/projects/dcwebd.png"
												class="rounded-sm project-img w-full"
												title="dcwebd.netlify.app"
												alt="dcwebd.netlify.app"
												width="480"
												height="245"
											/>
                    </a>
                    <div v-scroll-reveal="{ delay: 300, mobile: true, viewOffset: { top: 50, right: 0, bottom: 0, left: 0, }, origin: 'right', easing: 'cubic-bezier(0.5, 0, 0, 1)', distance: '80px'}" class="w-full md:w-1/2 z-10 flex flex-wrap flex-col justify-start items-end py-5 md:min-h-full">
                        <h3 class="font-mono text-blue-600 text-sm text-right">Featured Project</h3>
                        <h4 class="font-sans text-gray-700 text-2xl text-right mt-1 font-medium tracking-wider">College Course Site</h4>
                        <div class="text-sm md:text-base text-gray-300 font-light mt-6 justify-end px-5 py-4 text-left ml-0 md:-ml-10 bg-blue-dark shadow-xl">
                            This is an educational site build for web development course. Includes functionality like - attandance tracker, docs, resources and user management.
                        </div>
                        <div class="w-full flex flex-wrap px-2 pt-4 text-sm tracking-wide text-gray-700 justify-center items-center">
                            <span class="mx-2">Laravel</span>
                            <span class="mx-2">Vue.js</span>
                            <span class="mx-2">Vue-Press</span>
                            <span class="mx-2">Vuetify</span>
                        </div>
                        <div class="w-full flex justify-center items-center pt-4 px-10">
                            <a href="https://github.com/smitpatelx/dcwebd-vue" target="_blank" class="mx-2 text-gray-500 hover:text-opacity-75 rounded-md">
                                <svg class="fill-current h-6 w-6" viewBox="0 0 24 24"><g clip-path="url(#clip0)"><path d="M16 23c-.6 0-1-.4-1-1v-3.9c.1-.8-.2-1.4-.7-1.9-.3-.3-.4-.7-.2-1 .1-.4.5-.6.8-.7 2.9-.3 5.6-1.3 5.6-6 0-1.1-.4-2.2-1.2-3.1-.3-.3-.3-.7-.2-1 .3-.8.3-1.6.1-2.4-.5.1-1.3.4-2.6 1.3-.2.2-.5.2-.8.1-2.1-.6-4.4-.6-6.5 0-.3.1-.6.1-.9-.1C7.2 2.4 6.3 2.1 5.8 2c-.2.8-.2 1.6.1 2.4.1.4.1.8-.2 1-.8.9-1.2 2-1.2 3.1 0 4.7 2.7 5.7 5.6 6 .4 0 .7.3.8.7.1.4 0 .8-.2 1-.5.5-.7 1.1-.7 1.8v3.9c0 .6-.4 1-1 1s-1-.4-1-1v-1.7c-3 .5-4.3-1.2-5.2-2.3-.4-.5-.7-.9-1.1-1-.5-.1-.9-.7-.7-1.2.1-.5.7-.9 1.2-.7 1 .3 1.6 1 2.2 1.7.8 1.1 1.5 1.9 3.6 1.5v-.1c0-.6.1-1.3.3-1.8-2.8-.6-5.8-2.4-5.8-7.7 0-1.5.5-2.9 1.4-4-.4-1.4-.3-2.7.3-4 .1-.3.3-.5.6-.6.4-.1 1.7-.3 4.4 1.4 2.2-.5 4.5-.5 6.6 0 2.6-1.7 4-1.5 4.4-1.4.3.1.5.3.6.6.5 1.3.6 2.6.3 3.9.9 1.1 1.4 2.5 1.4 4 0 5.7-3.4 7.2-5.8 7.8.2.6.3 1.3.3 1.9V22c0 .6-.4 1-1 1z" /></g><defs><clipPath id="clip0"><path d="M0 0h24v24H0z"/></clipPath></defs></svg>
                            </a>
                            <a href="https://dcwebd.netlify.app/" target="_blank" class="mx-2 text-gray-500 hover:text-opacity-75 rounded-md">
                                <svg class="fill-current h-6 w-6" viewBox="0 0 24 24"><path fill-rule="evenodd" clip-rule="evenodd" d="M5 7a1 1 0 00-1 1v11a1 1 0 001 1h11a1.0001 1.0001 0 001-1v-6c0-.5523.4477-1 1-1s1 .4477 1 1v6a3 3 0 01-3 3H5a3 3 0 01-3-3V8a3 3 0 013-3h6c.5523 0 1 .4477 1 1s-.4477 1-1 1H5zM14 3c0-.5523.4477-1 1-1h6c.5523 0 1 .4477 1 1v6c0 .5523-.4477 1-1 1s-1-.4477-1-1V4h-5c-.5523 0-1-.4477-1-1z"/><path fill-rule="evenodd" clip-rule="evenodd" d="M21.7071 2.2929c.3905.3905.3905 1.0237 0 1.4142l-11 11c-.3905.3905-1.0237.3905-1.4142 0-.3905-.3905-.3905-1.0237 0-1.4142l11-11c.3905-.3905 1.0237-.3905 1.4142 0z" /></svg>
                            </a>
                        </div>
                    </div>
                </div>
                <!-- Project 5 - End -->
            </div>
        </div>
    </section>
</template>
<script>
export default {
    
}
</script>
<style lang="scss" scoped>

.project-img{
    cursor: pointer;
}

.min-h-auto{
    min-height: auto;
}

.work-w{
    width:85%;

    @media (min-width: 768px) {
        width:70%;
    }
}

a{
    @apply focus:outline-none focus:ring focus:ring-blue-400;
}
</style>