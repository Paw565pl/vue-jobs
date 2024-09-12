<script lang="ts" setup>
import logo from "@/core/assets/img/logo.png"
import type { NavBarLinkProps } from "@/core/components/NavBarLink.vue"
import NavBarLink from "@/core/components/NavBarLink.vue"
import { RouterLink } from "vue-router"

const links: NavBarLinkProps[] = [
  { path: "/", text: "Home" },
  { path: "/job-offers", text: "Jobs" },
  { path: "/job-offers/add", text: "Add Job" }
]
</script>

<template>
  <nav class="border-b border-green-500 bg-green-700">
    <div class="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
      <div class="flex h-20 items-center justify-between">
        <div class="flex flex-1 items-center justify-center md:items-stretch md:justify-start">
          <RouterLink to="/" class="mr-4 flex flex-shrink-0 items-center">
            <img class="h-10 w-auto" :src="logo" alt="Vue Jobs" />
            <span class="ml-2 hidden text-2xl font-bold text-white md:block">Vue Jobs</span>
          </RouterLink>
          <div class="md:ml-auto">
            <div class="flex space-x-2">
              <NavBarLink v-for="link in links" :key="link.path" :path="link.path" :text="link.text" />
            </div>
          </div>
        </div>
      </div>
    </div>
  </nav>
</template>
