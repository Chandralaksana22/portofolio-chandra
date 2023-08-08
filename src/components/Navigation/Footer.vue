<template>
<footer class="p-10 mt bg-white text-gray-900">
    <div class="grid grid-cols-1 xl:grid-cols-3 gap-4 mt-8">
        <div><a href="/">
            <img src="../../assets/logo.png" alt="logo" class="h-auto w-[4rem] mb-3" width="4rem" height="4rem" loading="eager">
        </a> 
        <p>Trisna Chandra Laksana</p>
        <p class="mb-4">Hello, I'm Trisna Chandra Laksana, you can call me Chandra. I am a front end developer</p>
        </div>
    </div>
</footer>
<footer class="footer p-10 mt bg-white text-neutral-content">
    <div class="container">
        <div class="flex lg:flex-row flex-col justify-between w-full lg:items-end items-left gap-4">
            <div class="flex flex-col gap-4">
                <small class="text-sm text-black">Copyright {{ currentYear }}.</small>
                <small class="text-sm text-black">All rights reserved</small>
            </div>
            <div class="flex flex-col lg:items-center ga-4">
                <small class="text-sm text-black text-bold">Trisna Chandra Laksana</small>
                <small class="text-sm text-black">Jimbaran - Kuta Selatan, Badung, Bali</small>
            </div>
            <div class="block">
                <picture>
                    <a href="/" class="flex items-center">
                    <img src="../../assets/logo.png" class="h-12" alt="TCL Logo">
                    </a>
                </picture>
            </div>
        </div>
    </div>
</footer>
</template>
<script>
export default {
  data() {
    return {
      currentYear: new Date().getFullYear()
    };
  }
};
</script>
