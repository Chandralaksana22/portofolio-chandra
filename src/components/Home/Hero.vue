<template>
  <section class="section-hero" style="background-size: cover; background-position: bottom;">
    <div class="h-[100vh]">
      <div class="py-8 px-4 mx-auto max-w-screen-xl text-center lg:pt-[20rem] pt-[10rem] lg:py-16">
        <h1
          class="mb-4 text-4xl font-extrabold tracking-tight leading-none md:text-5xl lg:text-6xl text-white"
        >
          Trisna Chandra Laksana
        </h1>
        <p
          class="mb-8 text-lg font-normal text-white lg:text-xl sm:px-16 lg:px-48"
        >
          Chandra, IT enthusiast with a passion for web development. Experienced
          in building websites. Proficient in Vue.js, Svelte.js, and React.js,
          with UI expertise in Bootstrap and Tailwind
        </p>
        <div
          class="flex flex-col space-y-4 sm:flex-row sm:justify-center sm:space-y-0 sm:space-x-4"
        >
          <a
            href="https://drive.google.com/file/d/1e9-TRbOhCgIfxb4rXXTgrSY759QPqLRs/view?usp=sharing"
            target="_blank"
            class="inline-flex justify-center items-center py-3 px-5 text-base font-medium text-center text-white rounded-lg bg-red-600 hover:bg-red-700 focus:ring-4 focus:ring-red-300 dark:focus:ring-red-900"
          >
            Resume
            <svg
              class="w-3.5 h-3.5 ml-2"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 14 10"
            >
              <path
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M1 5h12m0 0L9 1m4 4L9 9"
              />
            </svg>
          </a>
          <router-link to="/overview"
          class="inline-flex justify-center items-center py-3 px-5 text-base bg-white font-medium text-center text-gray-900 rounded-lg border border-gray-300 hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 dark:text-white dark:border-gray-700 dark:hover:bg-gray-700 dark:focus:ring-gray-800"
          >
            About Me
          </router-link>
        </div>
      </div>
    </div>
  </section>
</template>
<style>
.section-hero{
  background-image: url(../../assets/pxfuel.jpg);
}
</style>
