# Promise

L'objet Promise (pour « promesse ») est utilisé pour réaliser des traitements de façon asynchrone. Une promesse représente une valeur qui peut être disponible maintenant, dans le futur voire jamais.

<font color="black"> Promise dans expression</font>

Express ne supporte pas les promises ni les fonction asynchrone dans les middleware et les routes.

<font color="black"> Solutions</font>

## 1 Faire en sorte que le middlerware appelle next()

## 2 Utiliser async/await dans les fonctions du middlerware avec un try/catch

Une fonction async peut contenir une expression await qui interrompt l'exécution de la fonction asynchrone et attend la résolution de la promesse passée Promise. La fonction asynchrone reprend ensuite puis renvoie la valeur de résolution

## 3 Si on utilise le chainement de fonction, utiliser la fonction catch() pour gérer les erreurs
