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
    - Dad tells joke regardless of answer
    - Special keyword to stop jokes.

- Dad will tell joke anyway.
    - Dads like to tell jokes.

Bonus tasks 

- Bdum tss sound plays after joke.
- Would you like to hear another one?
- increase joke intensity


*/
async function getFetch() {
    let response = await fetch("https://icanhazdadjoke.com/", {
        headers: { accept: "application/json" },
      });
    let data = await response.json()
    console.log(data.joke)
    return response
}

getFetch()