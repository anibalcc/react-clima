import React from 'react'
import WeatherForm from './WeatherForm'
import WeatherMessage from './WeatherMessage'
import openWeatherMap from '../api/openWeatherMap'

class Weather extends React.Component{
  constructor(props){
    super(props)

    this.state = {
      isLoading:false
    }
  }
    //   location:"Miami",
    //   temp:100
    // }
  //}
  handleSearch(location){
    var _this=this

    this.setState({isLoading: true});
    openWeatherMap.getTemp(location).then(function(temp){
      _this.setState ({
        location: location,
        temp:temp,
        isLoading:false
      });
    },function(errorMessage){
        _this.setState ({isLoading:false});
      alert(errorMessage)
    })
  }
  render(){
    var {isLoading, location, temp} = this.state;

    function renderMessage(){
      if(isLoading){
        return <h3>Fetching weather....</h3>
      }else if(temp && location){
        return <WeatherMessage location={location} temp={temp}/>
      }
    }

    return(
      <div>
        
        <h3>Weather component</h3>
        <WeatherForm onSearch={this.handleSearch.bind(this)}/>
        {renderMessage()}
    </div>
    )
  }
}


export default Weather
