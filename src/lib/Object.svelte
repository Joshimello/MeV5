<script>
  import { T } from '@threlte/core'
  import { Text } from '@threlte/extras'
  import { tweened } from 'svelte/motion';
  import { cubicInOut } from 'svelte/easing';

  import Butter from './models/Butter.svelte'
  import Cinnamonroll from './models/Cinnamonroll.svelte'
  import Egg from './models/Egg.svelte'
  import Flour from './models/Flour.svelte'
  import Milk from './models/Milk.svelte'
  import Salt from './models/Salt.svelte'
  import Sugar from './models/Sugar.svelte'

  const msgs = [
    ['FLOUR', 4]
  ]

  const progress = tweened(5, {
    duration: 2000,
    easing: cubicInOut
  })

  const animate = async() => {
    await progress.set(0)
    await progress.set(-5)
  }

  animate()
</script>
    
<Sugar
  position={[0, $progress, -3]}
  rotation={[0, 0, 0]}
  scale={0.5}
/>

<!-- <Flour
  position={[0, 0, -5]}
  rotation={[0, 0, 0]}
  scale={0.5}
/> -->

<Text
  position={[0, 0, -5]}
  rotation={[0, 0, -Math.PI/2]}
  text={'SUGAR'}
  fontSize={1}
  anchorX={'center'}
  anchorY={'middle'}
  font={'SpaceGrotesk-Regular.ttf'}>
  <T.MeshPhongMaterial/>
</Text>