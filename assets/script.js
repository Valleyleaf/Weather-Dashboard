
// ```
// GIVEN a weather dashboard with form inputs
// WHEN I search for a city
// THEN I am presented with current and future conditions for that city and that city is added to the search history
// WHEN I view current weather conditions for that city
// THEN I am presented with the city name, the date, an icon representation of weather conditions, the temperature, the humidity, and the wind speed
// WHEN I view future weather conditions for that city
// THEN I am presented with a 5-day forecast that displays the date, an icon representation of weather conditions, the temperature, the wind speed, and the humidity
// WHEN I click on a city in the search history
// THEN I am again presented with current and future conditions for that city
// ```




// API goes here

var weatherKey = "ea99ed525bcde0ba4e8f221e94249590";
var apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=SaintJohn";

async function checkWeather(){
    var response = await fetch(apiUrl + `&appid=${weatherKey}`);
    var data = await response.json

    console.log(data);
    event.preventDefault();
}


//Variables go here
var searchbutton = document.getElementById('search-button');
var searchBox = document.getElementById('searchField');
var daymonday = document.getElementById('day-monday');
var daytuesday = document.getElementById('day-tuesday');
var daywednesday = document.getElementById('day-wednesday');
var daythursday = document.getElementById('day-thursday');
var dayfriday = document.getElementById('day-friday');

var week = [daymonday, daytuesday, daywednesday, daythursday, dayfriday]

for (let i = 0; i < week.length; i++) {
    console.log(week[i]);}


//Main script goes here

//_______________________________

//History Function goes here



//_______________________________

// source: https://www.youtube.com/watch?v=MIYQR-Ybrn4

// Location function goes here

//Inputs and trigger go here

searchbutton.addEventListener("click", function(event){
    var city = searchbox.value.trim();
    console.log('city Value: ' + city);
});



// Logic will be as follows. Upon entering a city in the searchbox, the value will be added to a variable
// this will then be passed to the weather API for results. Once the results are returned
// /parse them out to 5 seperate boxes representing Monday to Friday.
// There will be a masterbox above the days showing more detailed information.
// Script will then create a button/item below the searchbar in a seperate div.
// This div will hold up to 10 previous results. Once additional results are inserted, it will
// get rid of the oldest one.
// If a user hits a previous search, it needs to automatically pull the result from the API.

// What is needed here:
// 1. A variable to hold the inserted text
// 2. A variable to link to the search button
// 3. an array to hold the last 3 results