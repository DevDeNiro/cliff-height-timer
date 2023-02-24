<style>
.container {
  margin: 2rem 5rem;
  display: flex;
  align-items: center;
  background-color: antiquewhite;
}

input {
  padding: 1rem;
  width: 120px;
  height: 10px;
  border-style: dashed;
}

.vbtn {
  position: absolute;
  top: 170px;
}
</style>
<template>
  <v-container class="container">
    <input class="numberf" :value="j" @change="setJoules" />
    Joules =
    <div class="field" v-if="b1 == 0">
      <input :value="kc" @change="setCalories" /> Calories
    </div>
    <div class="field" v-if="b1 == 1">
      <input :value="kwh" @change="setKWh" /> KWh
    </div>

    <v-btn class="vbtn" variant="outlined" color="primary" @click="setB">
      Button
    </v-btn>
  </v-container>
</template>

<script>
export default {
  name: "compare-d",
  data() {
    return {
      j: 1,
      kc: 4.2,
      kwh: 0,
      b1: 0,
    };
  },
  methods: {
    setJoules(e, j = +e.target.value) {
      this.j = j;
      this.kc = (j * 4.2).toFixed(2);
      this.kwh = (j * (2.777778 * 10 ** -7)).toFixed(10);
    },
    setCalories(e, kc = +e.target.value) {
      this.kc = kc;
      this.j = (kc / 4.2).toFixed(2);
    },
    setKWh(e, kwh = +e.target.value) {
      this.kwh = kwh;
      this.j = (kwh / (2.777778 * 10 ** -7)).toFixed(2);
    },
    setB() {
      if (this.b1 < 1) {
        this.b1 += 1;
      } else {
        this.b1 = 0;
      }
    },
  },
};
</script>
