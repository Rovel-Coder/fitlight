# FitLight — site de téléchargement

Site statique + 2 fonctions serverless, pensé pour Vercel. Aucune donnée personnelle : juste une page de téléchargement et un compteur anonyme.

## État actuel

✅ Déployé : https://download-site-ashy.vercel.app (projet Vercel `romains-projects-071515e4/download-site`).
⬜ Reste à faire (dashboard Vercel, action manuelle) : créer le store de données et les variables d'environnement ci-dessous.

## Mise en place (à faire une fois, côté Vercel)

1. ~~Créer le projet Vercel~~ — fait.
2. **Créer un store de données** : Vercel KV a été remplacé par les intégrations **Upstash Redis** du Vercel Marketplace. Dans le dashboard du projet → Storage → Browse Marketplace → Redis (Upstash), créer une base et la connecter à ce projet : ça ajoute automatiquement les variables d'environnement `KV_REST_API_URL` / `KV_REST_API_TOKEN` (le code `@vercel/kv` reste compatible).
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
