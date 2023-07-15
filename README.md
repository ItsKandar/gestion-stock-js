# Gestion du stock de télévisions d'un magasin d'électroménager

## DESCRIPTION
Le projet vise à développer une application web permettant la gestion du stock de télévisions d'un magasin d'électroménager. L'application offrira une interface utilisateur pour ajouter, modifier, supprimer et afficher les télévisions disponibles en stock. Elle utilisera les technologies AJAX et le DOM pour fournir une expérience utilisateur fluide et réactive.

## FONCTIONNALITES PRINCIPALES
1.	Affichage du stock de télévisions : L'application affichera la liste des télévisions disponibles en stock, avec leurs détails tels que la marque, le modèle, le prix, etc. Les télévisions seront affichées de manière dynamique à l'aide du DOM.

2.	Ajout de télévisions : Les utilisateurs pourront ajouter de nouvelles télévisions au stock en remplissant un formulaire. Les données saisies seront envoyées au serveur via une requête AJAX POST pour être enregistrées dans la base de données.

3.	Modification de télévisions : Les utilisateurs auront la possibilité de modifier les détails d'une télévision existante, tels que la marque, le modèle, le prix, etc ou appliquer une réduction. Les modifications seront également effectuées via des requêtes AJAX et les mises à jour seront répercutées en temps réel dans l'interface utilisateur.

4.	Suppression de télévisions : Les utilisateurs pourront supprimer une télévision du stock en cliquant sur un bouton de suppression correspondant. Une confirmation sera demandée avant de supprimer définitivement la télévision.

5.	Barème de prix : L'application proposera un barème de prix pour les différentes catégories de télévisions (par exemple, HD, Full HD, 4K, Smart TV, etc.). Les prix des télévisions ajoutées seront automatiquement vérifiés par rapport au barème pour s'assurer qu'ils correspondent à la catégorie appropriée.

6.	Notifications : L'application affichera des notifications de succès ou d'échec lors de l'ajout, de la modification ou de la suppression de télévisions. Les notifications seront également utilisées pour informer les utilisateurs en cas d'erreurs de validation ou d'autres problèmes.

## CONTRAINTES TECHNIQUES
•	Utilisation d'AJAX pour communiquer avec le serveur et effectuer des requêtes GET, POST et DELETE.
•	Utilisation du DOM pour manipuler dynamiquement les éléments HTML et afficher les données du stock.
•	Validation des données du formulaire côté client pour assurer des entrées valides avant l'envoi des requêtes au serveur.
•	Mise en œuvre d'un barème de prix pour vérifier la cohérence des prix des télévisions ajoutées.