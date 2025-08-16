// Book data
const booksData = {
  "brihat-parashara": {
    title: "Brihat Parashara Hora Shastra",
    author: "Sage Parashara",
    chapters: 97,
    verses: null,
    sutras: null,
    books: null,
    significance: "Most comprehensive foundational text of Vedic astrology",
    keyTopics: [
      "Planetary characteristics and descriptions",
      "Zodiacal signs (Rasis)",
      "Sixteen divisional charts (Vargas)",
      "Planetary strengths and weaknesses",
      "Dasha systems",
      "Yogas and combinations",
      "Longevity calculations",
      "Remedial measures"
    ],
    structure: [
      {chapter: 1, title: "The Creation", content: "Cosmic creation by Sri Vishnu, three Gunas, divine incarnations through Navagrahas. This chapter establishes the spiritual foundation of astrology."},
      {chapter: 2, title: "Great Incarnations", content: "Incarnations of Vishnu through planetary forms, Jivatma and Paramatmahsas. Understanding the divine nature of planetary influences."},
      {chapter: 3, title: "Grah Characters and Description", content: "Nine planets, benefics/malefics, complexions, deities, genders, elements, castes. Complete characterization of all celestial bodies."},
      {chapter: 4, title: "Zodiacal Rasis Described", content: "Twelve zodiac signs, characteristics, elements, Kaal Purush concept. Foundation of sign-based interpretation."},
      {chapter: 5, title: "Special Lagnas", content: "Bhava Lagna, Hora Lagna, Ghati Lagna, Varnad Dasha. Advanced ascendant calculations for precise timing."},
      {chapter: 6, title: "The Sixteen Divisions of a Rasi", content: "16 Vargas: Rasi, Hora, Dreshkan, Chaturthahs, Saptahs, Navahs, etc. Complete divisional chart system."},
      {chapter: 43, title: "Longevity", content: "Pindayu, Nisargayu, Ayusayu methods, planetary contributions to life span. Comprehensive longevity calculation techniques."},
      {chapter: 44, title: "Marak Grahas", content: "Death-dealing planets, timing of death, maraka periods. Advanced timing methods for critical life events."}
    ]
  },
  "jaimini": {
    title: "Jaimini Sutram",
    author: "Maharshi Jaimini",
    chapters: 4,
    verses: null,
    sutras: 936,
    books: null,
    significance: "Unique system with different principles from Parashara",
    keyTopics: [
      "Char Karakas (variable significators)",
      "Rasi aspects",
      "Arudha Padas",
      "Char Dasha system",
      "Argala (intervention)",
      "Karakamsa",
      "Upapada"
    ],
    structure: [
      {chapter: 1, title: "Karakamsa, Arudha, Upapada", content: "Chara karakas, Atma karaka, Arudha pada, Rajayogas. Revolutionary system of variable planetary significators and appearance-based predictions."},
      {chapter: 2, title: "Longevity and Dashas", content: "Longevity calculation, maraca planets, 40 dasha systems. Unique timing methods including the famous Char Dasha system."},
      {chapter: 3, title: "Drekkana and Rajayogas", content: "Rajayogas from Drekkana, female horoscopy, 16 rasi dashas. Advanced combinations and specialized timing techniques."},
      {chapter: 4, title: "Death and Dashas", content: "Nature of death, foreign travel, life after death, 14 dasha types. Comprehensive treatment of life's ultimate transitions."}
    ]
  },
  "brihat-jataka": {
    title: "Brihat Jataka",
    author: "Varahamihira",
    chapters: 28,
    verses: 407,
    sutras: null,
    books: null,
    significance: "Standard textbook on Vedic astrology, highly revered classic",
    keyTopics: [
      "Fundamental astrological principles",
      "Planetary periods and effects",
      "Ashtakavarga system",
      "Female horoscopy",
      "Lost horoscopes",
      "Pancha Mahapurusha yogas",
      "Death timing",
      "Decanates"
    ],
    structure: [
      {chapter: 1, title: "Technical Terms", content: "Explanation of astrological concepts, planets and signs. Essential terminology and foundational concepts for all astrological study."},
      {chapter: 7, title: "Span of Life", content: "Planetary contributions to longevity, reductions and calculations. Systematic approach to determining life span from birth chart."},
      {chapter: 8, title: "Ruling Periods", content: "Dasha periods, planetary effects during different periods. Complete system of planetary periods and their interpretations."},
      {chapter: 9, title: "Ashtakavarga", content: "Bindus system for planetary strength assessment. Revolutionary method for determining planetary strength and favorable periods."},
      {chapter: 24, title: "Female Horoscopy", content: "Special considerations for women's charts. Unique principles for interpreting feminine birth charts and life events."},
      {chapter: 25, title: "Death", content: "Types of death, timing, fate of the body. Comprehensive treatment of death timing and circumstances."},
      {chapter: 26, title: "Lost Horoscopes", content: "Methods to reconstruct unknown birth charts. Ingenious techniques for recovering lost birth information through various means."}
    ]
  },
  "garga": {
    title: "Garga Samhita",
    author: "Sage Garga",
    chapters: null,
    verses: null,
    sutras: null,
    books: 11,
    significance: "Contains astrological principles and Krishna's divine stories",
    keyTopics: [
      "Mundane astrology",
      "Astronomical calculations",
      "Weather predictions",
      "Agricultural astrology",
      "Krishna's cosmic significance",
      "Vedic calendar systems"
    ],
    structure: [
      {book: 1, title: "Goloka-khanda", chapters: 20, content: "Pastimes of Radha Krishna in Goloka. Cosmic and spiritual dimensions of divine love and their astrological significance."},
      {book: 2, title: "Vrindavana-khanda", chapters: 26, content: "Krishna's pastimes in Vrindavan. Earthly manifestations of divine principles and their connection to astrological timing."},
      {book: 5, title: "Mathura-khanda", chapters: 25, content: "Krishna's return to Mathura. Political astrology and timing of major life transitions and royal duties."},
      {book: 6, title: "Dvaraka-khanda", chapters: 22, content: "Foundation and description of Dvaraka. Mundane astrology for city planning, governance, and societal organization."}
    ]
  },
  "brihat-samhita": {
    title: "Brihat Samhita",
    author: "Varahamihira",
    chapters: 107,
    verses: null,
    sutras: null,
    books: null,
    significance: "Comprehensive encyclopedia of mundane astrology",
    keyTopics: [
      "Mundane astrology",
      "Weather and climate",
      "Omens and portents",
      "Architecture and Vastu",
      "Gemology",
      "Agriculture",
      "Political astrology"
    ],
    structure: [
      {chapter: 3, title: "The Sun's Transit", content: "Solar movements and their effects. Comprehensive system for predicting weather, agriculture, and societal changes through solar positions."},
      {chapter: 4, title: "The Moon's Transit", content: "Lunar effects on weather and events. Detailed lunar astrology for timing agricultural activities and predicting natural phenomena."},
      {chapter: 21, title: "Pregnancy of Clouds", content: "Weather prediction through cloud formations. Ancient meteorological wisdom combining astronomical positions with atmospheric observations."},
      {chapter: 56, title: "Description of Temples", content: "Temple architecture and construction. Sacred geometry and astrological timing for religious architecture and spiritual spaces."},
      {chapter: 77, title: "Qualities of Gems", content: "Gemstones and their properties. Comprehensive guide to gemology including astrological applications and remedial uses."}
    ]
  }
};

