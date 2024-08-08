<script lang="ts">
  import '$lib/styles.css'
  import type { LayoutData } from './$types';
  import { page } from '$app/stores';
  
  export let data: LayoutData;

</script>

<svelte:head>
  <title>Website Name{$page.data.title ? ` - ${$page.data.title}` : ''}</title>
  {#if $page.data.description}
    <meta name="description" content={$page.data.description} />
  {/if}
</svelte:head>

<nav>
  <ul class="navig">

    <li>
      <a href="/properties">Propiedadesssss</a>
    </li>
    <li>
      <a href="/about">About Us</a>
    </li>
  </ul>
</nav>

<!-- {#if data.user}
  <h2>Logged by {data.user.name}</h2>
{/if} -->

<slot/>

<style>
  nav {
    background-color: #333;
    color: white;
    padding: 1rem;
  }

  ul{
    display: flex;
    justify-content: space-around;
  }
  
  li {
    display: flex;
    width: auto;
    padding: 0;
    align-content: center;
  }

  a {
    color: white;
    text-decoration: none;
  }



</style>