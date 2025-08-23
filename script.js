const inputDOM = document.querySelector('input');
const btnDOM = document.querySelector('button');


btnDOM.addEventListener('click', () => {
    const errorDOM = document.querySelector('.error');

    if (inputDOM.value === '') {
        errorDOM.classList.add('active');
        errorDOM.textContent = 'Enter a number';
    } else if (inputDOM.value <= 0) {
        errorDOM.classList.add('active');
        errorDOM.textContent = 'Number is too low';
    } else if (inputDOM.value > 10) {
        errorDOM.classList.add('active');
        errorDOM.textContent = 'Number is too large';
    } else {
        const imagesDOM = document.querySelector('.images');
        imagesDOM.insertAdjacentHTML('afterbegin', `<img src="test.jpg" alt='pic' />`)
    }

    setTimeout(() => {
        errorDOM.classList.remove('active');
    }, 3000)
})
