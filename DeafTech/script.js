document.addEventListener('DOMContentLoaded', () => {
    const sections = document.querySelectorAll('.content-section');
    let lastScrollTop = 0;

    const checkSectionsInView = () => {
        const windowHeight = window.innerHeight;
        const scrollTop = window.pageYOffset || document.documentElement.scrollTop;

        sections.forEach(section => {
            const sectionTop = section.getBoundingClientRect().top + scrollTop;

            if (scrollTop > lastScrollTop) { // Scrolling down
                if (sectionTop < scrollTop + windowHeight - 100) {
                    section.classList.add('slide-in');
                    section.classList.remove('slide-out');
                } else {
                    section.classList.remove('slide-in');
                }
            } else { // Scrolling up
                if (sectionTop < scrollTop + windowHeight - 100) {
                    section.classList.remove('slide-in');
                    section.classList.add('slide-out');
                } else {
                    section.classList.remove('slide-out');
                }
            }
        });

        lastScrollTop = scrollTop <= 0 ? 0 : scrollTop;
    };

    window.addEventListener('scroll', checkSectionsInView);
    checkSectionsInView(); // Initial check

    // Function to update time
    const updateTime = () => {
        const now = new Date();
        const hours = now.getHours().toString().padStart(2, '0');
        const minutes = now.getMinutes().toString().padStart(2, '0');
        const seconds = now.getSeconds().toString().padStart(2, '0');
        const timeString = `${hours}:${minutes}:${seconds}`;
        document.getElementById('current-time').textContent = `Current Time: ${timeString}`;
    };

    // Update time every second
    updateTime();
    setInterval(updateTime, 1000);
});
