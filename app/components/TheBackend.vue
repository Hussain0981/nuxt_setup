<script lang="ts" setup>
interface Skill {
  id: number
  title: string
  icon: string
  isImage?: boolean
}

interface SkillCategory {
  label: string
  items: Skill[]
}

const skillCategories: Readonly<SkillCategory[]> = [
  {
    label: 'RE & Frameworks',
    items: [
      { id: 1, title: 'Node.js', icon: 'logos:nodejs-icon' },
      { id: 2, title: 'Express.js', icon: 'skill-icons:expressjs-light' },
      { id: 3, title: 'Nuxt Nitro H3', icon: 'vscode-icons:file-type-nuxt' },
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
    label: 'View Engine',
    items: [
      { id: 1, title: 'EJS', icon: 'vscode-icons:file-type-ejs' },
    ],
  },
  {
    label: 'Databases',
    items: [
      { id: 1, title: 'PostgreSQL', icon: 'logos:postgresql' },
      { id: 2, title: 'MySQL', icon: 'logos:mysql' },
      { id: 3, title: 'MongoDB', icon: 'logos:mongodb-icon' },
    ],
  },
  {
    label: 'ORM / ODM',
    items: [
      { id: 1, title: 'Drizzle', icon: 'https://img.logokit.com/drizzle.team', isImage: true },
      { id: 2, title: 'Prisma', icon: 'logos:prisma' },
      { id: 3, title: 'Mongoose', icon: 'logos:mongodb-icon' },
    ],
  },
] as const
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
