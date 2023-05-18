<div class="calc">
  <div class="calc-out">
  </div>
  <div class="btn-div">
    <button class="btn text-red-400 active:text-red-900">AC</button>
    {#each btns as btn}
      <button class="btn">{btn}</button>
    {/each}
    <button class="btn col-span-2">=</button>
  </div>
</div>

<script>
const btns = "+,-,*,1,2,3,/,4,5,6,mod,7,8,9,%,0,.".split(",");
</script>
