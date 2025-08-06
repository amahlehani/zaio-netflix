// FAQ Accordion Functionality
document.addEventListener('DOMContentLoaded', function() {
    // Get all FAQ buttons
    const faqButtons = document.querySelectorAll('.faq-item .block');
    
    // Add click event listener to each button
    faqButtons.forEach(button => {
        button.addEventListener('click', function() {
            const answer = this.nextElementSibling;
            const icon = this.querySelector('.material-symbols-outlined');
            
            // Toggle the answer visibility
            if (answer.style.display === 'block' || answer.style.display === '') {
                answer.style.display = 'none';
                icon.textContent = 'add';
            } else {
                answer.style.display = 'block';
                icon.textContent = 'remove';
            }
        });
    });
}); 