<!-- <script lang="ts">
  import CardContact from '$lib/components/CardContact.svelte';
  import type { PageData } from './$types';

  export let data: PageData;

  $: contacts = data.contacts;



</script>

<h2>Contactos</h2>

{#if contacts && contacts.length === 0}
  <p>No hay propiedades</p>
{:else}
    {#each contacts as cont}
      <CardContact {cont}/>
    {/each}
{/if} -->