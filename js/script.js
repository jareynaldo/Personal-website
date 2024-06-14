document.addEventListener('DOMContentLoaded', () => {
    const rocket = document.getElementById('rocket');
    const regularShuttle = document.getElementById('regular-shuttle');

    window.addEventListener('scroll', () => {
        const scrollPosition = window.scrollY;
        if (scrollPosition > 10 && scrollPosition < 300) {
            rocket.style.top = '50%';
            rocket.style.opacity = '1';
            regularShuttle.style.opacity = '0';
        } else if (scrollPosition >= 300) {
            rocket.style.opacity = '0';
            rocket.style.top = '10%';
            regularShuttle.style.top = '45%';
            regularShuttle.style.opacity = '1';
        } else {
            rocket.style.top = '50%';
            rocket.style.opacity = '1';
            regularShuttle.style.opacity = '0';
        }
    });
});
