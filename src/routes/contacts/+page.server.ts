import type { PageServerLoad } from './$types';

export const load: PageServerLoad = async() => {
  const db = (await import ('$lib/dbx.json')).default;

    const res = db.contacts;
  return {
    contacts: res
  };
}

