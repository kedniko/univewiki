import { defineConfig } from 'vitepress'
import Unocss from 'unocss/vite'
import { sidebar } from '../sidebar'
import { resolve } from 'path'
import pkg from '../package.json'

const ogUrl = 'https://univewiki.kedniko.com/'
const ogImage = `${ogUrl}og.png#1`
const title = 'UniveWiki'
const description = 'Unive in your pocket'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  srcDir: "docs",
  title: "UniveWiki",
  markdown: {
    math: true,
  },
  vite: {
    plugins: [
      Unocss(),
    ],
    resolve: {
      alias: {
        '@': resolve(__dirname, '../'),
      },
      preserveSymlinks: true
    }
  },
  outDir: './dist',
  head: [
    ['link', { rel: 'icon', href: '/logo.svg', type: 'image/svg+xml' }],
    // ['link', { rel: 'alternate icon', href: '/favicon.ico', type: 'image/png', sizes: '16x16' }],
    ['link', { rel: 'apple-touch-icon', sizes: '180x180', href: '/apple-touch-icon.png' }],
    ['link', { rel: 'alternate icon', type: 'image/png', sizes: '32x32', href: '/favicon-32x32.png' }],
    ['link', { rel: 'alternate icon', type: 'image/png', sizes: '16x16', href: '/favicon-16x16.png' }],
    // ['link', { rel: 'icon', type: 'image/png', sizes: '32x32', href: '/favicon-32x32.png' }],
    // ['link', { rel: 'icon', type: 'image/png', sizes: '16x16', href: '/favicon-16x16.png' }],
    ['link', { rel: 'manifest', href: '/site.webmanifest' }],

    ['meta', { name: 'author', content: 'kedniko' }],
    ['meta', { property: 'og:type', content: 'website' }],
    ['meta', { name: 'og:title', content: title }],
    ['meta', { name: 'og:description', content: description }],
    ['meta', { property: 'og:image', content: ogImage }],
    ['meta', { name: 'twitter:title', content: title }],
    ['meta', { name: 'twitter:card', content: 'summary_large_image' }],
    ['meta', { name: 'twitter:image', content: ogImage }],
    ['meta', { name: 'twitter:site', content: '@kedniko' }],
    ['meta', { name: 'twitter:url', content: ogUrl }],
    ['link', { rel: 'search', type: 'application/opensearchdescription+xml', href: '/search.xml', title: 'UnoCSS' }],

  ],
  lastUpdated: true,
  cleanUrls: true,
  // rewrites: {
  //   'uni-cs/bachelor-degree/(.*)': 'laurea-triennale/:0',
  //   'uni-cs/master-degree/(.*)': 'master-degree/:0',
  // },
  description: "Unive in your pocket",
  themeConfig: {
    logo: { src: '/logo.svg', width: 24, height: 24 },
    // https://vitepress.dev/reference/default-theme-config
    nav: nav() as any,
    outline: {
      level: [1, 4],
      label: 'Outline',
    },

    sidebar,

    socialLinks: [
      { icon: 'github', link: 'https://github.com/kedniko/univewiki' }
    ],
    editLink: {
      pattern: 'https://github.com/kedniko/univewiki/edit/main/docs/:path',
      text: 'Suggest changes to this page',
    },
  },

  // locales: {
  //   root: {
  //     label: 'English',
  //     lang: 'en'
  //   },
  //   it: {
  //     label: 'Italiano',
  //     lang: 'it', // optional, will be added  as `lang` attribute on `html` tag
  //     link: '/it/'

  //     // other locale specific properties...
  //   }
  // }
})


function nav() {
  return [
    { text: 'Laurea Triennale', link: '/bachelor-degree/' },
    { text: 'Master Degree', link: '/master-degree/' },
    {
      text: pkg.version,
      items: [
        {
          text: 'Contributing',
          link: 'https://github.com/kedniko/univewiki/blob/main/docs/contributing/index.md'
        }
      ]
    }
  ]
}