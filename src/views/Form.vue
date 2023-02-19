<template>
  <v-form ref="form" @submit.prevent="onSubmit">
    <v-container>
      <v-row>
        <!-- TODO: made field error -->
        <v-col cols="12" md="4">
          <v-text-field
            :counter="10"
            id="time"
            v-model="time"
            label="Time"
            type="number"
            required
          ></v-text-field>
        </v-col>

        <v-col cols="12" md="4">
          <v-text-field
            :counter="10"
            id="meter"
            v-model="meter"
            label="Meter"
            type="number"
            required
          ></v-text-field>
        </v-col>

        <v-col cols="12" md="4">
          <v-text-field
            :counter="10"
            id="feet"
            v-model="feet"
            type="number"
            label="Feet"
            required
          ></v-text-field>
        </v-col>
      </v-row>
      <v-btn class="mr-4" @click="onSubmit"> submit </v-btn>
    </v-container>
  </v-form>
</template>

<script>
export default {
  name: "form-test",
  data() {
    return {
      time: "",
      meter: "",
      feet: "",
    };
  },
  methods: {
    onSubmit() {
      let productReview = {
        time: this.time,
        meter: this.meter,
        feet: this.feet,
      };
      this.$emit("review-submitted", productReview);
      this.saveHistory({time: this.time, meter: this.meter, feet: this.feet});
    },
    saveHistory(item) {
      // Sauvegarde dans l’historique
      let history = JSON.parse(localStorage.getItem("history"));
      if (!Array.isArray(history)) {
        history = [];
      }
      history.unshift(item);
      localStorage.setItem("history", JSON.stringify(history));
    },
  },
};
</script>

<style></style>
