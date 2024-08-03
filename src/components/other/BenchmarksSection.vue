<script lang="ts">
import { defineComponent, ref, computed } from 'vue'
import amdImage from '@/assets/mining/amd.svg'
import nvidiaImage from '@/assets/mining/nvidia.svg'

export default defineComponent({
  name: 'BenchmarksSection',
  setup() {
    const resourceItems = ref([
      // NVIDIA High-End
      { text: 'RTX 4080 Super', image: nvidiaImage, url: 'https://hashrate.no/gpus/4080s/EVR' },
      { text: 'RTX 4080', image: nvidiaImage, url: 'https://hashrate.no/gpus/4080/EVR' },
      { text: 'RTX 3080 Ti', image: nvidiaImage, url: 'https://hashrate.no/gpus/3080ti/EVR' },

      // NVIDIA High-Mid Range
      { text: 'RTX 3080 12GB', image: nvidiaImage, url: 'https://hashrate.no/gpus/308012/EVR' },
      { text: 'RTX 3080', image: nvidiaImage, url: 'https://hashrate.no/gpus/3080/EVR' },
      {
        text: 'RTX 4070 Ti Super',
        image: nvidiaImage,
        url: 'https://hashrate.no/gpus/4070tis/EVR'
      },

      // NVIDIA Mid Range
      { text: 'RTX 4070 Ti', image: nvidiaImage, url: 'https://hashrate.no/gpus/4070ti/EVR' },
      { text: 'RTX 4070', image: nvidiaImage, url: 'https://hashrate.no/gpus/4070/EVR' },
      { text: 'RTX 3070 Ti', image: nvidiaImage, url: 'https://hashrate.no/gpus/3070ti/EVR' },

      // NVIDIA Mid-Low Range
      { text: 'RTX 3070', image: nvidiaImage, url: 'https://hashrate.no/gpus/3070/EVR' },
      { text: 'RTX 3060 Ti', image: nvidiaImage, url: 'https://hashrate.no/gpus/3060ti/EVR' },
      { text: 'RTX 4060 Ti', image: nvidiaImage, url: 'https://hashrate.no/gpus/4060ti/EVR' },

      // NVIDIA Special
      { text: 'CMP 170HX', image: nvidiaImage, url: 'https://hashrate.no/gpus/170hx/EVR' },

      // AMD High-End
      { text: 'RX 7900 XTX', image: amdImage, url: 'https://hashrate.no/gpus/7900xtx/EVR' },
      { text: 'RX 7900 XT', image: amdImage, url: 'https://hashrate.no/gpus/7900xt/EVR' },

      // AMD High-Mid Range
      { text: 'RX 7900 GRE', image: amdImage, url: 'https://hashrate.no/gpus/7900gre/EVR' },
      { text: 'RX 7800 XT', image: amdImage, url: 'https://hashrate.no/gpus/7800xt/EVR' },
      { text: 'RX 6950 XT', image: amdImage, url: 'https://hashrate.no/gpus/6950xt/EVR' },

      // AMD Mid Range
      { text: 'RX 6900 XT', image: amdImage, url: 'https://hashrate.no/gpus/6900xt/EVR' },
      { text: 'RX 6800 XT', image: amdImage, url: 'https://hashrate.no/gpus/6800xt/EVR' },
      { text: 'RX 7700 XT', image: amdImage, url: 'https://hashrate.no/gpus/7700xt/EVR' },

      // AMD Mid-Low Range
      { text: 'RX 6800', image: amdImage, url: 'https://hashrate.no/gpus/6800/EVR' },
      { text: 'RX 6750 XT', image: amdImage, url: 'https://hashrate.no/gpus/6750xt/EVR' },
      { text: 'RX 6700 XT', image: amdImage, url: 'https://hashrate.no/gpus/6700xt/EVR' },

      // AMD Low-Mid Range
      { text: 'RX 6700', image: amdImage, url: 'https://hashrate.no/gpus/6700/EVR' },
      { text: 'RX 6650 XT', image: amdImage, url: 'https://hashrate.no/gpus/6650xt/EVR' },
      { text: 'RX 7600', image: amdImage, url: 'https://hashrate.no/gpus/7600/EVR' },

      // AMD Low Range
      { text: 'RX 6600 XT', image: amdImage, url: 'https://hashrate.no/gpus/6600xt/EVR' },
      { text: 'RX 6600', image: amdImage, url: 'https://hashrate.no/gpus/6600/EVR' },
      { text: 'RX 6500 XT', image: amdImage, url: 'https://hashrate.no/gpus/6500xt/EVR' }
    ])

    const currentPage = ref(0)
    const itemsPerPage = 3

    const totalPages = computed(() => Math.ceil(resourceItems.value.length / itemsPerPage))

    const handleClick = (url: string) => {
      window.open(url, '_blank')
    }

    const nextPage = () => {
      currentPage.value = (currentPage.value + 1) % totalPages.value
    }

    const prevPage = () => {
      currentPage.value = (currentPage.value - 1 + totalPages.value) % totalPages.value
    }

    return { resourceItems, handleClick, currentPage, nextPage, prevPage, itemsPerPage }
  }
})
</script>

<template>
  <section class="landing-section resources-section">
    <img
      src="@/assets/landing_sections/landing_section_ff.svg"
      alt="Resources Background"
      class="section-background"
    />
    <div class="content-wrapper">
      <v-container class="h-100 d-flex flex-column align-center justify-center">
        <h2 class="section-title">Benchmarks</h2>
        <div class="resources-carousel">
          <v-btn icon @click="prevPage" class="carousel-nav left" color="#4d93c7">
            <v-icon color="white" size="36">mdi-chevron-left</v-icon>
          </v-btn>
          <div class="resources-window">
            <v-window v-model="currentPage" class="resources-window-inner">
              <v-window-item v-for="n in Math.ceil(resourceItems.length / itemsPerPage)" :key="n">
                <div class="resources-grid">
                  <div
                    v-for="(item, index) in resourceItems.slice(
                      (n - 1) * itemsPerPage,
                      n * itemsPerPage
                    )"
                    :key="index"
                    class="resource-item"
                    @click="handleClick(item.url)"
                  >
                    <div class="image-container">
                      <img
                        v-if="item.image"
                        :src="item.image"
                        :alt="item.text"
                        class="resource-image"
                      />
                    </div>
                    <p class="resource-text">{{ item.text }}</p>
                  </div>
                </div>
              </v-window-item>
            </v-window>
          </div>
          <v-btn icon @click="nextPage" class="carousel-nav right" color="#4d93c7">
            <v-icon color="white" size="36">mdi-chevron-right</v-icon>
          </v-btn>
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
  }

  .resources-carousel {
    position: relative;
    width: 100%;
    max-width: 960px;
    margin: 0 auto;
    display: flex;
    align-items: center;
    overflow: visible;
  }

  .resources-window {
    width: 100%;
    overflow: hidden;
    padding: 2rem 0;
  }

  .resources-window-inner {
    overflow: visible;
  }

  .resources-grid {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    gap: 4rem;
  }

  .carousel-nav {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    z-index: 1;

    &.left {
      left: -20px;
    }

    &.right {
      right: -20px;
    }
  }

  .resource-item {
    display: flex;
    flex-direction: column;
    align-items: center;
    cursor: pointer;
    transition: transform 0.2s ease;

    &:hover {
      transform: scale(1.05);
      z-index: 1;
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
