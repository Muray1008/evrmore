<script lang="ts">
import { defineComponent, ref, computed } from 'vue'
import magicImage from '@/assets/wallets/magic.svg'
import electrumImage from '@/assets/wallets/electrum.svg'
import coreImage from '@/assets/evrmore_logo.svg'

export default defineComponent({
  name: 'LandingSectionFour',
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
    const gridItems = ref([
      { text: 'Magic', image: magicImage },
      { text: 'Electrum', image: electrumImage },
      { text: 'Core', image: coreImage }
    ])

    const topRowItems = computed(() =>
      gridItems.value.length === 3 ? [gridItems.value[0]] : gridItems.value.slice(0, 2)
    )

    const bottomRowItems = computed(() =>
      gridItems.value.length === 3 ? gridItems.value.slice(1) : gridItems.value.slice(2)
    )

    const backgroundImageComputed = computed(() => {
      return new URL(`/src/assets/landing_sections/${props.backgroundImageName}`, import.meta.url)
        .href
    })

    const handleClick = (itemText: string) => {
      console.log('Clicked')
      switch (itemText) {
        case 'Magic':
          window.open('https://x.com/MagicWalletApp', '_blank')
          break
        case 'Electrum':
          window.open('https://github.com/EvrmoreOrg/electrum-evrmore/releases', '_blank')
          break
        case 'Core':
          window.open('https://github.com/EvrmoreOrg/Evrmore/releases/tag/v1.0.5', '_blank')
          break
        default:
          break
      }
    }

    return { gridItems, topRowItems, bottomRowItems, handleClick, backgroundImageComputed }
  }
})
</script>

<template>
  <section class="landing-section landing-section-four" :class="{ reverse: reverse }">
    <img :src="backgroundImageComputed" alt="Section Background" class="section-background" />
    <div class="content-wrapper">
      <v-container class="h-100 d-flex align-center justify-center">
        <v-row align="center" justify="center" no-gutters>
          <v-col cols="auto" class="text-content">
            <h2>Grab a Wallet</h2>
            <p>Hodl, create, and swap safely!</p>
          </v-col>
          <v-col cols="auto" class="image-grid">
            <div class="grid-container" :class="{ 'three-items': gridItems.length === 3 }">
              <div class="grid-row">
                <div
                  class="grid-item"
                  v-for="(item, index) in topRowItems"
                  :key="index"
                  @click="handleClick(item.text)"
                >
                  <div class="image-container">
                    <img
                      v-if="item.image"
                      :src="item.image"
                      :alt="item.text"
                      class="project-image"
                    />
                  </div>
                  <p class="placeholder-text">{{ item.text }}</p>
                </div>
              </div>
              <div class="grid-row">
                <div
                  class="grid-item"
                  v-for="(item, index) in bottomRowItems"
                  :key="index + topRowItems.length"
                  @click="handleClick(item.text)"
                >
                  <div class="image-container">
                    <img
                      v-if="item.image"
                      :src="item.image"
                      :alt="item.text"
                      class="project-image"
                    />
                  </div>
                  <p class="placeholder-text">{{ item.text }}</p>
                </div>
              </div>
            </div>
          </v-col>
        </v-row>
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

  &.landing-section-four {
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
    padding-right: 12rem;
    text-align: center;

    h2 {
      font-family: 'Futura', sans-serif;
      font-size: 2.5rem;
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

  .image-grid {
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .grid-container {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 400px;

    &.three-items {
      .grid-row:first-child {
        justify-content: center;
      }
    }
  }

  .grid-row {
    display: flex;
    justify-content: space-between;
    width: 100%;
    margin-bottom: 30px;
  }

  .grid-item {
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

  .project-image {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  .placeholder-text {
    font-family: 'Roboto', sans-serif;
    font-size: 1rem;
    font-weight: 500;
    line-height: 1.6;
    opacity: 0.67;
    text-align: center;
  }

  &.reverse {
    .v-row {
      flex-direction: row-reverse;
    }
  }
}

@media (max-width: 959px) {
  .landing-section {
    height: auto;
    min-height: 730px;
    padding: 2rem 0;

    // .v-row {
    //   flex-direction: column-reverse;
    // }

    .content-wrapper {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
    }

    .text-content {
      padding-right: 0;
      // padding-top: 2rem;
      text-align: center;
    }

    // .image-grid {
    //   margin-bottom: 2rem;
    // }

    .grid-container {
      width: 100%;
      max-width: 400px;
    }

    .grid-row {
      justify-content: center;
      flex-wrap: wrap;
      margin-bottom: 16px;
    }

    .grid-item {
      margin: 0 16px;
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
    .grid-container {
      .grid-row {
        flex-direction: column;
        align-items: center;
        margin-bottom: 0px;
      }
    }

    .text-content {
      padding-bottom: 2rem;
    }

    .grid-item {
      margin-bottom: 20px;
    }

    .image-container {
      width: 80px;
      height: 80px;
      border-radius: 40px;
    }
  }
}
</style>
