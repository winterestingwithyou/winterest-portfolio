<script setup>
import Navbar from '../components/Navbar.vue';
import Footer from '../components/Footer.vue';
import NavTitle from '../components/NavTitle.vue';
import TypeWriterText from '../components/TypeWriterText.vue';
import SlideUpOnView from '../components/SlideUpOnView.vue';
import { useToggleTheme } from '../composables/useToggleTheme';
import { ref } from 'vue'; 

// Halaman Navigasi
const pages = ref([
  { title: "Home", route: '/' },
  { title: "About", route: '/about' },
  { title: "Projects", route: '/projects' },
])

// Composable Tombol
const { iconName: themeIcon, iconTitle: themeTitle, toggleTheme } = useToggleTheme()

// Item Navigasi
const menuItems = [ 
  { title: themeTitle, icon: themeIcon, action: toggleTheme},
];

//Ikon Sosmed
const socialIcons = ref([
  { name: 'github', mdi: 'mdi-github', link: 'https://github.com/winterestingwithyou' },
  { name: 'instagram', mdi: 'mdi-instagram', link: 'https://instagram.com/adam_y__' }, 
  { name: 'facebook', mdi: 'mdi-facebook', link: 'https://www.facebook.com/adam.yudistira.14203' },
]);

</script>

<template>
  <v-app>
    <Navbar :menu-items="menuItems" :pages="pages">
      <template v-slot:title>
        <NavTitle title="Winterest Portfolio" image-url="https://avatars.githubusercontent.com/u/153144749?v=4" />
      </template>      
    </Navbar>
    <v-main>
        <slot />
    </v-main>
    <Footer>
      <div class="my-2">
        <slide-up-on-view>
          <v-img
            src="https://avatars.githubusercontent.com/u/153144749?v=4" alt="Logo"
            :width="100"
            aspect-ratio="1"
            contain
            rounded="circle"
            class="my-4"
          ></v-img>
        </slide-up-on-view>
      </div>

      <div class="pt-0 text-grey-lighten-1">
        <type-writer-text>Thanks for scrolling, that's all folks.</type-writer-text>      
      </div>

      <div class="py-4">
        <slide-up-on-view>
          <v-hover
            v-for="icon in socialIcons"
            :key="icon.name"
            v-slot:default="{ isHovering, props }">
            <v-btn
              :icon="icon.mdi"
              v-bind="props"
              variant="text"
              size="medium"
              :href="icon.link"
              target="_blank"
              rel="noopener noreferrer"
              class="mx-4 mb-2 text-white"
              :class="isHovering? 'opacity-100' : 'opacity-70'"
            />       
          </v-hover>
        </slide-up-on-view>
      </div>
    </Footer>
  </v-app>
</template>