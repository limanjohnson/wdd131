document.addEventListener("DOMContentLoaded", () => {
    const selectElement = document.querySelector('#select_product_list');  // Updated id here

    if (!selectElement) {
        console.error("Error: The select element with the id 'select_product_list' was not found.");
        return;  // Safely exit if the element is not found
    }

    const products = [
        { id: "fc-1888", name: "flux capacitor", averagerating: 4.5 },
        { id: "fc-2050", name: "power laces", averagerating: 4.7 },
        { id: "fs-1987", name: "time circuits", averagerating: 3.5 },
        { id: "ac-2000", name: "low voltage reactor", averagerating: 3.9 },
        { id: "jj-1969", name: "warp equalizer", averagerating: 5.0 }
    ];

    products.forEach(product => {
        const option = document.createElement('option');
        option.value = product.id;
        option.textContent = capitalizeFirstLetter(product.name);
        selectElement.appendChild(option);
    });

    const form = document.querySelector('form');
    if (!form) {
        console.error("Error: Form element not found.");
        return;
    }

    form.addEventListener('submit', (event) => {
        event.preventDefault();

        let reviewCount = localStorage.getItem('reviewCount');
        reviewCount = reviewCount ? parseInt(reviewCount) : 0;
        reviewCount += 1;

        // Correctly store the updated review count
        localStorage.setItem('reviewCount', reviewCount);

        const counterDisplay = document.querySelector('#review-counter');
        if (counterDisplay) {
            counterDisplay.textContent = `You have submitted ${reviewCount} reviews.`;
        }

        form.submit();  // Only if required
    });

    const counterDisplay = document.querySelector('#review-counter');
    if (counterDisplay) {
        let reviewCount = localStorage.getItem('reviewCount') || 0;
        counterDisplay.textContent = `You have submitted ${reviewCount} reviews.`;
    }
});

function capitalizeFirstLetter(val) {
    return String(val).charAt(0).toUpperCase() + String(val).slice(1);
}

// select DOM elements for output
// const year = document.querySelector("#currentyear");

// date object
// const today = new Date();

// year.innerhtml = 'getFullYear(): <span class="highlight">${today.getcurrentyear()}</span';

const currentyear = new Date();
let year = currentyear.getFullYear();
document.getElementById("currentyear").innerHTML = "&copy;" + year;

// alert(document.lastModified);
//returns: day, month day, year time

let oLastModif = new Date(document.lastModified);
document.getElementById("lastModified").innerHTML = oLastModif;
