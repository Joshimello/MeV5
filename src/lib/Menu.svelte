<script>
  let links = [
    { t: 'Hi', i: 'i-ph-hand-waving-bold', l: '#Home', a: true },
    { t: 'Me', i: 'i-ph-smiley-bold', l: '#Josh', a: false },
    { t: 'Pf', i: 'i-ph-archive-bold', l: '#Josh', a: false },
    { t: 'Ct', i: 'i-ph-call-bell-bold', l: '#Ping', a: false },
  ]
</script>

<div class="w-full flex items-center gap-6">
  <div class="bg-white rounded-br-3xl py-6 px-12 relative">
    <span class="text-2xl font-sans">
      {'>w<'}
    </span>
    <div class="absolute bg-transparent h-10 w-10 -bottom-10 left-0 rounded-tl-3xl"
      style="box-shadow: -0.5rem -0.5rem white;"/>
    <div class="absolute bg-transparent h-10 w-10 top-0 -right-10 rounded-tl-3xl"
      style="box-shadow: -0.5rem -0.5rem white;"/>
  </div>

  <div class="bg-white/50 flex justify-between p-1 rounded-2xl gap-2">
    {#each links as {t, i, l, a}}
      <a class="flex items-center px-6 rounded-xl gap-1 decoration-none {a?'bg-black':'bg-white'}" href={l}>
        <div class="text-lg {i} {a?'text-white':'text-black'}"/>
        <span class="font-sans text-xl {a?'text-white':'text-black'}">
          {t}
        </span>
      </a>
    {/each}
  </div>
</div>