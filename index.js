const toggleButton = document.getElementById('toggle-btn');
const navigationList = document.getElementById('navigation-list');

toggleButton.addEventListener('click', () => {
    navigationList.classList.toggle('active');
});