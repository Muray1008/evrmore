<script lang="ts">
import { defineComponent, ref, computed } from 'vue'
import grantsImage from '@/assets/grants.svg'

export default defineComponent({
  name: 'GrantsSection',
  setup() {
    const resourceItems = ref([
      {
        text: 'Coming Soon',
        image: grantsImage,
        url: 'https://evrmore.com/initiatives'
      },
      {
        text: 'Coming Soon',
        image: grantsImage,
        url: 'https://evrmore.com/initiatives'
      },
      {
        text: 'Coming Soon',
        image: grantsImage,
        url: 'https://evrmore.com/initiatives'
      },
      {
        text: 'Coming Soon',
        image: grantsImage,
        url: 'https://evrmore.com/initiatives'
      },
      {
        text: 'Coming Soon',
        image: grantsImage,
        url: 'https://evrmore.com/initiatives'
      },
      {
        text: 'Coming Soon',
        image: grantsImage,
        url: 'https://evrmore.com/initiatives'
      }
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
        <div class="text-content text-center">
          <h2>Grants</h2>
          <p>The Evrmore Foundation</p>
        </div>
        <div class="resources-carousel">
          <v-btn icon @click="prevPage" class="carousel-nav left" color="#C2C2C2">
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
          <v-btn icon @click="nextPage" class="carousel-nav right" color="#C2C2C2">
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

  .text-content {
    color: #000000;
    max-width: 600px;
    margin-bottom: 2rem;

    h2 {
      font-family: 'Futura', sans-serif;
      font-size: 3rem;
      font-weight: bold;
      margin-bottom: 0.25rem;
    }

    p {
      font-family: 'Roboto', sans-serif;
      font-size: 1.25rem;
      line-height: 1.6;
      opacity: 0.67;
    }
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

    .text-content {
      h2 {
        font-size: 2.5rem;
      }

      p {
        font-size: 1.1rem;
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
    .text-content {
      h2 {
        font-size: 2rem;
      }

      p {
        font-size: 1rem;
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
