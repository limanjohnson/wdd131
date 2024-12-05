document.addEventListener('DOMContentLoaded', ()  => {
    const reviewCount = parseInt(localStorage.getItem('reviewCount')) || 0;

    const counterDisplay = document.querySelector('#review-counter');

    if(counterDisplay) {
        counterDisplay.textContent = reviewCount === 1
            ? `You have submitted 1 review.`
            : `You have submitted ${reviewCount} reviews.`;
    }
});


const currentyear = new Date();
let year = currentyear.getFullYear();
document.getElementById("currentyear").innerHTML = "&copy;" + year;

// alert(document.lastModified);
//returns: day, month day, year time

let oLastModif = new Date(document.lastModified);
document.getElementById("lastModified").innerHTML = oLastModif;