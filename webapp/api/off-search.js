// Proxy vers l'API de recherche OpenFoodFacts "search-a-licious", bien plus pertinente que
// l'ancienne api/v2/search?search_terms= (qui ne filtre quasiment plus rien pour les mots
// courants). Cette API n'envoie pas d'en-tête CORS, donc le navigateur ne peut pas l'appeler
// directement : on relaie la requête côté serveur (pas de souci CORS serveur-à-serveur), et on
// ajoute nous-mêmes l'en-tête CORS sur la réponse.
const FIELDS = 'product_name,product_name_fr,generic_name,generic_name_fr,categories_tags_fr,brands,nutriments,serving_quantity,countries_tags,lang,unique_scans_n';

export default async function handler(req, res) {
  res.setHeader('Access-Control-Allow-Origin', '*');

  const q = (req.query.q || '').toString().trim();
  if (!q) {
    res.status(400).json({ error: 'Paramètre q manquant' });
    return;
  }

  const url = `https://search.openfoodfacts.org/search?q=${encodeURIComponent(q)}&page_size=100&fields=${FIELDS}`;
  try {
    const r = await fetch(url, { headers: { 'User-Agent': 'FitLight/1.0 (app perso, sans pub)' } });
    const data = await r.json();
    res.setHeader('Cache-Control', 's-maxage=300, stale-while-revalidate');
    res.status(200).json({ hits: data.hits || [] });
  } catch (err) {
    console.error('OFF search-a-licious indisponible :', err);
    res.status(502).json({ error: 'Recherche indisponible' });
  }
}
