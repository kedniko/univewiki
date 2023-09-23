---

# <https://vitepress.dev/reference/default-theme-home-page>

layout: home

title: UniveWiki
titleTemplate: Unive in your pocket

hero:
  name: UniveWiki
  text: Unive in your pocket
  tagline: Empowering Education, One Share at a Time.
  actions:
    - theme: brand
      text: Get Started
      link: /getting-started/
    - theme: alt
      text: Contributing Guide
      link: /contributing/
  image:
    src: /logo.svg
    alt: UniveWiki

features:

  - icon: 📚
    title: Courses
    details: Unlock Your Academic Potential, One Course at a Time.
  - icon: 📝
    title: Materials
    details: Empowering Coders with Comprehensive CS Resources.
  - icon: 😃
    title: Community
    details: Connecting Coders, Building Futures.
  - icon: <svg xmlns="http://www.w3.org/2000/svg" width="30" viewBox="0 0 256 220.8"><path fill="#41B883" d="M204.8 0H256L128 220.8 0 0h97.92L128 51.2 157.44 0h47.36Z"/><path fill="#41B883" d="m0 0 128 220.8L256 0h-51.2L128 132.48 50.56 0H0Z"/><path fill="#35495E" d="M50.56 0 128 133.12 204.8 0h-47.36L128 51.2 97.92 0H50.56Z"/></svg>
    title: Customize with Vue
    details: Use Vue syntax and components directly in markdown, or build custom themes with Vue.
---

<style>
:root {
  --vp-home-hero-name-color: transparent;
  --vp-home-hero-name-background: -webkit-linear-gradient(120deg, #3276b6 30%, #41d1ff);

  --vp-home-hero-image-background-image: linear-gradient(-45deg, #3276b6 50%, #47caff 50%);
  --vp-home-hero-image-filter: blur(40px);
}

@media (min-width: 640px) {
  :root {
    --vp-home-hero-image-filter: blur(56px);
  }
}

@media (min-width: 960px) {
  :root {
    --vp-home-hero-image-filter: blur(72px);
  }
}
</style>
