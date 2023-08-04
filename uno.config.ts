import { defineConfig, presetIcons, presetUno, presetWebFonts } from 'unocss'

export default defineConfig({
  theme: {
    extend: {
      transitionProperty: {
        'all': 'padding'
      }
    }
  },
  presets: [
    presetUno(),
    presetIcons({
      cdn: 'https://esm.sh/'
    }),
    presetWebFonts({
      provider: 'google',
      fonts: {
        sans: 'Space Grotesk',
        mono: 'Major Mono Display',
        bars: 'Libre Barcode 39'
      },
    }),
  ],
})