// Search data for comprehensive search functionality
const searchData = [
  {book: "Brihat Parashara Hora Shastra", topic: "Divisional Charts", content: "16 Vargas including Rasi, Hora, Dreshkan for detailed chart analysis"},
  {book: "Brihat Parashara Hora Shastra", topic: "Dasha Systems", content: "Vimshottari Dasha and other planetary period systems"},
  {book: "Brihat Parashara Hora Shastra", topic: "Yogas", content: "Planetary combinations and their auspicious or inauspicious effects"},
  {book: "Brihat Parashara Hora Shastra", topic: "Longevity", content: "Pindayu, Nisargayu, and Ayusayu methods for life span calculation"},
  {book: "Jaimini Sutram", topic: "Chara Karakas", content: "Variable significators including Atma Karaka, Amatya Karaka"},
  {book: "Jaimini Sutram", topic: "Arudha Pada", content: "Image or reflection of houses for materialistic predictions"},
  {book: "Jaimini Sutram", topic: "Char Dasha", content: "Unique timing system based on rasi movements"},
  {book: "Jaimini Sutram", topic: "Rasi Aspects", content: "Sign-to-sign aspects different from planetary aspects"},
  {book: "Brihat Jataka", topic: "Ashtakavarga", content: "Bindus system for assessing planetary strength and favorable periods"},
  {book: "Brihat Jataka", topic: "Female Horoscopy", content: "Special principles for interpreting women's birth charts"},
  {book: "Brihat Jataka", topic: "Pancha Mahapurusha Yogas", content: "Five great person combinations for exceptional individuals"},
  {book: "Brihat Jataka", topic: "Lost Horoscopes", content: "Methods to reconstruct unknown birth charts"},
  {book: "Garga Samhita", topic: "Mundane Astrology", content: "World events, weather, and political predictions"},
  {book: "Garga Samhita", topic: "Agricultural Astrology", content: "Timing for farming activities based on celestial positions"},
  {book: "Garga Samhita", topic: "Vedic Calendar", content: "Panchanga system and astronomical calculations"},
  {book: "Brihat Samhita", topic: "Weather Prediction", content: "Cloud formations, wind patterns, and seasonal changes"},
  {book: "Brihat Samhita", topic: "Vastu Shastra", content: "Architectural astrology and sacred geometry"},
  {book: "Brihat Samhita", topic: "Gemology", content: "Properties of gems and their astrological applications"},
  {book: "Brihat Samhita", topic: "Omens", content: "Interpreting natural phenomena and unusual occurrences"}
];

