<script>
  import { 
    T, 
    extend, 
    useRender,
    useThrelte,
    useFrame
  } from '@threlte/core'
  
  import { 
    OrbitControls, 
    Environment,
    Text
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

  import Object from './Object.svelte'

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

<Object/>

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
  }}>
  <OrbitControls/>
</T.PerspectiveCamera>