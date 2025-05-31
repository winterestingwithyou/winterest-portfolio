<script setup>
defineProps({
  value: {
    type: Number,
    required: true
  },
  height: {
    type: Number,
    default: 7
  },
  skill: {
    type: String,
    default: ''
  },
  skillClass: {
    type: String,
    default: ''
  },
  valueClass: {
    type: String,
    default: ''
  },
  progressColor: {
    type: String,
    default: ''
  }
})
</script>


<template>
  <div>
    <div class="d-flex justify-space-between mb-1">
      <slot name="header" :value="value">
        <span :class="skillClass">
          {{ skill }}
        </span>
        <span :class="valueClass">
          {{ value }}%
        </span>
      </slot>
    </div>
    <v-progress-linear
      :model-value="value"
      :height="height"
      :color="progressColor"
      rounded
    ></v-progress-linear>
  </div>
</template>