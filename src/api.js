export const getWeatherForLocation = (city) => {

    return fetch("https://weatherbit-v1-mashape.p.rapidapi.com/current?lang=en&lon=%3Crequired%3E&lat=%3Crequired%3E", {
        "method": "GET",
        "headers": {
            "x-rapidapi-host": "weatherbit-v1-mashape.p.rapidapi.com",
            "x-rapidapi-key": "eea35795aamsh011f505e708eeb4p16ce66jsn3194d1e0f34f"
        }
    })
    .then(response => {
        console.log(response);
    });
}