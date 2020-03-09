<template>
  <v-app id="inspire">
    <div  class="fadeIn" data-wow-delay="0.2s" data-wow-duration="2s" v-wow >
    <Structure v-if="navigation()" />
    <v-content style="min-height: 100vh" class="orange lighten-5">
      <router-view></router-view>
    </v-content>
    <v-footer v-if="navigation()" color="orange darken-4" app>
      <span class="white--text">Team 404 &copy; 2019</span>
    </v-footer>
  
  </div></v-app>
</template>

<script>
import Structure from "./components/Structure";


export default {
  methods: {
    navigation: function() {
      if (this.$route.path !== "/" && this.$route.path !== "/login") {
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