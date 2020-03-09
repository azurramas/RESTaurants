<template>
  <v-app id="inspire">
    <v-content id="home1">
      <v-container class="fill-height" fluid>
        <v-row align="center" justify="center">
          <v-col cols="12" sm="8" md="4">
            <v-card class="elevation-12">
              <v-toolbar color="orange darken-4" dark flat>
                <v-toolbar-title>Login</v-toolbar-title>
                <v-spacer></v-spacer>
              </v-toolbar>
              <v-card-text>
                <v-form>
                  <v-text-field
                    v-model="username"
                    label="Login"
                    name="login"
                    prepend-icon="mdi-account"
                    type="text"
                  ></v-text-field>

                  <v-text-field
                    v-model="password"
                    id="password"
                    label="Password"
                    name="password"
                    prepend-icon="mdi-lock"
                    type="password"
                  ></v-text-field>
                </v-form>
                <v-alert
                  v-if="$store.state.loginerr"
                  dense
                  outlined
                  type="error"
                >Username or password incorrect.</v-alert>
              </v-card-text>
              <v-card-actions>
                <v-spacer></v-spacer>
                <v-btn v-on:click="login" color="orange darken-4" dark>Login</v-btn>
              </v-card-actions>
            </v-card>
          </v-col>
        </v-row>
      </v-container>
    </v-content>
  </v-app>
</template>

<script>
export default {
  data() {
    return {
      username: "",
      password: ""
    };
  },
  methods: {
    login: function() {
      let payload = {
        username: this.username,
        password: this.password
      };

      this.$store
        .dispatch("login", payload)
        .then(() => {})
        .catch(err => console.log(err));
    }
  },
  mounted() {
    this.$store.dispatch("clearStorageId");
  }
};
</script>

<style scoped>
#home1 {
  background-image: linear-gradient(
    to bottom,
    #e65100,
    #ea6a2f,
    #eb8050,
    #eb956f,
    #e8aa8f
  );
}
</style>