<script setup>
import { ref, onMounted, nextTick } from 'vue'

const props = defineProps({
  speed: { type: Number, default: 50 },
  triggerOnce: { type: Boolean, default: false }
})

// Refs
const displayedText = ref('')
const textContainer = ref(null)
const hiddenSlot = ref(null)

let fullHTML = ''
let isTyping = false
let intervalId = null
let hasTriggeredOnce = false

onMounted(async () => {
  await nextTick()

  fullHTML = hiddenSlot.value?.innerHTML?.trim() || ''

  const observer = new IntersectionObserver(([entry]) => {
    if (entry.isIntersecting) {
      if (!isTyping && (!props.triggerOnce || !hasTriggeredOnce)) {
        hasTriggeredOnce = true
        startTyping()
      }
    } else if (!props.triggerOnce) {
      // Reset jika triggerOnce = false
      clearInterval(intervalId)
      isTyping = false
      displayedText.value = ''
    }
  }, {
    threshold: 0.5
  })

  if (textContainer.value) {
    observer.observe(textContainer.value)
  }
})

// Fungsi ketik dengan HTML parsing
function startTyping() {
  if (isTyping) return
  isTyping = true
  displayedText.value = ''

  // Buat array karakter termasuk tag HTML
  const characters = Array.from(fullHTML.match(/(<[^>]+>)|([^<])/g) || [])
  let index = 0

  intervalId = setInterval(() => {
    displayedText.value += characters[index]
    index++
    if (index >= characters.length) {
      clearInterval(intervalId)
      isTyping = false
    }
  }, props.speed)
}
</script>

<template>
  <div ref="textContainer" v-html="displayedText"></div>

  <div ref="hiddenSlot" class="d-none">
    <slot />
  </div>
</template>
