<template>
  <div class="w-full flex flex-wrap flex-row items-center justify-center space-x-6 space-y-4">
    <input type="email" class="w-64 inline-block col-span-6 form-input" placeholder="Your email" />
    <button class="base-btn bg-blue-900 text-gray-200" type="submit">
      Yes I am in
      <svg class="w-4 h-4 fill-current inline-block ml-2" viewBox="0 0 24 24">
        <path
          fill-rule="evenodd"
          d="M10.0862 1.59386C10.2467 1.23273 10.6048 1 11 1c1.0609 0 2.0783.42143 2.8284 1.17157C14.5786 2.92172 15 3.93913 15 5v3h4.6549c.4327-.004.8613.08567 1.2561.26289.3968.17807.7501.44028 1.0355.76845.2853.32817.4959.71446.6172 1.13206.1212.4177.1502.8567.085 1.2867l-1.38 8.9998c0 .0003 0-.0002 0 0-.1086.7151-.4721 1.3676-1.0231 1.836-.5498.4673-1.2495.7208-1.9708.7141H4c-.79565 0-1.55871-.3161-2.12132-.8787C1.31607 21.5587 1 20.7957 1 20v-7c0-.7956.31607-1.5587.87868-2.1213C2.44129 10.3161 3.20435 10 4 10h2.35013l3.73607-8.40614zM8 11.2122l3.6078-8.1176c.3014.09615.5786.26334.8064.49119C12.7893 3.96086 13 4.46957 13 5v4c0 .55228.4477 1 1 1h5.66l.0113-.00006c.145-.00165.2886.02826.4208.08756.1323.0594.25.1468.3452.2562.0951.1094.1653.2381.2057.3774.0404.139.0501.2852.0284.4284 0-.0001 0 .0002 0 0l-1.3801 9.0006c-.0362.2384-.1573.4558-.341.612-.1838.1562-.4178.2407-.659.238L8 21v-9.7878zM6 21v-9H4c-.26522 0-.51957.1054-.70711.2929C3.10536 12.4804 3 12.7348 3 13v7c0 .2652.10536.5196.29289.7071C3.48043 20.8946 3.73478 21 4 21h2z"
          clip-rule="evenodd"
        />
      </svg>
    </button>
  </div>
</template>
<script>
export default {
  data() {
    return {};
  },
  methods: {
    submit() {},
  },
};
</script>

<style lang="scss" scoped>
.form-input {
  @apply text-gray-300 py-2 px-5 rounded-full bg-gray-300 antialiased text-lg font-light border-2 border-transparent transition-all duration-300;

  &:focus {
    @apply bg-opacity-75 text-opacity-75 outline-none border-blue-s transition-all duration-300;

    &::placeholder {
      @apply text-opacity-75;
    }
  }

  &::placeholder {
    @apply text-gray-400 transition-all duration-300 font-light;
  }
}
</style>
