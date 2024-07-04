<script>
  import Button from './Button.svelte';
</script>

<div
  class="min-h-screen flex flex-col gap-10 items-center justify-center text-center max-w-[800px]
    w-full m-auto p-4"
>
  <div class="flex flex-col gap-4">
    <p>IT&apos;S TIME TO GET</p>
    <h1
      class="uppercase font-semibold text-4xl sm:text-5xl md:text-6xl lg:text-7xl"
    >
      Swole<span class="text-blue-400">normous</span>
    </h1>
    <p class="text-sm md:text-base font-light">
      I hereby acknowledgement that I may become <span
        class="text-blue-400 font-medium">unbelievably swolenormous</span
      >
      and accept all risks of becoming the local
      <span class="text-blue-400 font-medium">mass montrosity</span>, afflicted
      with severe body dismorphia, unable to fit through doors.
    </p>
  </div>
  <Button
    func={() => {
      window.location.href = '#generate';
    }}>Accept and Begin</Button
  >
</div>
