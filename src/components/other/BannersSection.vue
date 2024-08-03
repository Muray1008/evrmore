<script setup lang="ts">
import { ref } from 'vue'
import bannerPackImage from '@/assets/banners_pack/banner_pack.svg'

const resourceItems = ref([
  {
    text: 'Banner Pack',
    image: bannerPackImage,
    url: 'https://github.com/br0ck-w00d/Evrmore-Branding-Kit/tree/master/Evrmore_Banners'
  }
])
</script>

<template>
  <section class="landing-section resources-section">
    <img
      src="@/assets/landing_sections/landing_section_f8.svg"
      alt="Banner Section Background"
      class="section-background"
    />
    <div class="content-wrapper">
      <div class="container h-100 d-flex flex-column align-center justify-center">
        <h2 class="section-title">Banners</h2>
        <div class="resources-grid">
          <div v-for="(item, index) in resourceItems" :key="index" class="resource-item">
            <a :href="item.url" target="_blank" rel="noopener noreferrer" class="image-container">
              <img v-if="item.image" :src="item.image" :alt="item.text" class="resource-image" />
            </a>
            <p class="resource-text">{{ item.text }}</p>
          </div>
        </div>
      </div>
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
    flex-direction: row;
    justify-content: center;
    align-items: center;
    gap: 4rem;
  }

  .resource-item {
    display: flex;
    flex-direction: column;
    align-items: center;
    transition: transform 0.2s ease;

    &:hover {
      transform: scale(1.05);
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

  .resource-image {
    width: 100%;
    height: 100%;
    object-fit: cover;
    cursor: pointer;
  }

  .icon-row {
    display: flex;
    justify-content: center;
    gap: 1rem;
    margin-bottom: 0.8rem;
  }

  .mdi-icon {
    font-size: 1.5rem;
    color: rgba(0, 0, 0, 0.67);
    transition: transform 0.2s ease;

    &:hover {
      transform: scale(1.2);
    }
  }

  .resource-text {
    font-family: 'Roboto', sans-serif;
    font-size: 1rem;
    font-weight: 500;
    line-height: 1.6;
    opacity: 0.67;
    text-align: center;
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
      gap: 1.5rem;
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
    .section-title {
      font-size: 1.75rem;
      margin-bottom: 1rem;
    }

    .resources-grid {
      gap: 1rem;
    }

    .image-container {
      width: 100px;
      height: 100px;
      border-radius: 50px;
    }

    .resource-text {
      font-size: 0.9rem;
    }

    .mdi-icon {
      font-size: 1rem;
    }
  }
}
</style>
