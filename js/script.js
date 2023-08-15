/* Honesty Statement:
I declare that my assessment is wholly my own work in accordance with Seneca Academic Policy. No part of this assessment has been copied manually or electronically from any other source (including web sites) 
except for the information supplied by the WEB222 instructors and / or made available in this assessment for my use. I also declare that no part of this assignment has been distributed to other students. */

document.addEventListener('DOMContentLoaded', function() {
    if (window.location.pathname.endsWith('reviews.html')) {
        loadReviews();
        document.getElementById('add-review-form').addEventListener('submit', addReview);
    }
});

function loadReviews() {
    const reviewsContainer = document.getElementById('reviews-section');
    reviewsContainer.innerHTML = '';  // clear any existing content

    window.reviewData.forEach(review => {
        const reviewCard = `
        <div class="review-card">
            <h3>${review.name}</h3>
            <p>${new Date(review.date).toLocaleDateString()}</p>
            <p>${generateStars(review.rating)}</p>
            <p>${review.review}</p>
        </div>
        `;

        reviewsContainer.innerHTML += reviewCard;
    });
}

function generateStars(rating) {
    let stars = '';
    for(let i = 0; i < 5; i++) {
        if (i < rating) {
            stars += '★';
        } else {
            stars += '☆';
        }
    }
    return stars;
}

function addReview(event) {
    event.preventDefault();
    
    const name = event.target.reviewerName.value;
    const date = event.target.reviewDate.value;
    const rating = parseInt(event.target.rating.value);
    const reviewText = event.target.reviewText.value;

    const newReview = { name, date, rating, review: reviewText };

    window.reviewData.push(newReview);
    loadReviews();

    event.target.reset();  // clear form inputs
}

const dropdownTriggers = document.querySelectorAll('.click-dropdown-trigger');
dropdownTriggers.forEach(target => {
    target.addEventListener('click', function() {
        const dropdown = this.nextElementSibling;
        if (dropdown.style.visibility === 'visible') {
            dropdown.style.visibility = 'hidden';
            dropdown.style.opacity = '0';
            dropdown.style.transform = 'translateY(10px)';
        } else {
            dropdown.style.visibility = 'visible';
            dropdown.style.opacity = '1';
            dropdown.style.transform = 'translateY(0)';
        }
    });
});

document.addEventListener('DOMContentLoaded', () => {
    displayReviews();

    document.getElementById("review-form").addEventListener("submit", function(event) {
        event.preventDefault();

        const name = document.getElementById("name").value;
        const date = document.getElementById("date").value;
        const rating = parseInt(document.getElementById("rating").value);
        const comment = document.getElementById("comment").value;

        const newReview = {
            name: name,
            date: date,
            rating: rating,
            comment: comment
        };

        window.reviewData.push(newReview);
        displayReviews();
    });
});

function displayReviews() {
    const reviewsSection = document.getElementById("reviews-section");
    reviewsSection.innerHTML = '';

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
}

