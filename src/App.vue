<template>
  <v-app>
    <v-app-bar v-if="storeState.loggedIn"
               app color="primary"
               dark
               shrink-on-scroll
               prominent
               src="https://i.picsum.photos/id/366/1920/1080.jpg?hmac=bGXI03RuxG0Df3L5S5Dr2NHXQ3IZNSbjLIXrZxVO0aY">

      <v-card-title>
        <h1 class="font-weight-bold display-3 basil--text">Ads</h1>
      </v-card-title>
      <v-spacer></v-spacer>

      <template v-slot:extension>
        <v-tabs align-with-title >
          <v-tab to="/latest-ads">Latest ads</v-tab>
          <v-tab to="/deactivated-ads">Deactivated ads</v-tab>
          <v-tab to="/deactivated-ads-heat">Deactivated ads heatmap</v-tab>
        </v-tabs>
      </template>
      <v-spacer></v-spacer>
      <v-btn @click="logout" text color="black">
        <span class="mr-2">Logout</span>
        <v-icon>mdi-logout</v-icon>
      </v-btn>

    </v-app-bar>

    <v-content>
      <v-container fluid >
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
