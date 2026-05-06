// Simple interaction for the phone number
document.querySelector('.phone').addEventListener('click', function() {
    console.log("Contacting Dr. Amrik Singh...");
});

// Animation on scroll for specialties
window.addEventListener('scroll', () => {
    const listItems = document.querySelectorAll('.specialties li');
    const triggerBottom = window.innerHeight / 5 * 4;

    listItems.forEach(item => {
        const itemTop = item.getBoundingClientRect().top;
        if(itemTop < triggerBottom) {
            item.style.opacity = "1";
            item.style.transform = "translateX(0)";
        }
    });
});