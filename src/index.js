import { fetchBreeds, fetchCatByBreed } from './js/cat-api';


const select = document.querySelector('.breed-select');
const catInfo = document.querySelector('.cat-info');
const loader = document.querySelector('.loader');
const error = document.querySelector('.error');

error.setAttribute('hidden', '');

fetchBreeds()
  .then(data => {
    const markup = data
      .map(cat => `<option value="${cat.id}">${cat.name}</option>`)
      .join('');
    select.innerHTML = markup;
  })
  .catch(error => {
    error.removeAttribute('hidden', '');
    console.log(error);
  });

select.addEventListener('change', el => {
  loader.classList.add('hidden');
  fetchCatByBreed(el.target.value)
    .then(data => {
      catInfo.innerHTML = createMarkup(data);
    })
    .catch(error => {
      error.classList.remove('hidden');
      console.log(error);
    });
});

function createMarkup(cat) {
  const markup = cat
    .map(
      cat =>
        `   <img class="cat-img" src="${cat.url}" width="480px" heigth="auto"/>
                <div class="cat-description">
                <h2 class="name-cat">${cat.breeds[0].name}</h2>
                <p class="description">${cat.breeds[0].description}</p>
                <p class="name-cat">Temperament: 
                ${cat.breeds[0].temperament}</p>
            </div>                        
        `
    )
    .join('');
  return markup;
}
