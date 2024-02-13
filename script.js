const button = document.querySelector('#button');

button.addEventListener('click', (event) => {
    event.preventDefault();

    clickOnMe();
});

function clickOnMe() {    
    const text = document.querySelector('.block_text');

    text.innerHTML = 'You make my life more beautiful!';
    button.textContent = 'I Love You!'
}