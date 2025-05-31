<script setup>
import { useRoute } from 'vue-router'
import { ref, unref } from 'vue';

//Highlight Tombol Navigasi Halaman yang sedang aktif
const route = useRoute()

const isActive = (fullUrl) => {
  const currentPath = route.path
  const routePath = new URL(fullUrl, window.location.origin).pathname
  return routePath === currentPath
}

//Daftar Tombol Navigasi Halaman dan Item di Navbar
const props = defineProps({
  pages: {
    type: Array,
    default: () => [],
  },
  menuItems: {
    type: Array,
    default: () => [],
  },
});

//Menangani action menuItems
const handleAction = (item) => {
  if (item.action) {
    item.action();
  }
};

//Drawer
const drawer = ref(false);
</script>

<template>
  <v-app-bar app color="black" flat class="px-4 md:px-8">
    <div class="d-flex align-center justify-space-between w-100">
      <div class="d-flex align-center ga-2">
        <slot name="title"></slot>
      </div>

      <div class="d-none d-md-flex ga-8">
        <v-btn
        v-for="page in pages"
        :key="page.title"   
        text
      >
        <router-link
          :to="page.route"
          class="text-capitalize font-weight-bold text-white" 
          :class="isActive(page.route) ? 'text-decoration-underline' : 'text-decoration-none'"
          style="text-underline-offset: 4px;"
        >
          {{ page.title }}
        </router-link>
      </v-btn>
      </div>

      <div class="d-none d-md-flex align-center ga-4">
        <v-btn          
          v-for="item in menuItems"
          :key="item.title"
          :icon="unref(item.icon)"
          @click="handleAction(item)"
          variant="text"
        />
      </div>

      <div class="d-flex d-md-none">
        <v-app-bar-nav-icon @click="drawer = !drawer"></v-app-bar-nav-icon>
      </div>
    </div>
  </v-app-bar>

  <v-navigation-drawer v-model="drawer" temporary app location="right" color="black" class="text-white">
    <v-list dense nav>
      <v-list-item
        v-for="page in pages"
        :key="page.title"        
        :to="page.route"
        :title="page.title"
        class="text-capitalize" 
        :style="isActive(page.route)? 'background-color: rgba(255, 255, 255, 0.1)': ''"
        link
        router
      />
      <v-divider></v-divider>
        <v-list-item
          v-for="item in menuItems" 
          :key="item.title"
          :prepend-icon="unref(item.icon)"
          :to="item.link"
          @click="handleAction(item)"
        >
          <template v-slot:title>
            <span class="text-capitalize">{{ item.title }}</span>
          </template>
        </v-list-item>
    </v-list>
  </v-navigation-drawer>
</template>

