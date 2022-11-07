window.addEventListener('onload', getQuote);

const quoteButton = document.querySelector('.submit2');
quoteButton.addEventListener('click', getQuote);

const endpoint = 'https://www.boredapi.com/api/activity'

async function getQuote() {
    console.log('test click worked');
    let text = await fetch(endpoint);
    let response = await text.text();
    console.log(text);

    let json_response = JSON.parse(response);
    console.log(json_response);
    console.log(json_response['activity']);

    displayQuote(json_response['activity']);

}

function displayQuote(x) {
    //const quoteBox = document.querySelector('#js-quote-text');
    //const textMessages = document.createTextNode(x);
    //quoteBox.innerText(textMessage);
    document.getElementById('js-quote-text').textContent = x;
}

getQuote();

    // fetch(endpoint)
    // .then(response => response.json())
    // .then(data => console.log(data));




getQuote();



function copyActivity() {
    // Get the text field
    let activity = document.getElementById('js-quote-text').textContent;
    console.log(activity);
    navigator.clipboard.writeText(`${activity}`).then(() => {
        alert(`successfully copied: ${activity}`);
      });

      }
