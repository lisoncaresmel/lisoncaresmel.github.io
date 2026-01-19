document.addEventListener("DOMContentLoaded", () => {
    const btn = document.querySelector(".header-btn");
    const nav = document.querySelector(".nav");
    const desktopBreakpoint = 1024;

    if (!btn || !nav) return;

    // Toggle menu en mobile
    btn.addEventListener("click", () => {
        nav.classList.toggle("nav-collapse");
    });

    // Reset du menu quand on passe en desktop
    const handleResize = () => {
        if (window.innerWidth >= desktopBreakpoint) {
            nav.classList.remove("nav-collapse");
        }
    };

    // Au resize
    window.addEventListener("resize", handleResize);

    // Au chargement (sécurité)
    handleResize();
});