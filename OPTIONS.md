# FitLight — Revue des options & feuille de route

> Document de travail. Pour chaque option : **statut** (✅ existant / 🟡 partiel / ⬜ à faire), une description, l'effort estimé et l'intérêt.
> On valide ensemble case par case. Coche `[x]` ce qu'on retient, barre ce qu'on écarte.
>
> **Cadrage (validé) :** usage **perso / foyer, prioritairement sur mobile**. → La PWA installable/offline (0.3) est prioritaire ; sync cloud (0.4) et i18n (0.6) sont écartés pour l'instant. Validation **catégorie par catégorie**.

Légende effort : 🟢 petit · 🟡 moyen · 🔴 gros · macro = ⚙️ technique de fond.

---

## 0. Socle technique (transversal)

| # | Option | Statut | Effort | Note |
|---|--------|--------|--------|------|
| 0.1 | Fichier unique `index.html` (vanilla JS) | ✅ | — | Simple, zéro dépendance |
| 0.2 | Découper en fichiers (JS/CSS séparés, modules) | ⬜ | 🟡 | Maintenance plus facile, mais perd le « 1 fichier » |
| 0.3 | PWA installable (manifest + service worker, offline) | ⬜ | 🟡 | App sur écran d'accueil mobile, marche hors-ligne |
| 0.4 | Sauvegarde cloud / sync multi-appareils | ⬜ | 🔴 | Nécessite un backend ou un service tiers |
| 0.5 | Mode clair / sombre (toggle) | ⬜ | 🟢 | Actuellement sombre uniquement |
| 0.6 | Internationalisation (FR/EN) | ⬜ | 🟡 | Pertinent seulement si diffusion large |

---

## 1. Onglet Accueil / Tableau de bord

| # | Option | Statut | Effort | Note |
|---|--------|--------|--------|------|
| 1.1 | Stats clés (poids, objectif, calories, progression) | ✅ | — | |
| 1.2 | Suggestion séance + repas du jour | ✅ | — | |
| 1.3 | Anneaux/jauges du jour (calories, protéines, eau, pas) | ⬜ | 🟡 | Style « Apple Watch » |
| 1.4 | Citation / conseil motivant quotidien | ⬜ | 🟢 | Petite touche d'engagement |
| 1.5 | Série de jours actifs (streak) | ⬜ | 🟢 | Gamification |
| 1.6 | Résumé hebdo (bilan du dimanche) | ⬜ | 🟡 | Moyenne calories, poids, séances faites |
| 1.7 | Raccourcis rapides (ajout poids/repas/eau en 1 clic) | ⬜ | 🟢 | |

---

## 2. Nutrition / Repas

| # | Option | Statut | Effort | Note |
|---|--------|--------|--------|------|
| 2.1 | Bibliothèque de recettes + filtres (type, régime, cal, temps) | ✅ | — | |
| 2.2 | Planning hebdo + génération auto | ✅ | — | |
| 2.3 | Liste de courses auto (avec rayons/packs) | ✅ | — | |
| 2.4 | Ajout de recettes perso (macros, régimes, ingrédients) | ✅ | — | |
| 2.5 | Régimes & allergènes au profil | ✅ | — | |
| 2.6 | Base d'aliments avec recherche (scan code-barres / OpenFoodFacts) | ⬜ | 🔴 | Saisie calorique réaliste, gros plus |
| 2.7 | Suivi des macros (protéines/glucides/lipides) sur la journée | 🟡 | 🟡 | Macros saisies sur recettes mais pas agrégées au journal |
| 2.8 | Suivi de l'hydratation (verres d'eau) | ⬜ | 🟢 | Très demandé, simple |
| 2.9 | Favoris / repas récents (saisie en 1 clic) | ⬜ | 🟢 | |
| 2.10 | Photos des recettes | ⬜ | 🟡 | Visuel, mais alourdit le fichier |
| 2.11 | Ajuster portions selon le nombre de convives | 🟡 | 🟡 | Portions par utilisateur existent déjà |
| 2.12 | Export du planning / liste de courses (PDF, partage) | ⬜ | 🟡 | |
| 2.13 | Suggestions « il te reste X kcal → mange ça » | ⬜ | 🟡 | Intelligent, lie journal + recettes |

---

## 3. Sport / Exercices

| # | Option | Statut | Effort | Note |
|---|--------|--------|--------|------|
| 3.1 | Bibliothèque d'exercices + filtres (niveau, catégorie, lieu) | ✅ | — | |
| 3.2 | Programme hebdo généré (niveau, jours, types, lieu) | ✅ | — | |
| 3.3 | Marquer une séance comme « faite » + report auto au journal calories | ⬜ | 🟡 | Boucle sport→calories |
| 3.4 | Minuteur / chrono d'exercice intégré (intervalles HIIT) | ⬜ | 🟡 | Très utile pendant la séance |
| 3.5 | Démonstrations animées / images / GIF par exercice | ⬜ | 🔴 | Alourdit beaucoup ; lien vidéo possible |
| 3.6 | Suivi des performances (charges, reps, progression) | ⬜ | 🟡 | Pour la muscu |
| 3.7 | Historique des séances / calendrier d'entraînement | ⬜ | 🟡 | |
| 3.8 | Intégration pas / activité (saisie manuelle ou capteur) | ⬜ | 🔴 | Capteurs = limité en web |
| 3.9 | Échauffement / retour au calme auto dans la séance | ⬜ | 🟢 | |

