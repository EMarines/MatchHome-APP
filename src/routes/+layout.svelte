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
  <ul>
    <li>
      <a href="/">Home</a>
    </li>
    <li>
      <a href="/contacts">Contactos</a>
    </li>
    <li>
      <a href="/properties">Propiedades</a>
    </li>
    <li>
      <a href="/about">About Us</a>
    </li>
      <a href="/login">Login</a>
    <li>
    </li>
  </ul>
</nav>

{#if data.user}
  <h2>Logged by {data.user.name}</h2>
{/if}

<slot/>

<style>
  nav {
    background-color: #333;
    color: white;
    padding: 1rem;
  }

  ul {
    display: flex;
    justify-content: space-around;
  }

  a {
    color: white;
    text-decoration: none;
  }

  nav a:hover {
    text-decoration: underline;
    color:rgb(255, 2, 2)
  } 

</style>