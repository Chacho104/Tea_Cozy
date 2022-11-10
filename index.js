// Highlighting the navbar based on the section currently being scrolled

// First, grab the navbar and the sections 

const navLi = document.querySelectorAll('nav ul li');
const sections = document.querySelectorAll('section');

// Add an event listener to listen for scroll

window.addEventListener('scroll', () => {
    let current = '';

    sections.forEach( section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;

        if(scrollY >= (sectionTop - sectionHeight / 3)) {
            current = section.getAttribute('id');
        }
    })

    navLi.forEach( li => {
        li.classList.remove('active');

        if(li.classList.contains(current)) {
            li.classList.add('active');
        }
    })
});