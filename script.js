// Wait for the DOM to be fully loaded
document.addEventListener('DOMContentLoaded', function() {
    // Get the welcome button element
    const welcomeButton = document.getElementById('welcomeButton');
    
    // Add click event listener to the button
    welcomeButton.addEventListener('click', function() {
        // Display welcome message in an alert
        alert('🎉 Welcome to My Website! 🌟 Thank you for visiting my first webpage! This is created as part of my web development learning journey. I hope you enjoy exploring it!');
        
        // Optional: Change button text temporarily
        const originalText = welcomeButton.textContent;
        welcomeButton.textContent = 'Thanks for Visiting!';
        
        // Reset button text after 2 seconds
        setTimeout(() => {
            welcomeButton.textContent = originalText;
        }, 2000);
    });
    
// Additional interactive feature: Smooth scrolling for navigation links
    
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            if (!this.classList.contains('external')) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            const targetSection = document.querySelector(targetId);
            
            if (targetSection) {
                targetSection.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
            }
        });
    });
    
    // Console log for demonstration
    console.log('Website loaded successfully! Welcome to My First Webpage.');
});