Algorithme vorace pour résoudre le problème des stations du carburant :
 Sachant : 
	la distance maximale qu'une voiture peut rouler avec un plein de carburant.
	Le nombre des stations du carburant.
	Les distances entre les stations de carburant.
Description du problème:
Un véhicule doit se déplacer d'une ville A à une ville B en empruntant une route sur laquelle existe n stations-service {S1, S2 … Sn}. On connait les distances di séparant les différentes stations ainsi que le nombre de kilomètres M que peut parcourir le véhicule avec un plein de carburant. 
Ainsi          di représente le nombre de kilomètres séparant la station Si de la station Si+1, avec 1 =  i < n
			   d0 représente la distance séparant la ville A de la première station S1.
			   dn représente la distance séparant la dernière station Sn de la ville B. 
- Donnez un algorithme glouton (vorace) qui détermine la plus petite liste de stations-service où le véhicule doit s'arrêter pour faire le plein de carburant et atteindre la ville B. On supposera que le véhicule démarre de A avec  un plein de carburant déjà effectué. 
Références: http://zegour.esi.dz/Site%20secondaire/Mcp/Corriges/Cemd1-1112.htm