    // constructor film
    function film(title, src, alt, date, genre ) {
      this.title = title;
      this.src = src;
      this.alt = alt;
      this.date = date;
      this.genre = genre;
    }
    array = []
    array.push(
      new film("Batman", "batmanmovie-2017-comedie", "batman", "2003", "comedie"),
      new film("Hostel", "hostel-2005-thriller", "hostel", "2005", "thriller"),
      new film("Inception", "inception-2010-scifi", "inception", "2010", "scifi"),
      new film("Intouchables", "intouchables-2011-comedie", "intouchables", "2011", "comedie"),
      new film("Lepatientanglais", "lepatientanglais-1996-dramatique", "lepatientanglais", "1996", "dramatique"),
      new film("lesdeuxtours", "lesdeuxtours-2002-aventure", "lesdeuxtours", "2002", "action"),
      new film("seven", "seven-1995-thriller", "seven", "1995", "thriller"),
      new film("shutterisland", "shutterisland-2010-thriller", "shutterisland", "2010", "thriller"),
      new film("starwarsempire", "starwarsempire-1980-scifi", "starwarsempire", "1980", "action"),
      new film("Survivestyle5", "Survivestyle5-2004-comedie", "Survivestyle5", "2004", "comedie"),
      new film("swissarmyman", "swissarmyman-2016-comedie", "swissarmyman", "2016", "comedie"),
      new film("thefall", "thefall-2006-dramatique", "thefall", "2006", "action"),
      new film("WhatWeDoInTheShadows", "WhatWeDoInTheShadows-2014-comedie", "WhatWeDoInTheShadows", "2014", "comedie"),
      new film("zoolander", "zoolander-2001-comedie", "zoolander", "2001", "comedie"),
      );
    console.log(array)
      // array = tableau sur base constructeur film
      // function pour afficher selon la catégorie 
    function selectCat(cat) {
        document.querySelector(".featuredMovies>.movieContainer").innerHTML = ""
        for (let i = 0; i < array.length; i++) {
          element = array[i]
            if(array[i].genre == cat) {
              document.querySelector(".featuredMovies>.movieContainer").innerHTML += 
              `
             <figure class="affiche">
                 <img src="img/${element.src}.jpg" alt="${element.alt}" data-toggle="modal" data-target="#exampleModalCenter">
                 <div class=afficheFooter>
                   <p class="title">${element.title}</p>
                   <p class="date">${element.date}</p>
                   <p class="genre">${element.genre}</p>
                 </div>
               </figure>
               `
              }
              else if (cat == "all"){
                  document.querySelector(".featuredMovies>.movieContainer").innerHTML += 
              `
             <figure class="affiche">
                 <img src="img/${element.src}.jpg" alt="${element.alt}" data-toggle="modal" data-target="#exampleModalCenter">
                 <div class=afficheFooter>
                   <p class="title">${element.title}</p>
                   <p class="date">${element.date}</p>
                   <p class="genre">${element.genre}</p>
                 </div>
               </figure>
               `
              }
              }
            }
        


