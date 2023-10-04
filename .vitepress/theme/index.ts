import { useData } from 'vitepress'
import DefaultTheme from 'vitepress/theme'
// import { watchEffect, onMounted } from 'vue'
import 'uno.css'
import UwImage from '../../components/UwImage.vue'

export default {
  extends: DefaultTheme,
  enhanceApp(ctx) {
    // register your custom global components
    ctx.app.component('UwImage', UwImage)
  }
  // setup() {
  //   const { lang } = useData()
  //   onMounted(() => {
  //     watchEffect(() => {
  //       document.cookie = `nf_lang=${lang.value}; expires=Mon, 1 Jan 2024 00:00:00 UTC; path=/`
  //     })
  //   })
  // }
}