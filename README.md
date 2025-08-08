# QPower — site Web React

Ce dépôt contient le code source du site Web de **QPower**, une entreprise spécialisée dans l’électricité générale, l’installation de bornes de recharge et la pose de panneaux solaires. Le projet est construit avec [Vite](https://vitejs.dev/) et [React](https://react.dev/).

## Installation

1. Assurez‑vous d’avoir [Node.js](https://nodejs.org/) installé (version 14 ou supérieure).
2. Installez les dépendances :

   ```bash
   npm install
   ```

3. Lancez le serveur de développement :

   ```bash
   npm run dev
   ```

   Le site est accessible sur `http://localhost:5173`.

## Structure des pages

Le site se compose des pages suivantes :

- **Page d’accueil** : section héroïque avec slogan et liens vers les services et le simulateur de devis.
- **Services** : résumé des prestations et accès aux pages détaillées « Électricité générale », « Bornes de recharge » et « Panneaux solaires ».
- **Réalisations** : galerie de quelques projets réalisés par QPower.
- **Blog** : articles informatifs sur les économies d’énergie et l’actualité du secteur.
- **Simulateur de devis** : formulaire interactif permettant d’obtenir une estimation indicative.
- **Contact** : coordonnées de l’entreprise et formulaire de contact.

## Construction pour la production

Pour générer une version optimisée du site, exécutez :

```bash
npm run build
```

Les fichiers générés se trouvent dans le dossier `dist/`.
