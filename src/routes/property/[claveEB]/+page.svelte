<script lang="ts">
  import type { PageData} from './$types';
  import { toComaSep } from '$lib/functions/format'

  export let data: PageData;

  $: property = data;

</script>

<img src={property?.urlImage} alt={property?.title}>

<h1>{property?.title}</h1>
<h3>$ {toComaSep(property?.price)}.</h3>
<h4>Tipo de Propiedad: {property?.selectTP}</h4>

<p>{property?.description}</p>

<style>

  img {
    width: 300px;
    height: auto;    
  }

  h1 {
    color: #333;
  }

  p {
    color: #666;
  }
</style>

