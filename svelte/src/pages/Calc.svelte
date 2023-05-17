<div class="calc">
  <div class="calc-out">
  </div>
  <div class="btn-div">
    {#each btns as btn}
      <button class="btn">{btn}</button>
    {/each}
    <button class="btn col-span-3">=</button>
  </div>
</div>

<script>
const btns = "AC,+,-,*,0,1,2,/,3,4,5,mod,6,7,8,%,9".split(",");
</script>
