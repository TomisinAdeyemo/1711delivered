document.addEventListener("DOMContentLoaded", function() {
    const loader = document.getElementById('loader');
    const content = document.getElementById('content');
    
    window.onload = function() {
        setTimeout(function() {
            loader.style.display = 'none';
            content.classList.remove('hidden');
        }, 2000); 
    };
});