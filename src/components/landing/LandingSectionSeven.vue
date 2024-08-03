<script lang="ts">
import { ref, computed, defineComponent } from 'vue'
import twitterImage from '@/assets/socials/twitter.svg'
import discordImage from '@/assets/socials/discord.svg'
import redditImage from '@/assets/socials/reddit.svg'
import telegramImage from '@/assets/socials/telegram.svg'

export default defineComponent({
  name: 'LandingSectionSeven',
  props: {
    backgroundImageName: {
      type: String,
      required: true
    }
  },
  setup(props) {
    const gridItems = ref([
      { text: 'TWITTER', image: twitterImage },
      { text: 'DISCORD', image: discordImage },
      { text: 'REDDIT', image: redditImage },
      { text: 'TELEGRAM', image: telegramImage }
    ])

    const backgroundImageComputed = computed(() => {
      return new URL(`/src/assets/landing_sections/${props.backgroundImageName}`, import.meta.url)
        .href
    })

    const handleClick = (item: string) => {
      switch (item) {
        case 'TWITTER':
          window.open('https://twitter.com/evrmoreofficial', '_blank')
          break
        case 'DISCORD':
          window.open('https://discord.gg/evrmore-898915073110720542', '_blank')
          break
        case 'REDDIT':
          window.open('https://www.reddit.com/r/EvrmoreCoin/', '_blank')
          break
        case 'TELEGRAM':
          window.open('https://telegram.me/EvrmoreCoin', '_blank')
          break
        default:
          break
      }
    }

    return { gridItems, backgroundImageComputed, handleClick }
  }
})
</script>

<template>
  <section class="landing-section landing-section-seven">
    <img :src="backgroundImageComputed" alt="Section Background" class="section-background" />
    <div class="content-wrapper">
      <v-container>
        <v-row align="center" justify="center">
          <v-col cols="12" class="text-content">
            <h2>Join the Community</h2>
          </v-col>
        </v-row>
        <v-row align="center" justify="center">
          <v-col cols="12" class="image-grid">
            <div class="grid-container">
              <div class="grid-item" v-for="(item, index) in gridItems" :key="index">
                <div class="image-container" :class="{ 'placeholder-image': !item.image }">
                  <img
                    v-if="item.image"
                    :src="item.image"
                    :alt="item.text"
                    class="community-image"
                    @click="handleClick(item.text)"
                  />
                </div>
                <v-btn
                  variant="outlined"
                  color="white"
                  class="social-button custom-outlined hidden-sm-and-down"
                  height="32"
                  min-width="110"
                  flat
                  rounded
                  @click="handleClick(item.text)"
                >
                  {{ item.text }}
                </v-btn>
              </div>
            </div>
          </v-col>
        </v-row>
      </v-container>
    </div>
  </section>
</template>

<style scoped lang="scss">
/* The style section remains unchanged */
.landing-section {
  position: relative;
  height: 730px;
  width: 100%;
  display: flex;
  align-items: center;

  &.landing-section-seven {
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
  }

  .text-content {
    color: #ffffff;
    padding: 2rem;
    text-align: center;

    h2 {
      font-family: 'Futura', sans-serif;
      font-size: 2.5rem;
      font-weight: bold;
      opacity: 0.92;
    }
  }

  .image-grid {
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .grid-container {
    display: flex;
    justify-content: space-between;
    max-width: 600px;
    width: 100%;
    flex-wrap: wrap;
  }

  .grid-item {
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  .image-container {
    width: 100px;
    height: 100px;
    border-radius: 80px;
    margin-bottom: 1.5rem;
    overflow: hidden;
    display: flex;
    justify-content: center;
    align-items: center;
    transition: transform 0.2s ease;
    cursor: pointer;

    &:hover {
      transform: scale(1.05);
    }

    &:active {
      transform: scale(0.95);
    }
  }

  .placeholder-image {
    background-color: #808080;
  }

  .community-image {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  .social-button {
    font-family: 'Roboto', sans-serif;
    font-size: 0.75rem;
    font-weight: 600;
    opacity: 0.87;
  }

  .custom-outlined {
    border: 2px solid white !important;
    &::before {
      border-color: white !important;
    }
  }
}

@media (max-width: 960px) {
  .landing-section {
    height: auto;
    min-height: 730px;

    .grid-container {
      flex-wrap: wrap;
      justify-content: center;
    }

    .grid-item {
      margin: 0 20px 20px;
    }
  }
}

@media (max-width: 599px) {
  .landing-section {
    .grid-container {
      display: grid;
      grid-template-columns: 1fr 1fr;
      grid-gap: 20px;
      justify-items: center;
      max-width: 300px;
      margin: 0 auto;
    }

    .grid-item {
      margin: 0;
    }

    .image-container {
      width: 70px;
      height: 70px;
      margin-bottom: 1rem;
    }

    .text-content {
      padding: 1rem;
      margin-top: 3rem;

      h2 {
        font-size: 2rem;
      }
    }
  }
}
</style>
