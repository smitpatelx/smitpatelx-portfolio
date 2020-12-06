<template>
  <form @submit.prevent="" class="w-full flex flex-wrap flex-row items-stretch justify-center content-center">
    <button @click="back" v-if="step==2" class="hidden md:flex bg-blue-500 p-4 items-center justify-center focus:outline-none focus:ring focus:ring-blue-300 rounded-full text-gray-100 m-1.5 leading-none relative transition-all duration-300 shadow-lg" type="button">
      <svg class="w-2 h-3 fill-current inline-block transform rotate-180 " viewBox="0 0 8 14"><path fill-rule="evenodd" d="M.292893.292893c.390524-.390524 1.023687-.390524 1.414217 0l6 5.999997c.39052.39053.39052 1.02369 0 1.41422l-6 5.99999c-.39053.3905-1.023693.3905-1.414217 0-.390524-.3905-.390524-1.0237 0-1.4142L5.58579 7 .292893 1.70711c-.390524-.39053-.390524-1.023693 0-1.414217z" clip-rule="evenodd"/></svg>
    </button>
    <input v-if="step==1" v-model.trim="$v.email_address.$model" @keydown.enter="submit" type="text" class="w-64 inline-block col-span-6 form-input m-1.5 transition-all duration-300" 
      :class="$v.email_address.required && $v.email_address.$anyError ? 'ring-offset-red-500 ring-offset-2' : 'ring-offset-0' " placeholder="Your email" />
    <input v-if="step==2" v-model.trim="$v.first_name.$model" @keydown.enter="submit" type="text" class="w-40 inline-block col-span-6 form-input m-1.5 transition-all duration-300"
      :class="$v.first_name.required && $v.first_name.$anyError ? 'ring-offset-red-500 ring-offset-2' : 'ring-offset-0' " placeholder="First name" />
    <input v-if="step==2" v-model.trim="$v.last_name.$model" @keydown.enter="submit" type="text" class="w-40 inline-block col-span-6 form-input m-1.5 transition-all duration-300" 
      :class="$v.last_name.required && $v.last_name.$anyError ? 'ring-offset-red-500 ring-offset-2' : 'ring-offset-0' " placeholder="Last name" />
    <button @click="submit" v-if="step==1" class="base-btn bg-blue-500 text-gray-100 m-1.5 transition-all duration-300 shadow-lg" type="button">
      Next
      <svg class="w-2 h-3 fill-current inline-block ml-2 heartbeat" viewBox="0 0 8 14"><path fill-rule="evenodd" d="M.292893.292893c.390524-.390524 1.023687-.390524 1.414217 0l6 5.999997c.39052.39053.39052 1.02369 0 1.41422l-6 5.99999c-.39053.3905-1.023693.3905-1.414217 0-.390524-.3905-.390524-1.0237 0-1.4142L5.58579 7 .292893 1.70711c-.390524-.39053-.390524-1.023693 0-1.414217z" clip-rule="evenodd"/></svg>
    </button>
    <button @click="back" v-if="step==2" class="flex md:hidden bg-blue-500 p-4 items-center justify-center focus:outline-none focus:ring focus:ring-blue-300 rounded-full text-gray-100 m-1.5 leading-none relative transition-all duration-300 shadow-lg" type="button">
      <svg class="w-2 h-3 fill-current inline-block transform rotate-180 " viewBox="0 0 8 14"><path fill-rule="evenodd" d="M.292893.292893c.390524-.390524 1.023687-.390524 1.414217 0l6 5.999997c.39052.39053.39052 1.02369 0 1.41422l-6 5.99999c-.39053.3905-1.023693.3905-1.414217 0-.390524-.3905-.390524-1.0237 0-1.4142L5.58579 7 .292893 1.70711c-.390524-.39053-.390524-1.023693 0-1.414217z" clip-rule="evenodd"/></svg>
    </button>
    <button @click="submit" v-if="step==2" class="base-btn bg-blue-500 text-gray-100 m-1.5 transition-all duration-300 shadow-lg" type="button">
      Subscribe
      <svg class="w-4 h-4 fill-current inline-block ml-2 heartbeat" viewBox="0 0 24 24">
        <path
          fill-rule="evenodd"
          d="M10.0862 1.59386C10.2467 1.23273 10.6048 1 11 1c1.0609 0 2.0783.42143 2.8284 1.17157C14.5786 2.92172 15 3.93913 15 5v3h4.6549c.4327-.004.8613.08567 1.2561.26289.3968.17807.7501.44028 1.0355.76845.2853.32817.4959.71446.6172 1.13206.1212.4177.1502.8567.085 1.2867l-1.38 8.9998c0 .0003 0-.0002 0 0-.1086.7151-.4721 1.3676-1.0231 1.836-.5498.4673-1.2495.7208-1.9708.7141H4c-.79565 0-1.55871-.3161-2.12132-.8787C1.31607 21.5587 1 20.7957 1 20v-7c0-.7956.31607-1.5587.87868-2.1213C2.44129 10.3161 3.20435 10 4 10h2.35013l3.73607-8.40614zM8 11.2122l3.6078-8.1176c.3014.09615.5786.26334.8064.49119C12.7893 3.96086 13 4.46957 13 5v4c0 .55228.4477 1 1 1h5.66l.0113-.00006c.145-.00165.2886.02826.4208.08756.1323.0594.25.1468.3452.2562.0951.1094.1653.2381.2057.3774.0404.139.0501.2852.0284.4284 0-.0001 0 .0002 0 0l-1.3801 9.0006c-.0362.2384-.1573.4558-.341.612-.1838.1562-.4178.2407-.659.238L8 21v-9.7878zM6 21v-9H4c-.26522 0-.51957.1054-.70711.2929C3.10536 12.4804 3 12.7348 3 13v7c0 .2652.10536.5196.29289.7071C3.48043 20.8946 3.73478 21 4 21h2z"
          clip-rule="evenodd"
        />
      </svg>
    </button>
  </form>
