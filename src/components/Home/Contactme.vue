<template>
  <div class="mt-[100px]" id="contact">
    <div class="create svelte-w83pam">
      <div class="container">
        <div class="flex flex-col items-center justify-center">
          <div class="mb-[100px] text-center">
            <h1 class="mb-4 text-4xl font-extrabold tracking-tight leading-none md:text-5xl lg:text-6xl text-white">Thank you.</h1>
            <p class="mb-8 text-lg font-normal text-white lg:text-xl sm:px-16 lg:px-48">If you have any questions, my email is always open to anyone. We can discuss and perhaps collaborate.</p>
          </div>
            <button class="btn text-red-600 gap-2" @click="sendEmail">Contact Me
                <svg width="33" height="32" viewBox="0 0 33 32" fill="none" xmlns="http://www.w3.org/2000/svg" class="svelte-1u6zg7"><path d="M20.504 13.414L11.897 22.021L10.483 20.607L19.089 12H11.504V10H22.504V21H20.504V13.414Z" fill="#FD2674" class="svelte-1u6zg7"></path><rect x="1" y="0.5" width="31" height="31" rx="15.5" stroke="url(#paint0_linear_648_474)" class="svelte-1u6zg7"></rect><defs><linearGradient id="paint0_linear_648_474" x1="16.5" y1="-1.54118e-06" x2="38.2993" y2="8.04358" gradientUnits="userSpaceOnUse"><stop stop-color="#FD2674"></stop><stop offset="1" stop-color="#4500FF"></stop></linearGradient></defs></svg>
            </button>
        </div>
      </div>
    </div>
  </div>
</template>
<style>
.create.svelte-w83pam.svelte-w83pam {
    display: flex;
    min-height: 100vh;
    width: 100%;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    --tw-bg-opacity: 1;
    background-color: rgb(220 38 38 / var(--tw-bg-opacity));
    background-image: url(../../assets/spiral-chaos.png);
    background-size: cover;
    background-repeat: no-repeat;
}
</style>
<script>
export default {
  methods: {
    sendEmail() {
      const emailAddress = "chandralaksana225@gmail.com";
      window.location.href = `mailto:${emailAddress}`;
    }
  }
}
</script>