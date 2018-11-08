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
        for (let i = 0; i < 6; i++) {
          element = array[i]
            if(array[i].genre == cat) {
              document.querySelector(".featuredMovies>.movieContainer").innerHTML += afficheMaker(element)
              }
              else if (cat == "all"){
                  document.querySelector(".featuredMovies>.movieContainer").innerHTML += afficheMaker(element)
              }
              }
            }
            // function pour afficher plus de résultat

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

               if (val.length+1 == array.length){
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
                <figure class="affiche">
                    <img src="img/${object.src}.jpg" alt="${object.alt}" data-toggle="modal" data-target="#exampleModalCenter">
                    <div class=afficheFooter>
                      <p class="title">${object.title}</p>
                      <p class="date">${object.date}</p>
                      <p class="genre">${object.genre}</p>
                    </div>
                  </figure>
                  `

              }

              


