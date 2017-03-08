import React from 'react'
import WeatherForm from './WeatherForm'
import WeatherMessage from './WeatherMessage'
import ErrorModal from './ErrorModal'
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

    this.setState({
      isLoading: true,
      errorMessage: undefined,
      location: undefined,
      temp:undefined
    });
    openWeatherMap.getTemp(location).then(function(temp){
      _this.setState ({
        location: location,
        temp:temp,
        isLoading:false
      });
    },function(e){
        _this.setState ({
          isLoading:false,
          errorMessage: e.message
        });
    })
  }
  componentDidMount(){
    var location =this.props.location.query.location;
    if(location && location.length>0){
      this.handleSearch(location);
      window.location.hash="#/";
    }
  }

  componentWillReceiveProps(newProps){
    var location =newProps.location.query.location;
    if(location && location.length>0){
      this.handleSearch(location);
      window.location.hash="#/";
    }
  }

  render(){
    var {isLoading, location, temp,errorMessage} = this.state;

    function renderMessage(){
      if(isLoading){
        return <h3>Fetching weather....</h3>
      }else if(temp && location){
        return <WeatherMessage location={location} temp={temp}/>
      }
    }
    function renderError(){
      if(typeof errorMessage === 'string'){
        return(
          <ErrorModal message={errorMessage}/>
        )
      }
    }
    return(
      <div>
        <h2 className="text-center page-title">Weather component</h2>
        <WeatherForm onSearch={this.handleSearch.bind(this)}/>
        {renderMessage()}
        {renderError()}
    </div>
    )
  }
}


export default Weather
