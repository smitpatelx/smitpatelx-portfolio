<template>
  <div class="w-full bg-dark-blue relative mt-16 md:mt-4">
    <section class="w-full container-spx grid grid-cols-4 py-32 md:py-64 bg-transparent" id="about">
      <div class="col-span-4 lg:col-span-2 flex flex-wrap justify-start content-start cursor-default text-base">
        <h4 v-scroll-reveal="{ delay: 100, mobile: true, origin: 'bottom', easing: 'cubic-bezier(0.5, 0, 0, 1)', distance: '80px' }" class="relative w-full text-left flex flex-wrap justify-start">
          <span class="w-full text-blue-s text-xl font-secondary leading-tight">Turn vision into reality</span>
        </h4>
        <h2 v-scroll-reveal="{ delay: 200, mobile: true, origin: 'bottom', easing: 'cubic-bezier(0.5, 0, 0, 1)', distance: '80px' }" class="relative w-full text-left flex flex-wrap justify-start">
          <span class="w-full text-gray-200 text-3xl lg:text-4xl mt-6 font-secondary leading-tight"
            >I believe in learning and exploring new
            <span class="text-blue-s font-bold">IDEAS</span>
          </span>
        </h2>
        <p v-scroll-reveal="{ delay: 300, mobile: true, origin: 'bottom', easing: 'cubic-bezier(0.5, 0, 0, 1)', distance: '80px' }" class="mt-5 text-gray-300 tracking-wide font-light text-lg">
          With over 4 years of senior experience working in the Software Industry with proficiencies in operations, back-end, front-end and dev-ops, I continue to be a driving force for my team.
        </p>
        <div class="w-full flex flex-wrap justify-start items-center">
          <nuxt-link to="blog" class="base-btn bg-blue-s text-gray-900 mt-8 hover:bg-white">
            Explore my blog
            <svg class="fill-current h-3 inline-block ml-2" viewBox="0 0 16 16">
              <path fill-rule="evenodd" d="M8.70711.292893c-.39053-.390524-1.02369-.390524-1.41422 0-.39052.390524-.39052 1.023687 0 1.414217L12.5858 7H1c-.552285 0-1 .44772-1 1 0 .55229.447715 1 1 1h11.5858l-5.29291 5.2929c-.39052.3905-.39052 1.0237 0 1.4142.39053.3905 1.02369.3905 1.41422 0l6.99999-6.99999c.3905-.39053.3905-1.02369 0-1.41422L8.70711.292893z" clip-rule="evenodd"/>
            </svg>
          </nuxt-link>
        </div>
        <div class="skill-grid">
          <div>
            <div>
              <svg viewBox="0 0 50 50">
                <path class="animate-icon-1 " fill="#00D4FF" d="M18.9542 12.6362c0-.9163.7428-1.6591 1.6591-1.6591h18.2494c.9163 0 1.659.7428 1.659 1.6591v29.8627c0 .9162-.7427 1.659-1.659 1.659H20.6133c-.9163 0-1.6591-.7428-1.6591-1.659V12.6362z" />
                <path fill="#6C44EE" fill-opacity=".75" d="M9 7.65904C9 6.74278 9.74278 6 10.659 6h18.2495c.9162 0 1.659.74278 1.659 1.65904V37.5217c0 .9163-.7428 1.6591-1.659 1.6591H10.659c-.91622 0-1.659-.7428-1.659-1.6591V7.65904z" />
                <path class=" animate-pulse" fill="#00D4FF" fill-rule="evenodd" d="M13.8112 22.5904l3.8158 3.8158-1.1614 1.1613-4.9771-4.9771 4.9771-4.9771 1.1614 1.1613-3.8158 3.8158zm11.9451 0l-3.8158 3.8158 1.1613 1.1613 4.9771-4.9771-4.9771-4.9771-1.1613 1.1613 3.8158 3.8158z" clip-rule="evenodd" />
              </svg>
            </div>
            <p>Libraries</p>
            <ul>
              <li>Vue</li>
              <li>Express.js</li>
              <li>React</li>
              <li>Jquery</li>
              <li>Tailwindcss</li>
            </ul>
          </div>
          <div>
            <div>
              <svg viewBox="0 0 50 50">
                <path class="animate-pulse" fill="#6C44EE" d="M6 8.11111C6 6.94518 6.94518 6 8.11111 6H39.7778c1.1659 0 2.1111.94518 2.1111 2.11111V30.2778c0 1.1659-.9452 2.1111-2.1111 2.1111H8.11111C6.94518 32.3889 6 31.4437 6 30.2778V8.11111z" />
                <path class="animate-icon-2" fill="#00D4FF" d="M41.889 29.2222c0 6.9956-5.6711 12.6667-12.6667 12.6667-6.9956 0-12.6666-5.6711-12.6666-12.6667 0-6.9956 5.671-12.6667 12.6666-12.6667 6.9956 0 12.6667 5.6711 12.6667 12.6667z" />
                <path class="animate-icon-2" fill="#00D4FF" fill-rule="evenodd" d="M43.875 31.1523l-2.586-.3373c.0679-.5201.103-1.0517.103-1.5928 0-.541-.0351-1.0726-.103-1.5928l2.586-.3373c.0824.6317.1249 1.276.1249 1.9301 0 .6542-.0425 1.2984-.1249 1.9301zm-.9965-7.5868l-2.4089.9989c-.4097-.9879-.9464-1.9114-1.5906-2.7496l2.0678-1.589c.7814 1.0168 1.4335 2.1383 1.9317 3.3397zm-4.6599-6.0679l-1.589 2.0678c-.8383-.6442-1.7617-1.181-2.7497-1.5907l.999-2.4089c1.2014.4982 2.3228 1.1503 3.3397 1.9318zm-7.0664-2.9282l-.3373 2.5859c-.5201-.0678-1.0517-.103-1.5928-.103-.5411 0-1.0726.0352-1.5928.103l-.3373-2.5859c.6317-.0824 1.2759-.1249 1.9301-.1249.6542 0 1.2984.0425 1.9301.1249zm-7.5868.9964l.9989 2.4089c-.988.4097-1.9114.9465-2.7496 1.5907l-1.5891-2.0678c1.0169-.7815 2.1384-1.4336 3.3398-1.9318zm-6.068 4.66l2.0678 1.589c-.6441.8382-1.1809 1.7617-1.5906 2.7496l-2.4089-.9989c.4982-1.2014 1.1503-2.3229 1.9317-3.3397zm-2.9282 7.0663c-.0824.6317-.1249 1.276-.1249 1.9301 0 .6542.0425 1.2984.1249 1.9302l2.586-.3374c-.0679-.5201-.103-1.0517-.103-1.5928 0-.541.0351-1.0726.103-1.5928l-2.586-.3373zm.9965 7.5869l2.4089-.999c.4097.988.9465 1.9114 1.5906 2.7497l-2.0678 1.589c-.7814-1.0169-1.4335-2.1383-1.9317-3.3397zm4.6599 6.0679l1.5891-2.0678c.8382.6442 1.7616 1.1809 2.7496 1.5906l-.9989 2.409c-1.2014-.4982-2.3229-1.1503-3.3398-1.9318zm7.0664 2.9282l.3373-2.5859c.5202.0678 1.0517.103 1.5928.103.5411 0 1.0727-.0352 1.5928-.103l.3373 2.5859c-.6317.0824-1.2759.1249-1.9301.1249-.6542 0-1.2984-.0425-1.9301-.1249zm7.5869-.9964l-.999-2.409c.988-.4097 1.9114-.9464 2.7497-1.5906l1.589 2.0678c-1.0169.7815-2.1383 1.4336-3.3397 1.9318zm6.0679-4.66c.7814-1.0169 1.4335-2.1383 1.9317-3.3397l-2.4089-.999c-.4097.988-.9464 1.9114-1.5906 2.7497l2.0678 1.589z" clip-rule="evenodd" />
                <path class="animate-pulse" fill="#6C44EE" fill-opacity=".4" d="M6 8.11111C6 6.94518 6.94518 6 8.11111 6H39.7778c1.1659 0 2.1111.94518 2.1111 2.11111V30.2778c0 1.1659-.9452 2.1111-2.1111 2.1111H8.11111C6.94518 32.3889 6 31.4437 6 30.2778V8.11111z" />
                <path class="animate-icon-2" fill="#00D4FF" fill-opacity=".5" d="M41.889 29.2222c0 6.9956-5.6711 12.6667-12.6667 12.6667-6.9956 0-12.6666-5.6711-12.6666-12.6667 0-6.9956 5.671-12.6667 12.6666-12.6667 6.9956 0 12.6667 5.6711 12.6667 12.6667z" />
                <path class="animate-icon-2" fill="#6C44EE" fill-opacity=".5" d="M34.2683 29.6342c0 2.5593-2.0748 4.6341-4.6341 4.6341-2.5594 0-4.6342-2.0748-4.6342-4.6341C25 27.0748 27.0748 25 29.6342 25c2.5593 0 4.6341 2.0748 4.6341 4.6342z" />
                <path class="animate-icon-2" fill="#00D4FF" fill-opacity=".5" fill-rule="evenodd" clip-rule="evenodd" d="M43.875 31.1523l-2.586-.3373c.0679-.5201.103-1.0517.103-1.5928 0-.541-.0351-1.0726-.103-1.5928l2.586-.3373c.0824.6317.1249 1.276.1249 1.9301 0 .6542-.0425 1.2984-.1249 1.9301zm-.9965-7.5868l-2.4089.9989c-.4097-.9879-.9464-1.9114-1.5906-2.7496l2.0678-1.589c.7814 1.0168 1.4335 2.1383 1.9317 3.3397zm-4.6599-6.0679l-1.589 2.0678c-.8383-.6442-1.7617-1.181-2.7497-1.5907l.999-2.4089c1.2014.4982 2.3228 1.1503 3.3397 1.9318zm-7.0664-2.9282l-.3373 2.5859c-.5201-.0678-1.0517-.103-1.5928-.103-.5411 0-1.0726.0352-1.5928.103l-.3373-2.5859c.6317-.0824 1.2759-.1249 1.9301-.1249.6542 0 1.2984.0425 1.9301.1249zm-7.5868.9964l.9989 2.4089c-.988.4097-1.9114.9465-2.7496 1.5907l-1.5891-2.0678c1.0169-.7815 2.1384-1.4336 3.3398-1.9318zm-6.068 4.66l2.0678 1.589c-.6441.8382-1.1809 1.7617-1.5906 2.7496l-2.4089-.9989c.4982-1.2014 1.1503-2.3229 1.9317-3.3397zm-2.9282 7.0663c-.0824.6317-.1249 1.276-.1249 1.9301 0 .6542.0425 1.2984.1249 1.9302l2.586-.3374c-.0679-.5201-.103-1.0517-.103-1.5928 0-.541.0351-1.0726.103-1.5928l-2.586-.3373zm.9965 7.5869l2.4089-.999c.4097.988.9465 1.9114 1.5906 2.7497l-2.0678 1.589c-.7814-1.0169-1.4335-2.1383-1.9317-3.3397zm4.6599 6.0679l1.5891-2.0678c.8382.6442 1.7616 1.1809 2.7496 1.5906l-.9989 2.409c-1.2014-.4982-2.3229-1.1503-3.3398-1.9318zm7.0664 2.9282l.3373-2.5859c.5202.0678 1.0517.103 1.5928.103.5411 0 1.0727-.0352 1.5928-.103l.3373 2.5859c-.6317.0824-1.2759.1249-1.9301.1249-.6542 0-1.2984-.0425-1.9301-.1249zm7.5869-.9964l-.999-2.409c.988-.4097 1.9114-.9464 2.7497-1.5906l1.589 2.0678c-1.0169.7815-2.1383 1.4336-3.3397 1.9318zm6.0679-4.66c.7814-1.0169 1.4335-2.1383 1.9317-3.3397l-2.4089-.999c-.4097.988-.9464 1.9114-1.5906 2.7497l2.0678 1.589z" />
                <path class="animate-pulse"  stroke="#0A2540" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15.5 18.6667h4.9259M10.2222 17.6111l3.6944-3.6944-3.6944-3.6945" />
              </svg>
            </div>
            <p>Languages</p>
            <ul>
              <li>Javascipt</li>
              <li>PHP</li>
              <li>Python</li>
              <li>C Sharp</li>
              <li>Java</li>
            </ul>
          </div>
          <div>
            <div>
              <svg viewBox="0 0 50 50">
                <path class="animate-pulse" fill="#00D4FF" d="M36 25c0 6.0751-4.9249 11-11 11s-11-4.9249-11-11 4.9249-11 11-11 11 4.9249 11 11z" />
                <path fill="#0A2540" d="M26.3884 21.7174c-.1157.118-.1805.2767-.1805.442 0 .1652.0648.3239.1805.442l1.0102 1.0102c.1181.1157.2768.1805.442.1805.1653 0 .324-.0648.442-.1805l2.3805-2.3804c.3174.7016.4136 1.4833.2755 2.241-.138.7576-.5037 1.4552-1.0482 1.9997-.5446.5446-1.2422.9103-1.9998 1.0483s-1.5394.0419-2.241-.2756l-4.363 4.3631c-.2512.2512-.5919.3923-.9472.3923-.3552 0-.6959-.1411-.9471-.3923-.2512-.2512-.3923-.5919-.3923-.9471 0-.3553.1411-.696.3923-.9472l4.3631-4.363c-.3175-.7016-.4136-1.4834-.2756-2.241s.5037-1.4552 1.0483-1.9998c.5445-.5445 1.2421-.9102 1.9997-1.0482.7577-.1381 1.5394-.0419 2.241.2755l-2.3741 2.3742-.0063.0063z"/>
                <g class="animate-icon-3">
                    <path fill="#6C44EE" fill-rule="evenodd" d="M44.831 27.6122l-3.4998-.4565c.0918-.704.1394-1.4234.1394-2.1557s-.0476-1.4517-.1394-2.1557l3.4998-.4565c.1115.855.169 1.7269.169 2.6122s-.0575 1.7572-.169 2.6122zm-1.3486-10.268l-3.2602 1.352c-.5545-1.3371-1.2809-2.5868-2.1527-3.7213l2.7985-2.1506c1.0576 1.3763 1.9401 2.894 2.6144 4.5199zm-6.3067-8.21219l-2.1506 2.79859c-1.1345-.8719-2.3842-1.5983-3.7213-2.15278l1.352-3.26021c1.6259.67426 3.1436 1.55682 4.5199 2.6144zm-9.5635-3.96296l-.4565 3.49976c-.704-.09183-1.4234-.1394-2.1557-.1394s-1.4517.04757-2.1557.1394l-.4565-3.49976C23.2428 5.05753 24.1147 5 25 5s1.7572.05753 2.6122.16905zm-10.268 1.34856l1.352 3.26021c-1.3371.55448-2.5868 1.28088-3.7213 2.15278l-2.1506-2.79859c1.3763-1.05758 2.894-1.94014 4.5199-2.6144zM9.13201 12.8243l2.79859 2.1506c-.8719 1.1345-1.5983 2.3842-2.15278 3.7213l-3.26021-1.352c.67426-1.6259 1.55682-3.1436 2.6144-4.5199zm-3.96296 9.5635C5.05753 23.2428 5 24.1147 5 25s.05753 1.7573.16905 2.6122l3.49976-.4565c-.09183-.704-.1394-1.4234-.1394-2.1557s.04757-1.4517.1394-2.1557l-3.49976-.4565zm1.34856 10.268l3.26021-1.352c.55448 1.3371 1.28088 2.5868 2.15278 3.7213l-2.79859 2.1506c-1.05758-1.3763-1.94014-2.894-2.6144-4.5199zm6.30669 8.2122l2.1506-2.7985c1.1345.8718 2.3842 1.5982 3.7213 2.1527l-1.352 3.2602c-1.6259-.6743-3.1436-1.5568-4.5199-2.6144zm9.5635 3.963l.4565-3.4998c.704.0918 1.4234.1394 2.1557.1394s1.4517-.0476 2.1557-.1394l.4565 3.4998C26.7573 44.9425 25.8853 45 25 45s-1.7572-.0575-2.6122-.169zm10.268-1.3486l-1.352-3.2602c1.3371-.5545 2.5868-1.2809 3.7213-2.1527l2.1506 2.7985c-1.3763 1.0576-2.894 1.9401-4.5199 2.6144zm8.2122-6.3067c1.0576-1.3763 1.9401-2.894 2.6144-4.5199l-3.2602-1.352c-.5545 1.3371-1.2809 2.5868-2.1527 3.7213l2.7985 2.1506z" clip-rule="evenodd" />
                    <path fill="#6C44EE" fill-rule="evenodd" d="M25.0003 42.1429c9.4677 0 17.1428-7.6752 17.1428-17.1429S34.468 7.85715 25.0003 7.85715C15.5325 7.85715 7.85742 15.5323 7.85742 25c0 9.4677 7.67508 17.1429 17.14288 17.1429zm.0298-2.2256c8.222 0 14.8872-6.6652 14.8872-14.8872 0-8.222-6.6652-14.8872-14.8872-14.8872-8.222 0-14.8872 6.6652-14.8872 14.8872 0 8.222 6.6652 14.8872 14.8872 14.8872z" clip-rule="evenodd" />
                </g>
              </svg>
            </div>
            <p>Tools</p>
            <ul>
              <li>Figma</li>
              <li>Adobe XD</li>
              <li>VS Code</li>
              <li>Blender</li>
              <li>Photohsop</li>
            </ul>
          </div>
        </div>
      </div>
      <div class="flex col-span-4 lg:col-span-2 justify-center items-center">
        <div class="w-full flex flex-wrap justify-center items-center mt-24 lg:mt-0 p-8" >
          <nuxt-picture
            placeholder 
            src="/SMIT-GRAY-SCALED.jpg"
            alt="Smit Patel"
            width="400"
            height="400"
            class="w-64 md:w-full max-w-sm z-10 h-auto ml-0 md:ml-8 rounded transform hover:scale-95 skew-y-3 -skew-x-6 transition-all duration-300 ease-in-out" 
          />
        </div>
      </div>
    </section>
  </div>
