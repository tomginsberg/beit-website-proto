function updateBackgroundPosition() {
    const scrollPosition = window.pageYOffset;
    const parallaxSpeed = -1.75; // Adjust this value to change the scrolling speed of the background
    const translateY = scrollPosition * parallaxSpeed;

    document.getElementById('particles-js').style.transform = `translateY(${translateY}px)`;
}

// Add the event listener for the scroll event
window.addEventListener('scroll', updateBackgroundPosition);