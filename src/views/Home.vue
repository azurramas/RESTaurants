<template>
  <v-app id="inspire">
    <v-content id="home">
      <v-container class="fill-height" fluid>
        <v-row align="center" justify="center">
          <v-col cols="12" class="text-center mb-4">
            <h1
              class=" white--text"
            >Order food as a user, or log in to your restaurant admin panel:</h1>
          </v-col>

          <v-col v-for="link in links" :key="link.text" cols="12" md="3">
            <v-card fluid router :to="link.route" class="mx-auto pa-4" shaped id="card" >
              <v-card-text class="display-1 text-center">{{link.text}}</v-card-text>
              <div class="d-flex justify-content-center">
                <v-icon class="mx-auto" size="120">{{link.icon}}</v-icon>
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
        text: "I'm a hungry user!",
        route: "/user"
        //apiroute: "/restaurants*",
      },
      {
        icon: "mdi-food",
        text: "Restaurant panel",
        route: "/login"
        //apiroute: "/restaurants*",
      }
    ]
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

.v-content {
  padding: 0 !important;
}

#home {
 background-image: linear-gradient(to bottom, #e65100, #ea6a2f, #eb8050, #eb956f, #e8aa8f);
}
</style>