SUPSI 2022-23  
Corso d’interaction design, CV427.01  
Docenti: A. Gysin, G. Profeta  

Elaborato 1: Marionetta digitale 

# Poldo_il_polpo
Autore: Sara Prada
[MediaPipe demo-ES6](https://saraprada.github.io/Poldo_il_polpo/)

## Introduzione e tema
Il progetto consiste nella realizzazione di un sistema di interfaccia che permette di generare una marionetta in realtà aumentata applicata sulla mano. La caratteristica particolare è l’utilizzo di “Media Pipe Hand Landmarker”: un algoritmo che permette alla webcam di riconoscere i punti principali dello scheletro della mano (keypoints) e di capirne i suoi movimenti. L’obiettivo concettuale è quello di realizzare una marionetta digitale che trasmette attraverso la grafica e l’interazione un suo carattere.

## Riferimenti progettuali
La marionetta in questione ha come riferimento progettuale il polpo. Nel progetto esso viene ritratto non realisticamente ma è studiato in modo da permettere una miglior interazione con la mano. I tentacoli sono cinque come le dita e su di essi si possono trovare cinque occhi. Per arricchire lo scenario e rimandare l’immaginazione all’habitat naturale dell’animale, nello sfondo sono state inserite delle bolle.

[<img src="doc/cards.gif" width="500" alt="Magic trick">]()

## Design dell'interfaccia e dell'interazione
“Poldo” il polpo e il suo contesto hanno una grafica molto astratta e geometrica composta da rettangoli e cerchi realizzati interamente attraverso i codici. La scelta di utilizzare forme rigide per rappresentare forme organiche è stata fatta per comunicare la presenza
del polpo creando però una forma più grafica e meno illustrata. I colori scelti sono associati al contesto: azzuro per il mare. In particolare, il magenta è stato scelto per far risaltare il protagonista dallo sfondo. La modalità di interazione è data dal tracking dei cinque
polpastrelli delle dita della mano destra (keypoints 4, 8, 12, 16, 20) che fungono da pupille del polpo. I movimenti delle pupille rendono il polpo un personaggio buffo, divertente e curioso.

## Tecnologia usata
La difficoltà tecnica di questo progetto consiste nel limitare il movimento delle pupille all’interno degli occhi. Il problema è stato risolto con una formula matematica applicata ad ogni pupilla che calcola la differenza tra la posizione X e Y degli occhi rispetto alla posizione X e Y delle dita, per poi trovare la distanza massima attraverso il teorema di pitagora e la distanza minima e infine definire le due costanti X e Y delle pupille.

```JavaScript
const image = new Image();
image.onload = () => {
	//limita pupilla

				//occhio0
				const occhio0X = 470
				const occhio0Y = 380
				const occhio0R = 80
				
				
				const xDiff = mignolo.x - occhio0X
				const yDiff = mignolo.y - occhio0Y	
				const distanza = sqrt (xDiff * xDiff + yDiff * yDiff)
				const d = min (distanza, occhio0R - 15 * 3.5)
				const pupillaX = occhio0X + xDiff / distanza * d
				const pupillaY = occhio0Y + yDiff / distanza * d
				
				ellipse(pupillaX, pupillaY, 15 , 15 )
};
image.src = url;
```