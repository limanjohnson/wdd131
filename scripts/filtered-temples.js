// Create hamburger menu slide

const hamButton = document.querySelector('#menu');
const navigation = document.querySelector('.navigation');
const navItem = document.querySelectorAll('.navigation a');

hamButton.addEventListener('click', () => {
    navigation.classList.toggle('open');
    hamButton.classList.toggle('open');
});

// apply 'active' class to selected <a> tag

navItem.forEach(link => {
    link.addEventListener('click', () => {
        navItem.forEach(nav => nav.classList.remove('active'));

        link.classList.add('active');
    });
});

// check screen size and togle hamburger menu
function handleResize() {
    if (window.innerWidth >= 651) {
        navigation.classList.add('open');
        hamButton.style.display = 'none';
    } else {
        navigation.classList.remove('open');
        hamButton.style.display = 'block';
    }
}

// Run on page load
handleResize();

// Check window resize
window.addEventListener('resize', handleResize);


// Get date and last modified date for footer

const currentyear = new Date();
let year = currentyear.getFullYear();
document.getElementById("currentyear").innerHTML = "&copy;" + year;

// alert(document.lastModified);
//returns: day, month day, year time

let oLastModif = new Date(document.lastModified);
document.getElementById("lastModified").innerHTML = oLastModif;

const temples = [
    {
      templeName: "Aba Nigeria",
      location: "Aba, Nigeria",
      dedicated: "2005, August, 7",
      area: 11500,
      imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/aba-nigeria/400x250/aba-nigeria-temple-lds-273999-wallpaper.jpg"
    },
    {
      templeName: "Manti Utah",
      location: "Manti, Utah, United States",
      dedicated: "1888, May, 21",
      area: 74792,
      imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/manti-utah/400x250/manti-temple-768192-wallpaper.jpg"
    },
    {
      templeName: "Payson Utah",
      location: "Payson, Utah, United States",
      dedicated: "2015, June, 7",
      area: 96630,
      imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/payson-utah/400x225/payson-utah-temple-exterior-1416671-wallpaper.jpg"
    },
    {
      templeName: "Yigo Guam",
      location: "Yigo, Guam",
      dedicated: "2020, May, 2",
      area: 6861,
      imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/yigo-guam/400x250/yigo_guam_temple_2.jpg"
    },
    {
      templeName: "Washington D.C.",
      location: "Kensington, Maryland, United States",
      dedicated: "1974, November, 19",
      area: 156558,
      imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/washington-dc/400x250/washington_dc_temple-exterior-2.jpeg"
    },
    {
      templeName: "Lima Perú",
      location: "Lima, Perú",
      dedicated: "1986, January, 10",
      area: 9600,
      imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/lima-peru/400x250/lima-peru-temple-evening-1075606-wallpaper.jpg"
    },
    {
      templeName: "Mexico City Mexico",
      location: "Mexico City, Mexico",
      dedicated: "1983, December, 2",
      area: 116642,
      imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/mexico-city-mexico/400x250/mexico-city-temple-exterior-1518361-wallpaper.jpg"
    },
    {
      templeName: "Melbourne Australia",
      location: "Melbourne, Australia",
      dedicated: "1999, March 20",
      area: 10700,
      imageUrl:
      "https://churchofjesuschristtemples.org/assets/img/temples/melbourne-australia-temple/melbourne-australia-temple-4375-main.jpg"
    },
    {
      templeName: "Durban South Africa",
      location: "Durban, South Afica",
      dedicated: "2016, April 9",
      area: 19860,
      imageUrl:
      "https://churchofjesuschristtemples.org/assets/img/temples/durban-south-africa-temple/durban-south-africa-temple-7936-main.jpg"
    },
    {
      templeName: "McAllen Texas",
      location: "McAllen, Texas",
      dedicated: "2020, November 21",
      area: 27897,
      imageUrl:
      "https://churchofjesuschristtemples.org/assets/img/temples/mcallen-texas-temple/mcallen-texas-temple-39905-main.jpg"
    }
];

const homeButton = document.querySelector('#home')
const oldTemples = document.querySelector('#old');
const newTemples = document.querySelector('#new');
const largeTemples = document.querySelector('#large');
const smallTemples = document.querySelector('#small');

oldTemples.addEventListener("click", () => {
    createTempleCard(temples.filter(temple => {
        const year = parseInt(temple.dedicated.split(',')[0]); // find year from dedicated value in object
        return year < 1900;
    }));
});

newTemples.addEventListener("click", () => {
    createTempleCard(temples.filter(temple => {
        const year = parseInt(temple.dedicated.split(',')[0]); // find year from dedicated value in object
        return year >= 1900; 
    }));
});

largeTemples.addEventListener("click", () => {
    createTempleCard(temples.filter(temple => temple.area > 90000)); // filter temples with sqft greater than 90000
});

smallTemples.addEventListener("click", () => {
    createTempleCard(temples.filter(temple => temple.area < 10000)); // filter temples with sqft less than 10000
});

homeButton.addEventListener("click", () => {
    createTempleCard(temples); // Display all temples
});

createTempleCard(temples);

function createTempleCard(filteredTemples) {
    const templeCards = document.querySelector("#temple-project_images");
    templeCards.innerHTML = "";
    
    filteredTemples.forEach(temple => {
        let card = document.createElement('div');
        let figure = document.createElement('figure');
        let cardName = document.createElement('h2');
        let templeLocation = document.createElement('p');
        let templeDedication = document.createElement('p');
        let templeArea = document.createElement('p');
        let img = document.createElement('img');

        card.classList.add('temple-card');
        cardName.textContent = temple.templeName;
        templeLocation.textContent = `Location: ${temple.location}`;
        templeDedication.textContent = `Dedicated: ${temple.dedicated}`;
        templeArea.textContent = `Size: ${temple.area} sq ft`;
        img.src = temple.imageUrl;
        img.alt = temple.templeName;
        img.setAttribute('loading', 'lazy');

        figure.appendChild(img);
        card.appendChild(cardName);
        card.appendChild(templeLocation);
        card.appendChild(templeDedication);
        card.appendChild(templeArea);
        card.appendChild(figure);
        templeCards.appendChild(card);
    })
}