---

## 4. Suivi du poids & mensurations

| # | Option | Statut | Effort | Note |
|---|--------|--------|--------|------|
| 4.1 | Saisie du poids + graphique + historique | ✅ | — | |
| 4.2 | Objectif de poids | ✅ | — | |
| 4.3 | Tour de taille / hanches / autres mensurations | ⬜ | 🟢 | Le poids seul ne dit pas tout |
| 4.4 | IMC + interprétation | ⬜ | 🟢 | Données déjà dispo (poids+taille) |
| 4.5 | Photos de progression (avant/après) | ⬜ | 🟡 | Motivant ; stockage local lourd |
| 4.6 | Courbe de tendance / moyenne lissée | ⬜ | 🟡 | Lisse les variations journalières |
| 4.7 | Prévision de la date d'atteinte de l'objectif | ⬜ | 🟡 | À partir du rythme réel |
| 4.8 | % de masse grasse (saisie manuelle) | ⬜ | 🟢 | |

---

## 5. Calories / Journal

| # | Option | Statut | Effort | Note |
|---|--------|--------|--------|------|
| 5.1 | Journal du jour (consommé / brûlé / net vs objectif) | ✅ | — | |
| 5.2 | Objectif calorique auto depuis le profil (BMR/TDEE) | ✅ | — | |
| 5.3 | Historique des jours passés (naviguer dans le calendrier) | ⬜ | 🟡 | Actuellement « aujourd'hui » seulement |
| 5.4 | Répartition par repas (petit-déj / déj / dîner / collation) | ⬜ | 🟡 | |
| 5.5 | Graphe calories sur la semaine/mois | ⬜ | 🟡 | |
| 5.6 | Alertes (dépassement objectif, sous le plancher de sécurité) | ⬜ | 🟢 | |
| 5.7 | Ajustement dynamique (calories brûlées → marge repas) | ⬜ | 🟡 | Lié à 3.3 |

---

## 6. Profil & personnalisation

| # | Option | Statut | Effort | Note |
|---|--------|--------|--------|------|
| 6.1 | Calcul besoin calorique (Mifflin-St Jeor) | ✅ | — | |
| 6.2 | Multi-utilisateurs (foyer) | ✅ | — | |
| 6.3 | Export / import JSON | ✅ | — | |
| 6.4 | Onboarding guidé | ✅ | — | |
| 6.5 | Objectifs alternatifs (maintien, prise de masse, recomposition) | ⬜ | 🟡 | Pas que perte de poids |
| 6.6 | Réglages d'unités (kg/lb, cm/in) | ⬜ | 🟢 | |
| 6.7 | Rappels / notifications (peser, boire, séance) | ⬜ | 🔴 | Nécessite PWA + permission notifs |

---

## 7. Engagement & motivation

| # | Option | Statut | Effort | Note |
|---|--------|--------|--------|------|
| 7.1 | Badges / récompenses (paliers de poids, séances) | ⬜ | 🟡 | |
| 7.2 | Séries (streaks) suivi quotidien | ⬜ | 🟢 | |
| 7.3 | Objectifs intermédiaires / jalons | ⬜ | 🟢 | |
| 7.4 | Bilan hebdo motivant | ⬜ | 🟡 | Cf 1.6 |
| 7.5 | Partage de progression (image récap) | ⬜ | 🟡 | |

---

## 🗺️ Feuille de route de développement (validée le 2026-06-08)

Ordre conçu pour traiter les fondations et dépendances d'abord. Chaque phase est livrable indépendamment.

