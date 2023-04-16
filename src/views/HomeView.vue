<script setup>

import { useRouter } from 'vue-router'
import Dynamic from '@/views/AboutView.vue'

const dynamicRouteName = 'Dynamic'

const router = useRouter()

const addRoute = () => {
  router.addRoute({ path: '/dynamic', name: dynamicRouteName, component: Dynamic })
  router.push('/dynamic')
}

const removeRoute = () => {
  router.removeRoute(dynamicRouteName)
  router.push('/')
}
</script>

<template>
  <nav>
    <router-link to="/">Home</router-link> | <router-link to="/about">About</router-link> |
    <router-link to="/dynamic">Dynamic</router-link>
  </nav>
  <main>
    <button @click="addRoute">Add dynamic route</button>
    <button @click="removeRoute">Remove dynamic route</button>
    <router-view />
  </main>
</template>