<script setup>
import { useHead } from '@vueuse/head';
import { ref } from 'vue';
import AppLayout from '../layouts/AppLayout.vue';
import { useLanguage } from '../composables/useLanguage';
import { I18nT } from 'vue-i18n';

const { t } = useLanguage()

// Head
useHead({
  title: t('pages.home.name'),
})

// Image url
const imageUrl = ref('https://th.bing.com/th/id/OIP.5P88wD8ppLN-NTPhXQDV3QHaNK?cb=iwc2&rs=1&pid=ImgDetMain');
</script>

<style scoped>
  .themed-grayscale{
    filter: grayscale(var(--v-grayscale));
  }
</style>

<template>
  <AppLayout>
    <v-container
      fluid
      class="d-flex align-center justify-center fill-height pa-4 pa-sm-6 pa-lg-8"
      :style="{ minHeight: 'calc(100vh - var(--v-layout-top, 0px) - var(--v-layout-bottom, 0px))' }"
    >
      <v-row align="center" justify="center" class="w-100 ma-auto" style="max-width: 72rem">
        <v-col cols="12" md="6" class="pr-md-12 mb-10 mb-md-0">
          <div>
            <p class="font-weight-medium text-subtitle-2 text-uppercase mb-2 text-highlight">
              {{ t('pages.home.hello') }}
            </p>
            <i18n-t keypath="pages.home.intro" tag="h1" class="text-h4 text-sm-h3 text-lg-h2 font-weight-bold mb-6 text-primary" style="line-height: 1.2;">
              <template #alias>
                <span class="text-highlight">Winterest</span>
              </template>
              <template #realname>
                <span class="text-highlight">M. Adam Yudistira</span>
              </template>
            </i18n-t>
            <i18n-t keypath="pages.home.myself" tag="p" class="text-body-1 mb-8 text-primary" style="line-height: 1.75;">
              <template #alias>
                <span class="text-highlight">Winterest</span>
              </template>
              <template #realname>
                <span class="text-highlight">M. Adam Yudistira</span>
              </template>
              <template #bias>
                <span class="text-highlight">Winter</span>
              </template>
            </i18n-t>
            <v-hover v-slot:default="{ isHovering, props}">
              <v-btn
                v-bind="props"
                size="large"                            
                :color="isHovering ? 'highlight-1' : 'highlight'"
                class="font-weight-medium text-white" elevation="4"
              >
                {{ t('pages.home.download-cv') }}
              </v-btn>
            </v-hover>
          </div>
        </v-col>

        <v-col cols="12" md="6" class="d-flex justify-center justify-md-end">
          <v-card class="w-100" style="max-width: 28rem;">
            <v-img
              :src="imageUrl"
              alt="Winterest"
              aspect-ratio="0.9"
              cover
              position="top"
              class="rounded-lg elevation-12 themed-grayscale"
              >
              <template v-slot:placeholder>
                <v-row class="fill-height ma-0" align="center" justify="center">
                  <v-progress-circular indeterminate color="grey-lighten-5"></v-progress-circular>
                </v-row>
              </template>
            </v-img>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </AppLayout>
</template>