<script setup>
import { useHead } from '@vueuse/head'
import AppLayout from '../layouts/AppLayout.vue'
import { ref } from 'vue'

// Head
useHead({
  title: 'Projects',
})

// Index of Projects
const currentProjectIndex = ref(0)

// List of Projects
const projects = ref([
  {
    id: 1,
    imageSrc: "img/Larapus.png",
    tags: [
      { text: "Website", color: "deep-purple-accent-4" },
      { text: "Laravel", color: "deep-purple-accent-4" },
      { text: "Bootstrap", color: "deep-purple-accent-4" },
      { text: "Vue.js", color: "deep-purple-accent-4" },
      { text: "MySQL", color: "deep-purple-accent-4" },
    ],
    title: "Larapus",
    description: "Sebuah Web Application untuk manajemen perpustakaan yang dibuat dengan Laravel 10.10. Memiliki fitur CRUD lengkap, autentikasi, konfigurasi role, dan import file.",
    buttonAccent: "deep-purple-accent-4",
    action: ()=>{ window.open('https://github.com/winterestingwithyou/Larapus') },
  },
  {
    id: 2,
    imageSrc: "img/Manajemen-Inventaris.png",
    tags: [
      { text: "Desktop App", color: "teal-accent-4" },
      { text: "Java Native", color: "teal-accent-4" },
      { text: "Swing GUI", color: "teal-accent-4" },
      { text: "MySQL", color: "teal-accent-4" },
    ],
    title: "Manajemen Inventaris",
    description: "Sebuah Aplikasi Desktop yang dibuat dengan Java Native, bertujuan untuk memudahkan proses manajemen inventaris / gudang. Aplikasi ini memiliki fitur CRUD lengkap, autentikasi, dan konfigurasi role.",
    buttonAccent: "teal-accent-4",
    action: ()=>{ window.open('https://github.com/winterestingwithyou/Manajemen-Inventaris') },
  },
  {
    id: 3,
    imageSrc: "img/LC-Busana.png",
    tags: [
      { text: "Desktop App", color: "orange-darken-2" },
      { text: "Java Native", color: "orange-darken-2" },
      { text: "Swing GUI", color: "orange-darken-2" },
      { text: "MySQL", color: "orange-darken-2" },
    ],
    title: "LC Busana",
    description: "Sebuah Aplikasi Desktop yang dibuat dengan Java Native, bertujuan untuk memudahkan proses pemesanan busana dan permak busana pada UMKM LC Busana. Aplikasi ini memiliki fitur CRUD lengkap, autentikasi, konfigurasi role, manajemen profil, dan penyimpanan embedded",
    buttonAccent: "orange-darken-2",
    action: ()=>{ window.open('https://github.com/winterestingwithyou/LC-Busana') },
  },
])

const nextProject = () => {
  if (projects.value.length > 0) {
    currentProjectIndex.value = (currentProjectIndex.value + 1) % projects.value.length
  }
}

const prevProject = () => {
  if (projects.value.length > 0) {
    currentProjectIndex.value = (currentProjectIndex.value - 1 + projects.value.length) % projects.value.length
  }
}

const handleAction = (item) => {
  if (item.action) {
    item.action();
  }
};

</script>

<template>
  <Head title="Projects" />

  <AppLayout>
    <v-container
      class="py-6 d-flex flex-column align-center"  
      style="min-width: 100%;"    
      :style="{ minHeight: 'calc(100vh - var(--v-layout-top, 0px) - var(--v-layout-bottom, 0px))' }"
    >
      <div class="d-flex align-center mb-6 justify-center justify-md-start">
        <span class="bg-highlight mr-3" style="height: 2px; width: 2.5rem"></span>
        <h1 class="text-primary text-h5 text-md-h4 font-weight-bold mb-8" style="height: 2px; letter-spacing: -0.025em;">
           PROJECTS 
        </h1>
        <span class="bg-highlight ml-3" style="height: 2px; width: 2.5rem"></span>        
      </div>
      <div
        class="d-flex align-center justify-center ga-2 ga-sm-4"
        style="min-width: 100%;"
        >
        <div class="d-none d-md-block">
          <v-btn
            icon="mdi-chevron-left"
            @click="prevProject"
            :disabled="projects.length <= 1"
            size="large"
            variant="flat"
            elevation="4"
          />
        </div>

        <div class="d-flex position-relative overflow-hidden elevation-12 rounded-xl">
          <v-window v-model="currentProjectIndex" class="h-100">
            <v-window-item
              v-for="(project, index) in projects"
              :key="project.id"
              :value="index"
              transition="slide-x-transition"
              reverse-transition="slide-x-reverse-transition"
              class="h-100"
            >
              <v-card
                class="h-100 d-flex flex-column"
                :elevation="4"
              >
                <v-img
                  :src="project.imageSrc"
                  height="250px"
                  cover
                >
                </v-img>
                <v-card-text class="d-flex flex-column justify-space-between">
                  <div>
                    <div class="mb-3">
                      <v-chip
                        v-for="tag in project.tags"
                        :key="tag.text"
                        :color="tag.color"
                        class="mr-2 mb-2"
                        size="small"
                      >
                        {{ tag.text }}
                      </v-chip>
                    </div>
                    <h3
                      class="text-h6 font-weight-bold mb-2 text-primary"
                    >
                      {{ project.title }}
                    </h3>
                    <p
                      class="text-body-2 mb-4 text-secondary"
                    >
                      {{ project.description }}
                    </p>
                  </div>
                    <v-btn
                      prepend-icon="mdi-arrow-right-circle-outline"
                      variant="outlined"
                      @click="handleAction(project)"
                      rounded="lg"
                      size="large"
                      class="font-weight-medium mt-4"
                      style="align-self: self-start"
                      :color="project.buttonAccent"
                    >
                      View Details
                    </v-btn>
                </v-card-text>
              </v-card>
            </v-window-item>
          </v-window>
        </div>
        <div class="d-none d-md-block">
          <v-btn
            icon="mdi-chevron-right"
            @click="nextProject"
            :disabled="projects.length <= 1"
            size="large"
            variant="flat"
            elevation="4"
          />
        </div>        
      </div>
      <div class="d-flex ga-4 mt-4 d-md-none">
        <v-btn
          icon="mdi-chevron-left"
          @click="prevProject"
          :disabled="projects.length <= 1"
          size="large"
          variant="flat"
          elevation="4"
        />
        <v-btn
          icon="mdi-chevron-right"
          @click="nextProject"
          :disabled="projects.length <= 1"
          size="large"
          variant="flat"
          elevation="4"
        />
      </div>
    </v-container>
  </AppLayout>
</template>