// Global variables
let currentSection = 'home';
let currentBook = 'brihat-parashara';

// Initialize the application
document.addEventListener('DOMContentLoaded', function() {
  console.log('DOM Content Loaded - Initializing application');
  
  // Initialize all components
  initializeNavigation();
  initializeBookNavigation();
  initializeSearch();
  initializeModal();
  initializeBookCards();
  
  // Show default book details
  showBookDetails(currentBook);
  
  console.log('Application initialized successfully');
});

// Navigation functionality
function initializeNavigation() {
  console.log('Initializing navigation');
  
  const navLinks = document.querySelectorAll('.nav-link');
  
  navLinks.forEach(link => {
    link.addEventListener('click', function(e) {
      e.preventDefault();
      console.log('Navigation clicked:', this.getAttribute('href'));
      
      // Get target section
      const targetSection = this.getAttribute('href').substring(1);
      
      // Remove active class from all nav links
      navLinks.forEach(nl => nl.classList.remove('active'));
      
      // Add active class to clicked link
      this.classList.add('active');
      
      // Show target section
      showSection(targetSection);
    });
  });
  
  console.log('Navigation initialized');
}

// Show specific section
function showSection(sectionId) {
  console.log('Showing section:', sectionId);
  
  // Hide all sections
  const sections = document.querySelectorAll('.section');
  sections.forEach(section => {
    section.classList.remove('active');
  });
  
  // Show target section
  const targetSection = document.getElementById(sectionId);
  if (targetSection) {
    targetSection.classList.add('active');
    currentSection = sectionId;
    console.log('Section shown:', sectionId);
  } else {
    console.error('Section not found:', sectionId);
  }
}

// Initialize book cards on homepage
function initializeBookCards() {
  console.log('Initializing book cards');
  
  const bookCards = document.querySelectorAll('.book-card');
  bookCards.forEach(card => {
    card.addEventListener('click', function() {
      const bookId = this.getAttribute('data-book');
      console.log('Book card clicked:', bookId);
      
      if (bookId) {
        navigateToBook(bookId);
      }
    });
  });
  
  console.log('Book cards initialized');
}

