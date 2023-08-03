<script>
  import { Canvas } from '@threlte/core'
  import Scene from './lib/Scene.svelte'
  import bg from './lib/background'

  import Menu from './lib/Menu.svelte'
</script>

<div class="absolute h-100vh flex flex-col justify-between w-full p-4">
  <Menu/>
  <div class="flex flex-col p-3">
    <span class="text-6xl font-sans text-white <sm:text-4xl">
      JOSHIMELLO
    </span>
    <div class="h-14 rounded-bl-2xl rounded-br-2xl overflow-hidden <sm:h-9">
      <span class="text-8xl font-bars text-white <sm:text-6xl">
        JOSHUALEAN
      </span>
    </div>
  </div>
</div>

<div class="h-100vh w-full p-4 z-10">
  <div class="h-full w-full overflow-hidden rounded-3xl"
    style={bg('#87ceeb', '#667ad9', '#b562e8', '#d1b1ff')}>
    <Canvas rendererParameters={{ alpha: true }}>
      <Scene/>
    </Canvas>
  </div>
</div>

<style>

</style>