<template>
  <v-row
    align="center"
    justify="center"
  >
    <v-col
      cols="12"
      sm="8"
      md="4"
    >
      <v-card class="elevation-12">
        <v-toolbar
          color="primary"
          dark
          flat
        >
          <v-toolbar-title>Login form</v-toolbar-title>
          <v-spacer></v-spacer>
        </v-toolbar>
        <v-card-text>
          <v-form>
            <v-text-field
              label="Login"
              name="login"
              prepend-icon="mdi-account"
              type="text"
              v-model="user.username"
            ></v-text-field>

            <v-text-field
              id="password"
              label="Password"
              name="password"
              prepend-icon="mdi-lock"
              type="password"
              v-model="user.password"
            ></v-text-field>
          </v-form>
        </v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn color="primary" :disabled="loading" :loading="loading" @click="login">Login</v-btn>
        </v-card-actions>
      </v-card>
    </v-col>
  </v-row>
</template>

<script>
import restService from '@/services/restService';
import store from '@/store';

export default {
  props: {
    source: String,
  },
  data: () => ({
    user: {
      username: '',
      password: '',
    },
    loading: false,
  }),
  created() {
    this.routeToAdds();
  },
  methods: {
    async login() {
      this.loading = true;
      await restService.login(this.user);
      this.loading = false;
      this.routeToAdds();
    },
    routeToAdds() {
      if (store.state.loggedIn) {
        this.$router.push('/latest-ads');
      }
    },
  },
};
</script>
