<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'LandingSectionOne',
  props: {
    reverse: {
      type: Boolean,
      default: false
    }
  }
})
</script>

<template>
  <section class="landing-section landing-section-one" :class="{ reverse: reverse }">
    <img
      src="@/assets/landing_sections/landing_section_1.svg"
      alt="Section Background"
      class="section-background"
    />
    <div class="content-wrapper">
      <v-container class="d-flex flex-column align-center justify-center h-100">
        <div class="text-content text-center">
          <h2>Discover</h2>
          <p>Layer one DeFi, No smart-contract risks. Just tap and go!<br /></p>
        </div>
        <div class="image-content">
          <img
            src="@/assets/landing_sections/landing_section_1_image.svg"
            alt="Astronaut"
            class="section-image"
          />
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

  &.landing-section-one {
    z-index: 1;
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
    z-index: 2;
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

  .image-content {
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .section-image {
    max-width: 100%;
    height: auto;
    max-height: 390px;
    margin-bottom: 5.5rem;
  }
}

@media (max-width: 960px) {
  .landing-section {
    height: auto;
    min-height: 730px;

    .section-image {
      max-height: 300px;
    }

    .text-content {
      padding-left: 0;
      padding-bottom: 1rem;
      text-align: center;
    }
  }
}
</style>
