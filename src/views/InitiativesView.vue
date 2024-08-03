<script lang="ts">
import { defineComponent } from 'vue'
import GrantsSection from '@/components/other/GrantsSection.vue'
import CoinWSection from '@/components/other/CoinWSection.vue'
import LegalLetterSection from '@/components/other/LegalLetterSection.vue'
import LandingSectionSeven from '@/components/landing/LandingSectionSeven.vue'
import LandingSectionEight from '@/components/landing/LandingSectionEight.vue'
import { useToolbarStore } from '../store/toolbar-store.pinia'

export default defineComponent({
  name: 'InitiativesView',
  components: {
    GrantsSection,
    CoinWSection,
    LegalLetterSection,
    LandingSectionSeven,
    LandingSectionEight
  },
  setup() {
    const toolbarStore = useToolbarStore()
    toolbarStore.setToolbarColor('black')
    return {}
  }
})
</script>

<template>
  <div class="landing-container">
    <!-- Header Section -->
    <section class="header-section">
      <img
        src="@/assets/landing_sections/view_header.svg"
        alt="Header Background"
        class="header-image"
      />
      <div class="overlay-content">
        <v-container class="content-container d-flex flex-column justify-center align-center h-100">
          <div class="header-content">
            <h1 class="header-title">Initiatives</h1>
            <p class="header-subtitle">Help the community!</p>
          </div>
          <div class="image-wrapper">
            <img
              src="@/assets/initiatives_section_header_image.svg"
              alt="Initiatives Illustration"
              class="initiatives-image"
            />
          </div>
        </v-container>
      </div>
    </section>

    <!-- Sections -->
    <div class="landing-sections-container">
      <GrantsSection background-image-name="landing_section_ff.svg" />
      <CoinWSection background-image-name="landing_section_f8.svg" />
      <LegalLetterSection background-image-name="landing_section_ff.svg" />
      <LandingSectionSeven background-image-name="landing_section_2ff.svg" />
      <LandingSectionEight />
    </div>
  </div>
</template>

<style scoped lang="scss">
.landing-container {
  position: relative;
}

.landing-sections-container {
  position: relative;
}

.header-section {
  position: relative;
  height: 850px;
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
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .content-container {
    text-align: center;
  }

  .header-content {
    color: rgba(0, 0, 0, 0.87);
    margin-bottom: 2rem;
  }

  .header-title {
    font-family: 'Futura', sans-serif;
    font-size: 4rem;
    font-weight: bold;
    line-height: 1.2;
    margin-bottom: 0.5rem;
  }

  .header-subtitle {
    font-family: 'Roboto', sans-serif;
    font-weight: 500;
    font-size: 1.5rem;
  }

  .image-wrapper {
    width: 100%;
    max-width: 600px;
    margin: 0 auto;
  }

  .initiatives-image {
    max-width: 100%;
    height: auto;
  }
}

@media (max-width: 959px) {
  .header-section {
    .header-title {
      font-size: 3rem;
    }
    .header-subtitle {
      font-size: 1.25rem;
    }
  }
}

@media (max-width: 599px) {
  .header-section {
    height: 100vh;

    .header-title {
      font-size: 2.5rem;
    }
    .header-subtitle {
      font-size: 1rem;
    }
    .image-wrapper {
      max-width: 90%;
    }
  }
}
</style>
