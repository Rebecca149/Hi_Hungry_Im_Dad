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


function getName(event) {
    if (event.key === "Enter") {
    const greeting = document.querySelector(".greeting");
    greeting.textContent = `Hello ${event.target.value}, do you want to hear a joke?`; 
    createInputField();
}
    
}

function createInputField(){
    const input = document.createElement('input')
    chat.appendChild(input)
    input.addEventListener('keypress', getJoke)
}

async function getJoke(event){
    if (event.key === "Enter") {
    const joke = await getFetch()
    console.log(joke)
    const jokeDisplay = document.createElement('p')
    chat.appendChild(jokeDisplay)
    jokeDisplay.textContent = joke 
    }

}

async function getFetch() {
    let response = await fetch("https://icanhazdadjoke.com/", {
        headers: { accept: "application/json" },
      });
    let data = await response.json()
    console.log(data.joke)
    return data.joke
}

function getAnotherJoke () {
    const newP = document.createElement('p')
    chat.appendChild(newP)
    newP.textContent = 'Do you want to hear another joke?'
    createInputField()
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