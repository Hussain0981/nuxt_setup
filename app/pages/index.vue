<script lang="ts" setup>
const tags = ['Vue / Nuxt', 'Full Stack', 'Open Source', 'TypeScript']
</script>

<template>
  <div class="rounded-2xl  bg-white p-8 flex flex-col gap-5">
    <!-- hero section -->
    <TheHero />
    <hr class=" border-gray-100">

    <!-- frontend  -->
    <h2 class="text-xl font-semibold">
      Frontend Skills
    </h2>
    <TheFrontend />
    <hr class=" border-gray-100">

    <!-- backend -->
    <h2 class="text-xl font-semibold">
      Backend Skills
    </h2>
    <TheBackend />
    <hr class=" border-gray-100">

    <!-- projects -->
    <h2 class="text-xl font-semibold">
      My open source Projects
    </h2>
    <TheProjects />
    <hr class=" border-gray-100">
  </div>
</template>
