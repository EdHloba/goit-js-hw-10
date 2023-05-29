const API_KEY = 'live_80ex4wf8IS4bu0YKx7Js7p6YcQ1sFTSyysCT1nxiV8Wz2kpRphEWdFc3CgyQaagq';
const BASE_URL = 'https://api.thecatapi.com/v1/';


function fetchBreeds() {
  return fetch(`${BASE_URL}breeds`)
      .then(response => response.json());
}

function fetchCatByBreed(breedId){
  return fetch(`${BASE_URL}images/search?limit=1&breed_ids=${breedId}&api_key=${API_KEY}`)
      .then(data => data.json());
}

export { fetchBreeds, fetchCatByBreed };