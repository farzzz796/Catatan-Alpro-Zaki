// Smooth Scrolling for navigation links
document.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', event => {
        event.preventDefault();
        const href = link.getAttribute('href');
        const target = document.querySelector(href);
        target.scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Example script to log interactions
document.addEventListener('DOMContentLoaded', () => {
    console.log("Website is fully loaded and ready for interaction!");
});