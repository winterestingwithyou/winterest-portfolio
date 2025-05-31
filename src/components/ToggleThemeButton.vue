<script setup>
import { useToggleTheme } from '../composables/useToggleTheme';

const { iconName, iconTitle, toggleTheme  } = useToggleTheme()
</script>

<template>
  <v-btn icon @click="toggleTheme">
    <v-icon>{{ iconName }}</v-icon>
    <span>{{ iconTitle }}</span>
  </v-btn>
</template>

