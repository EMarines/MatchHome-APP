// import { json, error } from '@sveltejs/kit';
// import type { PageServerLoad } from './$types';

// export const load: PageServerLoad = async ({ fetch }) => {
//   const response = await fetch('/api/prducts');

//   console.log(json(response), " el response fueeeeeeeeeeeeeeeeeeeeee");
  
//   if (response.ok) {

//     console.log("esta dentro del reponse ok");
//     const resJSON = await json(response);
//     return {
//       properties: resJSON
//     };
//   } else {
//     console.log("esta fuera del reponse ok");
//     throw error(response.status, 'Failed to fetch data');
//   }
// };