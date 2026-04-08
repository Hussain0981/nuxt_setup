<script lang="ts" setup>
const navItems = [
  { title: 'Home', link: '#home' },
  { title: 'Frontend', link: '#frontend' },
  { title: 'Backend', link: '#backend' },
  { title: 'Projects', link: '#projects' },
  { title: 'Contact', link: '#contacts' },
]
</script>

<template>
  <div
    class="border text-sm font-semibold border-gray-200 px-6 rounded-2xl  py-2.5 text-gray-600  flex items-center justify-between"
  >
    <div class="flex items-center gap-5  ">
      <NuxtLink v-for="item in navItems" :key="item.link" to="" class="hover:text-gray-800 transition-colors duration-200 cursor-pointer">
        {{ item.title }}
      </NuxtLink>
    </div>
    <div />
    <div>
      hello
    </div>
  </div>
</template>

<style lang="postcss" scoped></style>
