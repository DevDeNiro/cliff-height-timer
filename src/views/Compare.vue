<template>
  <v-container>
    <div class="unit-comparator">
      <div class="unit-comparator__header">
        <h2>{{ object1.name1 }} vs {{ object2.name1 }}</h2>
      </div>
      <div class="unit-comparator__content">
        <div class="unit-comparator__object">
          <p class="unit-comparator__object-name">{{ object1.name1 }}</p>
          <p class="unit-comparator__object-value">
            {{ object1.value }} {{ object1.unit }}
          </p>
        </div>
        <div class="unit-comparator__object">
          <p class="unit-comparator__object-name">{{ object2.name1 }}</p>
          <p class="unit-comparator__object-value">
            {{ object2.value }} {{ object2.unit }}
          </p>
        </div>
      </div>
      <div class="unit-comparator__footer">
        <p>{{ compareObjects() }}</p>
      </div>
    </div>
  </v-container>
</template>

<script>
export default {
  name: "compare-d",
  props: {
    object1: {
      type: Object,
      required: true,
    },
    object2: {
      type: Object,
      required: true,
    },
  },
  methods: {
    compareObjects() {
      if (this.object1.unit !== this.object2.unit) {
        return "Les objets ne sont pas comparables car ils n'utilisent pas la même unité de mesure.";
      }
      if (this.object1.value > this.object2.value) {
        return `${this.object1.name1} est plus grand que ${this.object2.name1}.`;
      } else if (this.object1.value < this.object2.value) {
        return `${this.object2.name1} est plus grand que ${this.object1.name1}.`;
      } else {
        return "Les objets sont égaux.";
      }
    },
  },
};
</script>

<style scoped>
.unit-comparator {
  border: 1px solid #ccc;
  border-radius: 4px;
  padding: 10px;
}

.unit-comparator__header {
  text-align: center;
  margin-bottom: 10px;
}

.unit-comparator__content {
  display: flex;
  justify-content: space-between;
}

.unit-comparator__object {
  border: 1px solid #ccc;
  border-radius: 4px;
  padding: 10px;
  flex-basis: calc(50% - 5px);
}

.unit-comparator__object-name {
  font-weight: bold;
  margin-bottom: 5px;
}

.unit-comparator__footer {
  margin-top: 10px;
  text-align: center;
  font-weight: bold;
}
</style>
