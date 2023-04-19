# US 3 - Afficher le détail d'un film

- En tant qu'utilisateur :
  - Je veux avoir une vue sur le détail d'un film au clique de l'image
  - Dans le détail d'un film, je veux avoir afficher :
    - Le titre
    - La Description
    - Date de sortie
    - Genre
    - Nombre de vote + note sur 10
    - Budget du film

## Conception technique
- Créer le composant DetailFilm
- Ajouter la route pour afficher le détail d'un film
- Faire appel au service pour récupérer un film en se servant de la props `filmId` dans la route
- Gérer le responsive