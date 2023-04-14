# TODO list

## premiere version
ameliorer la navigation:
- retour en arriere si possible[DONE]
- retour a l'accueil sur le login et le signin page[DONE]
- supprimer des commentaires et des pubs[DONE]

différence entre le mode dev et le mode production:
- les cookies[NOTYET]

[Remarque] coté back:
- supprimer toutes les pubs d'un joueur quand on supprime son compte[DONE]
- supprimer tous les commentaires relatif a une publication qu'on supprime[DONE]
- ordonner les publications et les commentaires par ordre de création[DONE]


## deuxieme version
- creer un state redux pour les pubs
  - resolvant ainsi le systeme de likes et de suppression
- resoudre le probleme de commentaires
- annuler toute fonctionnalité des pubs supprimées
- résoudre le problème de state du commentaire [DONE] il a suffit de donner une id unique pour chaque commentaire
- login auto apres le signin