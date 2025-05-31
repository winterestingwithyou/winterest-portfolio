import { createHead } from '@vueuse/head'

const head = createHead()

head.addHeadObjs({
  title: 'Winterest Portfolio', 
  titleTemplate: (title) => title ? `${title} - Winterest Portfolio` : 'Winterest Portfolio',
  link: [{
    rel: 'icon',
    type: 'image/png',
    href: '/favicon.png'
  }],
})

export default head