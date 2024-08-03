<script setup lang="ts">
import { RouterView } from 'vue-router'
import { VMain } from 'vuetify/components'
import './styles/main.scss'
import { useToolbarStore } from './store/toolbar-store.pinia'
import { ref } from 'vue'

const toolbarStore = useToolbarStore()

const navigateTo = (url: string) => {
  window.location.href = url
}

const infoDocsItems = [
  {
    title: 'Project Overview',
    url: 'https://hans-schmidt.github.io/mastering_evrmore/project_overview.html'
  },
  {
    title: 'Usage Tips',
    url: 'https://hans-schmidt.github.io/mastering_evrmore/usage_tips/usage_tips.html'
  },
  {
    title: 'Current Technical Docs',
    url: 'https://hans-schmidt.github.io/mastering_evrmore/current_tech_docs/current_tech_docs.html'
  },
  {
    title: 'DeFi Roadmap Docs',
    url: 'https://hans-schmidt.github.io/mastering_evrmore/roadmap_tech_docs/roadmap_tech_docs.html'
  },
  { title: 'EVR vs ETH vs EUTXO', url: 'https://evrmorecoin.org/docs/evr-vs-eth-vs-eutxo' },
  {
    title: 'EvrLight and Nostr4Evr',
    url: 'https://hans-schmidt.github.io/mastering_evrmore/evrlight_and_nostr4evr/evrlight_and_nostr4evr.html'
  },
  {
    title: 'Summary Tech Info for Devs',
    url: 'https://hans-schmidt.github.io/mastering_evrmore/Summary_of_Evrmore_Chain_Parameters_for_Developers.html'
  }
]

const drawer = ref(false)

const navItems = [
  {
    title: 'Get EVR',
    url: 'https://evrmore.com/get_evr'
  },
  {
    title: 'Mining',
    url: 'https://evrmore.com/mine'
  },
  {
    title: 'Marketing',
    url: 'https://evrmore.com/marketing'
  },
  {
    title: 'build',
    url: ''
  },
  {
    title: 'Initiatives',
    url: 'https://evrmore.com/initiatives'
  }
]
</script>

<template>
  <v-app class="app-background">
    <div class="toolbar-container">
      <v-toolbar height="56px" density="default" color="transparent">
        <div @click="navigateTo('https://evrmore.com')" class="logo-title-container">
          <img
            src="@/assets/evrmore_logo_thick.svg"
            alt="Evrmore Logo"
            width="24"
            height="24"
            class="ml-4 clickable"
          />
          <v-toolbar-title :style="{ color: toolbarStore.toolbarTextColor }" class="clickable"
            >Evrmore</v-toolbar-title
          >
        </div>
        <v-spacer></v-spacer>
        <div class="hidden-sm-and-down">
          <v-btn
            v-for="(item, index) in navItems"
            :key="index"
            @click="navigateTo(item.url)"
            :color="toolbarStore.toolbarTextColor"
            :disabled="!item.url"
            >{{ item.title }}</v-btn
          >
          <v-menu
            transition="scale-transition"
            :close-on-content-click="true"
            :nudge-width="200"
            offset="2"
          >
            <template v-slot:activator="{ props }">
              <v-btn v-bind="props" :color="toolbarStore.toolbarTextColor"> Info & Docs </v-btn>
            </template>
            <v-list
              rounded="xl"
              :bg-color="toolbarStore.toolbarTextColor === 'white' ? '#F8F8F8' : '#3A3A3A'"
            >
              <v-list-item
                v-for="(item, index) in infoDocsItems"
                :key="index"
                :value="index"
                @click="navigateTo(item.url)"
                :ripple="false"
              >
                <v-list-item-title
                  :style="{
                    color:
                      toolbarStore.toolbarTextColor === 'white'
                        ? 'rgba(0, 0, 0, 0.67)'
                        : 'rgba(255, 255, 255, 0.87)'
                  }"
                >
                  {{ item.title }}
                </v-list-item-title>
              </v-list-item>
            </v-list>
          </v-menu>
        </div>
        <div class="hidden-md-and-up">
          <v-app-bar-nav-icon
            variant="text"
            :color="toolbarStore.toolbarTextColor"
            @click.stop="drawer = !drawer"
          ></v-app-bar-nav-icon>
        </div>
      </v-toolbar>
    </div>
    <v-navigation-drawer
      :color="toolbarStore.toolbarTextColor === 'white' ? '#00bef6' : '#3A3A3A'"
      v-model="drawer"
      location="right"
      temporary
    >
      <v-list>
        <v-list-item class="d-flex justify-end">
          <v-btn
            icon="mdi-close"
            color="white"
            variant="text"
            @click.stop="drawer = !drawer"
            flat
          ></v-btn>
        </v-list-item>

        <v-list-item
          v-for="(item, index) in navItems"
          :key="index"
          :disabled="!item.url"
          @click="navigateTo(item.url)"
          class="text-white"
        >
          {{ item.title }}
        </v-list-item>
        <v-list-group>
          <template v-slot:activator="{ props }">
            <v-list-item v-bind="props" class="text-white">
              {{ 'Info & Docs' }}
            </v-list-item>
          </template>
          <v-list-item
            v-for="(infoItem, index) in infoDocsItems"
            :key="index"
            @click="navigateTo(infoItem.url)"
            class="text-white ml-2"
          >
            {{ infoItem.title }}
          </v-list-item>
        </v-list-group>
      </v-list>
    </v-navigation-drawer>
    <v-main>
      <transition name="fade" mode="out-in">
        <RouterView />
      </transition>
    </v-main>
  </v-app>
</template>

<style scoped>
.app-background {
  background-color: #ffffff;
  min-height: 100vh;
  position: relative;
  display: flex;
  flex-direction: column;
}

.toolbar-container {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  z-index: 10;
  display: flex;
  justify-content: center;
}

.v-toolbar {
  width: 100%;
  max-width: 1920px;
  margin: 0 auto;
  padding-top: 1rem;
}

.v-toolbar-title {
  font-family: 'Futura', Sans-serif;
  font-size: 0.875rem;
  margin-inline-start: 1rem;
}

.v-toolbar .v-btn {
  text-transform: none;
  font-size: 0.75rem;
  font-weight: medium;
}

.logo-title-container {
  display: flex;
  align-items: center;
  cursor: pointer;
}

.clickable {
  cursor: pointer;
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>

<style scoped>
.app-background {
  background-color: #ffffff;
  min-height: 100vh;
  position: relative;
  display: flex;
  flex-direction: column;
}

.toolbar-container {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  z-index: 10;
  display: flex;
  justify-content: center;
}

.v-toolbar {
  width: 100%;
  max-width: 1920px;
  margin: 0 auto;
  padding-top: 1rem;
}

.v-toolbar-title {
  font-family: 'Futura', Sans-serif;
  font-size: 0.875rem;
  margin-inline-start: 1rem;
}

.v-toolbar .v-btn {
  text-transform: none;
  font-size: 0.75rem;
  font-weight: medium;
}

.logo-title-container {
  display: flex;
  align-items: center;
  cursor: pointer;
}

.clickable {
  cursor: pointer;
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}

:deep(.v-list-item) {
  min-height: 35px !important;
  padding: 0 16px !important;
}

:deep(.v-list-item__content) {
  padding: 8px 0 !important;
}

:deep(.v-list-item-title) {
  font-size: 14px !important;
  font-weight: 500 !important;
}
</style>
