function getHotCities(weatherData) {
    return weatherData
        .filter(data => data.temperature > 30)
        .map(data => data.city);
}


const weatherData = [
    { city: "Coimbatore", temperature: 28 },
    { city: "Chennai", temperature: 35 },
    { city: "Valparai", temperature: 22 },
    { city: "Ajmal home", temperature: 32 }
];

const hotCities = getHotCities(weatherData);
console.log(hotCities); 