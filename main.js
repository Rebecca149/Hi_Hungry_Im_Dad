/*
                  Plan
- Create website to fetch dad jokes from api. 

- Dad will ask for name. 
    - Text will display in <p></p>

- User will be able to input name using an input field.
    - Create input field in html
    - Link html input with JS event listener.
    - Save input in a variable using (event.target.value)

- Dad will greet user by name & ask if you would like to hear a joke.
    - Use above variable as part of greeting string (Use ${})

- User will have an option to input Yes/No.
    - create an input field 
    - append the input field somewhere
    - give it in an id or class
    - add an event listener to the input field
    - user puts something in
    - Dad tells joke when enter is pressed regardless of answer
    - Special keyword to stop jokes.

- Dad will tell joke anyway.
    - Dads like to tell jokes.

Bonus tasks 

- Bdum tss sound plays after joke.
- Would you like to hear another one?
- increase joke intensity


*/
const chat = document.querySelector('.chat')
const userName = document.querySelector('#user-name');
userName.addEventListener('keypress', getName)

// gets user's name, asks question and displays input field
function getName(event) {
    if (event.key === "Enter") {
    const greeting = document.querySelector(".greeting");
    greeting.textContent = `Hello ${event.target.value}, do you want to hear a joke?`; 
    createInputField();
}
    
}

// creates an input field, appends it to chat div, and adds an event listener to it 
function createInputField(){
    const input = document.createElement('input')
    chat.appendChild(input)
    input.addEventListener('keypress', getJoke)
}


// calls getFetch to get joke, creates a p element, appends it to chat div and then displays the joke in the div
async function getJoke(event){
    if (event.key === "Enter") {
    const joke = await getFetch()
    console.log(joke)
    const jokeDisplay = document.createElement('p')
    chat.appendChild(jokeDisplay)
    jokeDisplay.textContent = joke 
    setTimeout(getAnotherJoke, 2000); //add setTimeout();
    }

}

//get data from dad joke api
async function getFetch() {
    let response = await fetch("https://icanhazdadjoke.com/", {
        headers: { accept: "application/json" },
      });
    let data = await response.json()
    console.log(data.joke)
    return data.joke
}


// creates new p element, appends it to div, asks question and calls creatInputField()
function getAnotherJoke () {
    const newP = document.createElement('p')
    chat.appendChild(newP)
    newP.textContent = 'Do you want to hear another joke?'
    createInputField()
    getLastInput()
}

function getLastInput(){
    let inputList = document.querySelectorAll(".chat input")
    console.log(Array.from(inputList))
}

















// async function getFetch() {
//     let response = await fetch("https://icanhazdadjoke.com/", {
//         headers: { accept: "application/json" },
//       });
//     let data = await response.json()
//     console.log(data.joke)
//     return response
// }

// getFetch()