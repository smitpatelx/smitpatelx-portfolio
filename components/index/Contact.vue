<template>
    <div class="w-full min-h-screen flex flex-wrap justify-center items-center mt-5 lg:mt-0 p-10 lg:p-32 mb-32" id="contact">
        <div class="flex flex-wrap justify-center items-center">
            <h2 v-scroll-reveal="{ delay: 300, mobile: false, origin: 'bottom', easing: 'cubic-bezier(0.5, 0, 0, 1)', distance: '80px'}" class="w-full text-gray-400 text-3xl md:text-4xl font-bold leading-tight text-center">
                Lets get in touch
            </h2>
            <form method="post" @submit.prevent="formSubmission" class="flex flex-wrap flex-col mt-8 max-w-6xl px-6" v-scroll-reveal="{ delay: 350, mobile: false, origin: 'bottom', easing: 'cubic-bezier(0.5, 0, 0, 1)', distance: '80px'}">
                <div class="w-full grid grid-cols-1 lg:grid-cols-2 gap-4 my-2">
                    <div class="flex flex-wrap flex-col">
                        <label for="email" class="font-mono text-base text-teal-400 mb-2 w-full">Email</label>
                        <input tabindex="0" required class="w-full placeholder-gray-600 text-white py-2 px-3 rounded bg-gray-800 text-lg focus:bg-gray-900 focus:outline-none border-2 border-transparent focus:border-teal-500" minlength="6" maxlength="50" type="email" name="email" id="email" v-model="email" placeholder="xyz@gmail.com">
                    </div>
                    <div class="flex flex-wrap flex-col w-full">
                        <label for="phone" class="font-mono text-base text-teal-400 mb-2 w-full">Phone</label>
                        <div class="flex flex-wrap flex-row items-stretch relative w-full">
                            <Country class="flex flex-grow-0" v-on:countrySelected="onCountrySelect"/>
                            <input tabindex="3" required class="flex-1 flex w-32 placeholder-gray-600 text-white py-2 px-3 rounded-r bg-gray-800 text-lg focus:bg-gray-900 focus:outline-none border-2 border-transparent focus:border-teal-500" type="tel" pattern="[0-9]{10}" name="phone" id="phone" v-model="phone" placeholder="000-000-0000">
                        </div>
                    </div>
                </div>
                <div class="w-full grid grid-cols-2 gap-4 my-2">
                    <div class="flex flex-wrap flex-col">
                        <label for="first_name" class="font-mono text-base text-teal-400 mb-2 w-full">First Name</label>
                        <input tabindex="4" required class="w-full placeholder-gray-600 text-white py-2 px-3 rounded bg-gray-800 text-lg focus:bg-gray-900 focus:outline-none border-2 border-transparent focus:border-teal-500" minlength="2" maxlength="15" type="text" name="first_name" id="first_name" v-model="first_name" placeholder="Smit">
                    </div>
                    <div class="flex flex-wrap flex-col">
                        <label for="last_name" class="font-mono text-base text-teal-400 mb-2">Last Name</label>
                        <input tabindex="5" required class="w-full placeholder-gray-600 text-white py-2 px-3 rounded bg-gray-800 text-lg focus:bg-gray-900 focus:outline-none border-2 border-transparent focus:border-teal-500" minlength="2" maxlength="15" type="text" name="last_name" id="last_name" v-model="last_name" placeholder="Patel">
                    </div>
                </div>
                <div class="w-full grid grid-cols-1 md:grid-cols-2 gap-4 my-2">
                    <div class="flex flex-wrap flex-col">
                        <label for="business_name" class="font-mono text-base text-teal-400 mb-2">Business Name</label>
                        <input tabindex="6" required class="w-full placeholder-gray-600 text-white py-2 px-3 rounded bg-gray-800 text-lg focus:bg-gray-900 focus:outline-none border-2 border-transparent focus:border-teal-500" minlength="5" maxlength="30" type="text" name="business_name" id="business_name" v-model="business_name" placeholder="Google LLC.">
                    </div>
                    <div class="flex flex-wrap flex-col">
                        <label for="no_of_employee" class="font-mono text-base text-teal-400 mb-2">No. of Employee</label>
                        <select tabindex="7" required class="w-full custom_select placeholder-gray-600 text-white py-2 px-3 rounded bg-gray-800 text-lg focus:bg-gray-900 focus:outline-none border-2 border-transparent focus:border-teal-500" minlength="5" maxlength="30" type="text" name="no_of_employee" id="no_of_employee" v-model="no_of_employee">
                            <option value="" default disabled>Select No. of Employee</option>
                            <option value="2">upto 2</option>
                            <option value="10">upto 10</option>
                            <option value="50">upto 50</option>
                            <option value="100">upto 100</option>
                            <option value="500">upto 500</option>
                            <option value="1000">upto 1000</option>
                            <option value="1000plus">1000+</option>
                        </select>
                    </div>
                </div>
                <div class="w-full flex flex-wrap flex-col my-2" >
                    <label for="est_budget" class="font-mono text-base text-teal-400 mb-2 flex">Estimated budget: <span class="text-lg ml-1">{{est_budget_f}}</span></label>
                    <div class="w-full flex flex-wrap flex-col relative">
                        <input tabindex="8" required step="500" class="focus:outline-none z-40" min="3000" max="200000" value="`${est_budget}`" type="range" name="est_budget" id="est_budget" v-model="est_budget">
                        <div class="slider_progress absolute h-2 w-1/2 z-0 rounded mt-2" :style="`width:${(est_budget*100/200000)-1}%`"></div>
                    </div>
                </div>
                <div class="w-full flex flex-wrap flex-col mt-4 mb-2 pr-2" >
                    <label for="message" class="font-mono text-base text-teal-400 mb-2">Additional Message</label>
                    <textarea tabindex="9" class="placeholder-gray-600 text-white py-2 px-3 rounded bg-gray-800 text-lg focus:bg-gray-900 focus:outline-none border-2 border-transparent focus:border-teal-500" rows="5" maxlength="2000" type="text" name="message" id="message" v-model="message" placeholder="Start typing ..."/>
                </div>
                <div class="w-full flex flex-wrap flex-row my-2 pr-2 pt-6 justify-between" >
                    <button tabindex="10" class="mb-10 focus:outline-none focus:shadow-outline form_button" type="submit">
                        Send
                        <svg class="w-4 h-4 fill-current text-teal-400 inline-block ml-3" viewBox="0 0 24 24"><path fill-rule="evenodd" clip-rule="evenodd" d="M22.7071 1.293c.3905.3904.3905 1.0236 0 1.4141l-11 11c-.3905.3906-1.0237.3906-1.4142 0-.3905-.3905-.3905-1.0237 0-1.4142l11-11c.3905-.3905 1.0237-.3905 1.4142 0z" /><path fill-rule="evenodd" clip-rule="evenodd" d="M22.7071 1.293c.2716.2716.3637.6748.2368 1.0374l-7 20a1.0001 1.0001 0 01-1.8577.0758l-3.8438-8.6486-8.6485-3.8438a1 1 0 01.0757-1.8576l20.0001-7a1 1 0 011.0374.2367zM4.7111 9.1105l6.695 2.9756a1 1 0 01.5077.5077l2.9756 6.6951L20.37 3.63 4.711 9.1106z" /></svg>
                    </button>
                    <button tabindex="11" class="mb-10 ml-3 focus:outline-none focus:shadow-outline form_button2" @click.prevent="reset" type="button">
                        Reset
                        <svg class="w-4 h-4 fill-current text-teal-400 inline-block ml-3" viewBox="0 0 24 24"><path fill-rule="evenodd" clip-rule="evenodd" d="M18.7071 5.2929c.3905.3905.3905 1.0237 0 1.4142l-12 12c-.3905.3905-1.0237.3905-1.4142 0-.3905-.3905-.3905-1.0237 0-1.4142l12-12c.3905-.3905 1.0237-.3905 1.4142 0z" /><path fill-rule="evenodd" clip-rule="evenodd" d="M5.2929 5.2929c.3905-.3905 1.0237-.3905 1.4142 0l12 12c.3905.3905.3905 1.0237 0 1.4142-.3905.3905-1.0237.3905-1.4142 0l-12-12c-.3905-.3905-.3905-1.0237 0-1.4142z"/></svg>
                    </button>
                </div>
            </form>
        </div>
    </div>
