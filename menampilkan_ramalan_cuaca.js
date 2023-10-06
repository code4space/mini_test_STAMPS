const axios = require("axios");

function formattedValue(data) {
    const formattedData = [];
    let check = {}
    data.list.forEach(item => {
        // Formatted date
        const date = new Date(item.dt * 1000);
        const options = { weekday: 'short', month: 'short', day: '2-digit', year: 'numeric' };
        const formattedDate = new Date(date).toLocaleDateString('en-US', options).split(/[, ]/gi).filter(el => el.length > 0);
        [formattedDate[2], formattedDate[1]] = [formattedDate[1], formattedDate[2]];

        // Check bila hari yang sama sudah ada
        if (!check[formattedDate]) {
            check[formattedDate] = true
            formattedData.push(`${formattedDate.splice(0, 1)}, ${formattedDate.join(' ')}: ${item.main.temp}°C`);
        }
    });
    return formattedData;
}


(async function getWeatherForecast() {
    const API_KEY = "e808589d77d629a4c239fdf71a22c1b2";
    const city = 'Jakarta'

    const response = await axios.get(
        `https://api.openweathermap.org/data/2.5/forecast?q=${city}&units=metric&appid=${API_KEY}`
    );
    console.log('Weather Forecast:');
    formattedValue(response.data).forEach(el => console.log(el))
})();