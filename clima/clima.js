const axios = require('axios');

const getClima = async(lat, lng) => {

    const resp = await axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${ lat }&lon=${ lng }&appid=dfd56acbc435218a9de62c382d9fedc6&units=metric`);

    return resp.data.main.temp;

}

module.exports = {
    getClima
}