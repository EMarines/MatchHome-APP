 <script lang="ts">
  import type { PageData} from './$types';
  import { toComaSep } from '$lib/functions/format'
  import { goto } from '$app/navigation'

  export let data: PageData;

  let linkEB = "";

  $: property = data;

  function link(clave: string){    
    linkEB = (`http://localhost:5173/property/${clave}`)
  }

</script>

<body>
  <div class="title">
    <h1>{property?.title}</h1>
  </div>
  <section class="selectProperty">
  

    <div class="imgContainer">      
      <figure class="principalImage">
        <img src={property?.urlImage} alt={property?.title}>
      </figure>
    </div>

    <div class="infoContainer">
      <h3>$ {toComaSep(property?.price)}.</h3>
      <h4>Tipo de Propiedad: {property?.selectTP}</h4>
      <p>{property?.description}</p>        
    </div>

  </section>

  
  <section class="oterProperties">
    <h1>Propiedades que te pueden interesar</h1>
    {#each data.properties as propert}
    <!-- svelte-ignore a11y-click-events-have-key-events -->
    <!-- svelte-ignore a11y-no-noninteractive-element-interactions -->
    <!-- svelte-ignore illegal-attribute-character -->
    <article on:click={link(propert.claveEB)} ok:keypress={()=>{}}>
      <figure class="secunImages">
        <a href={linkEB}>
          <img src={propert.urlImage} alt={propert.claveEB}/>
        </a>
      </figure>
      <div class="clavePicture">
        <h3>{propert.claveEB}</h3>
      </div>
      <!-- <a href={link(propert.claveEB)}>ir {propert.claveEB}</a> -->
    </article>
    {/each}
  </section>
    
</body>
<style>

  body{
    padding: 20px;
    background-color: rgb(255, 255, 255);
  }

  .principalImage {
    width: 300px;
    height: 200px;  
  }
  .secunImages {
    width: 150px;
    height: 100px; 
  }
  img{
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: 5px; 
  }
  .imgContainer{
    max-width: 50%;
    min-width: 300px;
  }
  .infoContainer{
    max-width: 50%;
    min-width: 300px;
  }

  .title {
    text-align: center;
    margin: 0 auto;
    font-size: .8rem;
  }
  p {
    font-size: .7rem;
  }
  .selectProperty{
    display: flex;
    flex-wrap: wrap;
  }

  .oterProperties{
    display: flex;
    flex-wrap: wrap;
    gap: 5px;
  }
  article{
    width: 160px;
    height: 110px;
    position: relative;
    padding-top: 1px;
  }
  .clavePicture{
    width: auto;
    font-size: .5rem;
    position: absolute;
    background: rgba(255, 255, 255, 0.5);
    padding: 0 4px;
    bottom: 10px;
    left: 10px;
    border-radius: 3px;
  }

 
</style>

