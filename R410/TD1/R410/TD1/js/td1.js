'use strict';

// M413 - TD1
let message = 'JavaScript is ok :)';
// alert( message);
console.log(message);

function onLoad() {
	console.log( 'In onLoad() function…');
	// Your JavaScript code goes here !


}
function defineHeading1() {
	document.getElementById("title").innerHTML = document.title

}

function defineHeading2(){
	document.getElementById("title").innerHTML = document.getElementsByTagName("h2").item(document.getElementsByTagName("h2").length-1).innerHTML
}

function  defineHeading3(){
	if (document.getElementsByTagName("h2").length == 0){
		document.getElementById("title").innerHTML = "Santiago Gille Philippe Joseph Marie"
	}
}

function defineHeading4(){
	const titles = document.getElementsByClassName("firstOrLast");

	if(titles.length % 2 == 0) {
		document.getElementById("title").innerHTML = titles.item(0).innerHTML
	}
	else if (titles.length == 0){
		document.getElementById("title").innerHTML = "Santiago Gille Philippe Joseph Marie"
	}
	else {
		document.getElementById("title").innerHTML = titles.item(titles.length-1).innerHTML
	}
}
function dateAlter(){
	 let date = new Date(document.lastModified)
	document.getElementById("update-date").innerHTML = "Date modified : " + date  + " by : " + document.getElementsByName("author").item(0).content
}

function getNbDays(){

	var dString = "July, 19, 2023";

	var d1 = new Date(dString);
	var d2 = new Date(Date.now());
	var total_seconds = Math.abs(d1 - d2) / 1000;
	var days_difference = Math.floor (total_seconds / (60 * 60 * 24));
	document.getElementById("dateUntil").innerHTML = "il reste "+ days_difference +" jours avant le "+ dString;
}

document.getElementById("dateUntil").addEventListener("click",getNbDays)



function updateClock1(){

	document.getElementById("clock").innerHTML = new Date(Date.now()).getHours() + ":" + new Date(Date.now()).getMinutes() +":" + new Date(Date.now()).getSeconds();

}

function updateClock2(){

	var currentDate = new Date();
	var time = currentDate.getHours() + ":" + currentDate.getMinutes() + ":" + currentDate.getSeconds();
	document.getElementById("clock2").innerHTML = time;
	setTimeout(updateClock2, 1000);
}
updateClock2()


window.setInterval(updateClock1,1000)

function startTime() {
	var today = new Date();
	var h = today.getHours();
	var m = today.getMinutes();
	var s = today.getSeconds();
	m = checkTime(m);
	s = checkTime(s);
	var string = h + ":" + m + ":" + s;
	var img = stringToImage(string);
	document.getElementById('graphic-clock').innerHTML =
	 img;
	var t = setTimeout(startTime, 1000);
}

function checkTime(i) {
	if (i < 10) {
		i = "0" + i
	}
	return i;
}


function stringToImage(s) {

	var temp = ""
	for (var i = 0; i < s.length; i++) {
		temp = temp + "<img src='" + img[s[i]] + "'/>"
	}

	return temp
}


var img = {
	"1": "assets/images/1.gif",
	"2": "assets/images/2.gif",
	"3": "assets/images/3.gif",
	"4": "assets/images/4.gif",
	"5": "assets/images/5.gif",
	"6": "assets/images/6.gif",
	"7": "assets/images/7.gif",
	"8": "assets/images/8.gif",
	"9": "assets/images/9.gif",
	"0": "assets/images/0.gif",
	":": "assets/images/minus.gif",
	"+" : "assets/images/plus.gif"
}

startTime()

const input = document.getElementById('textField');

input.addEventListener('input', event => {
	if (input.value === '') {
		input.style.backgroundColor = 'white';
	} else if(!isNaN(input.value)){
		input.style.backgroundColor = 'green';
	}
	else{
		input.style.backgroundColor = 'red';
	}
});
var i;
function toggleDropdown() {
	var dropdownList = document.getElementById("dropdown-list");
	var Ens = document.getElementById("infoGen");
	let img = document.createElement('img');
	img.src = 'assets/images/plus.gif';
	let text = Ens.innerHTML;
	Ens.innerHTML = '';
	Ens.appendChild(img);
	Ens.appendChild(document.createTextNode(text));
	if (dropdownList.style.display === "none") {
		dropdownList.style.display = "block";
		img.src = 'assets/images/minus.gif';
		Ens.innerHTML = '';
		Ens.appendChild(img);
		Ens.appendChild(document.createTextNode("Informations générales"));
	} else {
		dropdownList.style.display = "none";
		img.src = 'assets/images/plus.gif';
		Ens.innerHTML = '';
		Ens.appendChild(img);
		Ens.appendChild(document.createTextNode("Informations générales"));
	}
}

function toggleDropdown2() {
	var dropdownList = document.getElementById("dropdown-list2");
	var Ens = document.getElementById("Rec");
	let img = document.createElement('img');
	img.src = 'assets/images/plus.gif';
	let text = Ens.innerHTML;
	Ens.innerHTML = '';
	Ens.appendChild(img);
	Ens.appendChild(document.createTextNode(text));
	if (dropdownList.style.display === "none") {
		dropdownList.style.display = "block";
		img.src = 'assets/images/minus.gif';
		Ens.innerHTML = '';
		Ens.appendChild(img);
		Ens.appendChild(document.createTextNode("Recherche"));
	} else {
		dropdownList.style.display = "none";
		img.src = 'assets/images/plus.gif';
		Ens.innerHTML = '';
		Ens.appendChild(img);
		Ens.appendChild(document.createTextNode("Recherche"));
	}
}

function toggleDropdown3() {
	var dropdownList = document.getElementById("dropdown-list3");
	var Ens = document.getElementById("Ens");
	let img = document.createElement('img');
	img.src = 'assets/images/plus.gif';
	let text = Ens.innerHTML;
	Ens.innerHTML = '';
	Ens.appendChild(img);
	Ens.appendChild(document.createTextNode(text));
	if (dropdownList.style.display === "none") {
		dropdownList.style.display = "block";
		img.src = 'assets/images/minus.gif';
		Ens.innerHTML = '';
		Ens.appendChild(img);
		Ens.appendChild(document.createTextNode("Enseignants"));
	} else {
		dropdownList.style.display = "none";
		img.src = 'assets/images/plus.gif';
		Ens.innerHTML = '';
		Ens.appendChild(img);
		Ens.appendChild(document.createTextNode("Enseignants"));
	}
}

function search(searchPage) {
	searchPage = searchPage || document.getElementsByTagName('body')[0].childNodes;
	let searchInput = document.getElementById('search-input');
	let search = searchInput.value;
	let searchResult = [];
	for (let i = 0; i < searchPage.length; i++) {
		let node = searchPage[i];
		if (node.nodeType == Node.TEXT_NODE) {
			if (node.nodeValue.match(search)) {
				searchResult.push(node);
			}
		} else {
			let childNodes = node.childNodes;
			for (let j = 0; j < childNodes.length; j++) {
				let childNode = childNodes[j];
				if (childNode.nodeType == Node.TEXT_NODE) {
					if (childNode.nodeValue.match(search)) {
						searchResult.push(childNode);
					}
				}
			}
		}
	}
}

const count = parseInt(readline());
var inputs = readline().split(' ');
for (let i = 0; i < count; i++) {
	const n = parseInt(inputs[i]);
	//every odd number is ticked
	if (n % 2 == 1) {
		console.log('[x]'+n);
	}
}

// Write an answer using console.log()
// To debug: console.error('Debug messages...');



