<template>
  <v-app id="inspire">
    <v-content>
      <v-container class="fill-height" fluid>
        <v-row align="center" justify="center">
          <v-col v-for="link in links" :key="link.text"  cols="12" md="3">
            <v-card router :to="link.route" class="mx-auto" id="card" min-height="300">
              <v-card-text class="display-3 text-center">{{link.text}}</v-card-text>
              <div class="d-flex justify-content-center">
                <v-icon class="mx-auto" size="150">{{link.icon}}</v-icon>
              </div>
            </v-card>
          </v-col>
        </v-row>
      </v-container>
    </v-content>
  </v-app>
</template>

<script>
export default {
  
  props: {
    source: String
  },
  data: () => ({
    drawer: null,
    links: [
    {
      icon: "mdi-account",
      text: "User",
      route: "/user"
      //apiroute: "/restaurants*",
    },
    {
      icon: "mdi-food",
      text: "Restaurant",
      route: "/restaurant"
      //apiroute: "/restaurants*",
    }
  ],
  })
};
</script>

<style scoped>
a {
  text-decoration: none;
  transition: all 0.35s ease-in-out;
}

a:hover #card {
  color: #0081cf;
}
</style>