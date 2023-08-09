<template>
  <div v-if="project">
    <article
      class="px-4 py-24 mx-auto max-w-7xl"
      itemid="#"
      itemscope
      itemtype="http://schema.org/BlogPosting"
    >
      <div class="w-full mx-auto mb-12 text-center">
        <img
          :src="project.image"
          class="object-cover w-full mb-10 h-[50vh] bg-center rounded-lg"
        />
        <p
          class="mb-3 text-xs font-semibold tracking-wider text-gray-500 uppercase"
        >
          {{ project.category }}
        </p>
        <h1
          class="mb-3 text-4xl font-bold text-gray-900 md:leading-tight md:text-5xl"
          itemprop="headline"
          title="Rise of Tailwind - A Utility First CSS Framework"
        >
          {{ project.title }}
        </h1>
        <p class="text-gray-700">
          Written by
          <span
            class="byline author vcard"
            itemprop="author"
            itemscope="itemscope"
            itemtype="http://schema.org/Person"
          >
            <a
              href="#"
              target="_blank"
              itemprop="url"
              rel="author noopener noreferrer"
              class="text-primary hover:text-primary-dark"
              ><span itemprop="name">{{ project.anggotaTim[0].nama }}</span></a
            >
          </span>
          on
          <time
            itemprop="datePublished dateModified"
            datetime="2010-08-07 11:11:03-0400"
            pubdate
            >{{ project.tanggal }}</time
          >
        </p>
      </div>

      <div class="mx-auto prose px-10 lg:px-20 text-justify">
        {{ project.deskripsi }}
      </div>
    </article>
    <div class="px-10 lg:px-20 grid grid-cols-1 lg:grid-cols-2 gap-4">
      <div>
        <h1 class="mb-5 text-2xl font-bold">About Project</h1>
        <button
          class="relative inline-flex items-center justify-center p-0.5 mb-2 mr-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-pink-500 to-orange-400 group-hover:from-pink-500 group-hover:to-orange-400 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-pink-200 dark:focus:ring-pink-800"
        >
          <span
            class="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0"
          >
            {{ project.category }}
          </span>
        </button>
        <button
          class="relative inline-flex items-center justify-center p-0.5 mb-2 mr-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-pink-500 to-orange-400 group-hover:from-pink-500 group-hover:to-orange-400 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-pink-200 dark:focus:ring-pink-800"
        >
          <span
            class="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0"
          >
            {{ project.tim }}
          </span>
        </button>
        <h1 class="mb-5 mt-5 text-2xl font-bold">Tools</h1>
        <p>{{ project.teknologi }}</p>
      </div>
      <div>
        <h1 class="mb-5 text-2xl font-bold">Role Team</h1>
        <div class="grid grid-cols-2 lg:grid-cols-3">
          <!-- Loop through each team member -->
          <div
            v-for="member in project.anggotaTim"
            :key="member.nama"
            class="text-center"
          >
            <div class="flex justify-center items-center">
              <div class="mb-3 mt-2">
                <img
                  class="w-24 h-24 mx-auto mb-1 rounded-full shadow-lg object-cover"
                  :src="getAvatarUrl(member.avatar)"
                  alt="Profile image"
                />
                <h5 class="text-xl font-medium text-gray-900 dark:text-white">
                  {{ member.nama }}
                </h5>
                <span class="text-sm text-gray-500 dark:text-gray-400">{{
                  member.posisi
                }}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { ref, onMounted } from "vue";
import projectsData from "../lib/data.json";

export default {
  setup(props, { params }) {
    const project = ref(null);
    onMounted(() => {
      const slug = window.location.pathname.split("/").pop();
      project.value = projectsData.find((project) => project.slug === slug);
    });

    return {
      project,
    };
  },
  methods: {
    getAvatarUrl(avatar) {
      if (avatar) {
        return avatar;
      } else {
        return "https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg";
      }
    },
  },
};
</script>
