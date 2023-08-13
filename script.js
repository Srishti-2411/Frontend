document.addEventListener('DOMContentLoaded', function () {
    const header = document.querySelector('.header');
    const navLinks = document.querySelectorAll('.nav-links li a');

    let lastScrollPosition = window.scrollY;

    window.addEventListener('scroll', () => {
        const currentScrollPosition = window.scrollY;

        if (currentScrollPosition > lastScrollPosition) {
            header.classList.add('blurred');
        } else {
            header.classList.remove('blurred');
        }

        lastScrollPosition = currentScrollPosition;
    });

    navLinks.forEach(link => {
        link.addEventListener('click', e => {
            e.preventDefault();
            const targetId = link.getAttribute('href');
            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop - 70,
                    behavior: 'smooth'
                });
            }
        });
    });
});


