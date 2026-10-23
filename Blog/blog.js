
const articles = [
  {
    id: 1,
    title: 'Septimus Heap Book One: Magyk',
    date: 'July 5, 2022',
    description:
      'If you enjoy stories about seventh sons of seventh sons and magyk this is the book for you.',
    imgSrc:
      'https://upload.wikimedia.org/wikipedia/en/5/5f/Magkycover2.jpg',
    imgAlt: 'Book cover for Septimus Heap 1',
    ages: '10-14',
    genre: 'Fantasy',
    stars: '⭐⭐⭐⭐'
  },
  {
    id: 2,
    title: 'Magnus Chase Book One: Sword of Summer',
    date: 'December 12, 2021',
    description:
      'The anticipated new novel by Rick Riordan explores Norse mythology through Magnus Chase and his dangerous adventures.',
    imgSrc:
      'https://books.google.com/books/content/images/frontcover/xWuyBAAAQBAJ?fife=w300',
    imgAlt: 'Book cover for Magnus Chase 1',
    ages: '12-16',
    genre: 'Fantasy',
    stars: '⭐⭐⭐⭐'
  },
  {
    id: 3,
    title: 'Belgariad Book One: Pawn of Prophecy',
    date: 'Feb 12, 2022',
    description:
      "A fierce dispute among the Gods and the theft of a powerful Orb leaves the World divided into five kingdoms. Young Garion sets out on a complex mission with his Aunt Pol and an elderly man called Wolf.",
    imgSrc:
      'https://images-na.ssl-images-amazon.com/images/I/41ZxXA+nInL.jpg',
    imgAlt: 'Book cover for Pawn of Prophecy',
    ages: '12-16',
    genre: 'Fantasy',
    stars: '⭐⭐⭐⭐⭐'
  },
  {
    id: 4,
    title: 'Harry Potter and the Sorcerer’s Stone',
    date: 'June 26, 1997',
    description:
      'Harry Potter discovers he is a wizard and attends Hogwarts School of Witchcraft and Wizardry, where he makes friends and uncovers a magical mystery.',
    imgSrc:
      'https://books.google.com/books/content/images/frontcover/3YUrtAEACAAJ?fife=w300',
    imgAlt: 'Book cover for Harry Potter and the Sorcerer’s Stone',
    ages: '10-14',
    genre: 'Fantasy',
    stars: '⭐⭐⭐⭐⭐'
  },
  {
    id: 5,
    title: 'Percy Jackson and the Lightning Thief',
    date: 'June 28, 2005',
    description:
      'Percy Jackson discovers he is the son of a Greek god and embarks on a quest to find Zeus’s stolen lightning bolt and prevent a war among the gods.',
    imgSrc:
      'https://books.google.com/books/content/images/frontcover/MpC3_SuCss4C?fife=w300',
    imgAlt: 'Book cover for Percy Jackson and the Lightning Thief',
    ages: '10-14',
    genre: 'Fantasy',
    stars: '⭐⭐⭐⭐⭐'
  },
  {
    id: 6,
    title: 'The Hobbit',
    date: 'September 21, 1937',
    description:
      'Bilbo Baggins joins a group of dwarves on an adventure to reclaim their treasure from the dragon Smaug.',
    imgSrc:
      'https://books.google.com/books/content/images/frontcover/Z3XLswEACAAJ?fife=w300',
    imgAlt: 'Book cover for The Hobbit',
    ages: '11-16',
    genre: 'Fantasy',
    stars: '⭐⭐⭐⭐⭐'
  },
  {
    id: 7,
    title: 'Charlotte’s Web',
    date: 'October 15, 1952',
    description:
      'Wilbur the pig becomes friends with Charlotte, a clever spider who creates a plan to save him.',
    imgSrc:
      'https://books.google.com/books/content/images/frontcover/FvACRQAACAAJ?fife=w300',
    imgAlt: 'Book cover for Charlotte’s Web',
    ages: '8-12',
    genre: 'Children’s Fiction',
    stars: '⭐⭐⭐⭐⭐'
  },
  {
    id: 8,
    title: 'The Lion, the Witch and the Wardrobe',
    date: 'October 16, 1950',
    description:
      'Four siblings discover the magical land of Narnia through a wardrobe and help fight the White Witch to restore peace.',
    imgSrc:
      'https://books.google.com/books/content/images/frontcover/EsAS0gEACAAJ?fife=w300',
    imgAlt: 'Book cover for The Lion, the Witch and the Wardrobe',
    ages: '9-14',
    genre: 'Fantasy',
    stars: '⭐⭐⭐⭐⭐'
  },
  {
    id: 9,
    title: 'Wonder',
    date: 'February 14, 2012',
    description:
      'August Pullman starts attending school and teaches his classmates about kindness, friendship, and acceptance.',
    imgSrc:
      'https://books.google.com/books/content/images/frontcover/25rgtAEACAAJ?fife=w300',
    imgAlt: 'Book cover for Wonder by R. J. Palacio',
    ages: '8-13',
    genre: 'Realistic Fiction',
    stars: '⭐⭐⭐⭐⭐'
  }
];

// Find the section where the book articles will appear.
const bookList = document.querySelector('#book-list');

// Generate the HTML for each book.
function createBookHTML(book) {
  return `
    <article class="book" id="book-${book.id}">
      <aside class="book-details">
        <p>${book.date}</p>
        <p>Ages: ${book.ages}</p>
        <p>Genre: ${book.genre}</p>
        <p class="book-rating" aria-label="${book.stars.length} out of 5 stars">
          ${book.stars}
        </p>
      </aside>

      <div class="book-content">
        <h2>
          <a href="#book-${book.id}">${book.title}</a>
        </h2>

        <img
          class="book-cover"
          src="${book.imgSrc}"
          alt="${book.imgAlt}"
          loading="lazy"
        >

        <p class="book-description">${book.description}</p>
      </div>
    </article>
  `;
}

// Add every book to the page dynamically.
function displayBooks() {
  bookList.innerHTML = articles.map(createBookHTML).join('');
}

// Run the function to display the books.
displayBooks();
