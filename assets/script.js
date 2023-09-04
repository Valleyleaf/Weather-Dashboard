
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


var weatherKey = "ea99ed525bcde0ba4e8f221e94249590";

// Below gets users location, this is the default input when loading the webpage.
// navigator.geolocation.getCurrentPosition(position => {const { latitude, longitude} = position.coords;
//     const url = `http://api.openweathermap.org/data/2.5/forecast/daily?lat=${latitude}&lon=${longitude}&cnt=5&appid=${weatherKey}`
//     //           http://api.openweathermap.org/data/2.5/forecast/daily?lat={lat}&lon={lon}&cnt={cnt}&appid={API key}
//     console.log(url)
//     fetch(url).then(res => res.json()).then(data => {
//         console.table(data);
//     }).catch(() =>{
//         console.log('Error retreving data, Error: 26');
//     })
// });

// This variable holds the users input data. By default, I want it to be the users current location. I made a function above to make
// This happen but it doesn't quite work. Will have to check why. For now, defaulting to Stockholm
var userLocation = 'Stockholm'


var apiGeo = `http://api.openweathermap.org/geo/1.0/direct?q=${userLocation}&limit=1&appid=${weatherKey}`;
// http://api.openweathermap.org/geo/1.0/direct?q=London&limit=5&appid=ea99ed525bcde0ba4e8f221e94249590
console.log(apiGeo)

// This function returns the geo pulled from apiGeo. This can be manipulated with the userLocation variable. This function
// Can be used to extract the name of the city, latitute and longitute, along with some other data that I do not need for this project.
async function getUserGeo(){
    fetch(apiGeo).then(function (response){
        console.log(response);
        return response.json();
    }).then(function (data){
        console.log(data);
        return data;
    }).catch(function (error){
        alert('Error 47. No response from Server')
    })
    

}

getUserGeo();










// var searchbutton = document.getElementById('search-button');
// var searchBox = document.getElementById('searchField');
// var daymonday = document.getElementById('day-monday');
// var daytuesday = document.getElementById('day-tuesday');
// var daywednesday = document.getElementById('day-wednesday');
// var daythursday = document.getElementById('day-thursday');
// var dayfriday = document.getElementById('day-friday');
// var week = [daymonday, daytuesday, daywednesday, daythursday, dayfriday]
// for (let i = 0; i < week.length; i++) {
//     console.log(week[i]);}


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