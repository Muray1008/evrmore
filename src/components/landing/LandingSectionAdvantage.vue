<script lang="ts">
import { computed, defineComponent, ref } from 'vue'
import thinkImage from '@/assets/advantage/think.svg'
import hackerImage from '@/assets/advantage/hacker.svg'
import versatileImage from '@/assets/advantage/versatile.svg'

export default defineComponent({
  name: 'AdvantageSection',
  props: {
    backgroundImageName: {
      type: String,
      required: true
    }
  },
  setup(props) {
    const resourceItems = ref([
      {
        text: 'No Smart Contract Hacking',
        image: hackerImage,
        url: ''
      },
      {
        text: 'Versatile, Not Coupled',
        image: versatileImage,
        url: ''
      },
      {
        text: 'Simple is Smart',
        image: thinkImage,
        url: ''
      }
    ])

    const backgroundImageComputed = computed(() => {
      return new URL(`/src/assets/landing_sections/${props.backgroundImageName}`, import.meta.url)
        .href
    })

    return { resourceItems, backgroundImageComputed }
  }
})
</script>

<template>
  <section class="landing-section resources-section">
    <img :src="backgroundImageComputed" alt="Advantage Background" class="section-background" />
    <div class="content-wrapper">
      <v-container class="h-100 d-flex flex-column align-center justify-center">
        <h2 class="section-title">Advantages</h2>
        <div class="resources-grid">
          <div class="resource-item" v-for="(item, index) in resourceItems" :key="index">
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
    justify-content: center;
    align-items: flex-start;
    gap: 84px;
  }

  .resource-item {
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  .image-container {
    width: 300px;
    height: 300px;
    margin-bottom: 10px;
    overflow: hidden;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .resource-image {
    width: 100%;
    height: 100%;
    object-fit: contain;
  }

  .resource-text {
    font-family: 'Roboto', sans-serif;
    font-size: 1.25rem;
    line-height: 1.6;
    opacity: 0.67;
    text-align: center;
  }
}

@media (max-width: 1200px) {
  .landing-section {
    .resources-grid {
      gap: 48px;
    }

    .image-container {
      width: 250px;
      height: 250px;
    }
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
      gap: 2rem;
    }

    .image-container {
      width: 200px;
      height: 200px;
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
      gap: 1.5rem;
    }

    .image-container {
      width: 150px;
      height: 150px;
    }

    .resource-text {
      font-size: 0.9rem;
    }
  }
}
</style>
