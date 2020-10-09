const base_url = "https://api.jikan.moe/v3";

const searchWord = document.getElementById('search');
const searchReault = document.getElementById('search__results');

const searchResults = document.querySelector('#search__results');
const resultsTemplate = document.querySelector('#results__template');

function searchAnime(event){

    event.preventDefault();
    fetch(`${base_url}/search/anime?q=${searchWord.value}&page=1`)
    .then(res => res.json())
    .then(data => {
        console.log(data);
        searchResults.innerText = "";
        data.results.forEach(element => {
            const newCard = document.importNode(resultsTemplate.content, true);
            const cardImg = newCard.querySelector('.search__img');
            const cardTitle = newCard.querySelector('.search__title');
            const cardUrl = newCard.querySelector('.search__url');
            
            cardImg.src = element.image_url;
            cardTitle.innerText = element.title;
            cardUrl.setAttribute("href", element.urldata);
            cardUrl.href = element.url;
            searchResults.appendChild(newCard);
        });
    })
    .catch(err => console.log(err));

}

const searchBtn = document.getElementById('search__btn');

searchBtn.addEventListener('click',searchAnime);
