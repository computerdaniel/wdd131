const movies = [
  {
    title: "Spider-Man: Into the Spider-Verse",
    date: "Dec 14, 2018",
    description: "Miles Morales becomes the Spider-Man of his reality and crosses paths with others from the multiverse.",
    imgSrc: "https://wddbyui.github.io/wdd131/images/spiderman.png",
    imgAlt: "Miles Morales swinging through the city",
    ages: "10+",
    genre: "Action/Adventure",
    stars: "⭐⭐⭐⭐⭐"
  },
  {
    title: "The Other Side of Heaven",
    date: "December 14, 2001",
    description: "Based on the true story of Elder John H. Groberg, a missionary in Tonga in the 1950s, this film tells a powerful story of faith, hardship, and miracles.",
    imgSrc: "https://wddbyui.github.io/wdd131/images/heaven.png",
    imgAlt: "Poster for The Other Side of Heaven showing a missionary and tropical landscape",
    ages: "10+",
    genre: "Drama/Religious",
    stars: "⭐⭐⭐⭐"
  },
  {
    title: "Luca",
    date: "June 18, 2021",
    description: "Two sea monsters experience a life-changing summer on the Italian Riviera.",
    imgSrc: "https://wddbyui.github.io/wdd131/images/luca.png",
    imgAlt: "Luca and Alberto standing on the beach",
    ages: "6+",
    genre: "Family/Fantasy",
    stars: "⭐⭐⭐⭐"
  },
  {
    title: "17 Miracles",
    date: "June 3, 2011",
    description: "A moving depiction of the Willie Handcart Company's journey west in 1856, focusing on the miraculous events that helped early pioneers survive one of the harshest migrations in history.",
    imgSrc: "https://wddbyui.github.io/wdd131/images/miracles.jpg",
    imgAlt: "Movie poster for 17 Miracles showing handcart pioneers walking through snow",
    ages: "12+",
    genre: "Historical/Religious",
    stars: "⭐⭐⭐⭐"
  },
  {
    title: "Iron Man",
    date: "May 2, 2008",
    description: "Genius inventor Tony Stark builds a powerful suit of armor and becomes a superhero after escaping captivity.",
    imgSrc: "https://image.tmdb.org/t/p/w500/78lPtwv72eTNqFW9COBYI0dWDJa.jpg",
    imgAlt: "Iron Man movie poster featuring Tony Stark in his armor",
    ages: "13+",
    genre: "Action/Sci-Fi",
    stars: "⭐⭐⭐⭐⭐"
  },
  {
    title: "The Avengers",
    date: "May 4, 2012",
    description: "Earth's mightiest heroes join forces to stop Loki and his alien army from invading Earth.",
    imgSrc: "https://image.tmdb.org/t/p/w500/RYMX2wcKCBAr24UyPD7xwmjaTn.jpg",
    imgAlt: "The Avengers movie poster featuring Earth's mightiest heroes",
    ages: "13+",
    genre: "Action/Sci-Fi",
    stars: "⭐⭐⭐⭐⭐"
  },
  {
    title: "Iron Man 3",
    date: "May 3, 2013",
    description: "Tony Stark faces a powerful enemy and must rely on his intelligence and courage when his world falls apart.",
    imgSrc: "https://image.tmdb.org/t/p/w500/qhPtAc1TKbMPqNvcdXSOn9Bn7hZ.jpg",
    imgAlt: "Iron Man 3 movie poster featuring Tony Stark",
    ages: "13+",
    genre: "Action/Adventure",
    stars: "⭐⭐⭐⭐"
  },
  {
    title: "Thor: The Dark World",
    date: "November 8, 2013",
    description: "Thor fights to protect the Nine Realms when an ancient enemy threatens to plunge the universe into darkness.",
    imgSrc: "https://image.tmdb.org/t/p/w500/wp6OxE4poJ4G7c0U2ZIXasTSMR7.jpg",
    imgAlt: "Thor: The Dark World movie poster featuring Thor",
    ages: "13+",
    genre: "Action/Fantasy",
    stars: "⭐⭐⭐⭐"
  },
  {
    title: "Captain America: The Winter Soldier",
    date: "April 4, 2014",
    description: "Steve Rogers uncovers a dangerous conspiracy within S.H.I.E.L.D. and teams up with Black Widow to uncover the truth.",
    imgSrc: "https://image.tmdb.org/t/p/w500/tVFRpFw3xTedgPGqxW0AOI8Qhh0.jpg",
    imgAlt: "Captain America: The Winter Soldier movie poster",
    ages: "13+",
    genre: "Action/Thriller",
    stars: "⭐⭐⭐⭐⭐"
  },
  {
    title: "Guardians of the Galaxy",
    date: "August 1, 2014",
    description: "A group of unlikely space adventurers must work together to protect the galaxy from a powerful threat.",
    imgSrc: "https://image.tmdb.org/t/p/w500/r7vmZjiyZw9rpJMQJdXpjgiCOk9.jpg",
    imgAlt: "Guardians of the Galaxy movie poster featuring Star-Lord and the team",
    ages: "13+",
    genre: "Action/Sci-Fi",
    stars: "⭐⭐⭐⭐⭐"
  },
  {
    title: "Avengers: Age of Ultron",
    date: "May 1, 2015",
    description: "The Avengers must stop an artificial intelligence named Ultron from carrying out a devastating plan for humanity.",
    imgSrc: "https://image.tmdb.org/t/p/w500/4ssDuvEDkSArWEdyBl2X5EHvYKU.jpg",
    imgAlt: "Avengers: Age of Ultron movie poster featuring the Avengers",
    ages: "13+",
    genre: "Action/Sci-Fi",
    stars: "⭐⭐⭐⭐"
  },
  {
    title: "Ant-Man",
    date: "July 17, 2015",
    description: "A former thief gains the ability to shrink in size while increasing his strength and must pull off an extraordinary heist.",
    imgSrc: "https://image.tmdb.org/t/p/w500/rQRnQfUl3kfp78nCWq8Ks04vnq1.jpg",
    imgAlt: "Ant-Man movie poster featuring Scott Lang in his superhero suit",
    ages: "13+",
    genre: "Action/Comedy",
    stars: "⭐⭐⭐⭐"
  },
  {
    title: "Captain America: Civil War",
    date: "May 6, 2016",
    description: "The Avengers split into opposing sides over government oversight, forcing Captain America and Iron Man into conflict.",
    imgSrc: "https://image.tmdb.org/t/p/w500/rAGiXaUfPzY7CDEyNKUofk3Kw2e.jpg",
    imgAlt: "Captain America: Civil War movie poster featuring opposing superhero teams",
    ages: "13+",
    genre: "Action/Adventure",
    stars: "⭐⭐⭐⭐⭐"
  },
  {
    title: "Doctor Strange",
    date: "November 4, 2016",
    description: "After a devastating accident, surgeon Stephen Strange discovers the mystic arts and learns to defend reality from supernatural threats.",
    imgSrc: "https://image.tmdb.org/t/p/w500/uGBVj3bEbCoZbDjjl9wTxcygko1.jpg",
    imgAlt: "Doctor Strange movie poster featuring Stephen Strange and mystical energy",
    ages: "13+",
    genre: "Action/Fantasy",
    stars: "⭐⭐⭐⭐"
  },
  {
    title: "Guardians of the Galaxy Vol. 2",
    date: "May 5, 2017",
    description: "The Guardians explore Peter Quill's mysterious family origins while trying to keep their unusual team together.",
    imgSrc: "https://image.tmdb.org/t/p/w500/y4MBh0EjBlMuOzv9axM4qJlmhzz.jpg",
    imgAlt: "Guardians of the Galaxy Vol. 2 movie poster featuring the Guardians",
    ages: "13+",
    genre: "Action/Comedy",
    stars: "⭐⭐⭐⭐"
  },
  {
    title: "Spider-Man: Homecoming",
    date: "July 7, 2017",
    description: "Peter Parker balances high school life with his desire to prove himself as a superhero under Tony Stark's guidance.",
    imgSrc: "https://image.tmdb.org/t/p/w500/c24sv2weTHPsmDa7jEMN0m2P3RT.jpg",
    imgAlt: "Spider-Man: Homecoming movie poster featuring Peter Parker",
    ages: "13+",
    genre: "Action/Adventure",
    stars: "⭐⭐⭐⭐⭐"
  },
  {
    title: "Thor: Ragnarok",
    date: "November 3, 2017",
    description: "Thor must escape an alien planet and return to Asgard to stop Hela from destroying his home.",
    imgSrc: "https://image.tmdb.org/t/p/w500/kaIfm5ryEOwYg8mLbq8HkPuM1Fo.jpg",
    imgAlt: "Thor: Ragnarok movie poster featuring Thor and other characters",
    ages: "13+",
    genre: "Action/Comedy",
    stars: "⭐⭐⭐⭐⭐"
  },
  {
    title: "Black Panther",
    date: "February 16, 2018",
    description: "T'Challa returns to Wakanda to take his place as king but faces a challenger who threatens the future of his nation.",
    imgSrc: "https://image.tmdb.org/t/p/w500/uxzzxijgPIY7slzFvMotPv8wjKA.jpg",
    imgAlt: "Black Panther movie poster featuring T'Challa in his superhero suit",
    ages: "13+",
    genre: "Action/Adventure",
    stars: "⭐⭐⭐⭐⭐"
  },
  {
    title: "Avengers: Infinity War",
    date: "April 27, 2018",
    description: "The Avengers and their allies attempt to stop Thanos from collecting the Infinity Stones and reshaping the universe.",
    imgSrc: "https://image.tmdb.org/t/p/w500/7WsyChQLEftFiDOVTGkv3hFpyyt.jpg",
    imgAlt: "Avengers: Infinity War movie poster featuring the Avengers and Thanos",
    ages: "13+",
    genre: "Action/Sci-Fi",
    stars: "⭐⭐⭐⭐⭐"
  },
  {
    title: "Ant-Man and the Wasp",
    date: "July 6, 2018",
    description: "Scott Lang teams up with Hope van Dyne on a mission involving the quantum realm and a mysterious new adversary.",
    imgSrc: "https://image.tmdb.org/t/p/w500/eivQmS3wqzqnQWILHLc4FsEfcXP.jpg",
    imgAlt: "Ant-Man and the Wasp movie poster featuring both superheroes",
    ages: "13+",
    genre: "Action/Comedy",
    stars: "⭐⭐⭐⭐"
  },
  {
    title: "Captain Marvel",
    date: "March 8, 2019",
    description: "Carol Danvers discovers her true identity and powers while caught in a conflict between alien civilizations.",
    imgSrc: "https://image.tmdb.org/t/p/w500/AtsgWhDnHTq68L0lLsUrCnM7TjG.jpg",
    imgAlt: "Captain Marvel movie poster featuring Carol Danvers",
    ages: "13+",
    genre: "Action/Sci-Fi",
    stars: "⭐⭐⭐⭐"
  },
  {
    title: "Avengers: Endgame",
    date: "April 26, 2019",
    description: "The surviving Avengers attempt to reverse Thanos's devastating actions and restore those lost in the battle.",
    imgSrc: "https://image.tmdb.org/t/p/w500/or06FN3Dka5tukK1e9sl16pB3iy.jpg",
    imgAlt: "Avengers: Endgame movie poster featuring Earth's remaining heroes",
    ages: "13+",
    genre: "Action/Sci-Fi",
    stars: "⭐⭐⭐⭐⭐"
  },
  {
    title: "Shang-Chi and the Legend of the Ten Rings",
    date: "September 3, 2021",
    description: "Shang-Chi confronts his past and discovers the secrets of the Ten Rings while facing a powerful family legacy.",
    imgSrc: "https://image.tmdb.org/t/p/w500/1BIoJGKbXjdFDAqUEiA2VHqkK1Z.jpg",
    imgAlt: "Shang-Chi movie poster featuring Shang-Chi and the Ten Rings",
    ages: "13+",
    genre: "Action/Fantasy",
    stars: "⭐⭐⭐⭐"
  },
  {
    title: "Spider-Man: No Way Home",
    date: "December 17, 2021",
    description: "Peter Parker asks Doctor Strange for help after his identity is revealed, but a spell brings unexpected dangers from across the multiverse.",
    imgSrc: "https://image.tmdb.org/t/p/w500/1g0dhYtq4irTY1GPXvft6k4YLjm.jpg",
    imgAlt: "Spider-Man: No Way Home movie poster featuring Spider-Man",
    ages: "13+",
    genre: "Action/Adventure",
    stars: "⭐⭐⭐⭐⭐"
  }
];

    movies.forEach(movie => {
        let article= `
            <article class="movie">
                <h2>${movie.title}</h2>
                <img src=${movie.imgSrc} alt=${movie.imgAlt}>
                <p><strong>Release Date:</strong>${movie.date}</p>
                <p><strong>Recommended Age:</strong>${movie.ages}</p>
                <p><strong>Genre:</strong>${movie.genre}</p>
                <p><strong>Rating:</strong> <span>${movie.stars}</span></p>
                <p id='desc'>${movie.description}</p>
            </article>
        
        `;
        document.getElementById("movie-list").innerHTML += article;
    });
          

    
    //<main id="main-content" role="main">
    // <section id="movie-list" aria-label="Movie Reviews">
    //    <article class="movie">
    //     <h2>Spider-Man: Into the Spider-Verse</h2>
    //     <img src="https://wddbyui.github.io/wdd131/images/spiderman.png" alt="Miles Morales swinging through the city">
    //     <p><strong>Release Date:</strong> Dec 14, 2018</p>
    //     <p><strong>Recommended Age:</strong> 10+</p>
    //     <p><strong>Genre:</strong> Action/Adventure</p>
    //     <p><strong>Rating:</strong> <span>⭐⭐⭐⭐⭐</span></p>
    // //    <p id='desc'>Miles Morales becomes the Spider-Man of his reality and crosses paths with others from the multiverse.</p>
    //    </article>
    //    <article class="movie">
    //     <h2>The Other Side of Heaven</h2>
    //     <img src="https://wddbyui.github.io/wdd131/images/heaven.png" alt="A young couple and missionaries in a row boat on the ocean">
    //     <p><strong>Release Date:</strong> December 14, 2001</p>
    //     <p><strong>Recommended Age:</strong> 10+</p>
    //     <p><strong>Genre:</strong> Drama/Religious</p>
    //     <p><strong>Rating:</strong> <span>⭐⭐⭐⭐</span></p>
    //     <p id='desc'>Based on the true story of Elder John H. Groberg, a missionary in Tonga in the 1950s, this film tells a powerful story of faith, hardship, and miracles.</p>
    //    </article>
    // </section>
    //</main>