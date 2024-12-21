// Apply the saved theme when the main page loads
document.addEventListener('DOMContentLoaded', () => {
    const savedTheme = localStorage.getItem('theme') || 'light-mode';
    document.body.classList.add(savedTheme); // Add the saved theme to the body
    applyThemeToComponents(savedTheme); // Apply theme to main components
});

// Function to apply the theme to main components
function applyThemeToComponents(theme) {
    // Select main components that need theme adjustment
    const components = ['.navbar', '.sidebar', '.feed', '.right-sidebar'];

    // Apply the theme class to each component
    components.forEach(selector => {
        const element = document.querySelector(selector);
        if (element) {
            element.classList.remove('light-mode', 'dark-mode'); // Remove existing theme classes
            element.classList.add(theme); // Apply the saved theme
        }
    });
}
