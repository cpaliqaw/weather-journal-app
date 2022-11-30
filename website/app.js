/* Global Variables */
const COUNTRY_CODE = 'us';

const OPEN_WEATHER_API_KEY = "9b246284975098f082c47160b6db6921";

// Create a new date instance dynamically with JS
// let d = new Date();
// let newDate = d.getMonth()+'.'+ d.getDate()+'.'+ d.getFullYear();

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
    const result = getWeather(zipCode);
    console.log(result);
});

const postData = async (data) => {
    console.log(data);
    const response = await fetch('/addEntry', {
        method: 'POST',
        credentials: 'same-origin',
        headers: {
            'Content-Type': 'application/json',
        },
        // Body data type must match "Content-Type" header        
        body: JSON.stringify(data),
    });

    try {
        const newData = await response.json();
        console.log(newData);
        return newData;
    } catch (error) {
        console.log("error", error);
    }
}

