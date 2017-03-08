import axios from 'axios'

const OPEN_WEATHER_MAP_URL='http://api.openweathermap.org/data/2.5/weather?appid=10bb0c25cb6b886e73a7a800a18560af&units=metric';

//10bb0c25cb6b886e73a7a800a18560af

module.exports={
  getTemp: function(location){
    var encodedLocation=encodeURIComponent(location);
    var requestUrl=`${OPEN_WEATHER_MAP_URL}&q=${encodedLocation}`;


    return axios.get(requestUrl).then(function(res){
      if(res.data.cod && res.data.message){
        throw new Error(res.data.message)
      }else{
        return res.data.main.temp
      }
    },function(res){
      throw new Error(res.data.message)
    })
  }
}
