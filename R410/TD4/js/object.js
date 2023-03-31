

const personne = {}
personne.nom = "Doe"
personne.prenom = "John"
personne.age = 30
personne.taille = 1.80

const x = personne
x.nom = "Deer"

console.log(personne)
console.log(x)


console.log(personne.nom)
console.log(personne['nom'])
console.log(personne[Object.keys(personne)[0]])

for (let key in personne) {
    console.log(key + " : " + personne[key])
}

personne.poids = 80
delete personne.poids

personne.sports = {}
personne.sports.sport1 = "football"
personne.sports.sport2 = "basketball"
personne.sports.sport3 = "tennis"


console.log(personne.sports.sport1)
console.log(personne.sports['sport1'])
console.log(personne.sports[Object.keys(personne.sports)[0]])


for (let i in personne.sports) {
    console.log(personne.sports[i])
}


personne.sports = [
    {nom: "football", equipement: "ballon"},
    {nom: "basketball", equipement: "panier"},
    {nom: "tennis", equipement: "raquette"}
]
for (let i in personne.sports) {
    console.log(personne.sports[i])
}

personne.qui = function () {
    console.log(this.nom + " " + this.prenom)
}

personne.quiMaj = function () {
    console.log(this.nom.toUpperCase() + " " + this.prenom.toUpperCase())
}



console.log(Object.values(personne))


console.log(JSON.stringify(personne))


personne.datenaissance = new Date()
console.log(JSON.stringify(personne))


personne.age = function () {
    return (new Date().getFullYear() - this.datenaissance.getFullYear()).toString()
}
console.log(JSON.stringify(personne))

personne.langue = "fr"
//rajouter un getter
Object.defineProperty(personne, "langue", {
    get: function () {
        return this._langue
},
    set: function (value) {
        this._langue = value
    }
})
