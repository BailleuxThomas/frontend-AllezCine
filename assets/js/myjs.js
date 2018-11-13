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
	new film("Batman", "batmanmovie-2017-comedie", "batman", "13 aout 2008", "comedie", 20, "George Clooney, Christopher Nolan", "Eli Roth", "Dans cette nouvelle aventure, Batman aura bien besoin de son audacieux partenaire Robin, juché sur sa fringante moto turbo. En effet, le glacial M. Freeze fait régner une vague de froid polaire sur Gotham City avec la complicité de la belle et vénéneuse Poison Ivy, au baiser mortel et aux formes sinueuses, qui rêve de soumettre le monde au pouvoir des femmes-fleurs.", "https://www.youtube.com/embed/f64h6dc2rqM"),
	new film("Hostel", "hostel-2005-thriller", "hostel", "1 mars 2006", "thriller", 18, "Ellen Page", "Eli Roth", "Deux étudiants américains, Paxton et Josh, ont décidé de découvrir l'Europe avec un maximum d'aventures et de sensations fortes. Avec Oli, un Islandais qu'ils ont rencontré en chemin, ils se retrouvent dans une petite ville de Slovaquie dans ce qu'on leur a décrit comme le nirvana des vacances de débauche : une propriété très spéciale, pleine de filles aussi belles que faciles... Natalya et Svetlana sont effectivement très cools... un peu trop, même. Paxton et Josh vont vite se rendre compte qu'ils sont tombés dans un piège. Ce voyage-là va les conduire au bout de l'horreur... ", "https://www.youtube.com/embed/cVBdQiUHhZI"),
	new film("Inception", "inception-2010-scifi", "inception", "2010", "scifi", 19, "Leonardo DiCaprio", "Marion Cotillard, Ellen Page", "Dom Cobb est un voleur expérimenté – le meilleur qui soit dans l’art périlleux de l’extraction : sa spécialité consiste à s’approprier les secrets les plus précieux d’un individu, enfouis au plus profond de son subconscient, pendant qu’il rêve et que son esprit est particulièrement vulnérable. Très recherché pour ses talents dans l’univers trouble de l’espionnage industriel, Cobb est aussi devenu un fugitif traqué dans le monde entier qui a perdu tout ce qui lui est cher. Mais une ultime mission pourrait lui permettre de retrouver sa vie d’avant – à condition qu’il puisse accomplir l’impossibles", "https://www.youtube.com/embed/cVBdQiUHhZI"),
	new film("Intouchables", "intouchables-2011-comedie", "intouchables", "2011", "comedie", 19, "François Cluzet", "Omar Sy", "A la suite d’un accident de parapente, Philippe, riche aristocrate, engage comme aide à domicile Driss, un jeune de banlieue tout juste sorti de prison. Bref la personne la moins adaptée pour le job. Ensemble ils vont faire cohabiter Vivaldi et Earth Wind and Fire, le verbe et la vanne, les costumes et les bas de survêtement... Deux univers vont se télescoper, s’apprivoiser, pour donner naissance à une amitié aussi dingue, drôle et forte qu’inattendue, une relation unique qui fera des étincelles et qui les rendra... Intouchables.", "https://www.youtube.com/embed/EsaX5kltRcA"),
	new film("Le patient anglais", "lepatientanglais-1996-dramatique", "lepatientanglais", "1996", "dramatique", 15, "Ralph Fiennes", "Juliette Binoche", "En 1945, quatre personnes dechirées par la guerre se réfugient dans un monastère abandonné de Toscane pour se guérir de leurs maux. Peu à peu le passé va resurgir et la présence d'un homme mystérieux et méconnaissable, le patient anglais, va bouleverser le destin de ceux qui croisent son chemin.", "https://www.youtube.com/embed/xImomcZczRY"),
	new film("Les deux tours", "lesdeuxtours-2002-aventure", "lesdeuxtours", "2002", "action", 17, "Elijah Wood", "Sean Astin", "Après la mort de Boromir et la disparition de Gandalf, la Communauté s'est scindée en trois. Perdus dans les collines d'Emyn Muil, Frodon et Sam découvrent qu'ils sont suivis par Gollum, une créature versatile corrompue par l'Anneau. Celui-ci promet de conduire les Hobbits jusqu'à la Porte Noire du Mordor. A travers la Terre du Milieu, Aragorn, Legolas et Gimli font route vers le Rohan, le royaume assiégé de Theoden. Cet ancien grand roi, manipulé par l'espion de Saroumane, le sinistre Langue de Serpent, est désormais tombé sous la coupe du malfaisant Magicien. Eowyn, la nièce du Roi, reconnaît en Aragorn un meneur d'hommes. Entretemps, les Hobbits Merry et Pippin, prisonniers des Uruk-hai, se sont échappés et ont découvert dans la mystérieuse Forêt de Fangorn un allié inattendu : Sylvebarbe, gardien des arbres, représentant d'un ancien peuple végétal dont Saroumane a décimé la forêt...", "https://www.youtube.com/embed/c9blKqmyeV4"),
	new film("Seven", "seven-1995-thriller", "seven", "1995", "thriller", 19, "Brad Pitt","Morgan Freeman", "Pour conclure sa carrière, l'inspecteur Somerset, vieux flic blasé, tombe à sept jours de la retraite sur un criminel peu ordinaire. John Doe, c'est ainsi que se fait appeler l'assassin, a decidé de nettoyer la societé des maux qui la rongent en commettant sept meurtres basés sur les sept pechés capitaux: la gourmandise, l'avarice, la paresse, l'orgueil, la luxure, l'envie et la colère.", "https://www.youtube.com/embed/BLY4treE0XU"),
	new film("Shutterisland", "shutterisland-2010-thriller", "shutterisland", "2010", "thriller", 16, "Leonardo DiCaprio","Mark Ruffalo", "En 1954, le marshal Teddy Daniels et son coéquipier Chuck Aule sont envoyés enquêter sur l'île de Shutter Island, dans un hôpital psychiatrique où sont internés de dangereux criminels. L'une des patientes, Rachel Solando, a inexplicablement disparu. Comment la meurtrière a-t-elle pu sortir d'une cellule fermée de l'extérieur ? Le seul indice retrouvé dans la pièce est une feuille de papier sur laquelle on peut lire une suite de chiffres et de lettres sans signification apparente. Oeuvre cohérente d'une malade, ou cryptogramme ?", "https://www.youtube.com/embed/inAFW2CluQ4"),
	new film("Starwars Empire", "starwarsempire-1980-scifi", "starwarsempire", "1980", "action", 21, "Daisy Ridley", "John Boyega", "Dans une galaxie lointaine, très lointaine, un nouvel épisode de la saga Star Wars 30 ans après les événements du Retour du Jedi", "https://www.youtube.com/embed/Z7B0vfamFTE"),
	new film("Survivestyle 5", "Survivestyle5-2004-comedie", "Survivestyle5", "2004", "comedie", 13, "Tadanobu Asano", "Reika Hashimoto", "Un mari et sa femme mourante, un hypnotiseur à succès, une publicitaire, un homme convaincu d'être un oiseau, un gang de trois voleurs et un tueur à gages. Les vies de ces différents personnages, qui a priori n'ont pas grand chose en commun, vont se retrouver étroitement liées, s'entremêler et s'acheminer inexorablement vers une fin des plus surprenantes.", "https://www.youtube.com/embed/LEH7nDkiPEk"),
	new film("Swiss Army Man", "swissarmyman-2016-comedie", "swissarmyman", "2016", "comedie", 17, "Paul Dano", "Daniel Radcliffe", "Hank, un homme désespéré errant dans la nature, découvre un mystérieux cadavre. Ils vont tous les deux embarquer dans un voyage épique afin de retrouver leur foyer. Lorsque Hank réalise que ce corps abandonné est la clé de sa survie, le suicidaire d'autrefois est forcé de convaincre un cadavre que la vie vaut la peine d'être vécu.", "https://www.youtube.com/embed/QHkKEBY13A0"),
	new film("The Fall", "thefall-2006-dramatique", "thefall", "2006", "action", 17, "Lee Pace", "Catinca Untaru", "Los Angeles, années 1920. Alexandria, cinq ans, est hospitalisée à la suite d'une chute. Elle se lie d'amitié avec Roy, cascadeur à Hollywood, lui aussi victime d'un accident. Le jeune homme se lance dans le récit d'une histoire épique avec le gouverneur Odieux et les 5 fantastiques déterminés à le combattre. Très vite, la frontière entre la réalité et ce monde éblouissant de magie et de mythes commence à disparaître quand la petite Alexandra réalise qu'il existe un véritable enjeu...", "https://www.youtube.com/embed/MPBk0EZTJWw"),
	new film("What We Do In The Shadows", "WhatWeDoInTheShadows-2014-comedie", "WhatWeDoInTheShadows", "2014", "comedie", 16, "Avec Taika Waititi", "Jemaine Clement", "Comment fait-on quand on est vampires depuis des siècles et qu’on doit discrètement vivre en coloc en 2015 dans la banlieue de Limoges ? C’est ce que nous propose de découvrir une équipe de documentaire, en partageant l’intimité d’une bande de potes suceurs de sang ! Geoffroy, Miguel, Aymeric et Bernard nous ouvrent les portes de leur cœur et celle de leur quotidien un tout petit peu complexe.", "https://www.youtube.com/embed/IAZEWtyhpes"),
	new film("Zoolander", "zoolander-2001-comedie", "zoolander", "2001", "comedie", 17, "Ben Stiller", "Owen Wilson", "Derek Zoolander, un célèbre mannequin, est à l'apogée de sa carrière. Couronné trois fois de suite Top model de l'année, il est sur le point de recevoir son quatrième trophée lorsque ce titre lui est ravi par un jeune et ambitieux challenger : Hansel. Effondrée, l'idole des podiums décide d'abandonner l'univers futile de la mode pour se ressourcer au sein de sa famille en Pennsylvanie. C'est alors que Maury Ballstein, son agent, et Jacobim Mugatu, un styliste déjanté, proposent à Zoolander de devenir la star de la nouvelle ligne de vêtements Derelicte. Zoolander accepte, mais il est loin de s'imaginer que le diabolique Mugatu, secondé de la troublante Katinka, s'apprête à lui effectuer un lavage de cerveau. Ainsi lobotomisé, Derek pourrait exécuter plus facilement ses ordres, à savoir assassiner le président de la Malaisie.", "https://www.youtube.com/embed/SNixRYY7HBY"),
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
function affMore() {
	for (let i = 0; i < 6; i++) {
		newList = []
		val = document.querySelectorAll(".featuredMovies>.movieContainer>.affiche>div>.afficheFooter>.title")
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
	}// end for
}
// function pour afficher moins de résultat
function affReduce() {
	document.querySelector(".featuredMovies>.movieContainer").innerHTML = ""
	for (let i = 0; i < 6; i++) {
		element = array[i]
		document.querySelector(".featuredMovies>.movieContainer").innerHTML += afficheMaker(element, valTaille)
	}
	document.querySelector(".featuredMovies>div>.more-movie").innerHTML = "PLUS DE FILMS"
	document.querySelector(".featuredMovies>div>.more-movie").setAttribute("onClick", "affMore()")
}
// affiche constructeur JS 
function afficheMaker(object, taille) {
	return `
				<figure class="${taille}">
				<div class="afficheContainer col-md-12">
					<img src="assets/imgs/${object.src}.jpg" alt="${object.alt}" data-toggle="modal" data-target="#exampleModalCenter">
					<div class=afficheFooter>
					  <p class="title">${object.title}</p>
					  <p class="date">${object.date}</p>
					  <p class="genre">${object.genre}</p>
					</div>
					</div>
				  </figure>
				  `

}

