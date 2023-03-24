
async function getFetch() {
    let response = await fetch("https://pokeapi.co/api/v2/pokemon/1/")
    let data = await response.json()
    console.log(data)
    return response
}

getFetch()