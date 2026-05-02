Portfolio de John Doe - Développeur Web

Ce projet consiste en la création d'un site portfolio dynamique et responsive pour John Doe, futur développeur web en fin de formation.
L'objectif est de présenter son profil, ses services et ses réalisations de manière professionnelle pour le marché de l'emploi.


Page d'Accueil : doit contenus plusieurs pages .

 1 Page d'accueil

    o Une image de fond en pleine page (Hero),
    o Des balises h1 et h2 centrées horizontalement par rapport à l'image,
    o Un bouton "En savoir plus" (voir § La Modale),
    o Une section contenant la présentation de John Doe et la liste de ses compétences
      (progress bar Bootstrap).

 1 page de services

    o La présentation des offres de services que John Doe propose (sous forme de Card
      Bootstrap),
    o Chaque Card doit changer de couleur de fond (#efefef) et voir une légère ombre
      sur son pourtour au survol,
    o La disposition des Cards en fonction du media de visualisation est celui des
      maquettes fournies,

 1 page réalisations

    o Le portfolio de John Doe, avec un minimum de 6 projets, présentés sous forme
      de Card Bootstrap. Vous pouvez personnaliser et ajouter des réalisations si vous
      le souhaitez,
    o Chaque Card doit changer de couleur de fond (#efefef) et voir une légère ombre
      sur son pourtour au survol,
    o Le couleur de fond du bouton doit s'éclaircir légèrement au survol de celui-ci,
    o La disposition des Cards en fonction du media de visualisation est celui des
      maquettes fournies,

 1 page de contact

    o Un formulaire de contact intégrant les champs nom, courriel, numéro de
      téléphone, sujet et message (tous obligatoires).
    o Les coordonnées de John Doe : adresse, numéro de téléphone, mail et Google
      Map,

 1 page avec les mentions légales

    o L’éditeur du site,
    o L’hébergeur du site,
    o Les crédits, avec un lien vers le site de Pixabay pour les images et vers Flaticon
      pour le favicon,
    o La mise en page est réalisée en utilisant le composant accordéon de Bootstrap,
    o Cette page ne doit pas être indexée par les moteurs de recherche

Sur tout le site

 Le header

    o Le header est présent sur toutes les pages,
    o Il reprend le logo à gauche et la navigation vers les pages à droite. Sur mobile et
      tablette, la navigation s’affiche sous forme d’icône de « hamburger »,
    o L’élément actif doit pouvoir être affiché dans une autre couleur ou nuance
      (https://reactrouter.com/en/main/components/nav-link),
    o Le texte des hyperliens est affiché en majuscule, en utilisant des règles CSS ou
      une classe Bootstrap,

 Le footer

    o Le footer est identique sur toutes les pages,
    o Il contient des colonnes de largeur égale :
    o La 1ère avec le nom du développeur, son adresse, son numéro de téléphone et les
      icônes vers ses réseaux professionnels (Github, Twitter et LinkedIn),

        Les icônes doivent être cliquables et mener vers les comptes que John
        Doe possède sur les différents réseaux. Leur couleur doit s’éclaircir au
        survol,
        Les liens doivent s’ouvrir dans une nouvelle fenêtre et ne doivent pas être
        suivis pour le SEO,
        
    o La 2ème colonne reprend les liens vers les différentes pages,
    o La 3ème colonne reprend les liens vers les dernières réalisations (tant que les
      contenus de chaque réalisation ne sont pas disponibles, le lien se fera sur la page
      Portfolio,

 La modale

    o Une fenêtre modale doit permettre de présenter des éléments du profil GitHub
      de John Doe. Cette modale sera ouverte au clic sur le bouton "En savoir plus" du
      Hero de la page d'accueil,
    o Les informations sont disponibles ici : https://api.github.com/users/github-johndoe, Si vous préférez utiliser les informations de  votre propre profil, libre à vous,
    o Les informations ne doivent être récupérées qu'une fois, au moment du
      chargement de la page (pensez à utilise le hook useEffect)

Effets graphiques

Les effets suivants sont demandés (CSS) :

 Dans le menu du header

    o Le lien actif doit être mis en évidence (gras + souligné),
    o Les liens doivent être soulignés au survol,

 Cards

    o Une ombre doit être appliquée autour de la Card au survol,
    o La couleur de fond de la Card doit être modifiée au survol de la Card,

 Boutons

    o La couleur de fond des boutons doit s'assombrir au survol,

 Pied de page

    o Les images des réseaux sociaux doivent devenir blancs au survol,
    o Les liens du pied de page doivent passer en gras au survol.

N'hésitez pas à utiliser des transitions CSS. 
