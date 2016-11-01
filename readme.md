Algorithme vorace pour r�soudre le probl�me des stations du carburant :
 Sachant : 
	la distance maximale qu'une voiture peut rouler avec un plein de carburant.
	Le nombre des stations du carburant.
	Les distances entre les stations de carburant.
Description du probl�me:
Un v�hicule doit se d�placer d'une ville A � une ville B en empruntant une route sur laquelle existe n stations-service {S1, S2 � Sn}. On connait les distances di s�parant les diff�rentes stations ainsi que le nombre de kilom�tres M que peut parcourir le v�hicule avec un plein de carburant. 
Ainsi          di repr�sente le nombre de kilom�tres s�parant la station Si de la station Si+1, avec 1 =  i < n
			   d0 repr�sente la distance s�parant la ville A de la premi�re station S1.
			   dn repr�sente la distance s�parant la derni�re station Sn de la ville B. 
- Donnez un algorithme glouton (vorace) qui d�termine la plus petite liste de stations-service o� le v�hicule doit s'arr�ter pour faire le plein de carburant et atteindre la ville B. On supposera que le v�hicule d�marre de A avec  un plein de carburant d�j� effectu�. 
R�f�rences: http://zegour.esi.dz/Site%20secondaire/Mcp/Corriges/Cemd1-1112.htm