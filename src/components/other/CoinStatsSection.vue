<script lang="ts">
import { defineComponent, ref } from 'vue'

interface StatItem {
  heading: string
  text: string
  detail?: string[]
}

export default defineComponent({
  name: 'CoinStatsSection',
  setup() {
    const statItems = ref<StatItem[]>([
      {
        heading: 'Max Supply',
        text: '15,369,186,206 EVR'
      },
      {
        heading: 'Current Supply',
        text: '8,123,694,364 EVR'
      },
      {
        heading: 'Block Time',
        text: '1 minute'
      },
      {
        heading: 'Coinbase Reward',
        text: '2778 EVR',
        detail: ['Foundation: 277.8 EVR', 'Miner: 2500.2 EVR']
      },
      {
        heading: 'Halving Interval',
        text: '1,648,776 Blocks',
        detail: ['~3.13 years']
      }
    ])

    return { statItems }
  }
})
</script>

<template>
  <section class="landing-section coin-stats-section">
    <img
      src="@/assets/landing_sections/landing_section_ff.svg"
      alt="Coin Stats Background"
      class="section-background"
    />
    <div class="content-wrapper">
      <v-container class="h-100 d-flex flex-column align-center justify-center">
        <h2 class="section-title">Coin Stats</h2>
        <div class="stats-grid">
          <div class="stat-item" v-for="(item, index) in statItems" :key="index">
            <h3 class="stat-heading">{{ item.heading }}</h3>
            <p class="stat-text">{{ item.text }}</p>
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