</template>
<script>
import { CollapseTransition } from 'vue2-transitions'
import Country from '@/components/index/Country.vue'
export default {
    components:{
        Country,
        CollapseTransition
    },
    data(){
        return {
            email:'',
            first_name:'',
            last_name:'',
            business_name:'',
            est_budget:10000,
            message:'',
            no_of_employee:'',
            phone:'',
            country:'ca',
            ip_address:''
        }
    },
    computed:{
        est_budget_f:{
            get(){
                var formatter = new Intl.NumberFormat('en-US', {
                    style: 'currency',
                    currency: 'USD',
                    minimumFractionDigits: 0
                });
                return formatter.format(this.est_budget);
            },
            set(val){
                this.est_budget=val;
            }
        }
    },
    methods: {
        formSubmission(){
            this.$axios.$post(`${process.env.API_URL}api/v1/contact`,
            {
                first_name: this.first_name,
                last_name: this.last_name,
                email: this.email,
                phone: this.phone,
                country_code: this.country,
                business_name: this.business_name,
                business_employees: this.no_of_employee,
                est_budget: this.est_budget,
                message: this.message,
                ip_address: this.ip_address
            })
            .then(res=>{
                alert('Thank you for contacting me!')
                this.reset();
            })
            .catch(err=>{
                console.error(err)
            })
        },
        reset(){
            this.email=''
            this.first_name=''
            this.last_name=''
            this.business_name=''
            this.est_budget=10000
            this.message=''
            this.no_of_employee=''
            this.phone=''
            this.country='ca'
        },
        onCountrySelect(val){
            this.country = val;
        },
        getIp() {
            this.$axios.$get('https://json.geoiplookup.io/')
            .then(res=>{
                this.ip_address = res.ip;
            }).catch(error=>{
                console.log('Error getting ip: ',error);
            });
        }
    },
    created() {
        this.getIp();
    },
}
</script>
<style lang="scss">

