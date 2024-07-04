<script>
  import { generateWorkout } from './utils/functions';
  import Hero from './components/Hero.svelte';
  import Workout from './components/Workout.svelte';
  import Generator from './components/Generator.svelte';

  let workout = null;
  let poison = 'individual';
  let muscles = [];
  let goal = 'strength_power';

  function updateWorkout() {
    if (muscles.length > 0) {
      workout = generateWorkout({ poison, muscles, goal });
      window.location.href = '#workout';
    }
  }
</script>

<main
  class="min-h-screen flex flex-col bg-gradient-to-r from-slate-800 to-slate-950 text-white text-sm sm:text-base"
>
  <Hero />
  <Generator bind:poison bind:muscles bind:goal {updateWorkout} />
  {#if workout}
    <Workout {workout} />
  {/if}
</main>
