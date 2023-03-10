/**
* 
* M413 - TD2
* * 
* 	@author Jean-Michel Bruneau
*	@copyright UCA - IUT -INFO
* 	@version	1.0
* 	@date			2021-01-31
*
*/
"use strict";

// M413 - TD2
let message = 'JavaScript is ok :)';
// alert( message);
console.log( message);

function onLoad() {
	console.log( 'Processus de chargement du document terminé…');
	//
	// All your JavaScript code goes here !
	//

}

// Toute les ressources de la page sont complètement chargées.
window.onload = onLoad;


function initSelect() {
	//change the color of h1 when clicked
	document.getElementById("title").addEventListener("click", function(){
		this.style.color = "red";
	});


}
for (let i = 0; i < 4; i++) {
	document.getElementsByTagName("h1").item(i).addEventListener("click", function(){
		this.style.color = "red";
	});
}