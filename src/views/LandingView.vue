<script lang="ts">
import { defineComponent, computed } from 'vue'
import { useDisplay } from 'vuetify'
import LandingSectionOne from '@/components/landing/LandingSectionOne.vue'
import LandingSectionTwo from '@/components/landing/LandingSectionTwo.vue'
import LandingSectionThree from '@/components/landing/LandingSectionThree.vue'
// import LandingSectionFive from '@/components/landing/LandingSectionFive.vue'
// import LandingSectionFour from '@/components/landing/LandingSectionFour.vue'
import LandingSectionSix from '@/components/landing/LandingSectionSix.vue'
import LandingSectionSeven from '@/components/landing/LandingSectionSeven.vue'
import LandingSectionEight from '@/components/landing/LandingSectionEight.vue'
import { useRouter } from 'vue-router'
import { useToolbarStore } from '../store/toolbar-store.pinia'
import LandingSectionAdvantage from '@/components/landing/LandingSectionAdvantage.vue'
import LandingSectionTeam from '@/components/landing/LandingSectionTeam.vue'

export default defineComponent({
  name: 'LandingView',
  components: {
    LandingSectionOne,
    LandingSectionTwo,
    LandingSectionThree,
    LandingSectionAdvantage,
    LandingSectionTeam,
    // LandingSectionFour,
    // LandingSectionFive,
    LandingSectionSix,
    LandingSectionSeven,
    LandingSectionEight
  },
  setup() {
    const { xs } = useDisplay()
    const iconSize = computed(() => (xs.value ? '1.5rem' : '2.5rem'))
    const router = useRouter()

    const toolbarStore = useToolbarStore()
    toolbarStore.setToolbarColor('white')

    const handleClick = (route: string) => {
      router.push(route)
    }

    return {
      iconSize,
      handleClick,
      cards: [
        {
          title: 'Get',
          description: 'Join the DeFi revolution!',
          buttonText: 'Get EVR',
          icon: 'mdi-circle-outline',
          colorClass: 'green',
          link: '/get_evr'
        },
        {
          title: 'Create',
          description: 'Mint instantly and easily!',
          buttonText: 'Coming Soon',
          icon: 'mdi-triangle-outline',
          colorClass: 'light-blue',
          link: '/'
        },
        {
          title: 'Mine',
          description: 'Earn EVR by mining today!',
          buttonText: 'Mine Now',
          icon: 'mdi-square-rounded-outline',
          colorClass: 'blue',
          link: '/mine'
        }
      ]
    }
  }
})
</script>

<template>
  <div class="landing-container">
    <!-- Header Section -->
    <section class="header-section">
      <img
        src="@/assets/landing_sections/header_background.svg"
        alt="Header Background"
        class="header-image"
      />
      <div class="overlay-content">
        <v-container class="content-container d-flex flex-column justify-space-between h-100">
          <div class="header-content-wrapper">
            <v-row justify="center" align="start" class="header-row">
              <v-col cols="12" class="text-center">
                <div class="header-content">
                  <h1 class="header-title">Evrmore</h1>
                  <p class="header-subtitle">Decentralized Finance Simplified</p>
                  <img src="@/assets/evrmore_logo.svg" alt="Evrmore Logo" class="header-logo" />
                </div>
              </v-col>
            </v-row>
          </div>
          <div class="cards-wrapper">
            <v-container fluid>
              <v-row justify="center" align="center" class="card-row">
                <v-col
                  cols="12"
                  xs="12"
                  sm="6"
                  md="4"
                  lg="4"
                  xl="3"
                  v-for="(card, index) in cards"
                  :key="index"
                  class="card-col"
                >
                  <div class="card" @click="handleClick(card.link)">
                    <div class="card-icon" :class="card.colorClass">
                      <v-icon :size="iconSize" color="white" class="icon-67-opacity">{{
                        card.icon
                      }}</v-icon>
                    </div>
                    <h3 class="card-title">{{ card.title }}</h3>
                    <p class="card-description">{{ card.description }}</p>
                    <v-btn
                      flat
                      color="#031B34"
                      class="card-button"
                      @click="handleClick(card.link)"
                      >{{ card.buttonText }}</v-btn
                    >
                  </div>
                </v-col>
              </v-row>
            </v-container>
          </div>
        </v-container>
      </div>
    </section>

    <!-- Sections -->
    <div class="landing-sections-container">
      <LandingSectionOne />
      <LandingSectionTwo />
      <LandingSectionThree />
      <LandingSectionAdvantage background-image-name="landing_section_f8.svg" />
      <LandingSectionTeam background-image-name="landing_section_ff.svg" />
      <LandingSectionSix background-image-name="landing_section_f8.svg" />
      <LandingSectionSeven background-image-name="landing_section_2f8.svg" />
      <LandingSectionEight />
    </div>
  </div>
