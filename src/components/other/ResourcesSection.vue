<script lang="ts">
import { computed, defineComponent, ref } from 'vue'
import whatToMineImage from '@/assets/mining/whattomine.svg'
import hashRateNoImage from '@/assets/mining/hashrateno.svg'
import miningPoolStatsImage from '@/assets/mining/miningpoolstats.svg'
import { useRouter } from 'vue-router'

export default defineComponent({
  name: 'ResourcesSection',
  props: {
    backgroundImageName: {
      type: String,
      required: true
    },
    showSubtitle: {
      type: Boolean,
      default: false
    },
    titleText: {
      type: String,
      required: true
    }
  },
  setup(props) {
    const router = useRouter()
    const resourceItems = ref([
      {
        text: 'WhatToMine',
        image: whatToMineImage,
        url: 'https://whattomine.com/coins/413-evr-evrprogpow'
      },
      { text: 'HashRateNo', image: hashRateNoImage, url: 'https://hashrate.no/coins/EVR' },
      {
        text: 'MiningPoolStats',
        image: miningPoolStatsImage,
        url: 'https://miningpoolstats.stream/evrmorecoin'
      }
    ])

    const backgroundImageComputed = computed(() => {
      return new URL(`/src/assets/landing_sections/${props.backgroundImageName}`, import.meta.url)
        .href
    })

    const handleClick = (url: string) => {
      window.open(url, '_blank')
    }

    const handleSubtitleClick = () => {
      router.push('/mine')
    }

    return { resourceItems, backgroundImageComputed, handleClick, handleSubtitleClick }
  }
})
</script>

<template>
  <section class="landing-section resources-section">
    <img :src="backgroundImageComputed" alt="Resources Background" class="section-background" />
    <div class="content-wrapper">
      <v-container class="h-100 d-flex flex-column align-center justify-center">
        <h2 :class="['section-title', { 'with-subtitle': showSubtitle }]">
          {{ $props.titleText }}
        </h2>
        <a v-if="showSubtitle" @click="handleSubtitleClick" class="subtitle-link">Discover more</a>
        <div class="resources-grid">
          <div
            class="resource-item"
            v-for="(item, index) in resourceItems"
            :key="index"
            @click="handleClick(item.url)"
          >
            <div class="image-container">
              <img v-if="item.image" :src="item.image" :alt="item.text" class="resource-image" />
            </div>
            <p class="resource-text">{{ item.text }}</p>
          </div>
        </div>
      </v-container>
    </div>
  </section>
</template>

<style scoped lang="scss">
.landing-section {
  position: relative;
  height: 730px;
  width: 100%;
  display: flex;
  align-items: center;

  &.resources-section {
    z-index: 3;
    margin-top: -120px;
  }

  .section-background {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  .content-wrapper {
    position: relative;
    z-index: 3;
    width: 100%;
    height: 100%;
  }

  .section-title {
    font-family: 'Futura', sans-serif;
    font-size: 2.5rem;
    font-weight: bold;
    color: #000000;
    text-align: center;
    margin-bottom: 2rem;

    &.with-subtitle {
      margin-bottom: 0.2rem;
    }
  }

  .subtitle-link {
    font-family: 'Roboto', sans-serif;
    font-size: 1.25rem;
    color: #4d93c7;
    cursor: pointer;
    margin-bottom: 2rem;
  }

  .resources-grid {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    gap: 4rem;
  }

  .resource-item {
    display: flex;
    flex-direction: column;
    align-items: center;
    cursor: pointer;
    transition: transform 0.2s ease;

    &:hover {
      transform: scale(1.05);
    }

    &:active {
      transform: scale(0.95);
    }
  }

  .image-container {
    width: 160px;
    height: 160px;
    border-radius: 80px;
    margin-bottom: 10px;
    overflow: hidden;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .resource-image {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  .resource-text {
    font-family: 'Roboto', sans-serif;
    font-size: 1rem;
    font-weight: 500;
    line-height: 1.6;
    opacity: 0.67;
    text-align: center;
  }
}

@media (max-width: 959px) {
  .landing-section {
    height: auto;
    min-height: 730px;
    padding: 2rem 0;

    .content-wrapper {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
    }

    .section-title {
      font-size: 2rem;
      margin-bottom: 1.5rem;

      &.with-subtitle {
        margin-bottom: 0.75rem;
      }
    }

    .resources-grid {
      flex-direction: column;
      gap: 1.5rem;
    }

    .image-container {
      width: 120px;
      height: 120px;
      border-radius: 60px;
    }
  }
}

@media (max-width: 600px) {
  .landing-section {
    .section-title {
      font-size: 1.75rem;
      margin-bottom: 1rem;

      &.with-subtitle {
        margin-bottom: 0.5rem;
      }
    }

    .resources-grid {
      gap: 1rem;
    }

    .image-container {
      width: 100px;
      height: 100px;
      border-radius: 50px;
    }

    .resource-text {
      font-size: 0.9rem;
    }
  }
}
</style>
