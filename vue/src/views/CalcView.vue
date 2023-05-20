<template>
  <div class="calc">
    <div class="calc-out">
      {{ out }}
    </div>
    <div class="btn-div">
      <button class="btn text-red-400 active:text-red-900" @click="inn('AC')">AC</button>
      <span v-for="btn in btns">
        <button class="btn" @click="inn(btn)">{{ btn }}</button>
      </span> 
      <button class="btn col-span-2" @click="inn('=')">=</button>
    </div>
  </div>
</template>

<script lang="ts">
export default {
  data() {
    return {
      out: "",
      btns: "+,-,*,1,2,3,/,4,5,6,(,7,8,9,),0,.".split(",")
    }
  },
  methods: {
    inn: function (val: string) {
      if (val === "AC") {
        this.out = '';
      } else if (val === "=") {
        try {
          this.out = eval(this.out);
        } catch (_e) {
          this.out = "Error";
        }
      } else {
        this.out += val
      }
    }
  },
}
</script>