</template>

<!-- <LandingSectionFour background-image-name="landing_section_ff.svg" /> -->
<!-- <LandingSectionFive background-image-name="landing_section_f8.svg" /> -->

<style scoped lang="scss">
.landing-container {
  position: relative;
}

.landing-sections-container {
  position: relative;
}

.header-section {
  position: relative;
  height: 100vh;
  overflow: hidden;

  .header-image {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  .overlay-content {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
  }

  .content-container {
    padding-top: 2rem;
    padding-bottom: 2rem;
  }

  .header-content-wrapper {
    padding-top: 10vh;
  }

  .header-content {
    text-align: center;
    color: white;
  }

  .header-title {
    font-family: 'Futura', sans-serif;
    font-size: 6rem;
    font-weight: bold;
    line-height: 4.8rem;
    margin-bottom: 1rem;
  }

  .header-subtitle {
    font-family: 'Roboto', sans-serif;
    font-weight: 500;
    font-size: 1.25rem;
    margin-bottom: 1rem;
  }

  .header-logo {
    width: 160px;
    height: 160px;
  }

  .cards-wrapper {
    margin-bottom: 6vh;
    width: 100%;
  }

  .card-row {
    width: 100%;
    margin: 0;
  }

  .card-col {
    display: flex;
    justify-content: center;
    padding: 1rem;
  }

  .card {
    background-color: rgba(255, 255, 255, 0.9);
    padding: 2rem;
    border-radius: 45px;
    text-align: center;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    width: 100%;
    height: 100%;
    min-height: 360px;
    transition: all 0.3s ease;
    cursor: pointer;

    &:hover {
      transform: scale(1.02);
    }
  }

  .card-icon {
    width: 90px;
    height: 90px;
    border-radius: 50%;
    margin: 0 auto 2rem;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .green {
    background-color: #4db6ac;
  }
  .light-blue {
    background-color: #64b5f6;
  }
  .blue {
    background-color: #2196f3;
  }

  .icon-67-opacity {
    opacity: 0.67;
  }

  .card-title {
    font-family: 'Roboto', sans-serif;
    font-size: 1.75rem;
    font-weight: 500;
  }

  .card-description {
    font-family: 'Roboto', sans-serif;
    font-size: 1rem;
    font-weight: 400;
    margin-bottom: 1rem;
    flex-grow: 1;
  }

  .card-button {
    font-family: 'Futura', sans-serif;
    font-size: 0.75rem;
    height: 40px;
    align-self: center;
    padding: 0.5rem 1.5rem;
  }
}

.finance-section,
.assets-section,
.swaps-section,
.built-section,
.wallet-section,
.development-section {
  padding: 4rem 0;
  background-color: #ffffff;

  h2 {
    font-family: 'Futura', sans-serif;
    font-size: 2.5rem;
    font-weight: bold;
    margin-bottom: 1rem;
  }

  p {
    font-family: 'Roboto', sans-serif;
    font-size: 1.1rem;
    line-height: 1.6;
  }

  .section-image {
    max-width: 100%;
    height: auto;
  }
}

.assets-section,
.built-section,
.development-section {
  background-color: #000000;
  color: #ffffff;
}

.swaps-section,
.wallet-section {
  background-color: #031a32;
  color: #ffffff;
}

@media (max-width: 1279px) {
  .header-section {
    .card {
      padding: 1.75rem;
      min-height: 300px;
    }
    .card-title {
      font-size: 1.6rem;
    }
    .card-description {
      font-size: 0.95rem;
    }
    .card-icon {
      width: 90px;
      height: 90px;
      margin: 0 auto 1rem;
    }
  }
}

@media (max-width: 959px) {
  .header-section {
    .card {
      padding: 1.5rem;
      min-height: 300px;
    }
    .card-title {
      font-size: 1.5rem;
    }
    .card-description {
      font-size: 0.9rem;
    }
    .card-icon {
      width: 90px;
      height: 90px;
      margin: 0 auto 1rem;
    }
  }
}

@media (max-width: 599px) {
  .header-section {
    height: 150vh;

    .header-title {
      font-size: 4rem;
      line-height: 3.2rem;
    }
    .header-logo {
      width: 100px;
      height: 100px;
    }
    .card {
      padding: 1.25rem;
      min-height: 200px;
    }
    .card-title {
      font-size: 1.5rem;
    }
    .card-description {
      font-size: 0.9rem;
    }
    .card-icon {
      width: 60px;
      height: 60px;
      margin: 0 auto 0.5rem;
    }
  }
}
</style>
