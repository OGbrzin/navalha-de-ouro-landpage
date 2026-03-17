document.addEventListener('DOMContentLoaded', () => {
    // Inicializar ícones do Lucide
    lucide.createIcons();

    // Lógica do Menu Mobile
    const mobileMenuBtn = document.getElementById('mobile-menu-btn');
    const mobileMenu = document.getElementById('mobile-menu');
    const navbar = document.getElementById('navbar');

    mobileMenuBtn.addEventListener('click', () => {
        mobileMenu.classList.toggle('hidden');
    });

    // Fechar menu mobile ao clicar em um link
    const mobileLinks = mobileMenu.querySelectorAll('a');
    mobileLinks.forEach(link => {
        link.addEventListener('click', () => {
            mobileMenu.classList.add('hidden');
        });
    });

    // Efeito de sombra/Background no Navbar ao rolar a página
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            navbar.classList.add('shadow-lg', 'bg-leather/95');
            navbar.classList.remove('bg-leather/80');
        } else {
            navbar.classList.remove('shadow-lg', 'bg-leather/95');
            navbar.classList.add('bg-leather/80');
        }
    });

    // Intersection Observer para animações de fade-in no scroll (Scroll Reveal)
    const revealElements = document.querySelectorAll('.reveal');

    const revealOptions = {
        threshold: 0.15,
        rootMargin: "0px 0px -50px 0px"
    };

    const revealOnScroll = new IntersectionObserver(function(entries, observer) {
        entries.forEach(entry => {
            if (!entry.isIntersecting) {
                return;
            } else {
                entry.target.classList.add('active');
                observer.unobserve(entry.target);
            }
        });
    }, revealOptions);

    revealElements.forEach(el => {
        revealOnScroll.observe(el);
    });
});
