let capture
let detector

let bolle = [ ] 
let posx = 30
let posy
const n_bolle = 100


async function setup() {
  
	createCanvas(windowWidth, windowHeight)

	capture = createCapture(VIDEO)
	capture.size(windowWidth, windowHeight)
	capture.hide()
	
	console.log("Carico modello...")
	detector = await createDetector()
	console.log("Modello caricato.")

	for(let x = 0; x<= n_bolle; x++) {
		posx = random(width)
		posy = random(height)

		bolle.push(posx,posy)
		console.log(posx,posy)

	}
	console.log(bolle)
	
}

async function draw() {

	translate (width/10, height/34)
	scale (2)
	background(127, 208, 234)

	// noStroke()
	// fill(255, 10)
	// rect(0, 0, width, height) 

	// Disegna la webcam sullo stage, a specchio
	// push()
	// scale(-1, 1)
	// image(capture, -640, 0)
	// pop()
	
	for(let x = 0; x<= bolle.length; x++) {
		movex = bolle[x] 
		movey = bolle[x + 1] 
		fill (187, 241, 255)
		ellipse (movex, bolle[x + 1], 20, 20)
		fill (255)
		ellipse(movex + 5, bolle[x + 1] + 5, 5, 5)
	}



	//corpo
	noStroke()
	fill(255, 0, 127)
	rect (297, 100, 45, 150)
	rect (297, 250, 90, 45)
	rect (385, 295, 45, -134.5)
	rect (340, 295, 45, 90)
	rect (385, 160, 80, 80)
	rect (340, 340, 130, 80)
	rect (297, 250, -60, 45)
	rect (210, 295, 45, -155)
	rect (171 , 140, 66, 79)
	rect (252, 295, 45, 70)
	rect (224, 320, 73, 80)
	
	//occhi
	strokeWeight(1)

	fill(255, 255, 255)
	stroke (0, 0, 0)
	
	ellipse (320, 100, 80, 80)
	fill(255, 255, 255)
	stroke (0, 0, 0)
	
	ellipse (180, 180, 80, 80)
	fill(255, 255, 255)
	stroke (0, 0, 0)
	
	ellipse (460, 200, 80, 80)
	fill(255, 255, 255)
	stroke (0, 0, 0)
	
	ellipse (230, 360, 80, 80)
	fill(255, 255, 255)
	stroke (0, 0, 0)
	
	ellipse (470, 380, 80, 80)
	fill(255, 255, 255)
	stroke (0, 0, 0)
	
	// strokeWeight(10)
	// line(295, 273, 345, 273) //.strokeWeight(10)

	//bolle
	noStroke ()



	// fill (187, 241, 255)
	// ellipse (70, 440, 20, 20)
	// fill (255)
	// ellipse(72, 443, 5, 5)
	
	// fill (187, 241, 255)
	// ellipse (20, 100, 20, 20)
	// fill (255)
	// ellipse(18, 105, 5, 5)
	
	// fill (187, 241, 255)
	// ellipse (600, 50, 20, 20)
	// fill (255)
	// ellipse(604, 50, 5, 5)
	
	// fill (187, 241, 255)
	// ellipse (600, 450, 20, 20)
	// fill (255)
	// ellipse(598, 450, 5, 5)
	
	// fill (187, 241, 255)
	// ellipse (760, 240, 20, 20)
	// fill (255)
	// ellipse(757, 245, 5, 5)
	
	// fill (187, 241, 255)
	// ellipse (560, 300, 20, 20)
	// fill (255)
	// ellipse(564, 297, 5, 5)
	
	// fill (187, 241, 255)
	// ellipse (250, 30, 20, 20)
	// fill (255)
	// ellipse(247, 28, 5, 5)
	
	// fill (187, 241, 255)
	// ellipse (70, 240, 20, 20)
	// fill (255)
	// ellipse(247, 28, 5, 5)
	
	
	
	
	
	
	


	if (detector && capture.loadedmetadata) {
		const hands = await detector.estimateHands(capture.elt, { flipHorizontal: true })

		
		for (let j=0; j<hands.length; j++) {
			const hand = hands[j]
			const handedness = hand.handedness // Left : Right
			// for (let i=0; i<hand.keypoints.length; i++) {
			// 	const k = hand.keypoints[i]
			// 	// const name = k.name.split('_')[0].toString().toLowerCase()				
			// 	noStroke()
			// 	fill(random(255), random(255), random(255))
			// 	ellipse(k.x, k.y, 12)
			// }

			noStroke()
			fill(0,0,0) 
			//for (let i=0; i<5; i++) {
				//const k = hand.keypoints[i * 4 + 4]
				//ellipse(k.x, k.y, 20, 20)
				

				


				if (hands.length >= 1) {
					const manoA = hands[0]

				const mignolo = manoA.keypoints [20]
				const anulare = manoA.keypoints [16]
				const medio = manoA.keypoints [12]
				const indice = manoA.keypoints [8]
				const pollice = manoA.keypoints [4]
				

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
				
				//occhio1
				const occhio1X = 460
				const occhio1Y = 200
				const occhio1R = 80

				const xDiff1 = anulare.x - occhio1X
				const yDiff1 = anulare.y - occhio1Y	
				const distanza1 = sqrt (xDiff1 * xDiff1 + yDiff1 * yDiff1)
				const d1 = min (distanza1, occhio1R - 15 * 3.5)
				const pupillaX1 = occhio1X + xDiff1 / distanza1 * d1
				const pupillaY1 = occhio1Y + yDiff1 / distanza1 * d1
				
				ellipse(pupillaX1, pupillaY1, 15 , 15 )

				//occhio2
				const occhio2X = 320
				const occhio2Y = 100
				const occhio2R = 80

				const xDiff2 = medio.x - occhio2X
				const yDiff2 = medio.y - occhio2Y	
				const distanza2 = sqrt (xDiff2 * xDiff2 + yDiff2 * yDiff2)
				const d2 = min (distanza2, occhio2R - 15 * 3.5)
				const pupillaX2 = occhio2X + xDiff2 / distanza2 * d2
				const pupillaY2 = occhio2Y + yDiff2 / distanza2 * d2
				
				ellipse(pupillaX2, pupillaY2, 15 , 15)

				//occhio3
				const occhio3X = 180
				const occhio3Y = 180
				const occhio3R = 80

				const xDiff3 = indice.x - occhio3X
				const yDiff3 = indice.y - occhio3Y	
				const distanza3 = sqrt (xDiff3 * xDiff3 + yDiff3 * yDiff3)
				const d3 = min (distanza3, occhio3R - 15 * 3.5)
				const pupillaX3 = occhio3X + xDiff3 / distanza3 * d3
				const pupillaY3 = occhio3Y + yDiff3 / distanza3 * d3
				
				ellipse(pupillaX3, pupillaY3, 15 , 15)

				//occhio4

				const occhio4X = 230
				const occhio4Y = 360
				const occhio4R = 80

				const xDiff4 = pollice.x - occhio4X
				const yDiff4 = pollice.y - occhio4Y	
				const distanza4 = sqrt (xDiff4 * xDiff4 + yDiff4 * yDiff4)
				const d4 = min (distanza4, occhio4R - 15 * 3.5)
				const pupillaX4 = occhio4X + xDiff4 / distanza4 * d4
				const pupillaY4 = occhio4Y + yDiff4 / distanza4 * d4
				
				ellipse(pupillaX4, pupillaY4, 15 , 15)

				


				
				
				
				
				//metodo Gysin
				//const xDiff = mignolo.x - occhio0X
				//const yDiff = mignolo.y - occhio0Y
				//const distanza = sqrt (xDiff * xDiff + yDiff * yDiff)
				//const d = min (distanza, occhio0R - 15)
				//const pupillaX = occhio0X + xDiff / distanza * d
				//const pupillaY = occhio0X + xDiff / distanza * d

				//ellipse(pupillaX, pupillaY, 15 * 2, 15 * 2)

				// altro metodo
				//const pupilla0X = occhio0X + xDiff * 0.15
				//const pupilla0Y = occhio0Y + yDiff * 0.15
				//ellipse (pupilla0X, pupilla0Y, 15, 15)


				
				
				//pupille
				//ellipse (mignolo.x, mignolo.y, 15, 15)
				//ellipse (anulare.x, anulare.y, 15, 15)
				//ellipse (medio.x, medio.y, 15, 15)
				//ellipse (indice.x, indice.y, 15, 15)
				//ellipse (pollice.x, pollice.y, 15, 15)

				
				


				}
				
			
			
			
		}		
	}
}

function windowResized() {
	resizeCanvas(windowWidth, windowHeight)
}


async function createDetector() {
	// Configurazione Media Pipe
	// https://google.github.io/mediapipe/solutions/hands
	const mediaPipeConfig = {
		runtime: "mediapipe",
		modelType: "full",
		maxHands: 1,
		solutionPath: `https://cdn.jsdelivr.net/npm/@mediapipe/hands`,
	}
	return window.handPoseDetection.createDetector( window.handPoseDetection.SupportedModels.MediaPipeHands, mediaPipeConfig )
}
