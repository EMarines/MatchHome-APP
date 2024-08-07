<script>
// @ts-nocheck
  import { toComaSep } from '$lib/functions/format'

  export let property={};
</script>

  <div class="card__prop">  

    <p><a href=/property/{property.claveEB}>{property.claveEB}</a></p>
    <div class="img__cont">
      <img src="{property.urlImage}" alt="casa">
    </div>

      <div class="info__cont">

        <div class="card__info">
          <h3><a href=/property/{property.claveEB}>{property.nameProperty}</a></h3>
          <h3>$ {toComaSep(Number(property.price))}.</h3>
          
          <div class="card__features">
            {#if  (property.selectTP).toLowerCase() === "casa" || property.selectTP === "departamento"}
            <span>Recámaras {Number(property.beds)}</span>
            <span>Baños {Number(property.bathroom)}</span> 
            <!-- <span>Estacionamientos {Number(property.park)}</span>  -->
            {:else if (property.selectTP).toLowerCase() === "terreno"}  
            <span>{toComaSep(Number(property.areaTotal))} m²</span>
            {/if}
          </div>
        </div>
          
      </div>

  </div> 

<style>

     .card__prop { 
      display: flex;
      flex-direction: column;
      width: 210px;
      height: 250px;     
      border: 1px solid grey;
      border-radius: 5px;
      /* justify-content: center; */
      padding: 3px;
      overflow: clip;
      position: relative;
    }
    .card__prop p{
      font-size: 0.8em;
      font-weight: 800;
      color: blue;
      text-align: center;
      background: rgba(237, 242, 242, 0.300);
      position: absolute;
      top: 4px;
    }

    .img__cont{
      display: flex;
      width: 100%;
      height: 60%;
      justify-content: center;
 
    }    
    
    img{
      width: 100%;
      height:100%;
      object-fit: cover;
      border-radius: 8px 8px 0 0;
    }
    
    .info__cont{
      width: 100%;
      height: 50%;
    }
    
    .card__info {
      display: flex;
      flex-direction: column;
      width: 100%;
      height: 100%;
      font-size: 0.7em;
      font-weight: 800;
      justify-content: center;
      align-items: center;
      background: rgba(84, 198, 145, 0.718);
      border-radius: 0 0 8px 8px;
    }
   
    .card__features {
      display: flex;
      height: 10%;
      font-size: 0.8em;
      justify-content: center;
    }
    span{
      width: auto;
    }

  

    @media(max-width: 400px){
  
      .img__cont{
        display: flex;
        width: 340px;
        align-items: center;
        height: auto;
        justify-content: center;
    }
    img{
      width: 100%;
      max-height: 195px;
      /* padding: 15px 5px 0 5px; */

    }
    span{
      color: blue;
      font-weight: 800;
      position: relative;
      top: -80px;
    }

    .info__cont {
      height: 0;
    }
    
  }
</style>