// Select the theme buttons
const lightModeBtn = document.querySelector('.theme-btn.light-mode');
const darkModeBtn = document.querySelector('.theme-btn.dark-mode');
const saveBtn = document.querySelector('.save-btn');
const themeMessage = document.querySelector('.theme-message');

// Apply the saved theme when the settings page loads
document.addEventListener('DOMContentLoaded', () => {
    const savedTheme = localStorage.getItem('theme') || 'light-mode';
    applyTheme(savedTheme); // Apply the saved theme
});

// Function to apply the selected theme
function applyTheme(theme) {
    document.body.classList.remove('light-mode', 'dark-mode');
    document.body.classList.add(theme); // Add the selected theme class to body

    // Apply theme class to settings container and buttons as well
    document.querySelector('.settings-container').className = `settings-container ${theme}`;
    lightModeBtn.classList.remove('active');
    darkModeBtn.classList.remove('active');

    // Mark the selected button as active
    if (theme === 'light-mode') {
        lightModeBtn.classList.add('active');
    } else {
        darkModeBtn.classList.add('active');
    }
}

// Event listeners for theme buttons
lightModeBtn.addEventListener('click', () => {
    applyTheme('light-mode');
    localStorage.setItem('theme', 'light-mode'); // Save selection to localStorage
});

darkModeBtn.addEventListener('click', () => {
    applyTheme('dark-mode');
    localStorage.setItem('theme', 'dark-mode'); // Save selection to localStorage
});

// Optional: Show a success message when saving changes
saveBtn.addEventListener('click', () => {
    themeMessage.textContent = "Theme changed successfully!";
    themeMessage.style.display = 'block';
    setTimeout(() => themeMessage.style.display = 'none', 2000); // Hide after 2 seconds
});
