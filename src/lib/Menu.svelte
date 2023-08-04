<script>
  import { blur } from 'svelte/transition'
  let open = false

  const links = [
    {t: '01 landing', l: '/'}, 
    {t: '02 about', l: '/'}, 
    {t: '03 projects', l: '/'}
  ]

  const socials = [
    {t: 'i-ph-twitter-logo', l: '/'}, 
    {t: 'i-ph-github-logo', l: '/'}, 
    {t: 'i-ph-envelope-simple', l: '/'}
  ]

  const tech = [
    {t: 'Vite', l: '/'}, 
    {t: 'Svelte', l: '/'}, 
    {t: 'Threlte', l: '/'},
    {t: 'Three', l: '/'},
    {t: 'UnoCss', l: '/'}
  ]
</script>

<div class="w-full flex justify-between items-center gap-6">
  <div class="bg-white rounded-br-3xl py-6 px-12 relative">
    <span class="text-2xl font-sans">
      {'>w<'}
    </span>
    <div class="absolute bg-transparent h-10 w-10 -bottom-10 left-0 rounded-tl-3xl"
      style="box-shadow: -0.5rem -0.5rem white;"/>
    <div class="absolute bg-transparent h-10 w-10 top-0 -right-10 rounded-tl-3xl"
      style="box-shadow: -0.5rem -0.5rem white;"/>
  </div>

  <div class="px-4 flex justify-left items-center gap-4">
    <span class="text-2xl text-white font-mono font-600">01</span>
    <button class="bg-white p-3 rounded-2xl border-0 cursor-pointer"
      on:click={()=>{open = true}}>
      <div class="i-ph-list-bold text-2xl text-black"/>
    </button>
  </div>
</div>

{#if open}
  <div class="absolute top-0 left-0 w-full h-100vh bg-black/85 flex flex-col items-center justify-center" transition:blur={{ amount: 10 }}>

    <div class="absolute top-8 right-8">
      <button class="bg-white p-3 rounded-2xl border-0 cursor-pointer"
        on:click={()=>{open = false}}>
        <div class="i-ph-x-bold text-2xl text-black"/>
      </button>
    </div>

    <div class="flex flex-col gap-3 flex-1 justify-center pt-16">
      <div class="flex flex-col gap-8 w-max">
        {#each links as {t, l}}
          <a class="text-3xl text-white font-mono b-b-1 b-b-solid b-transparent transition duration-200 cursor-pointer hover:b-white decoration-none" href={l}>
            {t}
          </a>
        {/each}
      </div>
    </div>

    <div class="flex flex-col items-center pb-3">
      <div class="flex gap-2 w-max mb-3">
        {#each socials as {t, l}}
          <a class="bg-white p-1 rounded-xl" href={l}>
            <div class="{t} text-2xl text-black"/>
          </a>
        {/each}
      </div>
      <span class="text-white font-sans flex gap-1">
        {#each tech as {t, l}, idx}
          <a class="text-white decoration-1" href={l}>
            {t}
          </a>
          {#if idx != tech.length-1}
            <span class="text-white">&bull;</span>
          {/if}
        {/each}
      </span>
      <span class="text-white font-sans">
        <a class="text-white decoration-1" href="https://creativecommons.org/licenses/by-nc-sa/4.0/">
          CC BY-NC-SA 4.0
        </a>
        2023 © Joshua Lean
      </span>
    </div>
  </div>
{/if}