// Navigate to specific book
function navigateToBook(bookId) {
  console.log('Navigating to book:', bookId);
  
  // Switch to books section
  showSection('books');
  
  // Update navigation active state
  const navLinks = document.querySelectorAll('.nav-link');
  navLinks.forEach(link => {
    link.classList.remove('active');
    if (link.getAttribute('href') === '#books') {
      link.classList.add('active');
    }
  });
  
  // Switch to specific book
  currentBook = bookId;
  
  // Update book navigation
  const bookNavBtns = document.querySelectorAll('.book-nav-btn');
  bookNavBtns.forEach(btn => {
    btn.classList.remove('active');
    if (btn.getAttribute('data-book') === bookId) {
      btn.classList.add('active');
    }
  });
  
  // Show book details
  showBookDetails(bookId);
  
  console.log('Navigated to book:', bookId);
}

// Initialize book navigation
function initializeBookNavigation() {
  console.log('Initializing book navigation');
  
  const bookNavBtns = document.querySelectorAll('.book-nav-btn');
  
  bookNavBtns.forEach(btn => {
    btn.addEventListener('click', function() {
      const bookId = this.getAttribute('data-book');
      console.log('Book nav button clicked:', bookId);
      
      // Remove active class from all buttons
      bookNavBtns.forEach(b => b.classList.remove('active'));
      
      // Add active class to clicked button
      this.classList.add('active');
      
      // Show book details
      currentBook = bookId;
      showBookDetails(bookId);
    });
  });
  
  console.log('Book navigation initialized');
}

// Display book details
function showBookDetails(bookId) {
  console.log('Showing book details for:', bookId);
  
  const bookData = booksData[bookId];
  if (!bookData) {
    console.error('Book data not found for:', bookId);
    return;
  }
  
  const bookDetailsContainer = document.getElementById('book-details');
  if (!bookDetailsContainer) {
    console.error('Book details container not found');
    return;
  }
  
  // Create stats HTML
  let statsHtml = `<div class="stat-item">
    <span class="stat-number">${bookData.chapters || bookData.books || 'N/A'}</span>
    <span class="stat-label">${bookData.chapters ? 'Chapters' : 'Books'}</span>
  </div>`;
  
  if (bookData.verses) {
    statsHtml += `<div class="stat-item">
      <span class="stat-number">${bookData.verses}</span>
      <span class="stat-label">Verses</span>
    </div>`;
  }
  
  if (bookData.sutras) {
    statsHtml += `<div class="stat-item">
      <span class="stat-number">${bookData.sutras}</span>
      <span class="stat-label">Sutras</span>
    </div>`;
  }
  
  // Create key topics HTML
  const keyTopicsHtml = bookData.keyTopics.map(topic => 
    `<div class="topic-item">${topic}</div>`
  ).join('');
  
  // Create structure HTML
  const structureHtml = bookData.structure.map(item => {
    const identifier = item.chapter ? `Chapter ${item.chapter}` : `Book ${item.book}`;
    const chapters = item.chapters ? ` (${item.chapters} chapters)` : '';
    
    return `
      <div class="chapter-item">
        <div class="chapter-header" onclick="toggleChapterContent(this)">
          <h4 class="chapter-title">${item.title}</h4>
          <span class="chapter-number">${identifier}${chapters}</span>
        </div>
        <div class="chapter-content">
          <p>${item.content}</p>
        </div>
      </div>
    `;
  }).join('');
  
  bookDetailsContainer.innerHTML = `
    <div class="book-detail">
      <div class="book-header">
        <h2 class="book-title">${bookData.title}</h2>
        <p class="book-author">by ${bookData.author}</p>
        <div class="book-stats">
          ${statsHtml}
        </div>
        <p class="book-significance">${bookData.significance}</p>
      </div>
      
      <div class="book-content">
        <div class="content-section">
          <h3>Key Topics Covered</h3>
          <div class="key-topics">
            ${keyTopicsHtml}
          </div>
        </div>
        
        <div class="content-section">
          <h3>Structure & Contents</h3>
          <div class="chapter-list">
            ${structureHtml}
          </div>
        </div>
      </div>
    </div>
  `;
  
  console.log('Book details displayed for:', bookId);
}

// Toggle chapter content
function toggleChapterContent(headerElement) {
  console.log('Toggling chapter content');
  
  const chapterContent = headerElement.nextElementSibling;
  if (chapterContent) {
    chapterContent.classList.toggle('expanded');
    console.log('Chapter content toggled');
  } else {
    console.error('Chapter content element not found');
  }
}