</template>
<script>
export default {
  data() {
    return {};
  },
};
</script>
<style lang="scss" scoped>
.animate-icon-1 {animation: animate-icon-1 1.5s ease-in-out infinite both;  transform-origin: 55% 50%;}
@keyframes animate-icon-1 {from{transform:scale(1);transform-origin:center center;animation-timing-function:ease-out}10%{transform:scale(.91);animation-timing-function:ease-in}17%{transform:scale(.98);animation-timing-function:ease-out}33%{transform:scale(.87);animation-timing-function:ease-in}45%{transform:scale(1);animation-timing-function:ease-out}}

.animate-icon-2 {
  animation: rotate-2 5s ease-in-out infinite alternate;
  transform-origin: 59% 59%;
  @keyframes rotate-2 {
    0% {
      transform: rotate(0deg);
      transform-origin: 59% 59%;
    }
    100% {
      transform: rotate(360deg);
    }
  }
}

.animate-icon-3 {
  animation: rotate-3 5s ease-in-out infinite alternate-reverse;
  transform-origin: 50% 50%;
  @keyframes rotate-3 {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
}

.bg-dark-blue {
  background: #0a2540;
  clip-path: polygon(0 5%, 100% 0, 100% 95%, 0% 100%);

  @media (min-width: 768px) {
    clip-path: polygon(0 10%, 100% 0, 100% 90%, 0% 100%);
  }
}

.skill-grid {
  @apply w-full grid grid-cols-3 gap-x-2 mt-16;

  @media (min-width: 768px) {
    @apply gap-x-6;
  }

  & > div {
    @apply col-span-1;

    & > div:nth-child(1) {
      @apply w-full relative h-24;

      svg {
        @apply w-16 h-16 absolute top-0 left-0 transform -translate-x-2;
      }
    }

    & > p {
      @apply text-lg font-secondary text-gray-200 relative leading-none tracking-wide;

      &::before {
        content: "";
        height: 0%;
        top: 0%;
        @apply w-5 absolute border-none border-blue-s transform -translate-x-8 -translate-y-1/2;
      }

      @media (min-width: 768px) {
        &::before {
          content: "";
          height: 80%;
          top: 50%;
          @apply w-2;
        }
      }
    }

    & > ul {
      @apply text-gray-400 mt-3 font-light;
    }
  }
}
</style>
