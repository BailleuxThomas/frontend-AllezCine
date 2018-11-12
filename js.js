// constructor film
function film(title, src, alt, date, genre, price, productor, actor, story, ytsrc) {
	this.title = title;
	this.src = src;
	this.alt = alt;
	this.date = date;
	this.genre = genre;
	// faudras rajouter pour tous a partir d'ici !
	this.price = price;
	this.productor = productor;
	this.actor = actor;
	this.story = story;
	this.ytsrc = ytsrc;
}
array = []
array.push(
	new film("Batman", "batmanmovie-2017-comedie", "batman", "13 aoÃ»t 2008", "comedie", 20, "George Clooney, Christopher Nolan", "Christian Bale, Heath Ledger", "Dans ce nouveau volet, Batman augmente les mises dans sa guerre contre le crime. Avec l'appui du lieutenant de police Jim Gordon et du procureur de Gotham, Harvey Dent, Batman vise Ã  Ã©radiquer le crime organisÃ© qui pullule dans la ville. Leur association est trÃ¨s efficace mais elle sera bientÃ´t bouleversÃ©e par le chaos dÃ©clenchÃ© par un criminel extraordinaire que les citoyens de Gotham connaissent sous le nom de Joker.", "https://www.youtube.com/embed/f64h6dc2rqM"),
	new film("Hostel", "hostel-2005-thriller", "hostel", "1 mars 2006", "thriller", 18, "Eli Roth", "Jay Hernandez, Derek Richardson, Eythor Gudjonsson", "Deux Ã©tudiants amÃ©ricains, Paxton et Josh, ont dÃ©cidÃ© de dÃ©couvrir l'Europe avec un maximum d'aventures et de sensations fortes. Avec Oli, un Islandais qu'ils ont rencontrÃ© en chemin, ils se retrouvent dans une petite ville de Slovaquie dans ce qu'on leur a dÃ©crit comme le nirvana des vacances de dÃ©bauche : une propriÃ©tÃ© trÃ¨s spÃ©ciale, pleine de filles aussi belles que faciles... Natalya et Svetlana sont effectivement trÃ¨s cools... un peu trop, mÃªme. Paxton et Josh vont vite se rendre compte qu'ils sont tombÃ©s dans un piÃ¨ge. Ce voyage-lÃ  va les conduire au bout de l'horreur... ", "https://www.youtube.com/embed/cVBdQiUHhZI"),
	new film("Inception", "inception-2010-scifi", "inception", "2010", "scifi", 19, "", "", "", "https://www.youtube.com/embed/B4nIVh1yvvc"),
	new film("Intouchables", "intouchables-2011-comedie", "intouchables", "2011", "comedie", 19, "", "", "", "https://www.youtube.com/embed/EsaX5kltRcA"),
	new film("Le patient anglais", "lepatientanglais-1996-dramatique", "lepatientanglais", "1996", "dramatique", 15, "", "", "", "https://www.youtube.com/embed/xImomcZczRY"),
	new film("Les deux tours", "lesdeuxtours-2002-aventure", "lesdeuxtours", "2002", "action", 17, "", "", "", "https://www.youtube.com/embed/c9blKqmyeV4"),
	new film("Seven", "seven-1995-thriller", "seven", "1995", "thriller", 19, "", "", "", "https://www.youtube.com/embed/BLY4treE0XU"),
	new film("Shutterisland", "shutterisland-2010-thriller", "shutterisland", "2010", "thriller", 16, "", "", "", "https://www.youtube.com/embed/inAFW2CluQ4"),
	new film("Starwars Empire", "starwarsempire-1980-scifi", "starwarsempire", "1980", "action", 21, "", "", "", "https://www.youtube.com/embed/Z7B0vfamFTE"),
	new film("Survivestyle 5", "Survivestyle5-2004-comedie", "Survivestyle5", "2004", "comedie", 13, "", "", "", "https://www.youtube.com/embed/LEH7nDkiPEk"),
	new film("Swiss Army Man", "swissarmyman-2016-comedie", "swissarmyman", "2016", "comedie", 17, "", "", "", "https://www.youtube.com/embed/QHkKEBY13A0"),
	new film("The Fall", "thefall-2006-dramatique", "thefall", "2006", "action", 17, "", "", "", "https://www.youtube.com/embed/MPBk0EZTJWw"),
	new film("What We Do In The Shadows", "WhatWeDoInTheShadows-2014-comedie", "WhatWeDoInTheShadows", "2014", "comedie", 16, "", "", "", "https://www.youtube.com/embed/IAZEWtyhpes"),
	new film("Zoolander", "zoolander-2001-comedie", "zoolander", "2001", "comedie", 17, "", "", "", "https://www.youtube.com/embed/SNixRYY7HBY"),
);
console.log(array)
// array = tableau sur base constructeur film
// function pour afficher selon la catÃ©gorie 
function selectCat(cat) {
	document.querySelector(".featuredMovies>.movieContainer").innerHTML = ""
	for (let i = 0; i < 6; i++) {
		element = array[i]
		if (array[i].genre == cat) {
			document.querySelector(".featuredMovies>.movieContainer").innerHTML += afficheMaker(element)
		}
		else if (cat == "all") {
			document.querySelector(".featuredMovies>.movieContainer").innerHTML += afficheMaker(element)
		}
	}
}
// function pour afficher plus de rÃ©sultat

