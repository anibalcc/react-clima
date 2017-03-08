import React from 'react';

class WeatherForm extends React.Component{
  onFormSubmit(e){
    e.preventDefault();

    var location = this.refs.location.value;

    if (location.length>0){
      this.refs.location.value='';
      this.props.onSearch(location);
    }

  }
  render(){

    return(
      <div>
        <form onSubmit={this.onFormSubmit.bind(this)}>
          <input type ="text" ref="location"/>
          <button>Get Wather </button>
        </form>
      </div>
    );
  }
}

export default WeatherForm
