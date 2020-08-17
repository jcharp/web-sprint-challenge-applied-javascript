// STEP 3: Create article cards.
// -----------------------
// Send an HTTP GET request to the following address: https://lambda-times-api.herokuapp.com/articles
// Study the response data you get back, closely.
// You will be creating a card for each article in the response.
// This won't be as easy as just iterating over an array though.
//
// Write a function that takes a single article object and returns the following markup:
//
// <div class="card">
//   <div class="headline">{Headline of article}</div>
//   <div class="author">
//     <div class="img-container">
//       <img src={url of authors image} />
//     </div>
//     <span>By {author's name}</span>
//   </div>
// </div>
//
// Add a listener for click events so that when a user clicks on a card, the headline of the article is logged to the console.
//
// Use your function to create a card for each of the articles, and append each card to the DOM.

//axios call to get data structure
axios.get('https://lambda-times-api.herokuapp.com/articles')
.then(res => {
    console.log(res)
})
.catch(err => {
    console.log(err)
})

//creating each element and addin clases and content as i go
function createCard(obj){
    const card = document.createElement('div');
    card.classList.add('card');

    const headline = documetn.createElement('div');
    headline.classList.add('headline');
    headline.innerText = obj.headline;

    const author = document.createElement('hiv');
    author.classList.add('author');
    
    const imgContainer = document.createElement('div');
    imgContainer.classList.add('img-container');

    const img = document.createElement('img');
    img.src = obj.authorPhoto;

    const span = document.createElement('span');
    span.innerText = obj.authorName;

    //setting up the structure
    card.appendChild(headline);
    card.appendChild(author);
    author.appendChild(imgContainer);
    imgContainer.appendChild(img);
    card.appendChild(span);

    return card;

}

