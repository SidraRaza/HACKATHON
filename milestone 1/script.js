var toggleButton = document.getElementById('toggle-skills');
var skillsList = document.getElementById('skills-list');
toggleButton.addEventListener('click', function () {
    if (skillsList.style.display === 'none') {
        skillsList.style.display = 'block';
        toggleButton.textContent = 'hide skills';
    }
    else {
        skillsList.style.display = 'none';
        toggleButton.textContent = 'Show Skills';
    }
});
skillsList.style.display = 'none';
toggleButton.textContent = 'Show Skills';
