<template>
  <v-container>
    <v-row>
      <v-col v-for="reservation in reservations" :key="reservation.ID" cols="12" sm="6" md="3">
        <v-card class="mx-auto">
          <v-card-text>
            <p class="headline text--primary">Reservation: {{reservation.ID}}</p>
            <p class="title">Table number: {{reservation.TableID}}</p>

            <p class="subtitle-1 font-weight-light">People: {{reservation.numSeats}}</p>
            <p class="subtitle-1 font-weight-light">Date and time: {{reservation.date}}</p>
          </v-card-text>
          <!-- <v-card-actions>
            <v-btn text color="deep-purple accent-4">Learn More</v-btn>
          </v-card-actions>-->
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import moment from "moment";
import { mapGetters } from "vuex";
export default {
  data: function() {
    return {
      socket: undefined
    };
  },
  computed: {
    ...mapGetters(["getReservations", "getID"]),
    reservations() {
      let reservations = this.getReservations;
      reservations.forEach(reservation => {
          reservation.date =  moment(reservation.date).format("MMMM Do YYYY, h:mm a");
      });
      return reservations;
    }
  },
  mounted() {
    if (localStorage.getItem('reloaded')) {
       
        localStorage.removeItem('reloaded');
    } else {

        localStorage.setItem('reloaded', '1');
        location.reload();
    }

    let id = this.getID;
    this.$store.dispatch("loadReservations", id);

    this.socket = new WebSocket("ws://10.0.4.128:9999/ws/" + id);

    this.socket.onopen = () => {
      console.log("Socket connected...");
      this.socket.send("Connecting..");
    };

    this.socket.onmessage = () => {
      console.log("socket");
      this.$store.dispatch("loadReservations", id);
    };

    this.socket.onclose = () => {
      if (event.wasClean) {
        console.log(event);
      } else {
        // e.g. server process killed or network down
        // event.code is usually 1006 in this case
      }
    };

    this.socket.onerror = error => {
      console.log(error);
    };
  },
};
</script>

<style>
</style>