<div class="calc">
  <div class="calc-out">
    {out}
  </div>
  <div class="btn-div">
    <button class="btn text-red-400 active:text-red-900" on:click={() => inn("AC")}>AC</button>
    {#each btns as btn}
      <button class="btn" on:click={() => inn(btn)}>{btn}</button>
    {/each}
    <button class="btn col-span-2" on:click={() => inn("=")}>=</button>
  </div>
</div>

<script lang="ts">
let out = '';
const btns = "+,-,*,1,2,3,/,4,5,6,(,7,8,9,),0,.".split(",");

function inn(val) {
  if (val === "AC") {
    out = '';
  } else if(val === "=") {
    try {
      out = eval(out);
    } catch(_e) {
      out = "Error";
    }
  } else {
    out += val
  }
}
</script>