### Phase 1 — Fondations mobile ✅ FAIT (2026-06-08)
1. **Refonte mobile** (0.R) : barre d'onglets fixe en bas (icône + libellé court), topbar réduit au logo + sélecteur d'utilisateur, safe-area insets (encoche/barre gestuelle), tap-highlight tactile neutralisé. Desktop inchangé (onglets texte dans le topbar).
2. **PWA** (0.3) : `manifest.webmanifest`, `icon.svg` (any + maskable), `sw.js` (stale-while-revalidate), enregistrement au `load`. Installable + hors-ligne vérifié (cache `fitlight-v1`, index.html en cache).
> Base indispensable avant tout le reste (tout l'usage est mobile).
> ⚠️ Piège résolu : `backdrop-filter` sur `.topbar` créait un bloc conteneur → la barre fixe s'ancrait sur le topbar. Neutralisé sur mobile.
> 🆕 Fichiers ajoutés : `manifest.webmanifest`, `sw.js`, `icon.svg`. Bump `CACHE` dans `sw.js` à chaque modif de l'app pour propager la mise à jour.

### Phase 2 — Cœur du suivi quotidien ✅ FAIT (2026-06-08)
3. **Historique des jours + calendrier** (5.3) : navigation ‹ / › / Aujourd'hui + input date sur la page Calories. Variable `calDate` (UTC, cohérent avec `todayKey`). Toutes les opérations ciblent la date sélectionnée.
4. **Répartition par repas** (5.4) : journal groupé Petit-déj/Déjeuner/Dîner/Collation + Activité, avec sous-totaux. Sélecteur de repas dans le formulaire ; recettes mappées via `MEAL_FROM_TYPE`.
5. **Agrégation des macros / jour** (2.7) : totaux P/G/L + cibles (30/40/30 %) avec barres. Macros propagées depuis les recettes (`data-prot/gluc/lip/rtype`) et saisissables manuellement.
6. **Hydratation** (2.8) : carte verres d'eau (`u.water[date]`, `u.waterGoal` déf. 8), +/− et clic sur un verre.
7. **Favoris / repas récents** (2.9) : chips d'ajout rapide. Favoris persistés (`u.favoris`), récents dérivés de l'historique (distincts, 8 max).
8. **Alertes** calories (5.6) : dépassement objectif (danger) / sous le plancher de sécurité (warn) / dans la cible (ok).
> Modèle étendu rétro-compatible. Entrée journal : `{nom, kcal, type, meal?, prot?, gluc?, lip?}`. Nouveaux champs user : `water{}`, `waterGoal`, `favoris[]`. SW bumpé v1→v2.

### Phase 3 — Saisie réaliste des aliments ✅ FAIT (2026-06-08)
9. **Base d'aliments + scan code-barres OpenFoodFacts** (2.6) : recherche texte + scan (BarcodeDetector + caméra, repli saisie manuelle). Portion en grammes → kcal et macros calculés au prorata, ajoutés au repas sélectionné. **Endpoints** : `api/v2/search?search_terms=` (PAS `cgi/search.pl` qui n'envoie pas de CORS) et `api/v2/product/{code}.json`. Retry x2 (`offFetch`) contre les coupures passagères. SW ignore le cross-origin → pas mis en cache, OK.
10. **Suggestions « reste X kcal »** (2.13) : sur la page Calories (jour courant), propose jusqu'à 3 recettes compatibles régimes/allergènes tenant dans les kcal restantes.
> ⚠️ Ces 2 fonctions nécessitent une connexion (API externe) ; échec géré proprement. Le reste de l'app reste hors-ligne.

### Phase 4 — Sport actif ✅ FAIT (2026-06-08)
11. **Séance « faite » → calories brûlées** (3.3) : bouton par jour du programme + dans la bibliothèque. `enregistrerSeance()` reporte la dépense au journal **du jour** (todayKey, indépendant de `calDate`) et l'ajoute à `u.seances`.
12. **Ajustement dynamique** (5.7) : implicite via `net = conso − burn` ; la dépense logguée augmente automatiquement les kcal restantes et donc les suggestions.
13. **Minuteur / chrono HIIT** (3.4) : overlay plein écran configurable (effort/repos/tours), bips WebAudio, anneau coloré effort/repos.
14. **Historique des séances** (3.7) : sous-onglet Sport, stats semaine/total + liste supprimable.
15. **Suivi des performances** (3.6) : `<details>` par exercice de la bibliothèque, log charge×reps dans `u.perfs[exId]`, 3 dernières affichées.
16. **Échauffement / retour au calme auto** (3.9) : lignes ajoutées à l'affichage de chaque jour d'entraînement.
17. **Liens vidéo par exercice** (3.5) : lien YouTube de recherche (`lienVideo()`) sur bibliothèque + programme — pas de média embarqué.
> Nouveaux champs user : `seances[]`, `perfs{}`. SW à `fitlight-v5`.

### Phase 5 — Suivi corporel enrichi ✅ FAIT (2026-06-08)
18. **IMC** (4.4) : `imcDe()` (poids/taille²) + catégorie, carte sur la page Suivi.
19. **Mensurations** (4.3) : formulaire 5 tours (taille/hanches/poitrine/bras/cuisse) + table historique avec variations. `u.mesures[]`.
20. **% masse grasse** (4.8) : champ optionnel à la saisie du poids (`p.mg`), colonne dédiée dans la table.
21. **Courbe de tendance lissée** (4.6) : régression linéaire `tendancePoids()`, tracée en pointillés bleus sur le graphe.
22. **Prévision date d'objectif** (4.7) : extrapolation de la pente, carte « objectif atteint vers… » + kg/sem.
23. **Photos avant/après** (4.5) : upload réduit (canvas → JPEG 800 px max, q.0.7) stocké en dataURL dans `u.photos[]`, galerie.
> Nouveaux champs user : `mesures[]`, `photos[]` ; entrée poids `{date, valeur, mg?}`. SW à `fitlight-v7`.
> 🐛 Bug préexistant corrigé : le canvas du graphe se rendait en largeur 0 (pas de largeur CSS + rendu page masquée). Ajout `#chart-poids{width:100%}` + garde anti-zéro dans `dessinerGraphique`.

