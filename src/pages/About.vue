<script setup>
import { useHead } from '@vueuse/head';
import { ref, computed } from 'vue';
import { useDisplay } from 'vuetify';
import AppLayout from '../layouts/AppLayout.vue';
import SkillProgress from '../components/SkillProgress.vue';

// Head
useHead({
  title: 'About'
})

// Responsive Image
const { sm, md, lg } = useDisplay();

const responsiveImageStyle = computed(() => {
  if (lg.value) return 'width: 320px; height: 320px'
  if (md.value) return 'width: 280px; height: 280px'
  if (sm.value) return 'width: 288px; height: 288px' // sm:w-72
  return 'width: 240px; height: 240px' // w-60
})

// List of Skills
const skills = [
  {
    name: 'Vue',
    value: 70,
  },
  {
    name: 'Java Native',
    value: 90,
  },
  {
    name: 'Laravel',
    value: 80,
  },
  {
    name: 'Java Spring',
    value: 30,
  },
]

// Image url
const imageUrl = ref('https://th.bing.com/th/id/OIP.gJddvMBHmsYI2OLu56duegAAAA?cb=iwc2&rs=1&pid=ImgDetMain');
</script>

<template>
  <Head title="About" />

  <AppLayout>
    <v-container
      fluid
      class="w-100"
      :style="{ minHeight: 'calc(100vh - var(--v-layout-top, 0px) - var(--v-layout-bottom, 0px))' }"
    >
        <section id="about" class="mb-16">
          <v-row class="align-center">
            <v-col cols="12" md="5" lg="4" class="d-flex justify-center align-center mb-8 mb-md-0">
              <div                                           
                class="position-relative rounded-lg elevation-24"
                :style="responsiveImageStyle"
              >
                <v-img
                  :src="imageUrl"
                  alt="Winterest"
                  class="w-100 h-100 rounded-lg"
                  aspect-ratio="1"
                  cover
                >
                  <template v-slot:placeholder>
                    <v-row class="fill-height ma-0" align="center" justify="center">
                      <v-progress-circular indeterminate color="grey-lighten-5"></v-progress-circular>
                    </v-row>
                  </template>
                </v-img>
              </div>
            </v-col>

            <v-col cols="12" md="7" lg="8" class="text-center">
              <div class="pl-md-6">
                <div class="d-flex align-center mb-4 justify-center">
                  <span class="bg-highlight mr-3" style="height: 2px; width: 40px;"></span>
                  <h2 class="font-weight-bold text-uppercase text-h5 text-sm-h4 text-primary">
                    About Me
                  </h2>
                </div>
                <p class="mb-4 text-secondary text-subtitle-2 text-sm-subtitle-1" style="line-height: 1.625rem;">
                  I am a computer science student focusing on backend development. I primarily work with Laravel and am also exploring an interest in Java Spring Boot. I'm keen to apply my developing skills.
                </p>
                <p class="mb-6 mb-sm-8 text-secondary text-subtitle-2 text-sm-subtitle-1" style="line-height: 1.625rem;">
                  My academic journey fuels my enthusiasm to learn and grow within the tech industry, aiming to build robust and scalable solutions.
                </p>
                <p class="font-cursive-signature text-highlight text-h4 text-sm-h3 mb-6 mb-sm-8">
                  Winterest | Adam
                </p>                
              </div>
            </v-col>
          </v-row>
        </section>

        <section id="skills">
          <v-row class="align-start">
            <v-col
              cols="12"
              md="auto"
              class="d-none d-md-flex justify-center position-relative mb-8 mb-md-0 pr-md-4 pr-lg-8"
              style="min-width: 60px;">
              <div 
                class="d-flex align-center h-100"
                style="position: sticky; top: 50%; transform: translateY(-50%);"
              >
                 <h3
                    class="text-highlight text-uppercase font-weight-bold tracking-wider whitespace-nowrap origin-center"
                    style="writing-mode: vertical-rl; transform: rotate(180deg); font-size: 1.125rem; line-height: 1.75rem;"
                 >
                    My Skills
                 </h3>
              </div>
            </v-col>

            <v-col cols="12" md="" class="mb-8">
              <div class="d-md-none text-center mb-8">
                <h3 class="text-h6 font-weight-bold text-highlight text-uppercase">My Skills</h3>
              </div>

              <v-container fluid class="pa-0">
                <v-row    
                  class="pa-0"              
                  :align="'start'"
                  :justify="'start'"
                  dense
                >
                  <v-col
                    v-for="(skill, index) in skills"
                    :key="index"
                    cols="12"
                    sm="6"
                    class="px-4 py-3 px-lg-6 py-sm-4"
                  >                    
                    <SkillProgress
                      :value="skill.value"
                      :height="7"
                      progress-color="primary"
                    >
                      <template #header="{ value }">
                        <span class="text-caption text-sm-button font-weight-medium text-uppercase text-secondary" style="line-height: 1rem;">
                          {{ skill.name }}
                        </span>
                        <span class="text-caption text-sm-button font-weight-medium text-highlight" style="line-height: 1rem;">
                          {{ value }}%
                        </span>
                      </template>
                    </SkillProgress>
                  </v-col>
                </v-row>
              </v-container>
            </v-col>
          </v-row>
        </section>
    </v-container>
  </AppLayout>
</template>
