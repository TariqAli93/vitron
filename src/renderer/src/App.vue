<template>
  <div id="app">
    <router-view />
    <div>
      <v-btn
        v-for="route in routeList"
        :key="route.name"
        color="primary"
        class="mx-4"
        :to="route.path"
        >{{ route.name }}</v-btn
      >
    </div>
  </div>
</template>

<script setup>
import { useRouter } from 'vue-router'
const { getRoutes } = useRouter()
const routeList = getRoutes()
console.log(routeList)
</script>
