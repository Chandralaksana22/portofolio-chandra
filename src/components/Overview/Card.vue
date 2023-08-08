<template>
  <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-5">
    <div
      v-for="repo in displayedRepositories"
      :key="repo.id"
      class="card-open-project flex flex-col justify-between shadow-md"
    >
      <div class="head-body-section p-5">
        <div class="head-card flex items-center space-x-3 mb-3">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="#000000"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          >
            <path
              d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"
            ></path>
          </svg>
          <a :href="repo.html_url" class="cursor-pointer">
            <h1
              class="text-neutral-900 montserrat text-[1.25rem] font-semibold"
            >
              {{ repo.name }}
            </h1>
          </a>
        </div>
        <div class="body-card">
          <p class="text-gray-800 text-left inter">{{ repo.description }}</p>
        </div>
      </div>
      <div class="text-gray-800 footer-card mt-9 poppins p-5">
        <div class="flex flex-wrap gap-2 items-center justify-between">
          <div class="flex flex-wrap items-center">
            <div>
              <a
                :href="`${repo.html_url}/stargazers`"
                class="flex items-center gap-1 cursor-pointer"
              >
                <i class="bx bx-star text-[#336EEE]"></i>
                <h3>Stars</h3>
              </a>
            </div>
            <div class="ml-4">
              <a
                :href="`${repo.html_url}/fork`"
                class="flex items-center gap-1 cursor-pointer"
              >
                <i class="bx bx-git-repo-forked text-[#f9004d]"></i>
                <h3>Fork</h3>
              </a>
            </div>
          </div>
          <div class="lang-project flex items-center gap-1">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="22"
              height="22"
              viewBox="0 0 24 24"
              :fill="getLanguageColor(repo.language)"
              stroke="color"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            >
              <circle cx="12" cy="12" r="10"></circle>
            </svg>
            <h3>{{ repo.language || "Unknown" }}</h3>
          </div>
        </div>
        <a
          :href="`${repo.html_url}/archive/refs/heads/main.zip`"
          class="w-full"
        >
          <button
            class="btn-clone outline-none flex items-center gap-2 justify-center py-2 px-5 mt-5 bg-gradient-to-t from-neutral-800 via-neutral-900 to-black text-white duration-300 poppins rounded-lg w-full"
          >
            <i class="bx bx-terminal text-4xl"></i>
            <span class="text-[1.15rem]">Clone Project</span>
          </button>
        </a>
      </div>
    </div>
  </div>
  <div class="join flex items-center justify-center mt-4">
    <button class="join-item btn" @click="prevPage">«</button>
    <button class="join-item btn">{{ currentPage }}</button>
    <button class="join-item btn" @click="nextPage">»</button>
  </div>
</template>

<script>
import axios from "axios";

export default {
  data() {
    return {
      repositories: [],
      itemsPerPage: 6, // Set the number of items per page
      currentPage: 1,
    };
  },
  computed: {
    totalPages() {
      return Math.ceil(this.repositories.length / this.itemsPerPage);
    },
    displayedRepositories() {
      const startIndex = (this.currentPage - 1) * this.itemsPerPage;
      const endIndex = startIndex + this.itemsPerPage;
      return this.repositories.slice(startIndex, endIndex);
    },
  },
  mounted() {
    axios
      .get("https://api.github.com/users/Chandralaksana22/repos")
      .then((response) => {
        this.repositories = response.data;
      })
      .catch((error) => {
        console.error("Error fetching repositories:", error);
      });
  },
  methods: {
    getLanguageColor(language) {
      switch (language) {
        case "Vue":
          return "#4FC08D"; // Set your Vue color
        case "Svelte":
          return "#EF4444"; // Set your Vue color
        case "JavaScript":
          return "#F0DB4F"; // Set your JavaScript color
        case "HTML":
          return "#E34F26"; // Set your HTML color
        default:
          return "#808080"; // Default gray color
      }
    },
    prevPage() {
      if (this.currentPage > 1) {
        this.currentPage--;
      }
    },
    nextPage() {
      if (this.currentPage < this.totalPages) {
        this.currentPage++;
      }
    },
  },
};
</script>
