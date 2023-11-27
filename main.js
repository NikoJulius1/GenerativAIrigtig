/*
* Backend:
* ollama run mistral
* */
/*
const button = document.querySelector('button');
const input = document.querySelector('input');
const pTag = document.querySelector('p');
button.addEventListener("click", () => {
    fetch("http://localhost:11434/api/generate", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            model: "mistral",
            prompt: `The following is a list of dishes you can make with the following ingredients: ${input.value}`,
            stream: false
        })
    })
        .then(response => response.json())
        .then(data => {
            pTag.innerText = data.response;
            console.log(data.response);
        })
        .catch(error => {
            console.error("Error:", error);
        });
});*/

const button = document.querySelector('#fortuneButton');
const input = document.querySelector('input');
const pTag = document.querySelector('.suggestions');
const loading = document.querySelector(".loading");

button.addEventListener("click", () => {
    loading.style.display = "block";

    getGeneratedText(`Predict a dark and random future based on following user information: ${input.value}!`)
        .then(generatedText => {
            pTag.innerText = generatedText.split('!')[1];
            loading.style.display = "none";
        });
});

