<script lang="ts">
  import CardProperty from '$lib/components/CardProperty.svelte';
  import type { PageData } from './$types';

  export let data: PageData;

  $: properties = data.properties;

</script>
<div class="pageContainer">
  
    <h2>{data.title}</h2>

    {#if properties && properties.length === 0}
      <p>No hay propiedades</p>
    {:else}
      <h3>{properties.length} propiedades a mostrar</h3>
      <div class="cardsContainer">
        {#each properties as property}
          <CardProperty {property}/>          
        {/each}
      </div>
    {/if}

</div>

<style>

  .cardsContainer {
    display: flex;
    flex-wrap: wrap;
    position: relative;
    gap: 6px;
  }


</style>