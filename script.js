import { accessKey } from "./accessKey.js";

const inputDOM = document.querySelector('input');
const btnDOM = document.querySelector('button');


btnDOM.addEventListener('click', () => {
    // const errorDOM = document.querySelector('.error');

    // if (inputDOM.value === '') {
    //     errorDOM.classList.add('active');
    //     errorDOM.textContent = 'Enter a number';
    // } else if (inputDOM.value <= 0) {
    //     errorDOM.classList.add('active');
    //     errorDOM.textContent = 'Number is too low';
    // } else if (inputDOM.value > 10) {
    //     errorDOM.classList.add('active');
    //     errorDOM.textContent = 'Number is too large';
    // } else {
    //     const imagesDOM = document.querySelector('.images');
    //     imagesDOM.innerHTML = (`<img src="test.jpg" alt='pic' />`).repeat(inputDOM.value);
    // }

    // setTimeout(() => {
    //     errorDOM.classList.remove('active');
    // }, 3000)

})

fetch('https://api.unsplash.com/photos', {
    headers: {
        Authorization: `Client-ID ${accessKey}`
    },
})
    .then(res => res.json())
    .then(data => {
        console.log(data);
    })
