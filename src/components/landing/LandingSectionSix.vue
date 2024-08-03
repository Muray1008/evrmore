<script lang="ts">
import { computed, defineComponent, ref } from 'vue'
import evrlightImage from '@/assets/roadmap/evrlight.svg'
import developmentImage from '@/assets/roadmap/asset_tolls.svg'
import launchImage from '@/assets/roadmap/launch.svg'
import websiteImage from '@/assets/roadmap/website.svg'
import whitePaperImage from '@/assets/roadmap/white_paper.svg'

export default defineComponent({
  name: 'LandingSectionSix',
  props: {
    reverse: {
      type: Boolean,
      default: false
    },
    backgroundImageName: {
      type: String,
      required: true
    }
  },
  setup(props) {
    const roadmapItems = ref([
      {
        image: whitePaperImage,
        text: 'White Paper',
        completed: true,
        active: true,
        link: 'https://github.com/evrmoreorg/whitepaper/blob/master/Evrmore_Whitepaper_2022-09-12.pdf'
      },
      {
        image: launchImage,
        text: 'Launch',
        completed: true,
        active: true,
        link: 'https://bitcointalk.org/index.php?topic=5416790.0'
      },
      {
        image: websiteImage,
        text: 'Website',
        completed: true,
        active: true,
        link: 'https://evrmore.com'
      },
      {
        image: evrlightImage,
        text: 'EvrLight',
        completed: false,
        active: true,
        link: 'https://hans-schmidt.github.io/mastering_evrmore/evrlight_and_nostr4evr/evrlight_and_nostr4evr.html'
      },
      {
        image: developmentImage,
        text: 'Asset Tolls',
        completed: false,
        active: true,
        link: ''
      },
      {
        image: developmentImage,
        text: 'Expiring NFTs',
        completed: false,
        active: false,
        link: ''
      },
      {
        image: developmentImage,
        text: 'Consumable Assets',
        completed: false,
        active: false,
        link: ''
      },
      {
        image: developmentImage,
        text: 'Covenants',
        completed: false,
        active: false,
        link: ''
      },
      {
        image: developmentImage,
        text: 'Vault Assets',
        completed: false,
        active: false,
        link: ''
      }
    ])

    const backgroundImageComputed = computed(() => {
      return new URL(`/src/assets/landing_sections/${props.backgroundImageName}`, import.meta.url)
        .href
    })

    const handleClick = (link: string) => {
      if (link) {
        window.open(link, '_blank')
      }
    }

    const currentPage = ref(0)
    const itemsPerPage = 3

    const totalPages = computed(() => Math.ceil(roadmapItems.value.length / itemsPerPage))

    const nextPage = () => {
      currentPage.value = (currentPage.value + 1) % totalPages.value
    }

    const prevPage = () => {
      currentPage.value = (currentPage.value - 1 + totalPages.value) % totalPages.value
    }

    return {
      roadmapItems,
      handleClick,
      backgroundImageComputed,
      currentPage,
      nextPage,
      prevPage,
      itemsPerPage
    }
  }
})
</script>

