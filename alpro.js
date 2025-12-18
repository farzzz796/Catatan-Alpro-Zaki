// Smooth scrolling for navigation links
document.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', e => {
        e.preventDefault();
        const href = link.getAttribute('href');
        const targetSection = document.querySelector(href);
        targetSection.scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Modal functionality
const getStartedButton = document.getElementById('get-started');
const modal = document.getElementById('modal');
const closeModal = document.getElementById('close-modal');

getStartedButton.addEventListener('click', () => {
    modal.classList.remove('hidden');
});

closeModal.addEventListener('click', () => {
    modal.classList.add('hidden');
});