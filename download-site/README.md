# FitLight — site de téléchargement

Site statique + 2 fonctions serverless, pensé pour Vercel. Aucune donnée personnelle : juste une page de téléchargement et un compteur anonyme.

## Mise en place (à faire une fois, côté Vercel)

1. **Créer le projet Vercel** : importer ce dossier (`download-site/`) comme Root Directory dans un nouveau projet Vercel.
2. **Créer un store Vercel KV** (Storage → KV dans le dashboard Vercel) et le connecter à ce projet : Vercel ajoute automatiquement les variables d'environnement `KV_REST_API_URL` / `KV_REST_API_TOKEN`.
3. **Ajouter les variables d'environnement du projet** :
   - `APK_DOWNLOAD_URL` : URL directe vers le fichier `.apk` (ex. une release GitHub) — tant que 7.1 n'est pas livré, le bouton de téléchargement répondra 503.
   - `ADMIN_TOKEN` : un secret de ton choix pour protéger `/api/stats`.
4. Déployer.

## Voir le nombre de téléchargements

```
https://<ton-domaine>/api/stats?token=<ADMIN_TOKEN>
```

Renvoie `{"downloads_total": N}`.

## Pourquoi pas de fichier APK versionné ici

GitHub/Vercel ne sont pas adaptés au stockage de gros binaires versionnés. Préférer une **release GitHub** (fichier attaché à une release) et pointer `APK_DOWNLOAD_URL` vers son URL directe — facile à mettre à jour sans redéployer le site.
