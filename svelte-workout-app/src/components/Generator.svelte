<script>
  import { SCHEMES, WORKOUTS } from '../utils/swoldier';
  import SectionWrapper from './SectionWrapper.svelte';
  import Button from './Button.svelte';
  import Header from './Header.svelte';

  export let poison;
  export let muscles;
  export let goals;
  export let updateWorkout;

  let showModal = false;

  function toggleModal() {
    showModal = !showModal;
  }

  function updateMuscles(muscleGroup) {
    if (muscles.includes(muscleGroup)) {
      muscles = muscles.filter((val) => val !== muscleGroup);
      return;
    }

    if (poison !== 'individual') {
      muscles = [muscleGroup];
      showModal = false;
      return;
    }

    muscles = [...muscles, muscleGroup];

    if (muscles.length === 3) {
      showModal = false;
    }
  }
</script>

<SectionWrapper
  id="generate"
  header="generate your workout"
  title={["It's", 'Huge', "o'clock"]}
>
  <Header
    index="01"
    title="Pick your poison"
    description="Select the workout you wish to endure"
  />
  <div class="grid grid-cols-2 sm:grid-cols-4 gap-4">
    {#each Object.keys(WORKOUTS) as type}
      <button
        class={'px-4 bg-slate-950 border py-3 rounded-lg duration-200 hover:border-blue-600 ' +
          (type === poison ? 'border-blue-600' : 'border-blue-400')}
        on:click={() => {
          muscles = [];
          poison = type;
        }}
      >
        <p class="capitalize">{type.replaceAll('_', ' ')}</p>
      </button>
    {/each}
  </div>
  <Header
    index="02"
    title="Lock on targets"
    description="Select the muscles judged for annihilation."
  />
  <div
    class="bg-slate-950 border border-solid border-blue-400 rounded-lg flex flex-col"
  >
    <button
      class="relative flex items-center justify-center p-3"
      on:click={toggleModal}
    >
      <p class="capitalize">
        {muscles.length === 0 ? 'Select muscle groups' : muscles.join(' ')}
      </p>
      <i
        class="fa-solid fa-caret-down absolute right-3 top-1/2 -translate-y-1/2"
      ></i>
    </button>
    {#if showModal}
      <div class="flex flex-col px-3 pb-3">
        {#each poison === 'individual' ? WORKOUTS[poison] : Object.keys(WORKOUTS[poison]) as muscleGroup}
          <button
            class={'hover:text-blue-400 duration-200 ' +
              (muscles.includes(muscleGroup) ? 'text-blue-400' : '')}
            on:click={() => updateMuscles(muscleGroup)}
            ><p class="capitalize">
              {muscleGroup.replaceAll('_', ' ')}
            </p></button
          >
        {/each}
      </div>
    {/if}
  </div>
  <Header
    index="03"
    title="Become Juggernaut"
    description="Select your ultimate objective."
  />
  <div class="grid grid-cols-1 sm:grid-cols-3 gap-4">
    {#each Object.keys(SCHEMES) as scheme}
      <button
        class={'bg-slate-950 border py-3 px-4 rounded-lg duration-200 hover:border-blue-600 ' +
          (scheme === goals ? 'border-blue-600' : 'border-blue-400')}
        on:click={() => {
          goals = scheme;
        }}
      >
        <p class="capitalize">{scheme.replaceAll('_', ' ')}</p>
      </button>
    {/each}
  </div>
  <Button func={updateWorkout}>Formulate</Button>
</SectionWrapper>
