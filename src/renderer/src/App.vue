<template>
  <v-app>
    <v-main>
      <router-view v-slot="{ Component, route }">
        <transition name="fade" mode="out-in">
          <component :is="Component" :key="route" />
        </transition>
      </router-view>
    </v-main>
  </v-app>
</template>

<script>
import { ref } from 'vue'
import uniqueRoutes from './plugins/routes'
export default {
  setup() {
    const routes = ref(uniqueRoutes())

    const minimizWindow = () => {
      window.api.minimize()
    }

    const maximizeWindow = () => {
      window.api.maximize()
    }

    const closeWindow = () => {
      window.api.close()
    }

    return { routes, minimizWindow, maximizeWindow, closeWindow }
  }
}
</script>
<style lang="scss">
@import './styles/main.scss';
@import './assets/icons.css';

body,
html {
  font-family: 'Cairo', sans-serif;
  font-optical-sizing: auto;
  font-weight: 300;
  font-style: normal;
  font-variation-settings: 'slnt' 11;
}

.window-bar {
  -webkit-app-region: drag;

  .controls {
    display: flex;
    align-items: center;
    justify-content: flex-start;
    padding: 0 10px;
    -webkit-app-region: no-drag;
  }
}
</style>
