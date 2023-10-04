const theme = 'theme';//saves theme in local storage
const dataTheme = 'data-theme'
const themeTab = '.theme-tab';
const switcherBtn = '.switcher-btn';
const dark = 'dark';
const light = 'light';
const open = 'open';
const active = 'active';

const modalOpen = '[data-open]';
const modalClose = '[data-close]';
const isVisible = 'is-visible';

const dataFilter = '[data-filter]'
const portfolioData = '[data-item]'

const root = document.documentElement;

/*Theme*/ 
const toggleTheme = document.querySelector(themeTab);
const switcher = document.querySelectorAll(switcherBtn);
const currentTheme = localStorage.getItem(theme);

/* Portfolio */
const filterLinks = document.querySelectorAll(dataFilter);
const portfolioItems = document.querySelectorAll(portfolioData);
const searchBox = document.querySelector('#search');

/* Section used to generate cards and modals dynamically */
// const portfolioCards = [
//   {
//     item: "web",
//     open: "web-1",
//     imgSrc: "./assets/images/portfolio-1.jpg",
//     category: "Web Development",
//     title: "Food Website",
//   },
//   {
//     item: "web",
//     open: "web-2",
//     imgSrc: "./assets/images/portfolio-2.jpg",
//     category: "Web Development",
//     title: "Skate Website",
//   },
//   {
//     item: "web",
//     open: "web-3",
//     imgSrc: "./assets/images/portfolio-3.jpg",
//     category: "Web Development",
//     title: "Eating Website",
//   },
//   {
//     item: "ui",
//     open: "ui-1",
//     imgSrc: "./assets/images/portfolio-4.jpg",
//     category: "UI Design",
//     title: "Cool Design",
//   },
//   {
//     item: "app",
//     open: "app-1",
//     imgSrc: "./assets/images/portfolio-5.jpg",
//     category: "App Development",
//     title: "Game App",
//   },
//   {
//     item: "app",
//     open: "app-2",
//     imgSrc: "./assets/images/portfolio-6.jpg",
//     category: "App Development",
//     title: "Gambling App",
//   },
//   {
//     item: "app",
//     open: "app-3",
//     imgSrc: "./assets/images/portfolio-7.jpg",
//     category: "App Development",
//     title: "Money Website",
//   },
//   {
//     item: "ui",
//     open: "ui-2",
//     imgSrc: "./assets/images/portfolio-8.jpg",
//     category: "UI Design",
//     title: "Fantastic Design",
//   },
// ];

// const modalData = [
//   {
//     id: "web-1",
//     header_title: "Web Project 1",
//     imgSrc: "./assets/images/portfolio-1.jpg",
//     dialog_title: "My first awesome website",
//     p1: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore",
//     p2: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore",
//   },
//   {
//     id: "web-2",
//     header_title: "Web Project 2",
//     imgSrc: "./assets/images/portfolio-2.jpg",
//     dialog_title: "My first awesome website",
//     p1: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore",
//     p2: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore",
//   },
//   {
//     id: "web-3",
//     header_title: "Web Project 3",
//     imgSrc: "./assets/images/portfolio-3.jpg",
//     dialog_title: "My first awesome website",
//     p1: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore",
//     p2: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore",
//   },
//   {
//     id: "ui-1",
//     header_title: "UI Project 1",
//     imgSrc: "./assets/images/portfolio-4.jpg",
//     dialog_title: "My first awesome website",
//     p1: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore",
//     p2: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore",
//   },
//   {
//     id: "app-1",
//     header_title: "App Project 1",
//     imgSrc: "./assets/images/portfolio-5.jpg",
//     dialog_title: "My first awesome website",
//     p1: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore",
//     p2: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore",
//   },
//   {
//     id: "app-2",
//     header_title: "App Project 2",
//     imgSrc: "./assets/images/portfolio-6.jpg",
//     dialog_title: "My first awesome website",
//     p1: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore",
//     p2: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore",
//   },
//   {
//     id: "app-3",
//     header_title: "App Project 3",
//     imgSrc: "./assets/images/portfolio-7.jpg",
//     dialog_title: "My first awesome website",
//     p1: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore",
//     p2: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore",
//   },
//   {
//     id: "ui-2",
//     header_title: "UI Project 2",
//     imgSrc: "./assets/images/portfolio-8.jpg",
//     dialog_title: "My first awesome website",
//     p1: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore",
//     p2: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore",
//   },
// ]



const setActive = (elm, selector) => {
  if (document.querySelector(`${selector}.${active}`) !== null) {
    document.querySelector(`${selector}.${active}`).classList.remove(active);
  }
    elm.classList.add(active);
}

const setTheme = (val) => {
  if (val === dark) {
    root.setAttribute(dataTheme, dark);
    localStorage.setItem(theme, dark);
  } else {
    root.setAttribute(dataTheme, light);
    localStorage.setItem(theme, light);
  }
}

