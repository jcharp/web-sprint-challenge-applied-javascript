// STEP 1: Create a Header component.
// -----------------------
// Write a function that takes no arguments and returns the markup you see below:
//
//  <div class="header">
//    <span class="date">MARCH 28, 2020</span>
//    <h1>Lambda Times</h1>
//    <span class="temp">98°</span>
//  </div>
//
// Use your function to create a header
// and append it to the DOM inside the div.header-container

// creating each element and adding classes and content as i go
function Header() {
    const header = document.createElement('div');
    header.classList.add('header');

    const span = document.createElement('span');
    span.classList.add('date');
    span.innerText = "March 28, 2020";

    const hOne = document.createElement('h1');
    hOne.innerText = "Lambda Times";

    const temp = document.createElement('temp');
    temp.classList.add('temp');
    temp.innerText = "98 \u00B0";

    //setting the structure of header div
    header.appendChild(span);
    header.appendChild(hOne);
    header.appendChild(temp);

    //creating selector and appending function
    const headerContainer = document.querySelector('.header-container');
    headerContainer.appendChild(header);

}

Header();