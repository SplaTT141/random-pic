const inputDOM = document.querySelector('input');
const btnDOM = document.querySelector('button');

btnDOM.addEventListener('click', () => {
    const errorDOM = document.querySelector('.error');

    if (inputDOM.value === '' || isNaN(+inputDOM.value)) {
        errorDOM.classList.add('active');
        errorDOM.textContent = 'Enter a number';
    } else if (+inputDOM.value <= 0) {
        errorDOM.classList.add('active');
        errorDOM.textContent = 'Number is too low';
    } else if (+inputDOM.value > 10) {
        errorDOM.classList.add('active');
        errorDOM.textContent = 'Number is too large';
    } else {
        const imagesDOM = document.querySelector('.images');
        const randomPage = Math.floor(Math.random() * 1000) + 1;

        fetch(`https://api.unsplash.com/photos?per_page=${inputDOM.value}&page=${randomPage}`, {
            headers: {
                Authorization: `Client-ID gnJGv01qFiy98MoKeGWvxJfIHd_vcCZhl6Xk9g6pkxA`
            }
        })
            .then(res => res.json())
            .then(data => {
                imagesDOM.innerHTML = data.map(url => `<img src="${url.urls.regular}" alt="picture"/>`).join('');
            })
            .catch(err => {
                console.error(err)
                imagesDOM.textContent = 'No images found, try again.'
            });
    }

    setTimeout(() => {
        errorDOM.classList.remove('active');
    }, 3000)

})
