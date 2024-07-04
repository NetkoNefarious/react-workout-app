<script>
  export let exercise;
  export let index;

  let setsCompleted = 0;
  function handleSetIncrement() {
    setsCompleted = (setsCompleted + 1) % 6;
  }
</script>

<div class="p-4 rounded-md flex flex-col gap-4 bg-slate-950 sm:flex-wrap">
  <div class="flex flex-col sm:flex-row sm:items-center sm:flex-wrap gap-x-4">
    <h4
      class="text-3xl hidden sm:inline sm:text-4xl md:text-5xl font-semibold text-slate-400"
    >
      0{index + 1}
    </h4>
    <h2
      class="capitalize whitespace-nowrap truncate max-w-full text-lg sm:text-xl md:text-2xl flex-1 sm:text-center"
    >
      {exercise.name.replaceAll('_', ' ')}
    </h2>
    <p class="text-sm text-slate-400 capitalize">{exercise.type}</p>
  </div>
  <div class="flex flex-col">
    <h3 class="text-slate-400 text-sm">Muscle groups</h3>
    <p class="capitalize">{exercise.muscles.join(' & ')}</p>
  </div>
  <div class="flex flex-col bg-slate-950 rounded gap-2">
    {#each exercise.description.split('___') as val}
      <div class="text-sm p-2">
        {val}
      </div>
    {/each}
  </div>
  <div class="grid grid-cols-2 sm:grid-cols-4 sm:place-items-center gap-2">
    {#each ['reps', 'rest', 'tempo'] as info}
      <div
        class="flex flex-col p-2 rounded border-[1.5px] border-solid border-slate-900 w-full"
      >
        <h3 class="capitalize text-slate-400 text-sm">
          {info === 'reps' ? `${exercise.unit}` : info}
        </h3>

        <p class="font-medium">{exercise[info]}</p>
      </div>
    {/each}
    <button
      on:click={handleSetIncrement}
      class="flex flex-col p-2 rounded border-[1.5px] duration-200 border-solid border-blue-900 hover:border-blue-600 w-full"
    >
      <h3 class="text-slate-400 text-sm capitalize">Sets completed</h3>
      <p class="font-medium">{setsCompleted}</p>
    </button>
  </div>
</div>
