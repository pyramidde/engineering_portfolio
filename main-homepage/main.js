const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            entry.target.classList.add('show');
        } else {
            entry.target.classList.remove('show');
        }
    });
}, {
});

document.addEventListener('DOMContentLoaded', () => {
    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                entry.target.classList.add('show');
            } else {
                entry.target.classList.remove('show');
            }
        });
    });

    const animationsElements = document.querySelectorAll('.animations');
    animationsElements.forEach((el) => observer.observe(el));
});


const vtlObserver = new IntersectionObserver((entries) => {
entries.forEach((e) => {
    if (e.isIntersecting) e.target.play().catch(() => {});
    else e.target.pause();
});
}, { threshold: 0.1 });

document.querySelectorAll('.vtl-bg').forEach((v) => vtlObserver.observe(v));

/* https://www.youtube.com/watch?v=T33NN_pPeNI */