<template>
  <div class="default-layout">
    <v-app>
      <v-navigation-drawer :mobile="false">
        <v-list>
          <v-list-item title="Navigation drawer"></v-list-item>
        </v-list>
      </v-navigation-drawer>

      <v-app-bar title="App bar"></v-app-bar>

      <v-main>
        <v-container>
          <h1>Main Content</h1>
          <router-view />
        </v-container>
      </v-main>
    </v-app>
  </div>
</template>