### Phase 6 — Tableau de bord & visualisations ✅ FAIT (2026-06-08)
24. **Anneaux/jauges du jour** (1.3) : 4 anneaux SVG (Calories net/objectif, Protéines, Eau, Activité) via `anneau()`/`renderDashRings`. Composant `.ring-graph` robuste (centre en `inset:0`).
25. **Raccourcis rapides** (1.7) : + Verre d'eau (instantané), + Repas / + Poids / + Séance (bascule d'onglet + focus).
26. **Graphe calories semaine/mois** (5.5) : barres net/jour (`dessinerCalChart`), barre rouge si dépassement, ligne objectif, toggle 7 j / 30 j.
27. **Bilan hebdo** (1.6 / 7.4) : carte (jours suivis, moy. kcal nettes, séances, variation poids, eau/jour) sur semaine ISO (lundi).
> Aucun nouveau champ de données (agrège l'existant). SW à `fitlight-v9`.

### Phase 7 — Profil avancé ✅ FAIT (2026-06-08)
28. **Objectifs alternatifs** (6.5) : `profil.but` (perte/maintien/prise/recomp) → `besoinJournalier` adapte la cible (déficit / TDEE / surplus) ; `ciblesMacros` monte les protéines à 35 % pour prise/recomp ; rythme masqué pour maintien/recomp.
29. **Unités** (6.6) : `etat.units` (foyer), stockage interne TOUJOURS kg/cm, helpers `kgAff/affKg/cmAff/affCm` + `uPoids/uLong`. Conversion à tous les points d'affichage/saisie (dashboard, table poids, graphe, suivi cards, mensurations, profil, bilan). `majLabelsUnites()` pour les libellés.
30. **Rappels / notifications** (6.7) : `u.rappels` (pesée/eau/séance + heures), permission `Notification`, scheduler `verifierRappels` (tick 60 s) qui notifie tant que l'app est ouverte/installée — limite web assumée et indiquée dans l'UI.
> Nouveaux champs : `etat.units`, `profil.but`, `u.rappels`. SW à `fitlight-v10`.
> ⚠️ L'onboarding reste en métrique (1er lancement) — non converti si on bascule en impérial puis « Refaire le parcours ».

### Phase 8 — Engagement ✅ FAIT (2026-06-08)
31. **Streak** (1.5 / 7.2) : `calculerStreak` (jours actifs consécutifs = journal/poids/eau/séance, tolérance si aujourd'hui pas encore actif), carte sur le dashboard.
32. **Jalons intermédiaires** (7.3) : `jalons()` à 25/50/75/100 % du trajet départ→objectif, affichés sur la page Suivi avec état atteint.
33. **Badges / récompenses** (7.1) : 10 badges (`BADGES`) calculés des données (pesée, séances, streak, kg perdus, hydratation, objectif…), grille sur le Profil.
> Tout est dérivé des données existantes, aucun nouveau champ persistant. SW à `fitlight-v11`.

---

## ✅ TOUTES LES PHASES TERMINÉES (2026-06-08)
Les 8 phases / 33 options retenues sont implémentées et vérifiées. App = `index.html` + `manifest.webmanifest` + `sw.js` (`fitlight-v12`) + `icon.svg`.

### Correctifs responsive (2026-06-08)
- **Bug** : débordement horizontal de la page Suivi sur mobile. Causes : `.form-group input { min-width:160px }` forçait l'input « masse grasse » hors de son conteneur ; la table des poids (5 col) n'était pas scrollable.
- **Fix** : table des poids emballée dans `.table-scroll { overflow-x:auto }` ; en mobile `.form-group{flex:1 1 140px;min-width:0}` + `input/select{min-width:0;width:100%}`, `.form-group.small{flex:0 1 120px}` ; padding/police des tables réduits ; boutons « Suppr. » → « ✕ ». Vérifié : aucun débordement (`scrollWidth==clientWidth`) sur les 6 onglets + topbar.
- **Topbar mobile (2026-06-08)** : logo + contrôles utilisateur sur une seule ligne (`flex-wrap:nowrap`), avatar masqué, bouton « + Personne » → « + » (label dans `.bu-txt` masqué). SW à `fitlight-v13`.

---

# 🚀 ROADMAP v2 — « rendre l'app indispensable » (validée le 2026-06-08)

8 fonctionnalités retenues pour passer de « complète » à « indispensable » (leviers : friction de saisie ↓, app qui s'adapte, accroches d'habitude). Ordre : friction d'abord, intelligence ensuite, engagement, puis rapports.

### Phase 9 — Saisie express ✅ FAIT (2026-06-08)
- **Copier la veille** : bouton dans la barre de date → recopie les entrées de la veille de `calDate` vers `calDate`.
- **Repas-types (combos)** : `u.combos[]` ; bouton 💾 sur chaque groupe de repas pour enregistrer le repas comme type ; chips « 🍱 Repas-types » (ajout en 1 clic, ✕ pour supprimer).
- **Récents intelligents** : `itemsRecents()` trie par `mealDuMoment()` (petit-déj <11h, déj <15h, collation <18h, dîner sinon). Le sélecteur de repas du formulaire se met aussi par défaut sur le moment.
> Nouveau champ user : `combos[]`. SW à `fitlight-v14`.

### Phase 10 — Nutrition élargie ✅ FAIT (2026-06-08)
- **Fibres / sucre / sodium** : entrée journal étendue (`fib` g, `suc` g, `sod` mg). `offNutr` capte `fiber_100g`/`sugars_100g` + sodium depuis `sodium_100g` (×1000) ou `salt_100g`/2,5. Calcul au prorata de la portion. Agrégés au jour et affichés en ligne `#micro-row` (repères : fibres cible 30 g, sucre max 50 g, sodium max 2300 mg). Micros propagés via combos/favoris/récents.
> Ligne masquée si aucun micro renseigné (CSS `:empty`). SW à `fitlight-v15`.

### Phase 11 — Intelligence & coaching ✅ FAIT (2026-06-08)
- **Objectif calorique adaptatif** : `tdeeAdaptatif()` = apport moyen (jours loggés) − pente de poids (régression) × 7700, sur fenêtre 21 j (requiert ≥10 jours journal + ≥3 pesées sur ≥10 j). `cibleAdaptative()` applique le but/rythme. Carte « 🤖 Objectif adaptatif » sur Profil (dépense réelle vs théorique + écart) avec bouton « Adopter ». Mode `u.calGoalMode` ('auto' suit Mifflin / 'manual' figé) ; `majBesoin` n'écrase plus l'objectif en manuel ; bouton « Définir » (Calories) passe en manuel ; lien « ↺ calcul auto ».
- **Bilan hebdo coach** : `conseilCoach()` selon le but (perte/maintien/prise) et la pente récente — détecte plateau / perte trop rapide / reprise / bon rythme, avec conseil chiffré utilisant le TDEE réel. Message coloré ajouté à la carte bilan hebdo.
> Nouveau champ : `calGoalMode`. Constante `KCAL_PAR_KG = 7700`. SW à `fitlight-v16`.

### Phase 12 — Jeûne intermittent ✅ FAIT (2026-06-08)
- Carte sur la page Calories : protocole (14:10 / 16:8 / 18:6 / 20:4), démarrer/terminer le jeûne, **chronomètre temps réel** (`tickJeune` toutes les 1 s met à jour temps + barre + restant), barre de progression vers la cible, notification à l'objectif atteint. Historique (`u.jeune.historique[]`), série de jours (`streakJeune`) et compteur réussis/total.
> Modèle : `u.jeune = { cibleH, debut, historique[], notifie }`. SW à `fitlight-v17`.

### Phase 13 — Bien-être & habitudes ✅ FAIT (2026-06-08)
- **Suivi bien-être** : carte sur la page Suivi — sommeil (h) + échelles emoji 1-5 (humeur/énergie/faim), auto-save, moyenne 7 j. `u.bienetre{date:{sommeil,humeur,energie,faim}}`.
- **Habitudes personnalisées** : gestion sur le Profil (ajout libre + suggestions, suppression), checklist quotidienne sur l'Accueil (`renderHabitudesJour`) avec compteur fait/total et **série par habitude** (`streakHabitude`). `u.habitudes[]` + `u.habitudesLog{date:[ids]}`.
> Nouveaux champs : `bienetre`, `habitudes`, `habitudesLog`. SW à `fitlight-v18`.

### Phase 14 — Rapport & partage ✅ FAIT (2026-06-08)
- **Bilan PDF** : carte « Rapport & partage » (Profil) avec sélecteur de période (7/30 j). `genererRapport()` produit un `#report-overlay` (thème clair) ; `@media print` masque tout sauf l'overlay → `window.print()` = export PDF natif. `statsPeriode()` agrège poids/IMC/kcal/séances/eau + message coach.
- **Image de progression** : `genererImageProgression()` dessine un canvas 1080×1350 (chiffre clé « −X kg perdus », pastilles de stats, sparkline poids, date) → `canvas.toBlob` + **Web Share API** (`navigator.share` avec fichier) sinon téléchargement PNG.
> Aucun nouveau champ (agrège l'existant). SW à `fitlight-v19`.

---

# 🍳 ROADMAP v3 — variété & personnalisation SANS IA (validée 2026-06-08)

Objectif : obtenir ~90 % des bénéfices d'une IA (variété, perso « avec mon frigo », progression) par des moyens algorithmiques, en gardant l'app hors-ligne / gratuite / fichier unique.

### Phase 15 — Frigo & filtres avancés ✅ FAIT (2026-06-08)
- **Mon frigo** : panneau dépliable sur Repas › Recettes, chips d'ingrédients (extraits des recettes via `listeIngredients()`, basiques sel/huile filtrés par `STAPLES`), classement par correspondance (`matchFrigo`), badge « 🧊 Réalisable / X% · manque N » sur les cartes, mode « réalisable maintenant » (`frigoOnly`). `u.frigo[]` (noms normalisés via `normaliserNom`).
- **Exclusions d'ingrédients** : champ texte → `u.exclusions[]` (normalisées), `estExclu(r)` appliqué au catalogue, à `genererPlanning` (construirePool) et à `recettesCompatibles` (suggestions).
> Per-utilisateur ; `initFrigoUI()` + `renderRepas()` dans `rafraichirUtilisateur`. SW à `fitlight-v24`.
- **Liste de courses ↔ frigo (2026-06-08)** : `renderCourses` masque les ingrédients déjà dans `u.frigo` (même clé `normaliserNom`), avec une note « N ingrédients déjà dans ton frigo » et un cas « tout est au frigo ». SW à `fitlight-v26`.

### Phase 16 — Recettes-modèles (variété) ✅ FAIT (2026-06-08)
- `COMPOSANTS` (prot/féculent/légume/sauce/base/fruit/extra, chacun avec kcal/macros/regimes/ingrédient) + `GABARITS` (bowl-dej, bowl-diner, petitdej). `genererRecette(tplId, choix)` → recette complète (kcal/macros sommés, tags = intersection régimes + Rapide/Riche en protéines, id encodé `gen:tpl:slot=clé,…`). `recetteParId` décode les `gen:` → recettes **persistables** (planning/journal). Allergènes détectés via les noms d'ingrédients.
- Sous-onglet **« ✨ Idées »** (Repas) : `genererIdees(6)` aléatoire respectant type/régimes/allergènes/exclusions/cal/temps + bouton « Autres idées ». Cartes standard (+ Journal, + Au planning, badge frigo).
- **Variété dans l'auto-planning** : `ideesPourCreneau()` injecte ~8 recettes-modèles dans le pool de `construirePool` (genererPlanning).
> Recettes générées non stockées (reconstruites par id). SW à `fitlight-v25`.

### Phase 17 — Progression sportive intelligente ✅ FAIT (2026-06-08)
- `suggestionPerf(exId)` (double progression) : charge + reps≥12 → +2,5 kg / 8-10 reps ; charge + reps<12 → même charge, +1 rep ; poids du corps → +2 reps ; pas d'historique → rien. Affichée en entier dans le volet perf (bibliothèque) et en version courte (« 🎯 Objectif : X kg × Y ») sous chaque exercice du programme.
> Basé sur `u.perfs` existant, aucun nouveau champ. Perfs en kg (non converties en impérial — limite connue). SW à `fitlight-v27`.

> **ROADMAP v3 TERMINÉE (2026-06-08)** : variété & perso sans IA livrées (frigo, exclusions, recettes-modèles, liste de courses ↔ frigo, progression sportive).

---

# 📊 ROADMAP v4 — insights & engagement (retenue 2026-06-08, à implémenter)

8 idées validées (non encore codées) :
- **Corrélations bien-être** : analyser sommeil/humeur/énergie/faim (déjà collectés mais inexploités) vs calories/poids → constats personnalisés (« +250 kcal les jours où tu dors <7 h »).
- **Analyse par jour de semaine** : schémas de dépassement / meilleures séances par jour.
- **Calendrier de régularité (heatmap)** : vue mensuelle façon contributions (jours actifs / séances / jeûnes).
- **Objectifs hebdomadaires** : cibles « X séances / Y jours suivis / Z verres » + suivi.
- **Minuteur de repos entre séries** : chrono court (≈90 s) + bip, distinct du HIIT.
- **Cardio / pas en saisie manuelle** : marche/pas/vélo → alimente l'activité du jour.
- **Objectif d'eau intelligent** : recommandation ≈35 ml/kg selon le poids.
- **Raccourcis PWA** : app shortcuts (manifest) → + eau / + poids / démarrer jeûne depuis l'icône.

---

# 🧩 ROADMAP v5 — qualité, sport+, santé & sécurité (retenue 2026-06-08, à implémenter)

8 idées validées (non encore codées) :
- **Nutri-Score du panier** : score qualité A→E via OpenFoodFacts (`nutriscore_grade`), agrégé jour/semaine — manger mieux, pas que moins.
- **Articles libres (courses)** : ajouter des produits hors recettes à la liste de courses, cochables.
- **Records perso + 1RM** : meilleur lift par exercice, célébration de PR, estimation du max (Epley : `poids × (1 + reps/30)`) depuis `u.perfs`.
- **Programmes sport prédéfinis** : Full-body / Haut-Bas / Push-Pull-Legs au choix (alternative à la génération auto).
- **Suivi du cycle menstruel** (selon profil) : corrélé énergie/fringales/poids.
- **Sauvegarde de sécurité** : rappel d'export régulier / export auto (localStorage effaçable = risque de perte).
- **Verrou PIN** : protéger l'app sur appareil partagé.
- **Niveaux & XP / défis 30 jours** : gamification (XP par action, niveaux, défis).

---

# 🔧 ROADMAP v6 — affinages (retenue 2026-06-08, à implémenter)

5 idées validées (non encore codées) :
- **Macros auto d'une recette perso** : calculer calories/macros depuis les ingrédients (table nutritionnelle interne ou OFF) au lieu de la saisie manuelle.
- **Comparaison mois vs mois précédent** : variation de poids / moyennes sur 2 périodes.
- **Objectifs « process » (non-poids)** : assiduité 30 j, X séances/mois… (actions plutôt que balance).
- **Boissons variées dans l'hydratation** : thé/café comptent (partiellement) dans l'objectif d'eau.
- **Substitutions plus saines** : table de swaps par ingrédient (« crème → yaourt grec », −X kcal).

---

# 📦 ROADMAP v7 — distribution native & partage entre utilisateurs (cadrée le 2026-06-21, à implémenter)

> **Cadrage validé :** pas de comptes utilisateurs, pas de base de données centrale, pas de stockage serveur des données perso.
> **Hébergement du site de téléchargement + compteur (décidé 2026-06-21) : Vercel** (statique, gratuit, HTTPS/CDN automatiques) plutôt que Raspberry Pi — évite d'exposer le réseau domestique. Le Pi reste disponible pour d'autres usages perso.

| # | Option | Statut | Effort | Note |
|---|--------|--------|--------|------|
| 7.1 | Empaquetage Android (Capacitor) → `.apk`/`.aab` installable | ✅ | 🟡 | Build automatisé via **GitHub Actions** (`.github/workflows/build-android.yml`). APK debug livré en Release GitHub taguée `v1.0.0` : https://github.com/Rovel-Coder/fitlight/releases/download/v1.0.0/app-debug.apk |
| 7.2 | Accès iPhone | ✅ | 🟢 | Pas d'empaquetage natif (bloqué par Apple hors App Store) — résolu via la **PWA déjà existante** : app hébergée sur https://fitlight-app.vercel.app, installable depuis Safari (« Sur l'écran d'accueil »), fonctionne aussi hors-ligne |
| 7.3 | Site web de téléchargement de l'APK — hébergé sur **Vercel** | ✅ | 🟢 | En ligne : https://download-site-ashy.vercel.app — `/api/dl` redirige vers la Release GitHub, captures mobiles réelles intégrées |
| 7.4 | Compteur de téléchargements — **Vercel KV** | ✅ | 🟢 | Intégration **Redis (Upstash)** créée et liée ; comptage réel vérifié (`/api/stats?token=...` s'incrémente à chaque `/api/dl`) |
| 7.5 | Synchro directe entre 2 téléphones (P2P, sans stockage serveur) | ⬜ | 🔴 | WebRTC + signalisation légère (code/QR), le serveur de signalisation relaie la mise en relation mais ne stocke jamais les données échangées |
| 7.6 | Modernisation visuelle / attractivité | ⬜ | — | Périmètre à préciser séparément une fois 7.1-7.5 cadrés |

**Écarté pour cette roadmap :** comptes utilisateurs, sync cloud centralisée, tout stockage serveur des données de santé/poids/repas.

---

## ✅ ROADMAP v2 TERMINÉE (2026-06-08)
Les 6 phases / 8 fonctionnalités v2 sont implémentées et vérifiées. SW à `fitlight-v20`.

### Refonte UX — pages trop longues (2026-06-08)
Pages devenues très longues → découpées en **sous-onglets** + **compactage** mobile. Système générique `.sn`/`.snb`/`.snp` + `initSousOnglets(rootId, onShow)`.
- **Accueil** : Aujourd'hui (anneaux, raccourcis, habitudes, suggestions) / Tendances (stats, bilan+coach, graphe). `onShow('tendances')→dessinerCalChart`.
- **Calories** : Journal (résumé, macros, micros, alerte, journal) / Ajouter (suggestions, favoris, repas-types, formulaire, OFF) / Eau & jeûne (objectif kcal, hydratation, jeûne). Barre de date au-dessus, toujours visible.
- **Suivi** : Poids (objectif, poids, IMC/prévision, jalons, graphe, table) / Corps (mensurations, photos) / Bien-être. `onShow('poids')→dessinerGraphique`.
- **Profil** : Objectif (besoin + adaptatif) / Préférences (régimes, allergènes, sport, unités) / Progrès (progression, badges, habitudes) / Réglages (rappels, rapport, sauvegarde).
- Compactage mobile : marges/paddings réduits (h1, h3, subtitle, .profil-card, .card-grid, cartes). IDs tous conservés (JS intact, 0 doublon). SW `fitlight-v23`.

### Revue de cohérence (2026-06-08)
Audit complet : aucun débordement responsive (6 pages + 7 sous-onglets), aucune erreur console, 23 champs du modèle tous présents, design homogène. 2 correctifs de cohérence appliqués :
- **Alerte « apport faible »** : compare désormais l'apport (`conso`) au plancher de sécurité, plus le net — évite la sur-alerte les jours très sportifs.
- **Objectif adaptatif** : garde de fiabilité — si la dépense estimée < métabolisme de base (signe de sous-journalisation), on affiche un avertissement au lieu d'une cible trompeuse.
- Note cosmétique non corrigée : le titre d'accueil peut passer sur 3 lignes (emoji isolé) avec un prénom long.

---

## Priorités proposées (mon avis initial)

**Quick wins à fort impact (🟢, vite faits) :**
- 2.8 Hydratation · 4.4 IMC · 4.3 Mensurations · 1.5/7.2 Streak · 0.5 Mode clair/sombre

**Cœur de l'app (🟡, gros bénéfice) :**
- 5.3 Historique des jours · 3.3 Séance « faite » → calories · 2.7 Agrégation macros · 4.6 Courbe de tendance · 2.6 Base d'aliments (OpenFoodFacts)

**Ambitieux (🔴, à arbitrer) :**
- 0.3 PWA offline · 0.4 Sync cloud · 3.4 Minuteur HIIT · 6.7 Notifications

---

## Décisions validées

> (à remplir au fil de notre discussion)

| # | Option | Décision | Date |
|---|--------|----------|------|
| 0.3 | PWA installable + offline | ✅ Retenu (prioritaire) | 2026-06-08 |
| 0.R | Refonte mobile complète (onglets en bas, gestes, tactile) | ✅ Retenu — chantier à part | 2026-06-08 |
| 0.5 | Mode clair/sombre | ❌ Écarté (reste sombre) | 2026-06-08 |
| 0.2 | Découper en fichiers | ❌ Écarté (fichier unique) | 2026-06-08 |
| 0.4 | Sync cloud | ❌ Écarté (cadrage perso) | 2026-06-08 |
| 0.6 | i18n | ❌ Écarté (cadrage perso) | 2026-06-08 |
| 1.3 | Anneaux/jauges du jour | ✅ Retenu | 2026-06-08 |
| 1.5 | Streak (jours actifs) | ✅ Retenu | 2026-06-08 |
| 1.6 | Bilan hebdo | ✅ Retenu | 2026-06-08 |
| 1.7 | Raccourcis rapides | ✅ Retenu | 2026-06-08 |
| 1.4 | Conseil/citation du jour | ❌ Écarté | 2026-06-08 |
| 2.6 | Base aliments + scan code-barres (OpenFoodFacts) | ✅ Retenu | 2026-06-08 |
| 2.7 | Agrégation macros / jour | ✅ Retenu | 2026-06-08 |
| 2.8 | Suivi hydratation | ✅ Retenu | 2026-06-08 |
| 2.9 | Favoris / repas récents | ✅ Retenu | 2026-06-08 |
| 2.10 | Photos des recettes | ✅ Retenu | 2026-06-08 |
| 2.12 | Export planning/courses | ✅ Retenu | 2026-06-08 |
| 2.13 | Suggestions « reste X kcal » | ✅ Retenu | 2026-06-08 |
| 3.3 | Séance « faite » → calories brûlées | ✅ Retenu | 2026-06-08 |
| 3.4 | Minuteur / chrono HIIT | ✅ Retenu | 2026-06-08 |
| 3.5 | Liens vidéo par exercice (pas de GIF intégré) | ✅ Retenu (variante lien) | 2026-06-08 |
| 3.6 | Suivi des performances (charges/reps) | ✅ Retenu | 2026-06-08 |
| 3.7 | Historique / calendrier séances | ✅ Retenu | 2026-06-08 |
| 3.9 | Échauffement / retour au calme auto | ✅ Retenu | 2026-06-08 |
| 3.8 | Suivi des pas | ❌ Écarté (peu fiable en web) | 2026-06-08 |
| 4.3 | Mensurations | ✅ Retenu | 2026-06-08 |
| 4.4 | IMC + interprétation | ✅ Retenu | 2026-06-08 |
| 4.5 | Photos avant/après | ✅ Retenu | 2026-06-08 |
| 4.6 | Courbe de tendance lissée | ✅ Retenu | 2026-06-08 |
| 4.7 | Prévision date d'objectif | ✅ Retenu | 2026-06-08 |
| 4.8 | % masse grasse (manuel) | ✅ Retenu | 2026-06-08 |
| 5.3 | Historique des jours (calendrier) | ✅ Retenu | 2026-06-08 |
| 5.4 | Répartition par repas | ✅ Retenu | 2026-06-08 |
| 5.5 | Graphe calories semaine/mois | ✅ Retenu | 2026-06-08 |
| 5.6 | Alertes dépassement/plancher | ✅ Retenu | 2026-06-08 |
| 5.7 | Ajustement dynamique (sport → marge) | ✅ Retenu | 2026-06-08 |
| 6.5 | Objectifs alternatifs (maintien/masse/recomp) | ✅ Retenu | 2026-06-08 |
| 6.6 | Unités kg-lb / cm-in | ✅ Retenu | 2026-06-08 |
| 6.7 | Rappels / notifications (via PWA) | ✅ Retenu | 2026-06-08 |
| 7.1 | Badges / récompenses | ✅ Retenu | 2026-06-08 |
| 7.3 | Jalons intermédiaires | ✅ Retenu | 2026-06-08 |
| 7.5 | Partage image récap | ❌ Écarté | 2026-06-08 |

> Rappel : 1.5 (streak = 7.2) et 1.6 (bilan hebdo = 7.4) déjà retenus en catégorie 1.
