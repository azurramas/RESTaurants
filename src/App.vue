<template>
  <v-app id="inspire">
    <Structure v-if="navigation()" />
    <v-content>
      <router-view></router-view>
    </v-content>
    <v-footer color="indigo" app>
      <span class="white--text"> Team 404 &copy; 2019</span>
    </v-footer>
  </v-app>
</template>

<script>
import Structure from "./components/Structure";

export default {
  methods: {
    navigation: function() {
      if (this.$route.path !== "/") {
        return true;
      }
    }
  },
  name: "App",
  components: {
    Structure
  },
  data: () => ({})
};
</script>