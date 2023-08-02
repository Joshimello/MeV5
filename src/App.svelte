<script>
  import { onMount } from 'svelte'
  import { Canvas } from '@threlte/core'
  import Scene from './lib/Scene.svelte'
</script>

<div class="h-100vh w-full bg-gray-200 p-4">
  <div class="h-full w-full overflow-hidden"
    style="background: linear-gradient(to bottom, var(--c1), var(--c2), var(--c3); --c1:">
    <Canvas rendererParameters={{ alpha: true }}>
      <Scene/>
    </Canvas>
  </div>
</div>