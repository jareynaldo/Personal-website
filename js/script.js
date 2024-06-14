document.addEventListener('DOMContentLoaded', () => {
    const rocket = document.getElementById('rocket');
    const regularShuttle = document.createElement('img');
    regularShuttle.src = '../Images/shuttle.png'; // Update with your actual image path
    regularShuttle.id = 'regular-shuttle';
    document.body.appendChild(regularShuttle);
    
    window.addEventListener('scroll', () => {
        const scrollPosition = window.scrollY;
        if (scrollPosition > 10 && scrollPosition < 300) {
            rocket.style.bottom = '-100%';
            rocket.style.opacity = '1';
            rocket.style.animationPlayState = 'running';
        } else if (scrollPosition >= 200) {
            rocket.style.opacity = '0';
            regularShuttle.style.top = '45%'; // Adjust this value based on where you want the regular shuttle to appear
            regularShuttle.style.opacity = '1';
        } else {
            rocket.style.top = '50%';
            rocket.style.opacity = '0';
            regularShuttle.style.opacity = '0';
        }
    });
});
