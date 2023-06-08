

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


// create a function that fetched data from the api and put it into a list element

