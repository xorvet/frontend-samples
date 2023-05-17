<div class="calc">
  <div class="calc-out">
  </div>
  <div class="btn-div">
    <div class="btns-col">
      <button class="btn">AC</button>
      <button class="btn">+</button>
      <button class="btn">-</button>
      <button class="btn">*</button>
    </div>
    <div class="btns-col">
      <div class="num-div">
        {#each nums as num}
          <button class="btn">{num}</button>
        {/each}
      </div>
      <div class="side-div">
        <button class="btn">/</button>
        <button class="btn">mod</button>
        <button class="btn">%</button>
        <button class="btn">=</button>
      </div>
    </div>
  </div>
</div>

<script>
const nums = [...Array(10).keys()];
</script>
