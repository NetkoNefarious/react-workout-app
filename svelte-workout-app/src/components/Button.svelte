<script>
  export let func;
</script>

<button
  on:click={func}
  class="px-8 mx-auto py-4 rounded-md border-[2px] border-blue-400 border-solid bg-slate-950 blueShadow duration-200"
>
  <p><slot /></p>
</button>
