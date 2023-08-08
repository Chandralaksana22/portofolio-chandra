<template>

    <div v-if="project">
        <article class="px-4 py-24 mx-auto max-w-7xl" itemid="#" itemscope itemtype="http://schema.org/BlogPosting">
        <div class="w-full mx-auto mb-12 text-center">
            <img :src="project.image" class="object-cover w-full mb-10 h-[50vh] bg-center rounded-lg" />
            <p class="mb-3 text-xs font-semibold tracking-wider text-gray-500 uppercase">{{ project.category }}</p>
            <h1 class="mb-3 text-4xl font-bold text-gray-900 md:leading-tight md:text-5xl" itemprop="headline" title="Rise of Tailwind - A Utility First CSS Framework">
                {{ project.title }}
            </h1>
            <p class="text-gray-700">
            Written by
            <span class="byline author vcard" itemprop="author" itemscope="itemscope" itemtype="http://schema.org/Person">
                <a href="#" target="_blank" itemprop="url" rel="author noopener noreferrer" class="text-primary hover:text-primary-dark"><span itemprop="name">{{ project.anggotaTim[0].nama}}</span></a>
            </span>
            on <time itemprop="datePublished dateModified" datetime="2010-08-07 11:11:03-0400" pubdate>{{ project.tanggal }}</time>
            </p>
        </div>

        <div class="mx-auto prose px-10 lg:px-20 text-justify">
            {{ project.deskripsi }}
        </div>
        </article>
    </div>
  </template>
  
  <script>
  import { ref, onMounted } from 'vue';
  import projectsData from '../lib/data.json';

  export default {
    setup(props, { params }) {
      const project = ref(null);
      onMounted(() => {
        const slug = window.location.pathname.split('/').pop();
        project.value = projectsData.find(project => project.slug === slug);
      });
  
      return {
        project
      };
    }
  };
  </script>
  