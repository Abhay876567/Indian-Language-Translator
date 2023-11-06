const API_KEY = "23a0469420be5d342f145";

const language = {
    "bn-IN": "Bengali",
    "en-GB": "English",
    "gu-IN": "Gujarati",
    "hi-IN": "Hindi",
    "bho-IN" : "Bhojpuri",
    "kn-IN": "Kannada",
    "ml-IN": "Malayalam", 
    "mr-IN": "Marathi",    
    "ne-NP": "Nepali",
    "pa-IN": "Punjabi",    
    "ta-IN": "Tamil",
    "te-IN": "Telugu"
}

const langOption = document.querySelector("#language");
const formText = document.querySelector("#TextAreaID");
const toTranslateHindi = document.querySelector("#TextAreaID2");
const toTranslate = document.querySelector("#TextAreaID3");

for (let countryCode in language) {
    let option = document.createElement("option");
    option.value = countryCode;
    option.textContent = language[countryCode];
    langOption.appendChild(option);
}

function toggleTheme() {
    const body = document.body;
    const themeToggle = document.getElementById("theme-toggle");

    if (body.classList.contains("dark-mode")) {
        body.classList.remove("dark-mode");
        themeToggle.innerHTML = `<img src="/IMG/classes-dark-mode-icon.png" alt="dark-button">`;
    } else {
        body.classList.add("dark-mode");
        themeToggle.innerHTML = `<img src="/IMG/classes-dark-mode-icon.png" alt="light-button">`;
    }
}

function toggleTheme1() {
    const main = document.body;
    const themeToggle = document.getElementById("theme-toggle1");

    if (main.classList.contains("dark-mode1")) {
        main.classList.remove("dark-mode1");
        themeToggle.innerHTML = `<img src="/IMG/classes-dark-mode-icon.png" alt="dark-button">`;
    } else {
        main.classList.add("dark-mode1");
        themeToggle.innerHTML = `<img src="/IMG/classes-dark-mode-icon.png" alt="light-button">`;
    }
}


function translateTextHindi(){
    const content1 = formText.value;
    const transContent1 = "hi-IN";

    if (content1) {
        const transLink1 = `https://api.mymemory.translated.net/get?q=${content1}&langpair=en|${transContent1}`;
        fetch(transLink1)
            .then((response) => response.json())
            .then((data) => {
                if (data.responseData) {
                    toTranslateHindi.value = data.responseData.translatedText;
                } else {
                    console.log("Translation failed");
                }
            })
            .catch((error) => {
                console.error("Translation error: " + error);
            });
    } else {
        toTranslate.value = ""; 
    }

}
function translateText() {
    const content = formText.value;
    const transContent = langOption.value;

    if (content) {
        const transLink = `https://api.mymemory.translated.net/get?q=${content}&langpair=en|${transContent}`;
        fetch(transLink)
            .then((response) => response.json())
            .then((data) => {
                if (data.responseData) {
                    toTranslate.value = data.responseData.translatedText;
                } else {
                    console.log("Translation failed");
                }
            })
            .catch((error) => {
                console.error("Translation error: " + error);
            });
    } else {
        toTranslate.value = ""; 
    }
}