<template>
  <section class="landing-section landing-section-six" :class="{ reverse: reverse }">
    <img :src="backgroundImageComputed" alt="Section Background" class="section-background" />
    <div class="content-wrapper">
      <v-container class="d-flex flex-column align-center justify-center h-100">
        <div class="text-content text-center">
          <h2
            @click="
              handleClick(
                'https://hans-schmidt.github.io/mastering_evrmore/roadmap_tech_docs/the_evrmore_defi_roadmap.html'
              )
            "
          >
            Roadmap
          </h2>
          <p>Stay up to date with Evrmore's development!</p>
        </div>
        <div class="roadmap-carousel">
          <v-btn icon @click="prevPage" class="carousel-nav left" color="#4d93c7">
            <v-icon color="white" size="36">mdi-chevron-left</v-icon>
          </v-btn>
          <div class="roadmap-window">
            <v-window v-model="currentPage" class="roadmap-window-inner">
              <v-window-item v-for="n in Math.ceil(roadmapItems.length / itemsPerPage)" :key="n">
                <div class="roadmap-grid">
                  <div
                    v-for="(item, index) in roadmapItems.slice(
                      (n - 1) * itemsPerPage,
                      n * itemsPerPage
                    )"
                    :key="index"
                    class="roadmap-item"
                    @click="handleClick(item.link)"
                    :style="{ opacity: item.completed || item.active ? 1 : 0.37 }"
                  >
                    <div class="circle-container">
                      <img :src="item.image" :alt="item.text" class="roadmap-image" />
                    </div>
                    <div class="roadmap-text-container">
                      <v-icon
                        :icon="
                          item.completed
                            ? 'mdi-check-circle-outline'
                            : 'mdi-checkbox-blank-circle-outline'
                        "
                        :color="
                          item.completed || item.active
                            ? 'rgba(0, 0, 0, 0.87)'
                            : 'rgba(0, 0, 0, 0.37)'
                        "
                        size="small"
                        class="roadmap-checkbox"
                      ></v-icon>
                      <p class="roadmap-text">{{ item.text }}</p>
                    </div>
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

  &.landing-section-six {
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

  .text-content {
    color: #000000;
    max-width: 600px;
    text-align: center;

    h2 {
      font-family: 'Futura', sans-serif;
      font-size: 3rem;
      font-weight: bold;
      opacity: 0.87;
      margin-bottom: 0.25rem;
      cursor: pointer;
    }

    p {
      font-family: 'Roboto', sans-serif;
      font-size: 1.25rem;
      margin-bottom: 1rem;
      line-height: 1.6;
      opacity: 0.67;
    }
  }

  .roadmap-carousel {
    position: relative;
    width: 100%;
    max-width: 960px;
    margin: 0 auto;
    display: flex;
    align-items: center;
    overflow: visible;
  }

  .roadmap-window {
    width: 100%;
    overflow: hidden;
    padding: 2rem 0;
  }

  .roadmap-window-inner {
    overflow: visible;
  }

  .roadmap-grid {
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

  .roadmap-item {
    display: flex;
    flex-direction: column;
    align-items: center;
    cursor: pointer;
    transition:
      transform 0.2s ease,
      opacity 0.3s ease;

    &:hover {
      transform: scale(1.05);
      z-index: 1;
    }

    &:active {
      transform: scale(0.95);
    }
  }

  .circle-container {
    width: 160px;
    height: 160px;
    border-radius: 50%;
    background-color: #e6eef2;
    display: flex;
    justify-content: center;
    align-items: center;
    overflow: hidden;
    margin-bottom: 1rem;
  }

  .roadmap-image {
    max-width: 80%;
    max-height: 80%;
    object-fit: contain;
  }

  .roadmap-text-container {
    display: flex;
    align-items: center;
  }

  .roadmap-checkbox {
    margin-right: 8px;
  }

  .roadmap-text {
    font-family: 'Roboto', sans-serif;
    font-size: 1rem;
    text-align: center;
    margin: 0;
    color: #000000; // Set a default color
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

    .text-content {
      padding: 2rem;

      h2 {
        font-size: 2rem;
      }

      p {
        font-size: 1rem;
      }
    }

    .roadmap-grid {
      flex-direction: column;
      gap: 1.5rem;
    }

    .circle-container {
      width: 120px;
      height: 120px;
    }
  }
}

@media (max-width: 599px) {
  .landing-section {
    .text-content {
      padding: 1rem;

      h2 {
        font-size: 1.75rem;
      }
    }

    .roadmap-grid {
      gap: 1rem;
    }

    .circle-container {
      width: 100px;
      height: 100px;
    }

    .roadmap-text {
      font-size: 0.9rem;
    }
  }
}
</style>
