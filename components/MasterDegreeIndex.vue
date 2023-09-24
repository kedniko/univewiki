<script setup lang="ts">

import { ref, computed } from 'vue'

const search = ref('')
const tags = {
  ai: 'ai',
  cyber: 'cyber',
  software: 'software',
  other: 'other',
}
const list = ref([
  { label: 'ADVANCED DATA MANAGEMENT', url: 'ADM/0_intro', tags: [tags.ai], },
  { label: 'ALGORITHMS AND LEARNING OVER MASSIVE DATA', url: 'ALOMD/0_intro', tags: [tags.ai], },
  { label: 'CALCULUS AND OPTIMIZATION', url: 'CO/0_intro', tags: [tags.ai], },
  { label: 'FOUNDATIONS OF ARTIFICIAL INTELLIGENCE', url: 'FAI/0_intro', tags: [tags.ai], },
  { label: 'FOUNDATIONS OF MACHINE LEARNING', url: 'FMF/0_intro', tags: [tags.ai], },
  { label: 'INFORMATION RETRIEVAL AND WEB SEARCH', url: 'IRWS/0_intro', tags: [tags.ai], },
  { label: 'STATISTICAL INFERENCE AND LEARNING', url: 'SIL/0_intro', tags: [tags.ai], },

  { label: 'APPLIED PROBABILITY FOR COMPUTER SCIENCE', url: 'APCS/0_intro', tags: [tags.cyber, tags.software], },
  { label: 'FORMAL METHODS FOR SYSTEM VERIFICATION', url: 'FMSV/0_intro', tags: [tags.cyber, tags.software], },
  { label: 'SOFTWARE CORRECTNESS, SECURITY, AND RELIABILITY', url: 'SCSR/0_intro', tags: [tags.cyber, tags.software], },
  { label: 'SYSTEM AND SOFTWARE SECURITY', url: 'SSS/0_intro', tags: [tags.cyber, tags.software], },

  { label: 'CRYPTOGRAPHY', url: 'C/0_intro', tags: [tags.cyber], },
  { label: 'INTERNET SECURITY', url: 'IS/0_intro', tags: [tags.cyber], },
  { label: 'SOFTWARE PERFORMANCE AND SCALABILITY', url: 'SPS/0_intro', tags: [tags.cyber], },

  { label: 'ADVANCED PROGRAMMING LANGUAGES', url: 'APL/0_intro', tags: [tags.software], },
  { label: 'SOFTWARE ARCHITECTURES', url: 'SADM/0_intro', tags: [tags.software], },
  { label: 'SOFTWARE DEVELOPMENT METHODOLOGIES', url: 'SADM/0_intro', tags: [tags.software], },
  { label: 'SOFTWARE PERFORMANCE AND SCALABILITY', url: 'SPS/0_intro', tags: [tags.software], },

  { label: 'BIOINFORMATICS', url: 'B/0_intro', tags: [tags.other], },
  { label: 'DEEP LEARNING FOR NATURAL LANGUAGE PROCESSING', url: 'DLNLP/0_intro', tags: [tags.other], },
  { label: 'DEVELOPMENT METHODOLOGIES', url: 'DM/0_intro', tags: [tags.other], },
  { label: 'GEOMETRIC AND 3D COMPUTER VISION', url: 'G3CV/0_intro', tags: [tags.other], },
  { label: 'HUMAN COMPUTER INTERACTION AND INFORMATION VISUALIZATION', url: 'HCIIV/0_intro', tags: [tags.other], },
  { label: 'QUANTUM COMPUTATION', url: 'QC/0_intro', tags: [tags.other], },
  { label: 'TIME SERIES ANALYSIS FOR COMPUTER SCIENCE', url: 'TSACS/0_intro', tags: [tags.other], },
])

const aiListOnly = computed(() => searchFn(list.value.filter((el) => el.tags.includes(tags.ai))))
const cyberSoftwareListOnly = computed(() => searchFn(list.value.filter((el) => el.tags.includes(tags.cyber) && el.tags.includes(tags.software))))
const cyberListOnly = computed(() => searchFn(list.value.filter((el) => el.tags.length === 1 && el.tags.includes(tags.cyber))))
const softwareListOnly = computed(() => searchFn(list.value.filter((el) => el.tags.length === 1 && el.tags.includes(tags.software))))
const otherListOnly = computed(() => searchFn(list.value.filter((el) => el.tags.length === 1 && el.tags.includes(tags.other))))
function searchFn(list) {
  return list.filter((el) => el.label.toLowerCase().includes(search.value.toLowerCase()))
}

const nothigFound = computed(() => !aiListOnly.value.length && !cyberListOnly.value.length && !softwareListOnly.value.length && !otherListOnly.value.length)

</script>

<template>
  <h2>Quick links</h2>

  <ul>
    <li><a href="https://www.unive.it/pag/44079">Website</a></li>
    <li><a href="https://moodle.unive.it/course/index.php?categoryid=440">Moodle</a></li>
  </ul>

  <h2>Courses</h2>

  <div class="flex justify-between items-center my-10 gap-4">
    Search:
    <input type="text" v-model="search" class="w-full font-bold text-blank-500 px-3 py-2 rounded bg-slate-50 dark:bg-dark-200">
  </div>

  <template v-if="nothigFound">
    No items found
  </template>
  <template v-else>
    <div class="px-4 pb-10 rounded" :class="[search && 'bg-slate-50 dark:bg-dark-400 border-1 border-slate-200 border-solid']">

      <template v-if="aiListOnly.length">
        <h3>Artificial Intelligence and Data Engineering</h3>

        <ul>
          <template v-for="item in aiListOnly">
            <li><a :href="item.url + '.html'">{{ item.label }}</a></li>
          </template>
        </ul>
      </template>

      <template v-if="cyberListOnly.length">
        <h3>Cybersecurity</h3>

        <ul>
          <template v-for="item in cyberListOnly">
            <li><a :href="item.url + '.html'">{{ item.label }}</a></li>
          </template>
          <li v-if="cyberSoftwareListOnly.length">
            <ul>
              <li>In common with "Software Development and Engineering"</li>
              <template v-for="item in cyberSoftwareListOnly">
                <li><a :href="item.url + '.html'">{{ item.label }}</a></li>
              </template>
            </ul>
          </li>
        </ul>
      </template>

      <template v-if="softwareListOnly.length">

        <h3>Software Development and Engineering</h3>

        <ul>
          <template v-for="item in softwareListOnly">
            <li><a :href="item.url + '.html'">{{ item.label }}</a></li>
          </template>
          <li v-if="cyberSoftwareListOnly.length">
            <ul>
              <li>In common with "Cybersecurity"</li>
              <template v-for="item in cyberSoftwareListOnly">
                <li><a :href="item.url + '.html'">{{ item.label }}</a></li>
              </template>
            </ul>
          </li>
        </ul>
      </template>

      <template v-if="otherListOnly.length">

        <h3>Optional Courses</h3>

        <ul>
          <template v-for="item in otherListOnly">
            <li><a :href="item.url + '.html'">{{ item.label }}</a></li>
          </template>
        </ul>
      </template>

    </div>
  </template>
</template>

<style scoped></style>
