document.addEventListener('DOMContentLoaded', () => {
    const projectImages = document.querySelectorAll('.project-image');

    projectImages.forEach(img => {
        img.addEventListener('mouseover', () => {
            img.style.transform = 'scale(1.1)';
            img.style.transition = 'transform 0.5s ease';
        });

        img.addEventListener('mouseout', () => {
            img.style.transform = 'scale(1)';
            img.style.transition = 'transform 0.5s ease';
        });
    });
});

document.addEventListener('DOMContentLoaded', () => {
    const image = document.querySelector('.profile-image');
    const imagePosition = () => image.getBoundingClientRect().top;
    const screenPosition = window.innerHeight / 1.3;

    const checkScroll = () => {
        if (imagePosition() < screenPosition) {
            image.style.opacity = '1';
            image.style.transform = 'translateY(0)';
        }
    };

    window.addEventListener('scroll', checkScroll);
});