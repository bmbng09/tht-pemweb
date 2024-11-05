const form = document.getElementById('form');

form.addEventListener('submit', (e) => {
    e.preventDefault();
    const masukan = document.querySelector('#masukan.input input').value;
    const errorMessage = document.querySelector('#masukan');
    console.log(masukan);

    const errorLama = errorMessage.querySelector('.error');
    if (errorLama) {
        errorLama.remove();
    } 
    if ( masukan === '') {
        const error = document.createElement('div');
        error.classList.add('error');
        error.innerHTML = 'Diisi yahh Anunya🧏‍♀️!';
        errorMessage.appendChild(error);
    }
})