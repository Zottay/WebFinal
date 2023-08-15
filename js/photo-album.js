document.addEventListener('DOMContentLoaded', function() {
    let thumbnails = document.querySelectorAll('.thumbnail');
    let activePhotos = document.querySelectorAll('.active-photo');
    let container = document.querySelector('.photo-album');

    thumbnails.forEach(function(thumbnail) {
        thumbnail.addEventListener('click', function() {
            let newSrc = thumbnail.getAttribute('src');
            
            let newPhoto = document.createElement('img');
            newPhoto.src = newSrc;
            newPhoto.className = 'active-photo';
            container.appendChild(newPhoto);
            
            setTimeout(() => {
                newPhoto.classList.add('show');
            }, 50); // small delay for a smooth transition

            // Remove previous active-photo after transition
            newPhoto.addEventListener('transitionend', function() {
                activePhotos.forEach(function(photo) {
                    if (photo !== newPhoto) {
                        container.removeChild(photo);
                    }
                });
            });
        });
    });
});