// function pour construction des modals 
function modalMaker() {
	affiche = document.querySelectorAll("affiche")
	console.log(affiche)
	// Listen to all clicks on the document
	document.addEventListener('click', function (event) {
		var target = event.target;
		//console.log(target.src)
		for (let i = 0; i < array.length; i++) {
			if(array[i].alt == target.alt) {
				console.log(i)
				modal = `
				<div class="modal fade" id="exampleModalCenter" tabindex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle"
					 aria-hidden="true">
						<div class="modal-dialog modal-dialog-centered" role="document">
							<div class="modal-content">
								<div class="modal-header">
									<h5 class="modal-title" id="exampleModalLongTitle">${array[i].title}</h5>
									<button type="button" class="close" data-dismiss="modal" aria-label="Close">
										<span aria-hidden="true">&times;</span>
									</button>
								</div>
								<!-- CONTAIN -->
								<div class="modal-body">
									<section class="preview">
										<div class="embed-responsive embed-responsive-16by9">
											<iframe class="embed-responsive-item" src="${array[i].ytsrc}" allowfullscreen></iframe>
										</div>
										<div class="description">
											<p>${array[i].story}</p>
										</div>
										<div class="infos">
											<ul>
												<li class="realisateur">Réalisateur : ${array[i].productor} </li>
												<li class="date">Date de sortie : ${array[i].date}</li>
												<li class="genre">Genre : ${array[i].genre}</li>
												<li class="acteurs">Acteurs : ${array[i].actor}</li>
											</ul>
										</div>
									</section>
								</div>
								<!-- CONTAIN -->
							</div>
						</div>
					</div><!-- END div MODAL -->
				`
				val = document.querySelectorAll(".modal-container")
				val[0].innerHTML = modal;
			}
		}
	});


}
modalMaker()
// function pour afficher les films avec flèches suivant précédent
i = 0;
// film suivant
function nextMovie() {
	console.log(i)
	const iframe = document.querySelector(".moviePlay>.movie>.youtubeMovie>iframe");
	const title = document.querySelector(".moviePlay>.infoMovie>ul>li.title");
	const story = document.querySelector(".moviePlay>.infoMovie>ul>li>p.story");
	const date = document.querySelector(".moviePlay>.infoMovie>ul>li>p.date");
	const genre = document.querySelector(".moviePlay>.infoMovie>ul>li>p.genre");
	const price = document.querySelector(".moviePlay>.infoMovie>ul>li>p.price");
	if(i == array.length-1){
		i = 0;
	} else {
		i++;
		iframe.src = `${array[i].ytsrc}`
		title.innerHTML = `${array[i].title}`
		story.innerHTML = `${array[i].story.slice(0, 100)}...`
		date.innerHTML = `${array[i].date}`
		genre.innerHTML = `${array[i].genre}`
		price.innerHTML = `${array[i].price}`
	}
}
// film précédent
function beforeMovie() {
	console.log(i)
	const iframe = document.querySelector(".moviePlay>.movie>.youtubeMovie>iframe");
	const title = document.querySelector(".moviePlay>.infoMovie>ul>li.title");
	const story = document.querySelector(".moviePlay>.infoMovie>ul>li>p.story");
	const date = document.querySelector(".moviePlay>.infoMovie>ul>li>p.date");
	const genre = document.querySelector(".moviePlay>.infoMovie>ul>li>p.genre");
	const price = document.querySelector(".moviePlay>.infoMovie>ul>li>p.price");
	if(i == array.length || i == 0){
		i = 0;
	} else {
		i--;
		iframe.src = `${array[i].ytsrc}`
		title.innerHTML = `${array[i].title}`
		story.innerHTML = `${array[i].story.slice(0, 100)}...`
		date.innerHTML = `${array[i].date}`
		genre.innerHTML = `${array[i].genre}`
		price.innerHTML = `${array[i].price}`
	}
}