// Search functionality
function initializeSearch() {
  console.log('Initializing search');
  
  const searchInput = document.getElementById('searchInput');
  const searchBtn = document.getElementById('searchBtn');
  
  if (searchBtn) {
    searchBtn.addEventListener('click', performSearch);
  }
  
  if (searchInput) {
    searchInput.addEventListener('keypress', function(e) {
      if (e.key === 'Enter') {
        performSearch();
      }
    });
  }
  
  console.log('Search initialized');
}

// Perform search
function performSearch() {
  console.log('Performing search');
  
  const searchInput = document.getElementById('searchInput');
  if (!searchInput) {
    console.error('Search input not found');
    return;
  }
  
  const searchTerm = searchInput.value.toLowerCase().trim();
  console.log('Search term:', searchTerm);
  
  if (!searchTerm) {
    alert('Please enter a search term');
    return;
  }
  
  const results = searchData.filter(item => 
    item.topic.toLowerCase().includes(searchTerm) ||
    item.content.toLowerCase().includes(searchTerm) ||
    item.book.toLowerCase().includes(searchTerm)
  );
  
  console.log('Search results found:', results.length);
  
  displaySearchResults(results, searchTerm);
}

// Display search results
function displaySearchResults(results, searchTerm) {
  console.log('Displaying search results');
  
  const modal = document.getElementById('searchModal');
  const resultsContainer = document.getElementById('searchResults');
  
  if (!modal || !resultsContainer) {
    console.error('Search modal or results container not found');
    return;
  }
  
  if (results.length === 0) {
    resultsContainer.innerHTML = `
      <div class="no-results">
        <p>No results found for "${searchTerm}". Try searching for terms like:</p>
        <ul>
          <li>Dasha systems</li>
          <li>Divisional charts</li>
          <li>Yogas</li>
          <li>Longevity</li>
          <li>Ashtakavarga</li>
          <li>Mundane astrology</li>
        </ul>
      </div>
    `;
  } else {
    const resultsHtml = results.map(result => {
      const highlightedTopic = highlightSearchTerm(result.topic, searchTerm);
      const highlightedContent = highlightSearchTerm(result.content, searchTerm);
      
      return `
        <div class="search-result">
          <h4>${highlightedTopic}</h4>
          <div class="search-result-source">From: ${result.book}</div>
          <p>${highlightedContent}</p>
        </div>
      `;
    }).join('');
    
    resultsContainer.innerHTML = `
      <div class="search-summary">
        <p>Found ${results.length} result${results.length > 1 ? 's' : ''} for "<strong>${searchTerm}</strong>"</p>
      </div>
      ${resultsHtml}
    `;
  }
  
  // Show modal
  modal.classList.remove('hidden');
  console.log('Search results displayed');
}

// Highlight search terms
function highlightSearchTerm(text, searchTerm) {
  const regex = new RegExp(`(${searchTerm})`, 'gi');
  return text.replace(regex, '<span class="search-highlight">$1</span>');
}

// Modal functionality
function initializeModal() {
  console.log('Initializing modal');
  
  const modal = document.getElementById('searchModal');
  const closeBtn = document.getElementById('closeModal');
  
  if (closeBtn) {
    closeBtn.addEventListener('click', function() {
      console.log('Closing modal via close button');
      modal.classList.add('hidden');
    });
  }
  
  // Close modal when clicking outside
  if (modal) {
    modal.addEventListener('click', function(e) {
      if (e.target === modal) {
        console.log('Closing modal via outside click');
        modal.classList.add('hidden');
      }
    });
  }
  
  // Close modal with Escape key
  document.addEventListener('keydown', function(e) {
    if (e.key === 'Escape' && modal && !modal.classList.contains('hidden')) {
      console.log('Closing modal via Escape key');
      modal.classList.add('hidden');
    }
  });
  
  console.log('Modal initialized');
}

// Make functions globally available
window.toggleChapterContent = toggleChapterContent;
window.navigateToBook = navigateToBook;

console.log('JavaScript file loaded successfully');