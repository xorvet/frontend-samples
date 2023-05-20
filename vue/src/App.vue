<script lang="ts">
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
<main class="body">
  <div class="nav">
    <router-link to="/calc">calculator</router-link>
    <router-link to="/chat">chat</router-link>
    <router-link to="/landing">landing page</router-link>
    <router-link to="/signup">sign-up pager</router-link>
    <router-link to="/todo">todo</router-link>
    <router-link to="/weather">weather</router-link>
  </div>
  <div class="route">
    <RouterView />
  </div> 
</main> 
</template>
