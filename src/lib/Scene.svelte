<script>
  import { T, extend, useThrelte, useRender, useLoader } from '@threlte/core'
  import { OrbitControls, useTexture, Environment } from '@threlte/extras'
  import { EffectComposer, EffectPass, RenderPass, SMAAEffect, SMAAPreset, BloomEffect, KernelSize } from 'postprocessing'
  import { RoundedBoxGeometry } from 'three/addons/geometries/RoundedBoxGeometry'

  extend({ RoundedBoxGeometry })

  import Model from './Model.svelte'

  const { scene, renderer, camera } = useThrelte()
  const composer = new EffectComposer(renderer)
  const setupEffectComposer = (camera) => {
    composer.removeAllPasses()
    composer.addPass(new RenderPass(scene, camera))
    composer.addPass(
      new EffectPass(
        camera,
        new BloomEffect({
          intensity: 1,
          luminanceThreshold: 0.15,
          height: 512,
          width: 512,
          luminanceSmoothing: 0.08,
          mipmapBlur: true,
          kernelSize: KernelSize.MEDIUM
        })
      )
    )
    composer.addPass(
      new EffectPass(
        camera,
        new SMAAEffect({
          preset: SMAAPreset.LOW
        })
      )
    )
  }

  $: setupEffectComposer($camera)
  useRender((_, delta) => {
    composer.render(delta)
  })

  const map = useTexture('texture.jpg')
</script>

{#await map then d}
<T.Mesh 
  position={[0, 0, -1]}
  visible={false}>
  <T.PlaneGeometry
    args={[5, 5]}/>
  <T.MeshBasicMaterial
    map={d}/>
</T.Mesh>
{/await}

<Model
  position={[0, 0, -1]}
  rotation={[Math.PI/2, 0, 0]}
  scale={3}
/>

<T.Mesh
  rotation={[0, 0, 0]}>
  <T.RoundedBoxGeometry
    args={[1, 1, 1, 7, 0.1]}/>
  <T.MeshPhysicalMaterial
    metalness={0}
    roughness={0.1}
    transmission={1}
    thickness={3}/>
</T.Mesh>

<T.DirectionalLight
  args={[0xfff0dd, 1]}
  position={[0, 5, 10]}
/>

<Environment
  path="/"
  files="empty_warehouse_01_1k.hdr"
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