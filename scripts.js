document.addEventListener('DOMContentLoaded', function() {
    const heroSection = document.querySelector('.hero');
    const heroBackground = document.querySelector('.hero-bg');

    if (heroSection && heroBackground) {
        heroSection.addEventListener('mouseenter', () => {
            heroBackground.classList.add('zoom-effect');
        });
        heroSection.addEventListener('mouseleave', () => {
            heroBackground.classList.remove('zoom-effect');
        });
    }
});

function help(){
    alert('Bạn thực sự cần trợ giúp...?')
}
