
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







//Variables go here
var searchbutton = document.getElementById('#search-button');




//Main script goes here




//_______________________________


//Inputs and trigger go here



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