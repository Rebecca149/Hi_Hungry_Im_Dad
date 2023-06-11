

// grab all of the elements that need to be grabbed
const userInputField = document.querySelector('.messageInputField');
const sendButton = document.querySelector(".sendMessageButton");
const emergencyStopButton = document.querySelector('#emergencyStopButton');

// import the name of the user


// create a simple alert for the emergency stop

emergencyStopButton.addEventListener('click', emergencyStop);

function emergencyStop(){
    alert('Mum is on her way!');
}


// create a function that fetched data from the API

async function getJoke() {
    const res = await fetch("https://icanhazdadjoke.com/", {
        headers: { accept: "application/json" },  //specifies that the response should be in JSON format
      })
    const data = await res.json();
    console.log(data.joke);
}


