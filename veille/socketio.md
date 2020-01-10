# socket io

<font size="5" color='mediumslateblue' face="monospace">Definition</font>

C'est une librairie de nodejs qui permet la communnication en temps réel entre le serveur et le navigateur.
il consiste en deux élément :
- un serveur nodejs
- une librairie javascript client(qui peut aussi être lance sur le serveur)


<font size="5" color='mediumslateblue' face="monospace">Fonctionalité</font>

- <font style="font-weight:bold" >fiabilité</font> : les connexions sont établies même en présence de proxies et de répartisseur de charges
- <font style="font-weight:bold" >support d'auto reconnexion </font>: un client va toujours tenté de se reconnectre au serveur jusqu'a que ce dernier soit disponible
- <font style="font-weight:bold" >detection de déconnxion </font>: un système qui permet au client et au serveur de connaitre quand l'autre n'est pas disponible 
- <font style="font-weight:bold" >support binaire </font>: toutes données serializable peuvent être emises
- <font style="font-weight:bold" >support multiplexing </font>: création de namespace possible qui agissent comme dees communications différentes
- <font style="font-weight:bold" >chambres </font>: creation de cannales, appelée chambre, afin d'envoyer un message à un groupe d'uitilisateur ou a un utilisateur sur plusieurs appareil.

<font size="5" color='blue'>Ce qu'il n'est pas</font>

Il n'est pas une implémentation de websocket.Même s'il utilise Websocket lorsque c'est possible, il ajoute des métadonnées à chaque paquet: le type, le namespace et l'id.