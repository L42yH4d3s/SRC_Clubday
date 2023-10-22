const hint1Button = document.getElementById('hint1');
const hint2Button = document.getElementById('hint2');
const hintText = document.getElementById('hint-text');

hint1Button.addEventListener('click', () => {
    hintText.textContent = "Web resources are typically stored as URL links.";
});

hint2Button.addEventListener('click', () => {
    hintText.textContent = "There is a text file used by websites to communicate with web crawlers or robots";
});
