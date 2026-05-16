const menuBtn = document.querySelector('#menuBtn');
const navMenu = document.querySelector('#navMenu');

menuBtn.addEventListener('click', () => {
    navMenu.classList.toggle('open');

    if (navMenu.classList.contains('open')) {
        menuBtn.textContent = '✖';
    } else {
        menuBtn.textContent = '☰';
    }
});

document.querySelector('#year').textContent = new Date().getFullYear();

document.querySelector('#lastModified').textContent =
    `Last Modification: ${document.lastModified}`;