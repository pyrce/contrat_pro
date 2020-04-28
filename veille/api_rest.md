# Mongodb vs mysql

mysql :

- table structuré comportant les mêmes types de données et même quantité de valeurs
- Joitures obligatoires
- Langage sql pour manipuler les données

Mongodb :

- données organisé sous forme de documennts.
- Pas la même quantité et de type de valeurs
- utilise sons propre langage pour manipuler les donées. Pour les extraire, il utilise les librairies.

# MCD

Modèle Conceptuel de données. Outil qui permet de modélisé les donées sous forme d'entité.

- 1 rectangle = 1 entite
- Les propriétés (la liste des données de l’entité) ;
- Les relations qui expliquent et précisent comment les entités sont reliées entre elles (les ovales avec leurs « pattes » qui se rattachent aux entités) ;
- Les cardinalités (les petits chiffres au dessus des « pattes »).

On peut ainsi grâce au MCD, valider et/ou précisé les règles qui s'apliqueront dans notre base de donées

# cli

Command ligne interface( interface de ligne de commande) est unne interface en modde test qui permet à l'homme de communuquer avec la machine ou de lancer es logiciels.

# ORM

Object relational mapping (mapping d'obbjet relationel), interface qui se met entre le code et la base de donées. Il définit des correspondances entre les schémas de la base de données et les classes du programme applicatif.

# API REST

Une api rest se caractérise par:

- Sans etat: chaque requête doit contenir l’ensemble des informations nécessaires à son traitement.

- une url par ressources : par exemples GET /utilisateurs pour lister tous les uilisateurs, POST /utilisateurs ajoute un utilisateurs, PUT /utilisateurs/{id} met à jour l'utilisateurs, DELETE /utilisateurs/{id} supprime un tuilisateurs.

- Pour chaque réponse renvoyée, un code doit être envoyé, ce code correspond à l’état de la requête et dépend de la réussite ou non de celle-ci.

- système de cache: un client doit pouvoir garder les innformations sans avoir a redemander au serveur
