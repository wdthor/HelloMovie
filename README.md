# hello-movie

- Sur ce projet, j'utilise `pnpm`, mais je pense que ça devrait marcher avec `npm` aussi

## Utiliser pnpm
- Cette manip est à faire, seulement si vous voulez utiliser `pnpm`
- Il faut avoir une version de `Node` au moins à `v16.13` minimum
- Il faut activer `corepack` : 
```bash
corepack enable
```

## Installation du projet
- Après avoir cloné le projet, faire `pnpm install` pour installer les dépendances
- Il faut créer un fichier `.env` à la racine du projet
- Dans ce fichier, créer une variable `THEMOVIEDB_API_KEY` avec la clé de l'api comme valeur  

Example :
```js
THEMOVIEDB_API_KEY="123456"
```
- Démarrer/Redémarrer l'appli
```bash
pnpm dev
```