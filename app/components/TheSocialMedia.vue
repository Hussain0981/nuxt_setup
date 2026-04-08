<script lang="ts" setup>
import type { defineComponent } from 'vue'
import FacebookIcon from '~/components/icons/TheFacebook.vue'
import githubIcon from '~/components/icons/TheGithub.vue'
import LinkedInIcon from '~/components/icons/TheLinkedIn.vue'
import XIcon from '~/components/icons/TheX.vue'

interface SocialMedia {
  id: number
  title: string
  icon: ReturnType<typeof defineComponent>
  link: string
}

const socialMedia: SocialMedia[] = [
  { id: 1, title: 'GitHub', icon: githubIcon, link: 'https://github.com/Hussain0981' },
  { id: 3, title: 'X', icon: XIcon, link: 'https://x.com/HussainUllah098' },
  { id: 4, title: 'LinkedIn', icon: LinkedInIcon, link: 'https://www.linkedin.com/in/husayn-khan-84a92b33a/' },
  { id: 2, title: 'Facebook', icon: FacebookIcon, link: 'https://web.facebook.com/profile.php?id=61554925681562' },
]
</script>

<template>
  <div class="flex items-center gap-3">
    <NuxtLink
      v-for="media in socialMedia"
      :key="media.id"
      :to="media.link"
      target="_blank"
      class="text-gray-600 hover:text-gray-800 transition-colors duration-200"
    >
      <component :is="media.icon" :size="20" />
    </NuxtLink>
  </div>
</template>
