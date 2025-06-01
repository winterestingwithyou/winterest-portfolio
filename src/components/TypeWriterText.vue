<script setup>
import { ref, watch, onMounted } from 'vue'

const props = defineProps({
  text: String,
  speed: { type: Number, default: 50 },
  triggerOnce: { type: Boolean, default: false }
})

const displayedText = ref('')
let isTyping = false
let intervalId = null
let hasTriggeredOnce = false

const textContainer = ref(null)

onMounted(() => {
  const observer = new IntersectionObserver(([entry]) => {
    if (entry.isIntersecting) {
      if (!isTyping && (!props.triggerOnce || !hasTriggeredOnce)) {
        hasTriggeredOnce = true
        startTyping()
      }
    } else if (!props.triggerOnce) {
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

// Fungsi ketik
function startTyping() {
  if (isTyping) return
  isTyping = true
  displayedText.value = ''

  const characters = Array.from(props.text.match(/(<[^>]+>)|([^<])/g) || [])
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

// Jika teks berubah (karena locale ganti), reset jika triggerOnce = false
watch(() => props.text, () => {
  if (!props.triggerOnce) {
    clearInterval(intervalId)
    isTyping = false
    displayedText.value = ''
    startTyping()
  }
})
</script>

<template>
  <div ref="textContainer" v-html="displayedText"></div>
</template>
