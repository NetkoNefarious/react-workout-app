<script>
  import ExerciseCard from './ExerciseCard.svelte';
  import SectionWrapper from './SectionWrapper.svelte';

  export let workout;
</script>

<SectionWrapper
  id="workout"
  header="Welcome to"
  title={['The', 'DANGER', 'zone']}
>
  <div class="flex flex-col gap-4">
    {#each workout as exercise, i}
      <ExerciseCard index={i} {exercise} />
    {/each}
  </div>
</SectionWrapper>
