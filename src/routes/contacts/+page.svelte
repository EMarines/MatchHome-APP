<script lang="ts">
  import CardContact from '$lib/components/CardContact.svelte';
  import type { PageData } from './$types';

  export let data: PageData;

  $: contacts = data.contacts;
  // $: properties = data.db.properties;



</script>

<h2>Contactos</h2>

{#if contacts && contacts.length === 0}
  <p>No hay propiedades</p>
{:else}
    {#each contacts as cont}
      <!-- <a href="contacts/{contact.id}">{contact.name}</a> -->
      <CardContact {cont}/>
    {/each}
{/if}