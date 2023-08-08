<template>
  <section class="px-4 md:px-32 mx-auto mt-20">
    <h2 class="mb-2 text-3xl font-extrabold leading-tight text-gray-900 mb-5">My Portofolio</h2>
    <div class="grid grid-cols-1 gap-12 md:grid-cols-2 xl:grid-cols-3 mt-5">
      <div
        v-for="project in projects" :key="project.slug"
        class="w-full bg-white border border-gray-200 rounded-[20px] shadow dark:bg-gray-800 dark:border-gray-700"
      >
         <router-link :to="'/project/' + project.slug">
          <div class="card p-5 rounded-[20px]">
            <img
              class="brightness-90 rounded-lg"
              :src="project.image"
              alt="Image"
            />
          </div>
        </router-link>
        <div class="p-5">
           <router-link :to="'/project/' + project.slug">
            <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
              {{ project.title }}
            </h5>
          </router-link>
          <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">{{ project.category }}</p>
        </div>
      </div>
    </div>
    <div
      class="flex flex-col items-center justify-center mt-5 space-x-0 space-y-2 md:space-x-2 md:space-y-0 md:flex-row"
    >
      <a href="#" class="w-full rounded-full btn btn-light btn-xl md:w-auto">More Portofolio</a>
    </div>
  </section>
</template>
<script>
import { ref } from 'vue';
import projectsData from '../../lib/data.json'

export default {
  setup() {
    const projects = ref(projectsData);

    return {
      projects
    };
  }
};
</script>