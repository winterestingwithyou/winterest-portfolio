<script setup>
const props = defineProps({
    imageUrl: {
      type: String,
      default: "https://thumbs.dreamstime.com/b/default-avatar-profile-vector-user-profile-default-avatar-profile-vector-user-profile-profile-179376714.jpg",
      required: true
    },
    title: {
      type: String,
      default: import.meta.env.VITE_APP_NAME
    }
});
</script>

<template>
    <v-img :width="30" :src="imageUrl" rounded="circle"></v-img>
    <span class="text-h6 font-weight-bold">{{ title }}</span>
</template>