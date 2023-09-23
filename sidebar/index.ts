import type { Config as ThemeConfig } from '@vue/theme'

import bachelorDegreeSidebar from './bachelor-degree'
import masterDegreeSidebar from './master-degree'

export const sidebar: ThemeConfig['sidebar'] = {
  '/getting-started/': [
    { text: '', items: [{ text: '🡐 Home', link: '/' },] },
  ],
  '/contributing/': [
    { text: '', items: [{ text: '🡐 Home', link: '/' },] },
    {
      text: '', items: [
        { text: 'Contributing', link: '/contributing/' },
        { text: 'Code of conduct', link: '/contributing/code-of-conduct' },
      ]
    },
    {
      text: 'Writing',
      items: [
        { text: 'Markdown', link: '/contributing/markdown' },
        { text: 'Vue components', link: '/contributing/vue' },
        ,]
    },
  ],
  '/bachelor-degree/': [
    { text: '', items: [{ text: '🡐 Home', link: '/' },] },
    {
      text: 'Courses',
      items: [
        { text: 'Algoritmi e strutture dati', link: '/bachelor-degree/ASD/0_intro' },
        ,]
    },
  ],
  '/master-degree/': [
    { text: '', items: [{ text: '🡐 Home', link: '/' },] },
    {
      text: 'Courses',
      items: [
        { text: 'Advanced data management', link: '/master-degree/ADM/0_intro' },
        { text: 'Advanced programming languages', link: '/master-degree/APL/0_intro' },
        { text: 'Algorithms and learning over massive data', link: '/master-degree/ALOMD/0_intro' },
        { text: 'Applied probability for computer science', link: '/master-degree/APCS/0_intro' },
        { text: 'Bioinformatics', link: '/master-degree/B/0_intro' },
        { text: 'Calculus and optimization', link: '/master-degree/CO/0_intro' },
        { text: 'Cryptography', link: '/master-degree/C/0_intro' },
        { text: 'Deep learning for natural language processing', link: '/master-degree/DLNLP/0_intro' },
        { text: 'Development methodologies', link: '/master-degree/DM/0_intro' },
        { text: 'Formal methods for system verification', link: '/master-degree/FMSV/0_intro' },
        { text: 'Foundations of artificial intelligence', link: '/master-degree/FAI/0_intro' },
        { text: 'Foundations of machine learning', link: '/master-degree/FMF/0_intro' },
        { text: 'Geometric and 3d computer vision', link: '/master-degree/G3CV/0_intro' },
        { text: 'Human computer interaction and information visualization', link: '/master-degree/HCIIV/0_intro' },
        { text: 'Information retrieval and web search', link: '/master-degree/IRWS/0_intro' },
        { text: 'Internet security', link: '/master-degree/IS/0_intro' },
        { text: 'Quantum computation', link: '/master-degree/QC/0_intro' },
        { text: 'Software architectures', link: '/master-degree/SADM/0_intro' },
        { text: 'Software correctness, security, and reliability', link: '/master-degree/SCSR/0_intro' },
        { text: 'Software development methodologies', link: '/master-degree/SADM/0_intro' },
        { text: 'Software performance and scalability', link: '/master-degree/SPS/0_intro' },
        { text: 'Software performance and scalability', link: '/master-degree/SPS/0_intro' },
        { text: 'Statistical inference and learning', link: '/master-degree/SIL/0_intro' },
        { text: 'System and software security', link: '/master-degree/SSS/0_intro' },
        { text: 'Time series analysis for computer science', link: '/master-degree/TSACS/0_intro' },
        ,]
    },
  ],
  ...prependToEach(bachelorDegreeSidebar,
    { text: '', items: [{ text: '🡐 Courses', link: '/bachelor-degree/' },] }
  ),
  ...prependToEach(masterDegreeSidebar,
    { text: '', items: [{ text: '🡐 Courses', link: '/master-degree/' },] }
  ),
}

function prependToEach(a: Record<string, any[]>, el: any) {
  Object.keys(a).forEach(k => {
    a[k].unshift(el)
  })
  return a
}