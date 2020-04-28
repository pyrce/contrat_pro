# jwt

Json web token. C'est une façon de transmettre des informations de manière sécurisé sous forme
d'un objet json. deux type de token:

- Signné: vérifié l'intégrité du contenue
- chiffré : cache le contenue des autres
  On s'en sert pour de l'aurthorisation et pour de l'échanges d'informations.

# Accessibilité web

L’accessibilité du web signifie que les sites web, les outils et les technologies sont conçus et développés de façon à ce que les personnes handicapées puissent les utilise. Il peut sagir :

- auditif
- cognitif
- neurologique
- physique
- de la parole
- visuel

Mais il peut s'agir de personnes sans handicaps :

- les personnes utilisant un téléphone mobile, une montre connectée, une télévision connectée, et autres périphériques ayant des petits écrans, différents modes de saisie, etc.
  - les personnes âgées dont les capacités changent avec l’âge
  - les personnes ayant un « handicap temporaire » tel qu’un bras cassé ou perdu leurs lunettes
  - les personnes ayant « une limitation situationnelle » comme être en plein soleil ou dans un environnement où elles ne peuvent pas écouter l’audio
  - les personnes utilisant une connexion internet lente ou ayant une bande passante limitée ou onéreuse

#W3C

World Wide Webb Consortium. Dirigé par tim erners Lee, C'est un organisme de standardisation chargé de promouvoir la compatibilité des technologies web (html, json, xml...)

# Test unitaires

est une procédure permettant de vérifier le bon fonctionnement d'une partie précise d'un logiciel ou d'une portion d'un programme. Onn défintit une valeur d'entré et de sortie, puis on verifie que la partie testé renvoie bien la bonne valeur.

# Mochajs

Librairie nodejs qui permet de faire de multitude de test asynchrone dans node et dans le navigateur.

# Promise

Une promesse est un objet qui représente la complétion ou l'échec d'une opération asynchrone auquel on attache des callbacks plutôt que de passer des callbacks à une fonction.

À la différence des imbrications de callbacks, une promesse apporte certaines garanties :

- Les callbacks ne seront jamais appelés avant la fin du parcours de la boucle d'évènements JavaScript courante
- Les callbacks ajoutés grâce à then seront appelés, y compris après le succès ou l'échec de l'opération asynchrone
- Plusieurs callbacks peuvent être ajoutés en appelant then plusieurs fois, ils seront alors exécutés l'un après l'autre selon l'ordre dans lequel ils ont été insérés.
