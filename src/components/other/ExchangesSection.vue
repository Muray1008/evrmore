<script lang="ts">
import { computed, defineComponent, ref } from 'vue'
import xeggexImage from '@/assets/exchanges/xeggex.svg'
import coinWImage from '@/assets/exchanges/coinw.svg'
import safeTradeImage from '@/assets/exchanges/safetrade.svg'

export default defineComponent({
  name: 'ExchangesSection',
  props: {
    backgroundImageName: {
      type: String,
      required: true
    }
  },
  setup(props) {
    const resourceItems = ref([
      {
        text: 'Xeggex',
        image: xeggexImage,
        url: 'https://xeggex.com/market/EVR_USDT'
      },
      {
        text: 'CoinW: Get Involved',
        image: coinWImage,
        url: 'https://discord.com/channels/898915073110720542/1253304077845266483/1253367435676094545'
      },
      {
        text: 'SafeTrade',
        image: safeTradeImage,
        url: 'https://safetrade.com/exchange/EVR-USDT?type=basic'
      }
    ])

    const backgroundImageComputed = computed(() => {
      return new URL(`/src/assets/landing_sections/${props.backgroundImageName}`, import.meta.url)
        .href
    })

    const handleClick = (url: string) => {
      window.open(url, '_blank')
    }

    return { resourceItems, backgroundImageComputed, handleClick }
  }
})
</script>

<template>
  <section class="landing-section resources-section">
    <img :src="backgroundImageComputed" alt="Exchanges Background" class="section-background" />
    <div class="content-wrapper">
      <v-container class="h-100 d-flex flex-column align-center justify-center">
        <h2 class="section-title">Exchanges</h2>
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
