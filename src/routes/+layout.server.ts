import type { LayoutServerLoad } from './$types';
// import { json, error } from '@sveltejs/kit';

import db from '$lib/dbx.json';

export const load: LayoutServerLoad = () => {
  const properties = db.properties;
  const title = "Listado de Propiedades"
  const user = {name: 'John Doe', id: 1};


  return {
    statys: 200,
    properties,
    user,
    title
  }
}