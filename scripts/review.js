document.addEventListener('DOMContentLoaded', ()  => {
    const reviewCount = localStorage.getItem('reviewCount') || 0;

    const counterDisplay = document.querySelector('#review-counter');

    if(counterDisplay) {
        counterDisplay.textContent = `You have submitted ${reviewCount} reviews.`;
    }
});