const toggleButton = document.getElementById('toggle-skills') as HTMLButtonElement;
const skillsList = document.getElementById('skills-list') as HTMLElement;  // Correct casting

toggleButton.addEventListener('click', () => {
    if (skillsList.style.display === 'none') {
        skillsList.style.display = 'block';
        toggleButton.textContent = 'Hide Skills';
    } else {
        skillsList.style.display = 'none';
        toggleButton.textContent = 'Show Skills';
    }
});

// Initially hide the skills section and set the button text
skillsList.style.display = 'none';
toggleButton.textContent = 'Show Skills';
