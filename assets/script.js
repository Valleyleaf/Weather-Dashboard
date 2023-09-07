
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


var searchButton = $('#search-button');
var weatherKey = "d2ef8e83e82d03b4e864eaf84dcb4676";
//                d2ef8e83e82d03b4e864eaf84dcb4676


// This function returns the geo pulled from apiGeo. This can be manipulated with the userLocation variable. This function
// Can be used to extract the name of the city, latitute and longitute, along with some other data that I do not need for this project.
function getUserGeo(){
    var apiGeoVariable = verifyLocation();
    return fetch(apiGeoVariable).then(function (response){
        console.log('123123',response.status)
        return response.json();
    }).then(function (data){

        var cityName =data[0].name;
        var latitude =data[0].lat;
        var longitude =data[0].lon;
        var extractedData = [cityName, latitude, longitude]
        console.log(extractedData)
        // ExtractedData is correct, but does not get properly returned into manageData function? Need to figure out why.
        return extractedData;
    }).catch(function (error){
        alert('Error 39. No response from Server')
    })
    

}

// This function returns CITY, LAT and LON to then be parsed through openweathermap. This information then will also need to be parsed.
async function manageData(){
    var dataArray = await getUserGeo();
    // Below variables need to be populated with items from getUserGeo.
    var inputNameData = dataArray[0];
    var latitudeData = dataArray[1];
    var longitudeData = dataArray[2];
    console.log('Returned data in manageData is: ', inputNameData, latitudeData, longitudeData)
     const url = "https://api.openweathermap.org/data/2.5/forecast?lat=" +latitudeData +"&lon=" +longitudeData +"&appid=" +weatherKey +"&units=metric";
    fetch(url).then(res => res.json()).then(data => {
        // object will return a key value pair 
            console.log('data', data)
        for(let i = 0; i < 5; i++){
            var day = document.getElementById('day' + i);
            var temp = document.getElementById('day' + i + 'temp');
            var wind = document.getElementById('day' + i + 'wind');
            var humidity = document.getElementById('day' + i + 'humi');
            day.textContent = 'Date: ' + data.list[i].dt_txt
            temp.textContent = 'Temp: ' + data.list[i].main.temp
            wind.textContent = 'Wind: ' + data.list[i].wind.speed
            humidity.textContent = 'Humidity: ' + data.list[i].main.humidity
        }
    }).catch(() =>{
        console.log('Error retreving data, Error: 61');
    })
}

// const createWeatherItems = (WeatherCard) => {
//     return `<li class="card">
//     <p>${weatherItem.dt_txt.split("")[0]}</p>
//     <img src="https://openweathermap.org/img/wn/${weatherItem.weather[0].icon}@2x.png" alt=weather-icon">
//     <p>${'Temp: ' + weatherItem.temp} </p>
//     <p>Wind: </p>
//     <p>Humidity: </p>
//     </li>`;

// }

// Add error function here. Just a simple alert. Also trim user input. NOTE TO SELF, THIS TIES INTO; getUserGeo. Watch out for scope issues.
function verifyLocation(){
    var userLocation = document.querySelector('#searchField').value;
    var apiGeo = `https://api.openweathermap.org/geo/1.0/direct?q=${userLocation}&limit=1&appid=${weatherKey}`;
    console.log('user location is:', userLocation)
    console.log('apiGeo is: ', apiGeo)
    return apiGeo
}


// on click, gets user input. Need to trim and also create error function.
searchButton.on('click', function () {
    manageData();
})


// Below gets users location, this is the default input when loading the webpage.
// navigator.geolocation.getCurrentPosition(position => {const { latitude, longitude} = position.coords;
//     const url = `http://api.openweathermap.org/data/2.5/forecast?lat=${latitude}&lon=${longitude}&cnt=5&appid=${weatherKey}&units=metric`
//     console.log(url)
//     fetch(url).then(res => res.json()).then(dataCurrent => {
//         console.table(dataCurrent);
//         return dataCurrent;
//     }).catch(() =>{
//         console.log('Error retreving data, Error: 26');
//     })
// });

// -----------------------------------------
// below is example on how to extract data.
// console.log(fiveDaysForecast[0].main.temp);
// -----------------------------------------

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