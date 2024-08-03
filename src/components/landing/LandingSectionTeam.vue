<script lang="ts">
import { computed, defineComponent, ref } from 'vue'
import teamImage from '@/assets/team.svg'

export default defineComponent({
  name: 'TeamSection',
  props: {
    backgroundImageName: {
      type: String,
      required: true
    }
  },
  setup(props) {
    const teamInfo = ref({
      image: teamImage,
      alt: 'Team Image'
    })

    const backgroundImageComputed = computed(() => {
      return new URL(`/src/assets/landing_sections/${props.backgroundImageName}`, import.meta.url)
        .href
    })

    return { teamInfo, backgroundImageComputed }
  }
})
</script>

<template>
  <section class="landing-section team-section">
    <img :src="backgroundImageComputed" alt="Team Background" class="section-background" />
    <div class="content-wrapper">
      <v-container class="d-flex flex-column align-center justify-center h-100">
        <div class="text-content text-center">
          <h2>Team</h2>
          <p>Current and Former Ravencoin Devs, Builders, & Hodlers</p>
        </div>
        <div class="image-content">
          <img :src="teamInfo.image" :alt="teamInfo.alt" class="section-image" />
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

  &.team-section {
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
