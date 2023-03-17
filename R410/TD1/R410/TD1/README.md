# M413 - TD1 : Réponses aux Questions

6.1

    1.La méthode est appelé quand le body de la page html charge/

    2.Document.getElementById("title")

    3.innerHTML
 
    4.const titles = document.getElementsByClassName("firstOrLast");
 
    5.if(titles.length % 2 == 0)

    6.document.getElementsByTagName("h2").item(0).innerHTML

    7.document.getElementsByTagName("h2").length-1

    8.En calculant la différence entre la date visé et la date actuelle
    
6.2

    1.La propriété innerHTML renvoie le contenu textuel de l'élément, y compris tous les espaces et les balises HTML internes.
    La propriété innerText renvoie le contenu textuel de l'élément et de tous ses enfants, sans l'espacement et les balises CSS cachées, à l'exception des éléments <script> et <style>.
    La propriété textContent renvoie le contenu textuel de l'élément et de tous ses descendants, avec l'espacement et le texte caché CSS, mais sans les balises.

6.3

    1.document.getElementsByName("author").item(0).content
    
    2.document.getElementsByName("author").item(-1).content
    
7.0
    
    1.  var d1 = new Date(dString);
        var d2 = new Date(Date.now());
	    var total_seconds = Math.abs(d1 - d2) / 1000;
	    var days_difference = Math.floor (total_seconds / (60 * 60 * 24));
    
    2.On utilise document.getElementById("dateUntil").addEventListener("click",getNbDays)
    

7.1

    1.la fonction setInterval est plus facile d'usage pour le besoin de faire une horloge.

8.1

    1.input.addEventListener('input', event => {});

    2.input.style.backgroundColor = 'white';

