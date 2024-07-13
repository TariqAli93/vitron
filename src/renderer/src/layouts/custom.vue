<template>
  <div class="login-layout">
    <v-card>
      <v-card-title class="headline">Login</v-card-title>
      <v-card-text>
        <v-form @submit.prevent="login">
          <v-text-field v-model="username" label="Username" required></v-text-field>
          <v-text-field v-model="password" label="Password" type="password" required></v-text-field>
          <v-btn type="submit" color="primary">Login</v-btn>
        </v-form>
      </v-card-text>
    </v-card>
  </div>
</template>
<script>
import { ref } from 'vue'

export default {
  setup() {
    const username = ref('')
    const password = ref('')

    const login = () => {
      console.log('Username:', username.value)
      console.log('Password:', password.value)

      // Call the login API here
    }
    return { username, password, login }
  }
}
</script>
