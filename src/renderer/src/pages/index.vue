<template>
  <div>
    <h1>Home Page</h1>
  </div>
</template>

<script setup>
import { onMounted } from 'vue'

onMounted(() => {
  window.api.fetch_projects()
})
</script>

<style></style>
<route lang="yaml">
meta:
  name: الرئيسية
  layout: default
  icon: home
  order: 1
</route>
