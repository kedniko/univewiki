import { useData } from 'vitepress'
import DefaultTheme from 'vitepress/theme'
// import { watchEffect, onMounted } from 'vue'
import 'uno.css'

export default {
  ...DefaultTheme,
  // setup() {
  //   const { lang } = useData()
  //   onMounted(() => {
  //     watchEffect(() => {
  //       document.cookie = `nf_lang=${lang.value}; expires=Mon, 1 Jan 2024 00:00:00 UTC; path=/`
  //     })
  //   })
  // }
}