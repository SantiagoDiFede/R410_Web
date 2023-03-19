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
	initSelect();
	loadDiv();
	//
	// All your JavaScript code goes here !
	//

}

// Toute les ressources de la page sont complètement chargées.
window.onload = onLoad;

function initSelect() {

	document.addEventListener("click", select);
	document.addEventListener("click", select2);



}


function select(event) {

	let target = event.target;
	if(target === undefined){
		return;
	}
	else if(target.style.backgroundColor === "red"){
		target.style.backgroundColor = "white";
	}
	else {
		target.style.backgroundColor = "red";
	}
}


function loadDiv(){
	let div = document.createElement("div");

	div.setAttribute("id", "insert-div");

	let select = document.createElement("select");

	select.setAttribute("id", "insert-select");

	select.setAttribute("name", "type");

	let option1 = document.createElement("option");
	option1.setAttribute("value", "div");
	option1.innerHTML = "div";
	let option2 = document.createElement("option");
	option2.setAttribute("value", "p");
	option2.innerHTML = "p";
	let option3 = document.createElement("option");
	option3.setAttribute("value", "span");
	option3.innerHTML = "span";



	select.appendChild(option1);
	select.appendChild(option2);
	select.appendChild(option3);
	div.appendChild(select);
	let input = document.createElement("input");
	input.setAttribute("type", "text");
	input.setAttribute("id", "insert-text");
	input.setAttribute("value", "My New Text Element");
	div.appendChild(input);

	let button = document.createElement("button");
	button.setAttribute("type", "button");
	button.setAttribute("id", "insert-button");
	button.setAttribute("onclick", "insertElement(this)");
	button.innerHTML = "Insert Element";
	div.appendChild(button);


	document.body.insertBefore(div, document.body.firstChild);
}

function select2(event){
	let target = event.target;
	if(target == undefined){
		return;
	}
	debugger;
	let targetId = target.id;
	if(target.id === "insert-div" || target.parentNode.id === "insert-div"){
		return;
	}
	target.style.backgroundColor = "blue";


	//make the background of all other elements not blue except the one clicked
	let allElements = document.getElementsByTagName("*");
	for(let i = 0; i < allElements.length; i++){
		if(allElements[i] == undefined){
			continue;
		}
		if(allElements[i] != target){
			allElements[i].style.backgroundColor = "white";
		}

	}
}

function insertElement(target){
	let select = document.getElementById("insert-select");
	let text = document.getElementById("insert-text");
	let element = document.createElement(select.value);
	element.innerHTML = text.value;
	target.parentNode.insertBefore(element, target.nextSibling);
}


function search() {
}
