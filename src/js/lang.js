function changeLanguage() {
    var currentLanguage = localStorage.getItem('language') || 'az';
    var newLanguage = currentLanguage === 'az' ? 'en' : 'az';

    var elements = document.querySelectorAll('[data-az], [data-en]');

    elements.forEach(function(element) {
        if (newLanguage === 'az') {
            element.textContent = element.getAttribute('data-az');
        } else {
            element.textContent = element.getAttribute('data-en');
        }
    });

    localStorage.setItem('language', newLanguage);
}

window.onload = function() {
    var currentLanguage = localStorage.getItem('language') || 'az';
    var elements = document.querySelectorAll('[data-az], [data-en]');

    elements.forEach(function(element) {
        if (currentLanguage === 'az') {
            element.textContent = element.getAttribute('data-az');
        } else {
            element.textContent = element.getAttribute('data-en');
        }
    });

    document.getElementById('language-toggle').addEventListener('click', changeLanguage);
};
