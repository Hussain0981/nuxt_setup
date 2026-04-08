<script lang="ts" setup>
interface Skill {
  id: number
  title: string
  icon: string
}

interface SkillCategory {
  label: string
  items: Skill[]
}

const skillCategories: SkillCategory[] = [
  {
    label: 'Structure',
    items: [
      { id: 1, title: 'HTML', icon: 'vscode-icons:file-type-html' },
    ],
  },
  {
    label: 'Styling',
    items: [
      { id: 1, title: 'CSS', icon: 'vscode-icons:file-type-css' },
      { id: 2, title: 'TailwindCSS', icon: 'vscode-icons:file-type-tailwind' },
      { id: 3, title: 'UnoCSS', icon: 'vscode-icons:file-type-unocss' },
    ],
  },
  {
    label: 'Logic',
    items: [
      { id: 1, title: 'JavaScript', icon: 'vscode-icons:file-type-js' },
      { id: 2, title: 'TypeScript', icon: 'vscode-icons:file-type-typescript' },
    ],
  },
  {
    label: 'Animation',
    items: [
      { id: 1, title: 'GSAP', icon: 'logos:greensock-icon' },
      { id: 2, title: 'Three.js', icon: 'logos:threejs' },
    ],
  },
  {
    label: 'Framework',
    items: [
      { id: 1, title: 'Vue', icon: 'vscode-icons:file-type-vue' },
      { id: 2, title: 'Nuxt', icon: 'vscode-icons:file-type-nuxt' },
    ],
  },
]
</script>

<template>
  <div class="flex flex-col gap-3">
    <div
      v-for="category in skillCategories"
      :key="category.label"
      class="flex items-center gap-3"
    >
      <!-- <h3 class="font-semibold text-md w-24 shrink-0">
        {{ category.label }}
      </h3> -->
      <div class="flex items-center gap-3">
        <div
          v-for="skill in category.items"
          :key="skill.id"
          class="flex items-center gap-1"
        >
          <Icon :name="skill.icon" class="w-5 h-5" />
          <span class="text-sm">{{ skill.title }}</span>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="postcss" scoped></style>
