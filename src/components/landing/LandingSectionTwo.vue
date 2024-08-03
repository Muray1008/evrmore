<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'LandingSectionTwo',
  props: {
    reverse: {
      type: Boolean,
      default: false
    }
  }
})
</script>

<template>
  <section class="landing-section landing-section-two" :class="{ reverse: reverse }">
    <img
      src="@/assets/landing_sections/landing_section_f8.svg"
      alt="Section Background"
      class="section-background"
    />
    <div class="content-wrapper">
      <v-container class="h-100 d-flex align-center justify-center">
        <v-row align="center" justify="center" no-gutters>
          <v-col cols="auto" class="text-content">
            <h2>Easy Assets</h2>
            <p>One-click creation, no-coding required!</p>
          </v-col>
          <v-col cols="auto" class="image-content">
            <img
              src="@/assets/landing_sections/landing_section_2_image.svg"
              alt="Astronaut"
              class="section-image"
            />
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

  &.landing-section-two {
    z-index: 2;
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
    z-index: 2;
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

  .image-content {
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .section-image {
    max-width: 100%;
    height: auto;
  }

  &.reverse {
    .v-row {
      flex-direction: row-reverse;
    }
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
      padding: 2rem;
    }
  }
}
</style>
