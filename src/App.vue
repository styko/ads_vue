<template>
  <v-app>
    <v-app-bar app color="primary" dark >
      <v-toolbar-title v-if="storeState.loggedIn">Ads</v-toolbar-title>

      <v-spacer></v-spacer>

      <v-btn v-if="storeState.loggedIn" @click="logout" text>
        <span class="mr-2">Logout</span>
        <v-icon>mdi-logout</v-icon>
      </v-btn>
    </v-app-bar>

    <v-content>
      <v-container fluid>
        <router-view/>
      </v-container>
    </v-content>
  </v-app>
</template>

<script>
import store from '@/store';

export default {
  name: 'App',
  data: () => ({
    storeState: store.state,
  }),
  computed: {
    loggedIn() {
      return this.storeState.loggedIn;
    },
  },
  methods: {
    logout() {
      store.removeUserData();
      this.$router.push('/');
    },
  },
};
</script>
