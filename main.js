

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
    console.log(data.joke);
}

// import the name of the user (dummy user name used for now)
let userName= 'Dave';

function initialDadGreeting() {
    const dadGreeting = document.createElement('p');
    const placeholderChat = document.createElement('div')
    if (userName === '') {
        dadGreeting.classList.add('dadChat');
        dadGreeting.textContent = `Hey kid, I'm Dad. Check out your stats on the homepage and give yourself a name so I know what to call you!`
    }
    else {
        dadGreeting.classList.add('dadChat');
        dadGreeting.textContent = `Hey ${userName}, wanna hear a joke?`;
    }
    theChats.appendChild(dadGreeting);
    theChats.appendChild(placeholderChat);
}

initialDadGreeting(userName);

// add an event listener to the send button so that when it is pressed it stores the user input

sendButton.addEventListener('click', sendUserInput);

function sendUserInput() {
 let userInput = userInputField.value;
 return userInput;
}