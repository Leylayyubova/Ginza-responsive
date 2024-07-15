const darkModeToggle = document.getElementById('dark-mode-toggle');
    const iconToggle = document.getElementById('icon-toggle');
    const content = document.getElementById('content');

    if (document.body.classList.contains('dark-mode')) {
        iconToggle.classList.remove('fa-sun');
        iconToggle.classList.add('fa-moon');
    } else {
        iconToggle.classList.remove('fa-moon');
        iconToggle.classList.add('fa-sun');
    }

    darkModeToggle.addEventListener('click', () => {
        const isDarkMode = document.body.classList.toggle('dark-mode');
        content.classList.toggle('dark-mode');

        if (isDarkMode) {
            iconToggle.classList.remove('fa-sun');
            iconToggle.classList.add('fa-moon');
        } else {
            iconToggle.classList.remove('fa-moon');
            iconToggle.classList.add('fa-sun');
        }
    });