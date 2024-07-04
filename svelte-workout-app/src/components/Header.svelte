<script>
  export let index;
  export let title;
  export let description;
</script>

<div class="flex flex-col gap-4">
  <div class="flex items-center gap-2">
    <p class="text-3xl sm:text-4xl md:text-5xl font-semibold text-slate-400">
      {index}
    </p>
    <h4 class="text-xl sm:text-2xl md:text-3xl">{title}</h4>
  </div>
  <p class="text-sm sm:text-base mx-auto">{description}</p>
</div>
