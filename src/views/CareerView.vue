<template>
  <section class="px-4 md:px-32 mx-auto mt-32">
    <div class="mb-4 px-10 lg:px-20 pt-30">
      <ul
        class="flex flex-wrap -mb-px text-sm font-medium text-center"
        id="myTab"
        data-tabs-toggle="#myTabContent"
        role="tablist"
      >
        <li class="mr-2" role="presentation">
          <button
            class="inline-block p-4 rounded-t-lg"
            id="profile-tab"
            data-tabs-target="#profile"
            type="button"
            role="tab"
            aria-controls="profile"
            aria-selected="false"
          >
            Work Experience
          </button>
        </li>
        <li class="mr-2" role="presentation">
          <button
            class="inline-block p-4 rounded-t-lg"
            id="dashboard-tab"
            data-tabs-target="#dashboard"
            type="button"
            role="tab"
            aria-controls="dashboard"
            aria-selected="false"
          >
            Award
          </button>
        </li>
        <li class="mr-2" role="presentation">
          <button
            class="inline-block p-4 rounded-t-lg"
            id="settings-tab"
            data-tabs-target="#settings"
            type="button"
            role="tab"
            aria-controls="settings"
            aria-selected="false"
          >
            Education
          </button>
        </li>
        <li role="presentation">
          <button
            class="inline-block p-4 rounded-t-lg"
            id="contacts-tab"
            data-tabs-target="#contacts"
            type="button"
            role="tab"
            aria-controls="contacts"
            aria-selected="false"
          >
            Journal
          </button>
        </li>
      </ul>
    </div>
    <div id="myTabContent">
      <div
        class="hidden p-4 rounded-lg"
        id="profile"
        role="tabpanel"
        aria-labelledby="profile-tab"
      >
        <ol class="relative border-l border-gray-200 dark:border-gray-700">
          <li class="mb-10 ml-6">
            <span
              class="absolute flex items-center justify-center w-6 h-6 bg-red-600 rounded-full -left-3 ring-8 ring-white dark:ring-gray-900 dark:bg-red-900"
            >
              <svg
                class="w-2.5 h-2.5 text-white dark:text-red-300"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path
                  d="M20 4a2 2 0 0 0-2-2h-2V1a1 1 0 0 0-2 0v1h-3V1a1 1 0 0 0-2 0v1H6V1a1 1 0 0 0-2 0v1H2a2 2 0 0 0-2 2v2h20V4ZM0 18a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8H0v10Zm5-8h10a1 1 0 0 1 0 2H5a1 1 0 0 1 0-2Z"
                />
              </svg>
            </span>
            <h3
              class="flex items-center mb-1 text-lg font-semibold text-gray-900 dark:text-white"
            >
              Mindimedia
              <span
                class="bg-red-600 text-white text-sm font-medium mr-2 px-2.5 py-0.5 rounded dark:bg-red-900 dark:text-red-300 ml-3"
                >Latest</span
              >
            </h3>
            <time
              class="block mb-2 text-sm font-normal leading-none text-gray-400 dark:text-gray-500"
              >July, 2023 - Now</time
            >
            <p
              class="mb-4 text-base font-normal text-gray-500 dark:text-gray-400"
            >
              As a web developer, my role involves both website maintenance and
              development for clients. For these tasks, I utilize Winter CMS,
              JavaScript, and Tailwind to create optimal and visually appealing
              websites.
            </p>
          </li>
          <li class="mb-10 ml-6">
            <span
              class="absolute flex items-center justify-center w-6 h-6 bg-red-600 rounded-full -left-3 ring-8 ring-white dark:ring-gray-900 dark:bg-red-900"
            >
              <svg
                class="w-2.5 h-2.5 text-white dark:text-red-300"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path
                  d="M20 4a2 2 0 0 0-2-2h-2V1a1 1 0 0 0-2 0v1h-3V1a1 1 0 0 0-2 0v1H6V1a1 1 0 0 0-2 0v1H2a2 2 0 0 0-2 2v2h20V4ZM0 18a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8H0v10Zm5-8h10a1 1 0 0 1 0 2H5a1 1 0 0 1 0-2Z"
                />
              </svg>
            </span>
            <h3
              class="mb-1 text-lg font-semibold text-gray-900 dark:text-white"
            >
              Vhiweb
            </h3>
            <time
              class="block mb-2 text-sm font-normal leading-none text-gray-400 dark:text-gray-500"
              >July 2022 - July 2023</time
            >
            <p class="text-base font-normal text-gray-500 dark:text-gray-400">
              I am a frontend developer. Some of the projects I have completed
              include Munio, Munio's landing page, Santos Jaya Abadi's website,
              and Drupadi. Additionally, I developed a JavaScript package for
              Munio, which was published on npm. I work with Bootstrap,
              Tailwind, Vue.js, and Svelte.js technologies.
            </p>
          </li>
          <li class="ml-6 mb-10">
            <span
              class="absolute flex items-center justify-center w-6 h-6 bg-red-600 rounded-full -left-3 ring-8 ring-white dark:ring-gray-900 dark:bg-red-900"
            >
              <svg
                class="w-2.5 h-2.5 text-white dark:text-red-300"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path
                  d="M20 4a2 2 0 0 0-2-2h-2V1a1 1 0 0 0-2 0v1h-3V1a1 1 0 0 0-2 0v1H6V1a1 1 0 0 0-2 0v1H2a2 2 0 0 0-2 2v2h20V4ZM0 18a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8H0v10Zm5-8h10a1 1 0 0 1 0 2H5a1 1 0 0 1 0-2Z"
                />
              </svg>
            </span>
            <h3
              class="mb-1 text-lg font-semibold text-gray-900 dark:text-white"
            >
              PUI PT DLI
            </h3>
            <time
              class="block mb-2 text-sm font-normal leading-none text-gray-400 dark:text-gray-500"
              >October 2021 - March 2022</time
            >
            <p class="text-base font-normal text-gray-500 dark:text-gray-400">
              As a Research Assistant at PUI PT DLI, I design a homestay booking
              app using the design thinking approach. I craft delightful UI/UX
              using Figma as my primary design tool.
            </p>
          </li>
          <li class="ml-6 mb-10">
            <span
              class="absolute flex items-center justify-center w-6 h-6 bg-red-600 rounded-full -left-3 ring-8 ring-white dark:ring-gray-900 dark:bg-red-900"
            >
              <svg
                class="w-2.5 h-2.5 text-white dark:text-red-300"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path
                  d="M20 4a2 2 0 0 0-2-2h-2V1a1 1 0 0 0-2 0v1h-3V1a1 1 0 0 0-2 0v1H6V1a1 1 0 0 0-2 0v1H2a2 2 0 0 0-2 2v2h20V4ZM0 18a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8H0v10Zm5-8h10a1 1 0 0 1 0 2H5a1 1 0 0 1 0-2Z"
                />
              </svg>
            </span>
            <h3
              class="mb-1 text-lg font-semibold text-gray-900 dark:text-white"
            >
              Fakultas Sastra UM
            </h3>
            <time
              class="block mb-2 text-sm font-normal leading-none text-gray-400 dark:text-gray-500"
              >June 2021 - November 2021</time
            >
            <p class="text-base font-normal text-gray-500 dark:text-gray-400">
              I am a full-stack web developer responsible for building a
              research-based e-learning website. My tasks encompass designing
              UI/UX, handling frontend and backend development. The website is
              tailored to meet the specified targets.
            </p>
          </li>
          <li class="ml-6 mb-10">
            <span
              class="absolute flex items-center justify-center w-6 h-6 bg-red-600 rounded-full -left-3 ring-8 ring-white dark:ring-gray-900 dark:bg-red-900"
            >
              <svg
                class="w-2.5 h-2.5 text-white dark:text-red-300"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path
                  d="M20 4a2 2 0 0 0-2-2h-2V1a1 1 0 0 0-2 0v1h-3V1a1 1 0 0 0-2 0v1H6V1a1 1 0 0 0-2 0v1H2a2 2 0 0 0-2 2v2h20V4ZM0 18a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8H0v10Zm5-8h10a1 1 0 0 1 0 2H5a1 1 0 0 1 0-2Z"
                />
              </svg>
            </span>
            <h3
              class="mb-1 text-lg font-semibold text-gray-900 dark:text-white"
            >
              Dinas Pendidikan dan Kebudayaan Kota Malang
            </h3>
            <time
              class="block mb-2 text-sm font-normal leading-none text-gray-400 dark:text-gray-500"
              >June - August 2021</time
            >
            <p class="text-base font-normal text-gray-500 dark:text-gray-400">
              I am a web developer specializing in creating website interfaces
              from scratch. I build websites using Bootstrap framework for the
              frontend and PHP for the backend.
            </p>
          </li>
        </ol>
      </div>
      <div
        class="hidden p-4 rounded-lg"
        id="dashboard"
        role="tabpanel"
        aria-labelledby="dashboard-tab"
      >
        <ol class="relative border-l border-gray-200 dark:border-gray-700">
          <li class="mb-10 ml-6">
            <span
              class="absolute flex items-center justify-center w-6 h-6 bg-red-600 rounded-full -left-3 ring-8 ring-white dark:ring-gray-900 dark:bg-red-900"
            >
              <svg
                class="w-2.5 h-2.5 text-white dark:text-red-300"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path
                  d="M20 4a2 2 0 0 0-2-2h-2V1a1 1 0 0 0-2 0v1h-3V1a1 1 0 0 0-2 0v1H6V1a1 1 0 0 0-2 0v1H2a2 2 0 0 0-2 2v2h20V4ZM0 18a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8H0v10Zm5-8h10a1 1 0 0 1 0 2H5a1 1 0 0 1 0-2Z"
                />
              </svg>
            </span>
            <h3
              class="flex items-center mb-1 text-lg font-semibold text-gray-900 dark:text-white"
            >
              Bronze Medal Islamic Science Olympiad
            </h3>
            <time
              class="block mb-2 text-sm font-normal leading-none text-gray-400 dark:text-gray-500"
              >2023</time
            >
          </li>
          <li class="mb-10 ml-6">
            <span
              class="absolute flex items-center justify-center w-6 h-6 bg-red-600 rounded-full -left-3 ring-8 ring-white dark:ring-gray-900 dark:bg-red-900"
            >
              <svg
                class="w-2.5 h-2.5 text-white dark:text-red-300"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path
                  d="M20 4a2 2 0 0 0-2-2h-2V1a1 1 0 0 0-2 0v1h-3V1a1 1 0 0 0-2 0v1H6V1a1 1 0 0 0-2 0v1H2a2 2 0 0 0-2 2v2h20V4ZM0 18a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8H0v10Zm5-8h10a1 1 0 0 1 0 2H5a1 1 0 0 1 0-2Z"
                />
              </svg>
            </span>
            <h3
              class="mb-1 text-lg font-semibold text-gray-900 dark:text-white"
            >
              Bronze Medal Big Fair Science Competition
            </h3>
            <time
              class="block mb-2 text-sm font-normal leading-none text-gray-400 dark:text-gray-500"
              >2023</time
            >
          </li>
          <li class="ml-6 mb-10">
            <span
              class="absolute flex items-center justify-center w-6 h-6 bg-red-600 rounded-full -left-3 ring-8 ring-white dark:ring-gray-900 dark:bg-red-900"
            >
              <svg
                class="w-2.5 h-2.5 text-white dark:text-red-300"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path
                  d="M20 4a2 2 0 0 0-2-2h-2V1a1 1 0 0 0-2 0v1h-3V1a1 1 0 0 0-2 0v1H6V1a1 1 0 0 0-2 0v1H2a2 2 0 0 0-2 2v2h20V4ZM0 18a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8H0v10Zm5-8h10a1 1 0 0 1 0 2H5a1 1 0 0 1 0-2Z"
                />
              </svg>
            </span>
            <h3
              class="mb-1 text-lg font-semibold text-gray-900 dark:text-white"
            >
              Bronze Medal Hardiknas Competition
            </h3>
            <time
              class="block mb-2 text-sm font-normal leading-none text-gray-400 dark:text-gray-500"
              >2023</time
            >
          </li>
          <li class="ml-6 mb-10">
            <span
              class="absolute flex items-center justify-center w-6 h-6 bg-red-600 rounded-full -left-3 ring-8 ring-white dark:ring-gray-900 dark:bg-red-900"
            >
              <svg
                class="w-2.5 h-2.5 text-white dark:text-red-300"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path
                  d="M20 4a2 2 0 0 0-2-2h-2V1a1 1 0 0 0-2 0v1h-3V1a1 1 0 0 0-2 0v1H6V1a1 1 0 0 0-2 0v1H2a2 2 0 0 0-2 2v2h20V4ZM0 18a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8H0v10Zm5-8h10a1 1 0 0 1 0 2H5a1 1 0 0 1 0-2Z"
                />
              </svg>
            </span>
            <h3
              class="mb-1 text-lg font-semibold text-gray-900 dark:text-white"
            >
              Numeration and literacy Olympics 2023
            </h3>
            <time
              class="block mb-2 text-sm font-normal leading-none text-gray-400 dark:text-gray-500"
              >2023</time
            >
          </li>
          <li class="ml-6 mb-10">
            <span
              class="absolute flex items-center justify-center w-6 h-6 bg-red-600 rounded-full -left-3 ring-8 ring-white dark:ring-gray-900 dark:bg-red-900"
            >
              <svg
                class="w-2.5 h-2.5 text-white dark:text-red-300"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path
                  d="M20 4a2 2 0 0 0-2-2h-2V1a1 1 0 0 0-2 0v1h-3V1a1 1 0 0 0-2 0v1H6V1a1 1 0 0 0-2 0v1H2a2 2 0 0 0-2 2v2h20V4ZM0 18a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8H0v10Zm5-8h10a1 1 0 0 1 0 2H5a1 1 0 0 1 0-2Z"
                />
              </svg>
            </span>
            <h3
              class="mb-1 text-lg font-semibold text-gray-900 dark:text-white"
            >
              Indonesia Muslim Olympic
            </h3>
            <time
              class="block mb-2 text-sm font-normal leading-none text-gray-400 dark:text-gray-500"
              >2023</time
            >
          </li>
          <li class="ml-6 mb-10">
            <span
              class="absolute flex items-center justify-center w-6 h-6 bg-red-600 rounded-full -left-3 ring-8 ring-white dark:ring-gray-900 dark:bg-red-900"
            >
              <svg
                class="w-2.5 h-2.5 text-white dark:text-red-300"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path
                  d="M20 4a2 2 0 0 0-2-2h-2V1a1 1 0 0 0-2 0v1h-3V1a1 1 0 0 0-2 0v1H6V1a1 1 0 0 0-2 0v1H2a2 2 0 0 0-2 2v2h20V4ZM0 18a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8H0v10Zm5-8h10a1 1 0 0 1 0 2H5a1 1 0 0 1 0-2Z"
                />
              </svg>
            </span>
            <h3
              class="mb-1 text-lg font-semibold text-gray-900 dark:text-white"
            >
              Recipients of the 2021 Indonesian Innovation Talent Program
            </h3>
            <time
              class="block mb-2 text-sm font-normal leading-none text-gray-400 dark:text-gray-500"
              >2021</time
            >
          </li>
          <li class="ml-6 mb-10">
            <span
              class="absolute flex items-center justify-center w-6 h-6 bg-red-600 rounded-full -left-3 ring-8 ring-white dark:ring-gray-900 dark:bg-red-900"
            >
              <svg
                class="w-2.5 h-2.5 text-white dark:text-red-300"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path
                  d="M20 4a2 2 0 0 0-2-2h-2V1a1 1 0 0 0-2 0v1h-3V1a1 1 0 0 0-2 0v1H6V1a1 1 0 0 0-2 0v1H2a2 2 0 0 0-2 2v2h20V4ZM0 18a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8H0v10Zm5-8h10a1 1 0 0 1 0 2H5a1 1 0 0 1 0-2Z"
                />
              </svg>
            </span>
            <h3
              class="mb-1 text-lg font-semibold text-gray-900 dark:text-white"
            >
              Awardee Yayasan Hadji Kalla Scholarship
            </h3>
            <time
              class="block mb-2 text-sm font-normal leading-none text-gray-400 dark:text-gray-500"
              >2020</time
            >
          </li>
        </ol>
      </div>
      <div
        class="hidden p-4 rounded-lg bg-gray-50 dark:bg-gray-800"
        id="settings"
        role="tabpanel"
        aria-labelledby="settings-tab"
      >
        <ol class="relative border-l border-gray-200 dark:border-gray-700">
          <li class="mb-10 ml-6">
            <span
              class="absolute flex items-center justify-center w-6 h-6 bg-red-600 rounded-full -left-3 ring-8 ring-white dark:ring-gray-900 dark:bg-red-900"
            >
              <svg
                class="w-2.5 h-2.5 text-white dark:text-red-300"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path
                  d="M20 4a2 2 0 0 0-2-2h-2V1a1 1 0 0 0-2 0v1h-3V1a1 1 0 0 0-2 0v1H6V1a1 1 0 0 0-2 0v1H2a2 2 0 0 0-2 2v2h20V4ZM0 18a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8H0v10Zm5-8h10a1 1 0 0 1 0 2H5a1 1 0 0 1 0-2Z"
                />
              </svg>
            </span>
            <h3
              class="flex items-center mb-1 text-lg font-semibold text-gray-900 dark:text-white"
            >
              Universitas Negeri Malang
            </h3>
            <time
              class="block mb-2 text-sm font-normal leading-none text-gray-400 dark:text-gray-500"
              >July 2018 - August 2022</time
            >
          </li>
          <li class="mb-10 ml-6">
            <span
              class="absolute flex items-center justify-center w-6 h-6 bg-red-600 rounded-full -left-3 ring-8 ring-white dark:ring-gray-900 dark:bg-red-900"
            >
              <svg
                class="w-2.5 h-2.5 text-white dark:text-red-300"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path
                  d="M20 4a2 2 0 0 0-2-2h-2V1a1 1 0 0 0-2 0v1h-3V1a1 1 0 0 0-2 0v1H6V1a1 1 0 0 0-2 0v1H2a2 2 0 0 0-2 2v2h20V4ZM0 18a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8H0v10Zm5-8h10a1 1 0 0 1 0 2H5a1 1 0 0 1 0-2Z"
                />
              </svg>
            </span>
            <h3
              class="mb-1 text-lg font-semibold text-gray-900 dark:text-white"
            >
              Alterra Academy
            </h3>
            <time
              class="block mb-2 text-sm font-normal leading-none text-gray-400 dark:text-gray-500"
              >February 2022 - July 2022</time
            >
          </li>
          <li class="ml-6 mb-10">
            <span
              class="absolute flex items-center justify-center w-6 h-6 bg-red-600 rounded-full -left-3 ring-8 ring-white dark:ring-gray-900 dark:bg-red-900"
            >
              <svg
                class="w-2.5 h-2.5 text-white dark:text-red-300"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path
                  d="M20 4a2 2 0 0 0-2-2h-2V1a1 1 0 0 0-2 0v1h-3V1a1 1 0 0 0-2 0v1H6V1a1 1 0 0 0-2 0v1H2a2 2 0 0 0-2 2v2h20V4ZM0 18a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8H0v10Zm5-8h10a1 1 0 0 1 0 2H5a1 1 0 0 1 0-2Z"
                />
              </svg>
            </span>
            <h3
              class="mb-1 text-lg font-semibold text-gray-900 dark:text-white"
            >
              SMA Negeri 1 Kaimana
            </h3>
            <time
              class="block mb-2 text-sm font-normal leading-none text-gray-400 dark:text-gray-500"
              >July 2015 - May 2018</time
            >
          </li>
        </ol>
      </div>
      <div
        class="hidden p-4 rounded-lg bg-gray-50 dark:bg-gray-800"
        id="contacts"
        role="tabpanel"
        aria-labelledby="contacts-tab"
      >
        <p class="text-sm text-gray-500 dark:text-gray-400">
          Lorem Ipsum Dolor Sit Amet
        </p>
      </div>
    </div>
  </section>
</template>
