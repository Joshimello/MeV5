<script>
  import { 
    T, 
    extend, 
    useRender,
    useThrelte 
  } from '@threlte/core'
  
  import { 
    OrbitControls, 
    useTexture, 
    Environment 
  } from '@threlte/extras'
  
  import { 
    EffectComposer, 
    EffectPass, 
    RenderPass, 
    SMAAEffect, 
    SMAAPreset, 
    BloomEffect, 
    KernelSize 
  } from 'postprocessing'
  
  import { 
    RoundedBoxGeometry 
  } from 'three/addons/geometries/RoundedBoxGeometry.js'
  extend({ RoundedBoxGeometry })

  import Model from './Model.svelte'

  const { scene, renderer, camera } = useThrelte()
  
  const composer = new EffectComposer(renderer)
  const setupEffectComposer = camera => {
    composer.removeAllPasses()
    composer.addPass(new RenderPass(scene, camera))
    composer.addPass(new EffectPass(camera, new BloomEffect({
      intensity: 1, 
      luminanceThreshold: 0.15, 
      height: 512, 
      width: 512, 
      luminanceSmoothing: 0.08, 
      mipmapBlur: true, 
      kernelSize: KernelSize.MEDIUM
    })))
    composer.addPass(new EffectPass(camera, new SMAAEffect({
      preset: SMAAPreset.LOW
    })))
  }

  $: setupEffectComposer($camera)
  useRender((_, delta) => {
    composer.render(delta)
  })

</script>

<Model
  position={[-1, 0, -1]}
  rotation={[Math.PI/2, 0.2, 0]}
  scale={5}
/>

<T.DirectionalLight
  args={[0xfff0dd, 1]}
  position={[0, 5, 10]}
/>

<Environment
  path="/"
  files="kloofendal_43d_clear_puresky_1k.hdr"
/>

<T.PerspectiveCamera
  makeDefault
  position={[0, 0, 3]}
  on:create={({ ref }) => {
    ref.lookAt(0, 0, 0)
  }}
>
  <OrbitControls/>
</T.PerspectiveCamera>