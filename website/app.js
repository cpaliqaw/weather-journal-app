/* Global Variables */
const COUNTRY_CODE = 'us';

const OPEN_WEATHER_API_KEY = "9b246284975098f082c47160b6db6921";

const TEMPERATURE_FORMATTER = new Intl.NumberFormat('en-IN', { maximumSignificantDigits: 1 });

// Acquire API credentials from OpenWeatherMap website. Use your credentials and the base url to create global variables at the top of your app.js code.
// Write an async function in app.js that uses fetch() to make a GET request to the OpenWeatherMap API.
// Create an event listener for the element with the id: generate, with a callback function to execute when it is clicked.
// Inside that callback function call your async GET request with the parameters:
// base url
// user entered zip code (see input in html with id zip)
// personal API key
const getWeather = async (zipCode) => {
    const url = `https://api.openweathermap.org/data/2.5/weather?zip=${zipCode},${COUNTRY_CODE}&appid=${OPEN_WEATHER_API_KEY}`;
    console.log(url);

    const response = await fetch(url);

    try {
        const newData = await response.json();
        return newData;
    } catch (error) {
        console.log("error", error);
    }
};

const generateButton = document.querySelector('#generate');
generateButton.addEventListener('click', () => {
    console.log("generate");
    const zipCode = document.querySelector('#zip').value;
    getWeather(zipCode)
        .then( (data) => postData(data))
        .then( (entry) => updateMostRecentEntry(entry));
});

const postData = async (data) => {
    const temperatureKelvin = data.main.temp;
    const temperatureCelsius = temperatureKelvin - 273.15;
    const d = new Date();
    let date = (d.getMonth()+1)+'.'+ d.getDate()+'.'+ d.getFullYear();
    let feelings = document.querySelector('#feelings').value;
    let key = crypto.randomUUID();
    let entry = {
        key,
        temperatureCelsius,
        date,
        feelings
    };
    const response = await fetch('/addEntry', {
        method: 'POST',
        credentials: 'same-origin',
        headers: {
            'Content-Type': 'application/json',
        },
        // Body data type must match "Content-Type" header        
        body: JSON.stringify(entry),
    });

    try {
        const newData = await response.json();
        return newData;
    } catch (error) {
        console.log("error", error);
    }
}

    // <div class="holder entry">
    //   <div class="title">Most Recent Entry</div>
    //   <div id="entryHolder">
    //     <div id="date"></div>
    //     <div id="temp"></div>
    //     <div id="content"></div>
    //   </div>
    // </div>
const updateMostRecentEntry = (entry) => {
    const date = document.querySelector("#date");
    date.innerText = entry.date;
    const temp = document.querySelector("#temp");
    temp.innerText = `${TEMPERATURE_FORMATTER.format(entry.temperatureCelsius)} ° Celsius`;
    const content = document.querySelector("#content");
    content.innerText = entry.feelings;
}

