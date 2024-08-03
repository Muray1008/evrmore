<script lang="ts">
import { defineComponent, ref } from 'vue'

interface StatItem {
  heading: string
  colors?: string[]
  text?: string
  detail?: string[]
}

export default defineComponent({
  name: 'GuidelinesSection',
  setup() {
    const statItems = ref<StatItem[]>([
      {
        heading: 'Color Palette',
        colors: ['#6ADDFF', '#06C6FF', '#F8F8F8']
      },
      {
        heading: 'Typography',
        text: 'Font Family: Nunito'
      }
    ])

    const copiedColor = ref<string | null>(null)

    const copyColor = (color: string) => {
      navigator.clipboard
        .writeText(color)
        .then(() => {
          copiedColor.value = color
          setTimeout(() => {
            copiedColor.value = null
          }, 2000)
        })
        .catch((err) => {
          console.error('Failed to copy color code:', err)
        })
    }

    return { statItems, copyColor, copiedColor }
  }
})
</script>

<template>
  <section class="landing-section coin-stats-section">
    <img
      src="@/assets/landing_sections/landing_section_ff.svg"
      alt="Guidelines Background"
      class="section-background"
    />
    <div class="content-wrapper">
      <v-container class="h-100 d-flex flex-column align-center justify-center">
        <h2 class="section-title">Guidelines</h2>
        <div class="stats-grid">
          <div class="stat-item" v-for="(item, index) in statItems" :key="index">
            <h3 class="stat-heading">{{ item.heading }}</h3>
            <div v-if="item.colors" class="color-circles">
              <div
                v-for="(color, colorIndex) in item.colors"
                :key="colorIndex"
                class="color-circle"
                :style="{ backgroundColor: color }"
                @click="copyColor(color)"
                :title="color"
              >
                <span v-if="copiedColor === color" class="copied-indicator">Copied!</span>
              </div>
            </div>
            <p v-if="item.text" class="stat-text">{{ item.text }}</p>
            <template v-if="item.detail">
              <p v-for="(line, lineIndex) in item.detail" :key="lineIndex" class="stat-detail">
                {{ line }}
              </p>
            </template>
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

  &.coin-stats-section {
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

  .stats-grid {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: flex-start;
    gap: 4rem;
    flex-wrap: wrap;
  }

  .stat-item {
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
  }

  .stat-heading {
    font-family: 'Roboto', sans-serif;
    font-size: 1.2rem;
    font-weight: 700;
    margin-bottom: 0.5rem;
  }

  .stat-text {
    font-family: 'Roboto', sans-serif;
    font-size: 1rem;
    font-weight: 500;
    line-height: 1.6;
    opacity: 0.67;
  }

  .stat-detail {
    font-family: 'Roboto', sans-serif;
    font-size: 0.9rem;
    font-weight: 400;
    line-height: 1.4;
    opacity: 0.5;
    margin-top: 0.25rem;
  }

  .color-circles {
    display: flex;
    justify-content: center;
    gap: 1rem;
    margin-top: 0.5rem;
  }

  .color-circle {
    width: 30px;
    height: 30px;
    border-radius: 50%;
    cursor: pointer;
    transition: transform 0.2s;
    position: relative;

    &:hover {
      transform: scale(1.1);
    }

    .copied-indicator {
      position: absolute;
      top: -25px;
      left: 50%;
      transform: translateX(-50%);
      background-color: rgba(0, 0, 0, 0.7);
      color: white;
      padding: 2px 6px;
      border-radius: 4px;
      font-size: 0.8rem;
      white-space: nowrap;
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

    .stats-grid {
      flex-direction: column;
      gap: 1.5rem;
      align-items: center;
    }

    .stat-item {
      width: 100%;
      max-width: 300px;
    }
  }
}

@media (max-width: 600px) {
  .landing-section {
    .section-title {
      font-size: 1.75rem;
      margin-bottom: 1rem;
    }

    .stats-grid {
      gap: 1rem;
    }

    .stat-heading {
      font-size: 1.1rem;
    }

    .stat-text {
      font-size: 0.9rem;
    }

    .stat-detail {
      font-size: 0.8rem;
    }

    .stat-item {
      max-width: 250px;
    }
  }
}
</style>
