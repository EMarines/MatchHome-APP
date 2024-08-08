import { error } from '@sveltejs/kit';
import type { PageServerLoad } from './$types';

export const load: PageServerLoad = async({ params }) => {
  const db = (await import ('$lib/dbx.json')).default;
  const property = db.properties.find((p) => p.claveEB === params.claveEB);
  const properties = db.properties

  if(!property) {
    throw error(404, 'Property not found');
  };

  return {
    urlImage: property?.urlImage,
    price: property?.price,
    selectTP: property.selectTP,
    title: property?.titulo,
    description: property?.description,
    properties
  };
};