.custom_select{
    -moz-appearance: none;
    -webkit-appearance: none;
    background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 23 13'%3E%3Cpath d='M11.027 12.2522L.4506.5007C.277.3077.414 0 .6736 0h21.1528c.2597 0 .3967.3076.223.5007L11.473 12.2522a.3.3 0 01-.446 0z' fill='%2300FFD1'/%3E%3C/svg%3E");
    background-repeat: no-repeat;
    background-position: right .7em top 50%;
    background-size: .65em auto;
}

.form_button{
  @apply bg-transparent px-5 py-2 text-teal-400 border border-teal-400 rounded-md text-lg font-medium  flex flex-wrap justify-center items-center self-stretch mt-auto;
  transition: background 0.4s;

  &:hover{
    background: rgba(31, 248, 255, 0.151);
  }
}

.form_button2{
  @apply bg-gray-800 px-5 py-2 text-teal-400 border border-transparent rounded-md text-lg font-medium  flex flex-wrap justify-center items-center self-stretch mt-auto;
  transition: background 0.4s;

  &:hover{
    background: rgba(31, 248, 255, 0.151);
  }
}

.slider_progress{
    background: linear-gradient(90deg, rgb(104, 241, 227) 0%, rgba(232, 255, 253, 0) 100%);
}

#est_budget{
    -webkit-appearance: none;
    @apply cursor-pointer h-2 mt-2 rounded-md bg-gray-800 opacity-50;
    transition: all .5s cubic-bezier(0.075, 0.82, 0.165, 1);

    &:hover{
        @apply bg-gray-700 opacity-50;
    }

    &::-webkit-slider-thumb{
        -webkit-appearance: none;
        appearance: none;
        width: 26px;
        height: 26px;
        // border-radius: 50%;
        background:rgba(255, 255, 255, 0) url('/assets/idea_light_bulb.png');
        opacity: 1;
        background-origin: cover;
        background-size: 103%;
        background-repeat: no-repeat;
        // background-blend-mode: multiply;
        background-position: center;
        cursor: pointer;
        z-index: 20;
    }

    &:hover::-webkit-slider-thumb{
        transform: scale(1.2);
    }
    
}

.maxw-50{
    max-width: 50%;
}
</style>