<style>
.history {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 10px;
  grid-auto-rows: minmax(100px, auto);
}
</style>

<template>
  <v-container>
    <div class="history">
      <v-card
        v-for="(item, index) in histo"
        :key="index"
        class="ma-2 pa-2"
        max-width="344"
      >
        <v-card-text>
          <p>seconde: {{ item.time }}</p>
          <p>Meter: {{ item.meter }}</p>
          <p>Feet: {{ item.feet }}</p>
        </v-card-text>
        <v-card-actions>
          <v-btn text color="deep-purple accent-4" @click="deleteOneHisto">
            Supprimer
          </v-btn>
        </v-card-actions>
      </v-card>
      <v-btn color="danger" @click="deleteAllHisto">Supprimer</v-btn>
    </div>
  </v-container>
</template>

<script>
export default {
  name: "history-test",
  data: () => {
    return {
      histo: JSON.parse(localStorage.getItem("history")),
    };
  },
  methods: {
    deleteAllHisto() {
      localStorage.removeItem("history");
      this.histo = null;
    },
    deleteOneHisto() {},
  },

  // TODO : Set I18n.local pour langues
};
</script>
