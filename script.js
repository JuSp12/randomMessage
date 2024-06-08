const randomNum = (num) => {
    return Math.floor(Math.random() * num);
}

const countries = ["Japan", "Brazil", "Canada", "Australia", "Italy"];
const tips = ["Try the local cuisine", "Learn a few basic phrases in the local language", "Make sure to carry some local currency", "Research the public transport options", "Always have a backup plan for accommodation"];
const beCareful = ["Be aware of pickpockets", "Check weather conditions regularly", "Stay away from unsafe neighborhoods", "Keep important documents secure", "Avoid drinking tap water if it's unsafe"];

const randomCountry = (countries) => {
    return countries[randomNum(countries.length)];
}

const randomTips = (tips) => {
    return tips[randomNum(tips.length)];
}

const randomBeCareful = (beCareful) => {
    return beCareful[randomNum(beCareful.length)];
}

function displayRandomText() {
    const countryText = randomCountry(countries);
    const tipText = randomTips(tips);
    const beCarefulText = randomBeCareful(beCareful);
    
    const countryElement = document.getElementById('countries');
    const tipsElement = document.getElementById('tips');
    const beCarefulElement = document.getElementById('beCareful');
    
    countryElement.textContent = countryText;
    tipsElement.textContent = tipText;
    beCarefulElement.textContent = beCarefulText;
}