</template>
<script>
import { required, email, alpha, minLength, maxLength } from 'vuelidate/lib/validators'
import { mapMutations } from 'vuex';
export default {
  data() {
    return {
      step: 1,
      email_address: '',
      first_name: '',
      last_name: '',
      ip_address: ''
    };
  },
  validations: {
    email_address: {
      required,
      email,
      minLength: minLength(6),
      maxLength: maxLength(60),
    },
    first_name: {
      required,
      alpha,
      minLength: minLength(2),
      maxLength: maxLength(20),
    },
    last_name: {
      required,
      alpha,
      minLength: minLength(2),
      maxLength: maxLength(20),
    },
  },
  methods: {
    ...mapMutations({
      setSuccess: 'notifySuccess'
    }),
    submit() {
      if(this.step==1 && !this.$v.email_address.$anyError && this.$v.email_address.required){
        this.step=2
      } else if (this.step==2 && !this.$v.first_name.$anyError && this.$v.first_name.required && this.$v.last_name.required && !this.$v.last_name.$anyError) {
        this.getIp().then(res=>{
          try{
            this.$axios.$post(`${process.env.NUXT_ENV_BASE_URL}/api/v1/subscribe`,
            {
              first_name: this.first_name,
              last_name: this.last_name,
              email: this.email_address,
              ip_address: this.ip_address
            })
            .then(res2=>{
              this.$store.dispatch('notifySuccess','Thank you for subscribing!')
              this.reset();
            })
            .catch(err=>{
              this.reset();
              let error = typeof err.response === 'undefined' ? "CORS ERROR" : err.response.data.error_message;
              this.$store.dispatch('notifyErrors',error+". Maybe you already subscribed!")
            });
          } catch (err) {
            this.reset();
            this.$store.dispatch('notifyErrors',err)
          }
        })
      }
    },
    back(){
      if(this.step==2){
        this.step=1
      }
    },
    reset(){
      this.back();
      this.step=1;
      this.$v.$reset();
      this.email_address="";
      this.fist_name="";
      this.last_name="";
    },
    async getIp() {
      return new Promise((resolve, reject) =>{
        this.$axios.$get('https://json.geoiplookup.io/')
        .then(res=>{
          this.ip_address = res.ip;
          resolve(res.ip);
        }).catch(err=>{
          this.$store.dispatch('notifyErrors','Please turn off ad blocker and try again.')
          reject(err);
        });
      })
    },
  },
};
</script>

<style lang="scss" scoped>
.form-input {
  @apply text-gray-800 py-2 px-5 placeholder-gray-600 rounded-full bg-gray-300 antialiased text-lg font-light focus:outline-none focus:ring focus:ring-blue-400 transition-all duration-300 outline-none
    focus:bg-opacity-60 focus:text-opacity-75 focus:placeholder-gray-400;
}

.heartbeat{animation:heartbeat 1.5s ease-in-out infinite both}
@keyframes heartbeat{from{transform:scale(1);transform-origin:center center;animation-timing-function:ease-out}10%{transform:scale(.91);animation-timing-function:ease-in}17%{transform:scale(.98);animation-timing-function:ease-out}33%{transform:scale(.87);animation-timing-function:ease-in}45%{transform:scale(1);animation-timing-function:ease-out}}
</style>
