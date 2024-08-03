<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'LandingSectionEight',
  props: {
    reverse: {
      type: Boolean,
      default: false
    }
  }
})
</script>

<template>
  <section class="landing-section landing-section-eight" :class="{ reverse: reverse }">
    <img
      src="@/assets/landing_sections/landing_section_00.svg"
      alt="Section Background"
      class="section-background"
    />
    <div class="content-wrapper">
      <v-container class="h-100 d-flex align-center justify-center">
        <v-row align="center" justify="center" no-gutters>
          <v-col cols="auto" class="footer-content">
            <div class="footer-columns">
              <div class="footer-column">
                <h3>Evrmore</h3>
                <ul>
                  <li><a href="https://evrmore.foundation">Foundation</a></li>
                  <li>
                    <a
                      href="https://github.com/evrmoreorg/whitepaper/blob/master/Evrmore_Whitepaper_2022-09-12.pdf"
                      >Whitepaper</a
                    >
                  </li>
                  <li>
                    <a
                      href="https://hans-schmidt.github.io/mastering_evrmore/evrlight_and_nostr4evr/evrlight_and_nostr4evr.html"
                      >EvrLight</a
                    >
                  </li>
                </ul>
              </div>
              <div class="footer-column">
                <h3>Resources</h3>
                <ul>
                  <li>
                    <a href="https://github.com/EvrmoreOrg/Evrmore-Branding-Kit">Marketing</a>
                  </li>
                  <li><a href="https://github.com/EvrmoreOrg">GitHub</a></li>
                  <li><a href="https://evrmorecoin.org/other/faq/">FAQs</a></li>
                </ul>
              </div>
              <div class="footer-column">
                <h3>Network</h3>
                <ul>
                  <li><a href="https://whattomine.com/coins/413-evr-evrprogpow">WhatToMine</a></li>
                  <li><a href="https://hashrate.no/coins/EVR">HashrateNo</a></li>
                  <li><a href="https://www.coingecko.com/en/coins/evrmore">CoinGecko</a></li>
                  <li><a href="https://coinmarketcap.com/currencies/evrmore/">CoinMarketCap</a></li>
                </ul>
              </div>
              <div class="footer-column">
                <h3>Legal</h3>
                <ul>
                  <li><a href="#">Terms of Service</a></li>
                  <li><a href="#">Privacy Policy</a></li>
                  <li><a href="#">Disclaimer</a></li>
                </ul>
              </div>
            </div>
          </v-col>
        </v-row>
      </v-container>
    </div>
  </section>
</template>

<style scoped lang="scss">
.landing-section {
  position: relative;
  height: 365px;
  width: 100%;
  display: flex;
  align-items: center;

  &.landing-section-eight {
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

  .footer-content {
    display: flex;
    justify-content: center;
    align-items: flex-start;
    width: 100%;
    margin-top: 100px;
  }

  .footer-columns {
    display: flex;
    justify-content: space-between;
    width: 100%;
    max-width: 1200px;
  }

  .footer-column {
    text-align: center;
    margin: 0 1rem;
    flex: 1;

    h3 {
      font-family: 'Futura', sans-serif;
      font-size: 1.2rem;
      font-weight: bold;
      margin-bottom: 1rem;
      color: #ffffff;
    }

    ul {
      list-style-type: none;
      padding: 0;

      li {
        margin-bottom: 0.5rem;

        a {
          font-family: 'Roboto', sans-serif;
          font-size: 0.9rem;
          color: #ffffff;
          text-decoration: none;
          opacity: 0.7;
          transition: opacity 0.3s ease;

          &:hover {
            opacity: 1;
          }
        }
      }
    }
  }

  &.reverse {
    .v-row {
      flex-direction: row-reverse;
    }
  }
}

@media (max-width: 1279px) {
  .landing-section {
    .footer-columns {
      flex-wrap: wrap;
      justify-content: flex-start;
    }
  }
}

@media (max-width: 599px) {
  .landing-section {
    height: auto;
    min-height: 730px;

    .v-row {
      flex-direction: column;
    }

    .footer-columns {
      flex-direction: column;
      align-items: center;
    }

    .footer-column {
      flex-basis: 100%;
      margin-bottom: 1rem;
      h3 {
        margin-bottom: 0rem;
      }
    }
  }
}
</style>
