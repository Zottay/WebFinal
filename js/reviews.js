/* Honesty Statement:
I declare that my assessment is wholly my own work in accordance with Seneca Academic Policy. No part of this assessment has been copied manually or electronically from any other source (including web sites) 
except for the information supplied by the WEB222 instructors and / or made available in this assessment for my use. I also declare that no part of this assignment has been distributed to other students. */

function displayReviews() {
    const container = document.getElementById('reviews-container');
    container.innerHTML = '';  // Clear existing reviews

    window.reviewData.forEach(review => {
        const reviewCard = document.createElement('div');
        reviewCard.classList.add('review-card');
        const starRating = '★'.repeat(review.rating) + '☆'.repeat(5 - review.rating);
        reviewCard.innerHTML = `
            <h3>${review.name} - <span>${new Date(review.date).toLocaleDateString()}</span></h3>
            <p>${starRating}</p>
            <p>${review.text}</p>
        `;
        container.appendChild(reviewCard);
    });
}

function addReview(event) {
    event.preventDefault();

    const name = document.getElementById('name').value;
    const rating = parseInt(document.getElementById('rating').value);
    const text = document.getElementById('review-text').value;

    const newReview = {
        name: name,
        date: new Date().toISOString().split('T')[0],
        rating: rating,
        text: text
    };

    window.reviewData.push(newReview);
    displayReviews();

    window.reviewData.forEach(review => {
        const card = document.createElement("div");
        card.className = "review-card";
    
        const ratingStars = '★'.repeat(review.rating) + '☆'.repeat(5 - review.rating);
    
        card.innerHTML = `
            <h3>${review.name}</h3>
            <p>${review.date}</p>
            <p>${ratingStars}</p>
            <p>${review.comment}</p>
        `;
    
        reviewsSection.appendChild(card);
    });
    

    // Clear form fields
    document.getElementById('review-form').reset();
}