function affReduce() {
	document.querySelector(".featuredMovies>.movieContainer").innerHTML = ""
	for (let i = 0; i < 6; i++) {
		element = array[i]
		document.querySelector(".featuredMovies>.movieContainer").innerHTML += afficheMaker(element)
	}
	document.querySelector(".featuredMovies>div>.more-movie").innerHTML = "PLUS DE FILMS"
	document.querySelector(".featuredMovies>div>.more-movie").setAttribute("onClick", "affMore()")
}
function affMore() {
	for (let i = 0; i < 6; i++) {
		newList = []
		val = document.querySelectorAll(".featuredMovies>.movieContainer>.affiche>.afficheFooter>.title")
		val.forEach(elem => {
			newList.push(elem.innerHTML)
		});
		let element = array.find((x, y) => {
			return x.title != newList[y]

		})
		console.log(element)
		document.querySelector(".featuredMovies>.movieContainer").innerHTML += afficheMaker(element)

		if (val.length + 1 == array.length) {
			document.querySelector(".featuredMovies>div>.more-movie").innerHTML = "MOINS DE FILMS"
			document.querySelector(".featuredMovies>div>.more-movie").setAttribute("onClick", "affReduce()")

		}
		console.log(document.querySelector(".featuredMovies>div>.more-movie").innerHTML)
		console.log(val.length)
		console.log(array.length)

	}
}
// affiche constructeur JS 
function afficheMaker(object) {
	return `
				<figure class="affiche col-md-2 col-5">
					<img src="img/${object.src}.jpg" alt="${object.alt}" data-toggle="modal" data-target="#exampleModalCenter">
					<div class=afficheFooter>
					  <p class="title">${object.title}</p>
					  <p class="date">${object.date}</p>
					  <p class="genre">${object.genre}</p>
					</div>
				  </figure>
				  `

}

i = 0;
function nextMovie() {
	console.log(i)
	if(i == array.length-1){

	} else {
		i++;
		document.querySelector(".moviePlay>.movie>.youtubeMovie>iframe").src = `${array[i].ytsrc}`
		document.querySelector(".moviePlay>.infoMovie>ul>li.title").innerHTML = `${array[i].title}`
		document.querySelector(".moviePlay>.infoMovie>ul>li>p.story").innerHTML = `${array[i].story.slice(0, 100)}...`
		document.querySelector(".moviePlay>.infoMovie>ul>li>p.date").innerHTML = `${array[i].date}`
		document.querySelector(".moviePlay>.infoMovie>ul>li>p.genre").innerHTML = `${array[i].genre}`
		document.querySelector(".moviePlay>.infoMovie>ul>li>p.price").innerHTML = `${array[i].price}`
	}
}

function beforeMovie() {
	console.log(i)
	if(i == array.length || i == 0){
		i = 0;
	} else {
		i--;
		document.querySelector(".moviePlay>.movie>.youtubeMovie>iframe").src = `${array[i].ytsrc}`
		document.querySelector(".moviePlay>.infoMovie>ul>li.title").innerHTML = `${array[i].title}`
		document.querySelector(".moviePlay>.infoMovie>ul>li>p.story").innerHTML = `${array[i].story.slice(0, 100)}...`
		document.querySelector(".moviePlay>.infoMovie>ul>li>p.date").innerHTML = `${array[i].date}`
		document.querySelector(".moviePlay>.infoMovie>ul>li>p.genre").innerHTML = `${array[i].genre}`
		document.querySelector(".moviePlay>.infoMovie>ul>li>p.price").innerHTML = `${array[i].price}`
	}
}