if (currentTheme) {
  root.setAttribute(dataTheme, currentTheme);
  switcher.forEach((btn) => {
    btn.classList.remove.active;
  })

  if (currentTheme === dark) {
    switcher[1].classList.add(active);
  } else {
    switcher[0].classList.add(active);
  }
}

toggleTheme.addEventListener('click', function() {
  const tab = this.parentElement.parentElement;
  if (!tab.className.includes(open)) {
    tab.classList.add(open);
  } else {
    tab.classList.remove(open);
  }
})

for (const elm of switcher) {
  elm.addEventListener('click', function() {
    const toggle = this.dataset.toggle;
    //set active state
    setActive(elm, switcherBtn);
    setTheme(toggle);
  })
}

searchBox.addEventListener('keyup', (e) => {
  const searchInput = e.target.value.toLowerCase().trim();

  portfolioItems.forEach((card) => {
    if (card.dataset.item.includes(searchInput)) {
      card.style.display = 'block'
    } else {
      card.style.display = 'none'
    }
  })
})

for (const link of filterLinks) {
  link.addEventListener('click', function(){
    setActive(link, '.filter-link');
    const filter = this.dataset.filter;
    portfolioItems.forEach((card) => {
      if (filter === 'all') {
        card.style.display = 'block';
      } else if (card.dataset.item === filter) {
        card.style.display = 'block'
      } else {
        card.style.display = 'none';
      }
    })
  })
}

/* Section used to generate cards and modals dynamically */

// const portfolioCardContainer = document.getElementById("portfolio-card-container");

// portfolioCards.forEach((portfolioCard) => {
//   const card = document.createElement("div");
//   card.className = "portfolio-card";
//   card.setAttribute("data-item", portfolioCard.item);
//   card.setAttribute("data-open", portfolioCard.open);

//   const cardBody = document.createElement("div");
//   cardBody.className = "card-body";

//   const img = document.createElement("img");
//   img.src = portfolioCard.imgSrc;
//   img.alt = "portfolio-icon";

//   const link = document.createElement("div");
//   link.className = "card-popup-box";

//   const categoryDiv = document.createElement("div");
//   categoryDiv.textContent = portfolioCard.category;

//   const titleH3 = document.createElement("h3");
//   titleH3.textContent = portfolioCard.title;

//   link.appendChild(categoryDiv);
//   link.appendChild(titleH3);

//   cardBody.appendChild(img);
//   cardBody.appendChild(link);

//   card.appendChild(cardBody);

//   portfolioCardContainer.appendChild(card);
// });


// function createModalsFromData(data) {
//   const portfolioModalContainer = document.getElementById("portfolio-modal-container");

//   portfolioModalContainer.innerHTML = '';

//   data.forEach((item) => {
//     // Create modal element
//     const modal = document.createElement("div");
//     modal.id = item.id;
//     modal.classList.add("modal");
//     modal.dataset.animation = "slideInOutTop";

//     // Create modal content
//     const modalContent = `
//       <div class="modal-dialog">
//         <header class="modal-header">
//           <h3>${item.header_title}</h3>
//           <i class="fas fa-times" data-close></i>
//         </header>
//         <div class="modal-body">
//           <div class="img-wrapper">
//             <img src="${item.imgSrc}" alt="portfolio image">
//           </div>
//           <div class="text-wrapper">
//             <p><strong>${item.dialog_title}</strong></p>
//             <p>${item.p1}</p>
//             <p>${item.p2}</p>
//           </div>
//         </div>
//       </div>
//     `;

//     modal.innerHTML = modalContent;

//     // Append the modal to the container
//     portfolioModalContainer.appendChild(modal);
//   });
// }

// Call the function to create modals from the data
// createModalsFromData(modalData);

/*Modal*/ 
const openModal = document.querySelectorAll(modalOpen);
const closeModal = document.querySelectorAll(modalClose);

//Modal/Full Site Modal "open buttons"
for (const elm of openModal) {
  elm.addEventListener('click', function() {
    console.log(elm);
    const modalId = this.dataset.open;
    document.getElementById(modalId).classList.add(isVisible);
  })
}
// Close Modal
for (const elm of closeModal) {
  elm.addEventListener('click', function() {
  this.parentElement.parentElement.parentElement.classList.remove(isVisible);
  })
}

// Close Pop-Up Modal
document.addEventListener('click', (e) => {
  if (e.target === document.querySelector('.modal.is-visible')) {
    document.querySelector('.modal.is-visible').classList.remove(isVisible);
  }
})

document.addEventListener('keyup', (e) => {
  if (e.key === 'Escape') {
    document.querySelector('.modal.is-visible').classList.remove(isVisible);
  }
})

const elmsDisplayed = getComputedStyle(root).getPropertyValue('--marquee-elms-displayed');
const marqueeContent = document.querySelector('ul.marquee-content');

root.style.setProperty('--marquee-elms', marqueeContent.children.length);

for (let i = 0; i < elmsDisplayed; i += 1) {
  marqueeContent.appendChild(marqueeContent.children[i].cloneNode(true))
}