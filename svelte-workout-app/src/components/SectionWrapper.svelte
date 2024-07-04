<script>
  export let header;
  export let title;
  export let id;
</script>

<section {id} class="min-h-screen flex flex-col gap-10">
  <div
    class="bg-slate-950 py-10 flex flex-col gap-2 justify-center items-center p-4"
  >
    <p class="uppercase font-medium">{header}</p>
    <h2
      class="font-semibold text-3xl sm:text-4xl
                md:text-5xl lg:text-6xl"
    >
      {title[0]} <span class="uppercase text-blue-400"> {title[1]}</span>
      {title[2]}
    </h2>
  </div>
  <div class="max-w-[800px] w-full flex flex-col mx-auto gap-10 p-4">
    <slot />
  </div>
</section>
