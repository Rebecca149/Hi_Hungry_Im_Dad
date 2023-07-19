

// grab all of the elements that need to be grabbed
const userInputField = document.querySelector('.messageInputField');
const sendButton = document.querySelector(".sendMessageButton");
const emergencyStopButton = document.querySelector('#emergencyStopButton');
const theChats = document.querySelector('.theChats');

// create a simple alert for the emergency stop

emergencyStopButton.addEventListener('click', emergencyStop);

function emergencyStop(){
    alert('Mum is on her way!');
}

// create a function that fetches data from the API

async function getJoke() {
    const res = await fetch("https://icanhazdadjoke.com/", {
        headers: { accept: "application/json" },  //specifies that the response should be in JSON format
      });
    const data = await res.json();
    let joke = data.joke
    return joke;
}

// import the name of the user (dummy user name used for now)
let userName= 'Dave';

function initialDadGreeting() {
    const dadGreeting = document.createElement('p');
    const placeholderChat = document.createElement('div');
    if (userName === '') {
        dadGreeting.classList.add('dadChat', 'chat');
        dadGreeting.textContent = `Hey kid, I'm Dad. Check out your stats on the homepage and give yourself a name so I know what to call you!`
    }
    else {
        dadGreeting.classList.add('dadChat', 'chat');
        dadGreeting.textContent = `Hey ${userName}, wanna hear a joke?`;
    }
    theChats.appendChild(dadGreeting);
    theChats.appendChild(placeholderChat);
}
initialDadGreeting(userName);

// add an event listener to the send button so that when it is pressed it stores the user input

sendButton.addEventListener('click', sendUserInput);

function sendUserInput() {
 let speechBubble = document.createElement('div')
 let userChat = document.createElement('p') //define a new element that will hold the user's message
 userChat.textContent = `${userInputField.value}`; // adds text content to the new element equal to the current value in the input field
 const placeholderChat = document.createElement('div'); //define a placeholder chat on the dad side so that the user's message is on its own line
 
 speechBubble.classList.add('userChat', 'chat'); //add classes to the new element so that it can be styled

 theChats.appendChild(placeholderChat); //add the placeholder element to the dad side of the CSS grid
 theChats.appendChild(speechBubble); // adds the user's message to the user side of the CSS grid
 speechBubble.appendChild(userChat);
 userInputField.value = '' //empties the input field for next response
 dadTellJoke();
}

// function that puts the next dad joke into the chat

async function dadTellJoke() {
const joke = await getJoke(); //need to await as joke is the result of fetching data from the API
let speechBubble = document.createElement('div')
let dadChat = document.createElement('p');
const placeholderChat = document.createElement('div');

speechBubble.classList.add('dadChat', 'chat')
dadChat.classList.add();
dadChat.textContent = `${joke}`;

theChats.appendChild(speechBubble);
speechBubble.appendChild(dadChat);
theChats.appendChild(placeholderChat);

setTimeout(offerNewJoke, 3000)
}

async function offerNewJoke(){
    let speechBubble = document.createElement('div')
    const jokeOffer = document.createElement('p')
    const placeholderChat= document.createElement('div')

    speechBubble.classList.add('dadChat', 'chat');
    jokeOffer.textContent = `Wanna hear another joke?`; 

    theChats.appendChild(speechBubble);
    speechBubble.appendChild(jokeOffer)
    theChats.appendChild(placeholderChat);

}