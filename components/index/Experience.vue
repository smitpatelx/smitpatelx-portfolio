<template>
  <section
    class="w-full flex flex-wrap justify-center items-center mt-24 lg:mt-0 container-spx py-16 md:py-20 lg:py-24"
    id="experience"
  >
    <div class="flex flex-wrap justify-start items-center cursor-default">
      <h2
        v-scroll-reveal="{
          delay: 100,
          mobile: true,
          origin: 'bottom',
          easing: 'cubic-bezier(0.5, 0, 0, 1)',
          distance: '80px'
        }"
        class="w-full text-gray-700 text-3xl md:text-4xl font-semibold leading-tight text-center mb-12"
      >
        My Experience
      </h2>
      <div class="w-full h-full flex flex-wrap">
        <div
          class="w-full max-w-7xl flex flex-wrap justify-center items-stretch mx-auto"
        >
          <div
            class="my-4 p-3 w-full md:w-1/2 lg:w-1/3 flex flex-wrap justify-between items-stretch select-none"
            v-scroll-reveal="{
              delay: 400,
              mobile: true,
              origin: 'bottom',
              easing: 'cubic-bezier(0.5, 0, 0, 1)',
              distance: '80px'
            }"
          >
            <div class="bg-white shadow-lg rounded-lg p-6">
              <div
                class="w-full flex flex-wrap flex-col items-start justify-center"
              >
                <p class="text-xl font-secondary text-gray-800">
                  Full Stack Engineer
                </p>
                <p class="text-lg text-blue-500">Neurelo Inc</p>
                <p
                  class="text-base font-secondary text-gray-500 font-mono mt-3"
                >
                  Oct 2023 - Jan 2025
                </p>
              </div>
              <ul
                class="text-gray-800 pt-6 list-disc pl-4 text-base font-light"
              >
                <li>
                  Work directly with founders and team members to gather project
                  requirements and make decisions to execute.
                </li>
                <li>
                  Worked on developing, and testing SDKs for Typescript/JS,
                  Python, and GO. SDK code generation from UI forms to client
                  parameters.
                </li>
                <li>
                  Data viewer for MongoDB, MySQL & PostgreSQL. API playground to
                  test auto-generated APIs.
                </li>
                <li>
                  Re-design UI components and refactor them to improve
                  re-usability and code quality.
                </li>
                <li>
                  Development, architecture, and Publishing of the VsCode
                  extension pipeline. Add custom language support for syntax
                  highlighting.
                </li>
              </ul>
            </div>
          </div>

          <div
            class="my-4 p-3 w-full md:w-1/2 lg:w-1/3 flex flex-wrap justify-between items-stretch select-none"
            v-scroll-reveal="{
              delay: 400,
              mobile: true,
              origin: 'bottom',
              easing: 'cubic-bezier(0.5, 0, 0, 1)',
              distance: '80px'
            }"
          >
            <div class="bg-white shadow-lg rounded-lg p-6">
              <div
                class="w-full flex flex-wrap flex-col items-start justify-center"
              >
                <p class="text-xl font-secondary text-gray-800">
                  Lead Full Stack Engineer
                </p>
                <p class="text-lg text-blue-500">Datomar Labs</p>
                <p
                  class="text-base font-secondary text-gray-500 font-mono mt-3"
                >
                  Mar 2022 - May 2023
                </p>
              </div>
              <ul
                class="text-gray-800 pt-6 list-disc pl-4 text-base font-light"
              >
                <li>
                  Work with the business unit to understand, develop or refine
                  requirements for projects within the company.
                </li>
                <li>
                  Manage UX and UI design and/or work with outside design
                  stakeholders to ensure high quality design is implemented.
                </li>
                <li>
                  Build ci-cd pipelines, dockerize applications, setup projects,
                  develop independently, research emerging technologies.
                </li>
                <li>
                  Make use of technologies like React/Nextjs, MUI, Typescript,
                  GO, PostgreSQL, Vuejs, Wordpress, TailwindCss, Headless UI and
                  Framer Motion.
                </li>
                <li>
                  Work on optimizing, refactoring, analysis of code. Ensure good
                  quality of testing and setup logging & analytics.
                </li>
              </ul>
            </div>
          </div>

          <div
            class="my-4 p-3 w-full md:w-1/2 lg:w-1/3 flex flex-wrap justify-between items-stretch select-none"
            v-scroll-reveal="{
              delay: 400,
              mobile: true,
              origin: 'bottom',
              easing: 'cubic-bezier(0.5, 0, 0, 1)',
              distance: '80px'
            }"
          >
            <div class="bg-white shadow-lg rounded-lg p-6">
              <div
                class="w-full flex flex-wrap flex-col items-start justify-center"
              >
                <p class="text-xl font-secondary text-gray-800">
                  Software Engineer
                </p>
                <p class="text-lg text-blue-500">Farmlink Solutions</p>
                <p
                  class="text-base font-secondary text-gray-500 font-mono mt-3"
                >
                  Jan 2021 - Jan 2022
                </p>
              </div>
              <ul
                class="text-gray-800 pt-6 list-disc pl-4 text-base font-light"
              >
                <li>
                  Design, code and debug software applications using front end
                  frameworks and enterprise applications
                </li>
                <li>
                  Performing Software analysis, requirements gathering, software
                  reviews, identification of code metrics, system risk analysis,
                  and software reliability analysis.
                </li>
                <li>
                  Writing tests, migrations, end-to-end feature testing and
                  development using Python, Django, Postgres, Vuejs.
                </li>
                <li>
                  Mentor junior devs to meet code quality standards.
                </li>
                <li>
                  UI & UX design using figma, keeping up with latest
                  technologies, design UI animations using leaflet and
                  keyframes.
                </li>
              </ul>
            </div>
          </div>

          <div
            class="my-4 p-3 w-full md:w-1/2 lg:w-1/3 flex flex-wrap justify-between items-stretch select-none"
            v-scroll-reveal="{
              delay: 300,
              mobile: true,
              origin: 'bottom',
              easing: 'cubic-bezier(0.5, 0, 0, 1)',
              distance: '80px'
            }"
          >
            <div class="bg-white shadow-lg rounded-lg p-6">
              <div
                class="w-full flex flex-wrap flex-col items-start justify-center"
              >
                <p class="text-xl font-secondary text-gray-800">
                  Director of Web Development
                </p>
                <p class="text-lg text-blue-500">Blabbly</p>
                <p
                  class="text-base font-secondary text-gray-500 font-mono mt-3"
                >
                  June 2020 - Jan 2021
                </p>
              </div>
              <ul
                class="text-gray-800 pt-6 list-disc pl-4 text-base font-light"
              >
                <li>
                  Perform web development tasks utilizing PHP/NodeJs Framework,
                  Web Services, and SQL Server
                </li>
                <li>
                  Lead design and implementation of solutions for our corporate
                  websites and microsites
                </li>
                <li>
                  Design and evolve highly interactive user interfaces and HTML
                  prototypes for web and email initiatives
                </li>
                <li>
                  Work as part of an agile team fostering teamwork, mentoring
                  others, and striving for overall excellence
                </li>
                <li>
                  Utilize social media platforms, support advanced online
                  Marketing activities, and integrate with internal systems.
                </li>
              </ul>
            </div>
          </div>

          <div
            class="my-4 p-3 w-full md:w-1/2 lg:w-1/3 flex flex-wrap justify-between items-stretch select-none"
            v-scroll-reveal="{
              delay: 200,
              mobile: true,
              origin: 'bottom',
              easing: 'cubic-bezier(0.5, 0, 0, 1)',
              distance: '80px'
            }"
          >
            <div class="bg-white shadow-lg rounded-lg p-6">
              <div
                class="w-full flex flex-wrap flex-col items-start justify-center"
              >
                <p class="text-xl font-secondary text-gray-800">
                  Full-stack Developer
                </p>
                <p class="text-lg text-blue-500">Netdevv</p>
                <p
                  class="text-base font-secondary text-gray-500 font-mono mt-3"
                >
                  Oct 2017 – Apr 2020
                </p>
              </div>
              <ul
                class="text-gray-800 pt-6 list-disc pl-4 text-base font-light"
              >
                <li>
                  Building Backend API using Node.js, PHP, ASP.NET, JAVA to
                  serve requests and content on front-end.
                </li>
                <li>
                  Setup containers on Debian based systems to host Nginx and
                  Apache servers.
                </li>
                <li>
                  Setup docker containers for Postgres, MySql and MongoDB to
                  improve stability and scalability of projects.
                </li>
                <li>
                  Develop UI/UX by using tools like AdobeXD, Figma and
                  collobrate with other developers to improve design.
                </li>
                <li>
                  Work as part of an agile team fostering teamwork, mentoring
                  others, and striving for overall excellence.
                </li>
              </ul>
            </div>
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
    SlideXRightTransition
  },
  data() {
    return {
      current_company: 0
    }
  },
  methods: {
    change_company(val) {
      this.current_company = val
    }
  }
}
</script>
<style lang="scss" scoped>
.w-26 {
  width: 6.5rem;
}

.text-nav {
  @apply z-20 text-center self-center text-gray-900 transition-all duration-300 ease-out text-base font-secondary tracking-wider py-2 px-3 rounded-md leading-4;
  width: 6.5rem;
  &:focus {
    @apply outline-none select-none bg-transparent;
    -webkit-tap-highlight-color: transparent;
  }

  &:hover {
    @apply text-gray-600;
  }
}

.btn-anim-1 {
  transition: all 0.4s ease-in-out;
  @apply text-left items-center justify-center py-2;

  &:hover {
    background-color: rgba(99, 179, 237, 0.191);
  }
}

li {
  @apply mb-2.5;

  // &::before{
  //     content:'';
  //     @apply inline-flex w-2 h-0.5 bg-blue-600 absolute -left-4 top-3 transform;
  // }
}
</style>
