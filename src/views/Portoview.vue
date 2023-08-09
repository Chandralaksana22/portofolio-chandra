<template>
    <section class="px-4 md:px-32 mx-auto mt-32">
      <h2 class="mb-2 text-3xl font-extrabold leading-tight text-gray-900 mb-5">
        Portofolio
      </h2>
      <p class="mb-5">
        Allow me to showcase my array of projects and portfolio. Here, you'll discover a diverse collection of projects that I've undertaken independently, and on occasion, collaborated with colleagues.
      </p>
      <div class="grid grid-cols-1 gap-12 md:grid-cols-2 xl:grid-cols-3 mt-5">
        <div
          v-for="project in projects"
          :key="project.slug"
          class="w-full bg-white border border-gray-200 rounded-[20px] shadow dark:bg-gray-800 dark:border-gray-700"
        >
          <router-link :to="'/project/' + project.slug">
            <div class="card p-5 rounded-[20px]">
              <img
                class="brightness-90 h-40 object-cover rounded-lg"
                :src="project.image"
                alt="Image"
              />
            </div>
          </router-link>
          <div class="p-5">
            <router-link :to="'/project/' + project.slug">
              <h5
                class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white"
              >
                {{ project.title }}
              </h5>
            </router-link>
            <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">
              {{ project.category }}
            </p>
          </div>
        </div>
      </div>
    </section>
  </template>
  <script>
  import { ref } from "vue";
  import projectsData from "../lib/data.json";
  
  export default {
    setup() {
      const projects = ref(projectsData);
  
      return {
        projects,
      };
    },
  };
  </script>
  