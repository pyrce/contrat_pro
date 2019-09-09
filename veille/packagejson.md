Package.json



https://docs.npmjs.com/creating-a-package-json-file


C’est un fichier qui liste tous les paquets dont le projet dépend ainsi que plusieurs informations comme la version, l’auteur, la description…

L’avantage est qu’il est facilement reproductible et peut être partager avec d’autre développeur.
Structure du fichier :

  {
    "name": "my_package",
    "description": "",
    "version": "1.0.0",
    "main": "index.js",
    "scripts": {
      "test": "echo \"Error: no test specified\" && exit 1"
    },
    "repository": {
      "type": "git",
      "url": "https://github.com/ashleygwilliams/my_package.git"
    },
    "keywords": [],
    "author": "",
    "license": "ISC",
    "bugs": {
      "url": "https://github.com/ashleygwilliams/my_package/issues"
    },
    "homepage": "https://github.com/ashleygwilliams/my_package"
  }


Pour crée le fichier, il faut se mettre à la racine du projet et taper la commande nom init. On peut si l’ont souhaite spécifier la valeur par défaut de la commande: npm set init.author.email "example-user@example.com"
