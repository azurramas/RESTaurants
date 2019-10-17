<template>
  <div>
    <v-navigation-drawer v-model="drawer" app>
      <v-list v-if="perms()" dense>
        <v-list-item v-for="restLink in restLinks" :key="restLink.text" router :to="restLink.route">
          <v-list-item-action>
            <v-icon>{{restLink.icon}}</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title>{{restLink.text}}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>

    <v-app-bar app color="indigo" dark>
      <v-app-bar-nav-icon @click.stop="drawer = !drawer"></v-app-bar-nav-icon>
      <v-toolbar-title>REST-aurants</v-toolbar-title>
    </v-app-bar>
  </div>
</template>

<script>
export default {
  methods: {
    navigation: function() {
      if (this.$route.path !== '/'){
        return true
      }
    },
    perms: function() {
      if (this.$route.path === "/restaurant" || this.$route.path === "/reservations" || this.$route.path === "/orders" )
      return true
    }
  },

  data: () => ({
    drawer: null,
    userLinks: [
      {
        icon: "restaurant",
        text: "User",
        route: "/user"
        //apiroute: "/restaurants*",
      }
    ],
    restLinks: [
      {
        icon: "mdi-table-search",
        text: "Reservations",
        route: "/reservations"
        //apiroute: "/restaurants*",
      },
      {
        icon: "mdi-food",
        text: "Orders",
        route: "/orders"
        //apiroute: "/restaurants*",
      }
    ]
  })
};
</script>