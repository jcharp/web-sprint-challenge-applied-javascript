// STEP 2: Create tabs
// -----------------------
// Using axios send a GET request to the address: https://lambda-times-api.herokuapp.com/topics
// Once the data is resolved use console logs or breakpoints to review the structure.
// Iterate over the topics creating a new tab for each topic, and appending it to the DOM
// under the div.topics element.
//
//  Each tab should look like this:
//    <div class="tab">topic here</div>
//
// NOTE: you do _not_ need to install axios as it's included in the HTML via script element

//axios call to find structure


//function to tab for topics
    function topics(obj) {
        const tab = document.createElement('div');
        tab.classList.add('tab')
        tab.innerText = obj;
        
        return tab;
    }

    //added entry point to append topics
    const entry = document.querySelector('.topics');


    //moved axios to create topics
    axios.get('https://lambda-times-api.herokuapp.com/topics')
    .then(res => {
        //console.log("this is the res ", res)

        res.data.topics.forEach(ele => {
            const newTopic = topics(ele)
            entry.appendChild(newTopic)
            
        })
    })
    .catch(err => {
        console.log(err)
    })