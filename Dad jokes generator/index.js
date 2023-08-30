const btnEL = document.getElementById("btn");
const jokeEL = document.getElementById("joke");

const apiKey = "YiNfltboNgKleIwquIJP0g==jajktTjm7E22XPFc";

const options = {
    method: "GET",
    headers: {
        "X-Api-Key": apiKey,
    },
};

const apiURL = "https://api.api-ninjas.com/v1/dadjokes?limit=1";

async function getJoke() {

try {
    jokeEL.innerText = "Updating...";
    btnEL.disabled = true;
    btnEL.innerText = "Loading...";
    const response = await fetch(apiURL, options);
    const data = await response.json();

    btnEL.disabled = false;
    btnEL.innerText = "Tell Me A Joke";
    
    jokeEL.innerText = data[0].joke;
} catch (error) {
    jokeEL.innerText = "An error happened, try again later."
    console.log(error);
    
}

    jokeEL.innerText = "Updating...";
    btnEL.disabled = true;
    btnEL.innerText = "Loading...";
    const response = await fetch(apiURL, options);
    const data = await response.json();

    btnEL.disabled = false;
    btnEL.innerText = "Tell Me A Joke";

    jokeEL.innerText = data[0].joke;
}

btnEL.addEventListener("click", getJoke);