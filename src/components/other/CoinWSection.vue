<script lang="ts">
import { defineComponent, ref } from 'vue'
import coinWImage from '@/assets/exchanges/coinw.svg'

export default defineComponent({
  name: 'CoinWSection',
  setup() {
    const resourceItems = ref([
      {
        text: 'Learn More',
        image: coinWImage,
        url: 'https://discord.com/channels/898915073110720542/1253304077845266483/1253367435676094545'
      }
    ])

    const handleClick = (url: string) => {
      window.open(url, '_blank')
    }

    return { resourceItems, handleClick }
  }
})
</script>

<template>
  <section class="landing-section resources-section">
    <img
      src="@/assets/landing_sections/landing_section_f8.svg"
      alt="Resources Background"
      class="section-background"
    />
    <div class="content-wrapper">
      <v-container class="h-100 d-flex flex-column align-center justify-center">
        <div class="text-content text-center">
          <h2>CoinW</h2>
          <p>Evrmore Listing</p>
        </div>
        <div class="resources-grid">
          <div class="resource-item" v-for="(item, index) in resourceItems" :key="index">
            <div class="image-container" @click="handleClick(item.url)">
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

  .text-content {
    color: #000000;
    max-width: 600px;
    margin-bottom: 1rem;

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
      margin-bottom: 0.5rem;
    }
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
    transition: transform 0.2s ease;

    &:hover {
      transform: scale(1.05);
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
    cursor: pointer;
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
