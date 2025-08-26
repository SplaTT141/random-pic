import { accessKey } from "./accessKey.js";

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
        const randomPage = Math.floor(Math.random() * 1000) + 1;
        let imgUrl = [];

        fetch(`https://api.unsplash.com/photos?per_page=${inputDOM.value}&page=${randomPage}`, {
            headers: {
                Authorization: `Client-ID ${accessKey}`
            }
        })
            .then(res => res.json())
            .then(data => {
                data.forEach(e => {
                    imgUrl.push(e.urls.regular);
                })
                imagesDOM.innerHTML = imgUrl.map(url => `<img src="${url}" alt="picture"/>`).join('');
            })
            .catch(console.error);
    }

    setTimeout(() => {
        errorDOM.classList.remove('active');
    }, 3000)

})
