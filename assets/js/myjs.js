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
	new film("Batman", "batmanmovie-2017-comedie", "batman", "13 août 2008", "comedie", 20, "George Clooney, Christopher Nolan", "Christian Bale, Heath Ledger", "Dans ce nouveau volet, Batman augmente les mises dans sa guerre contre le crime. Avec l'appui du lieutenant de police Jim Gordon et du procureur de Gotham, Harvey Dent, Batman vise à éradiquer le crime organisé qui pullule dans la ville. Leur association est très efficace mais elle sera bientôt bouleversée par le chaos déclenché par un criminel extraordinaire que les citoyens de Gotham connaissent sous le nom de Joker.", "https://www.youtube.com/embed/f64h6dc2rqM"),
	new film("Hostel", "hostel-2005-thriller", "hostel", "1 mars 2006", "thriller", 18, "Eli Roth", "Jay Hernandez, Derek Richardson, Eythor Gudjonsson", "Deux étudiants américains, Paxton et Josh, ont décidé de découvrir l'Europe avec un maximum d'aventures et de sensations fortes. Avec Oli, un Islandais qu'ils ont rencontré en chemin, ils se retrouvent dans une petite ville de Slovaquie dans ce qu'on leur a décrit comme le nirvana des vacances de débauche : une propriété très spéciale, pleine de filles aussi belles que faciles... Natalya et Svetlana sont effectivement très cools... un peu trop, même. Paxton et Josh vont vite se rendre compte qu'ils sont tombés dans un piège. Ce voyage-là va les conduire au bout de l'horreur... ", "https://www.youtube.com/embed/cVBdQiUHhZI"),
	new film("Inception", "inception-2010-scifi", "inception", "2010", "scifi", 19, "", "", "", "https://www.youtube.com/embed/B4nIVh1yvvc"),
	new film("Intouchables", "intouchables-2011-comedie", "intouchables", "2011", "comedie", 19, "", "", "", "https://www.youtube.com/embed/EsaX5kltRcA"),
	new film("Le patient anglais", "lepatientanglais-1996-dramatique", "lepatientanglais", "1996", "dramatique"),
	new film("Les deux tours", "lesdeuxtours-2002-aventure", "lesdeuxtours", "2002", "action"),
	new film("Seven", "seven-1995-thriller", "seven", "1995", "thriller"),
	new film("Shutterisland", "shutterisland-2010-thriller", "shutterisland", "2010", "thriller"),
	new film("Starwars Empire", "starwarsempire-1980-scifi", "starwarsempire", "1980", "action"),
	new film("Survivestyle 5", "Survivestyle5-2004-comedie", "Survivestyle5", "2004", "comedie"),
	new film("Swiss Army Man", "swissarmyman-2016-comedie", "swissarmyman", "2016", "comedie"),
	new film("The Fall", "thefall-2006-dramatique", "thefall", "2006", "action"),
	new film("What We Do In The Shadows", "WhatWeDoInTheShadows-2014-comedie", "WhatWeDoInTheShadows", "2014", "comedie"),
	new film("Zoolander", "zoolander-2001-comedie", "zoolander", "2001", "comedie"),
);

console.log(array)
valTaille = "affiche col-md-2 col-5";
// array = tableau sur base constructeur film
// function pour afficher selon la catégorie 
function selectCat(cat) {
	document.querySelector(".featuredMovies>.movieContainer").innerHTML = ""
	x = 0;
	for (let i = 0; i < array.length; i++) {
		element = array[i]
		if (array[i].genre == cat) {
			document.querySelector(".featuredMovies>.movieContainer").innerHTML += afficheMaker(element, valTaille)
		}
		else if (cat == "all" && x < 12 ) {
			x++;
			document.querySelector(".featuredMovies>.movieContainer").innerHTML += afficheMaker(element, valTaille)
		}
	}
}
// function pour afficher plus de résultat

function affReduce() {
	document.querySelector(".featuredMovies>.movieContainer").innerHTML = ""
	for (let i = 0; i < 6; i++) {
		element = array[i]
		document.querySelector(".featuredMovies>.movieContainer").innerHTML += afficheMaker(element, valTaille)
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
		document.querySelector(".featuredMovies>.movieContainer").innerHTML += afficheMaker(element, valTaille)

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
function afficheMaker(object, taille) {
	return `
				<figure class="${taille}">
					<img src="img/${object.src}.jpg" alt="${object.alt}" data-toggle="modal" data-target="#exampleModalCenter">
					<div class=afficheFooter>
					  <p class="title">${object.title}</p>
					  <p class="date">${object.date}</p>
					  <p class="genre">${object.genre}</p>
					</div>
				  </figure>
				  `

}
function modalMaker() {
	`
	<div class="modal fade" id="exampleModalCenter" tabindex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle"
		 aria-hidden="true">
			<div class="modal-dialog modal-dialog-centered" role="document">
				<div class="modal-content">
					<div class="modal-header">
						<h5 class="modal-title" id="exampleModalLongTitle">${element.title}</h5>
						<button type="button" class="close" data-dismiss="modal" aria-label="Close">
							<span aria-hidden="true">&times;</span>
						</button>
					</div>
					<!-- CONTAIN -->
					<div class="modal-body">
						<section class="preview">
							<div class="embed-responsive embed-responsive-16by9">
								<iframe class="embed-responsive-item" src="https://www.youtube.com/embed/f64h6dc2rqM?controls=0;autoplay=1" allowfullscreen></iframe>
							</div>
							<div class="description">
								<p>Après la mort de son épouse lors d'une violente agression qui l'a laissé paralysé, Grey Trace est
									approché par un inventeur milliardaire qui propose de lui administrer un remède expérimental qui va
									"upgrader" son corps et ses facultés. Désormais doté d'un implant fonctionnant à l'intelligence
									artificielle, Grey voit ses capacités physiques décuplées et se lance dans une mission vengeresse,
									afin de faire payer ceux qui ont tué sa femme.</p>
							</div>
							<div class="infos">
								<ul>
									<li class="realisateur">Réalisateur : Matt Reeves </li>
									<li class="date">Date de sortie : Américain</li>
									<li class="genre">Genre : Action, Fantastique</li>
									<li class="acteurs">Acteurs : Joe Manganiello, J.K. Simmons, Jeremy Irons</li>
								</ul>
							</div>
						</section>
					</div>
					<!-- CONTAIN -->
				</div>
			</div>
		</div><!-- END div MODAL -->
	`
cible = document.querySelectorAll(".affiche")
cible.addEventListener("click", alert('coco'))
}

// function pour afficher les films avec flèches suivant précédent
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




