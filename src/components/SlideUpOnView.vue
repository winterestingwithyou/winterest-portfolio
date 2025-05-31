<script setup>
import { ref, onMounted, onBeforeUnmount, nextTick } from 'vue'

const props = defineProps({
  delay: {
    type: Number,
    default: 0, // dalam milidetik
  },
  threshold: {
    type: Number,
    default: 0.2,
  },
  triggerOnce: {
    type: Boolean,
    default: false,
  },
})

const isVisible = ref(false)
const hasAnimated = ref(false)
const wrapperRef = ref(null)
let observer

onMounted(async () => {
  await nextTick()

  if (wrapperRef.value) {
    observer = new IntersectionObserver(
      ([entry]) => {
        if (props.triggerOnce) {
          if (entry.isIntersecting && !hasAnimated.value) {
            isVisible.value = true
            hasAnimated.value = true
          }
        } else {
          isVisible.value = entry.isIntersecting
        }
      },
      { threshold: props.threshold }
    )
    observer.observe(wrapperRef.value)
  }
})

onBeforeUnmount(() => {
  if (observer && wrapperRef.value) {
    observer.unobserve(wrapperRef.value)
  }
})
</script>

<template>
  <div
    ref="wrapperRef"
    :style="{
      opacity: isVisible ? 1 : 0,
      transform: isVisible ? 'translateY(0)' : 'translateY(10px)',
      transition: `opacity 0.7s ease-out ${props.delay}ms, transform 0.7s ease-out ${props.delay}ms`
    }"
  >
    <slot />
  </div>
</template>
