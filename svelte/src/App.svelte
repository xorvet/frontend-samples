<script lang="ts">
import Router from 'svelte-spa-router';
import { link } from 'svelte-spa-router';
import routes from './routes';
</script>

<main class="body">
  <div class="nav">
    <a href="/calc" use:link>calculator</a>
    <a href="/chat" use:link>chat</a>
    <a href="/landing" use:link>landing page</a>
    <a href="/signup" use:link>sign-up page</a>
    <a href="/todo" use:link>todo</a>
    <a href="/weather" use:link>weather</a>
  </div>
  <div class="route">
    <Router {routes} />
  </div> 
</main>
