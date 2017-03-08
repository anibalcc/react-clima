import React from 'react';

class WeatherMessage extends React.Component{
  render(){
    var {location, temp} = this.props
    return(
      <div>
        <h3 className="text-center"> Its it {temp} in {location}</h3>

      </div>
    );
  }
}

export default WeatherMessage
