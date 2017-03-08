import React from 'react'
import Nav from './Nav'

class Main extends React.Component{
  render(){
    return(
      <div>
        <Nav/>
        <div className="row">
          <div className="columns medium-6 large-4 small-centered">
            {this.props.children}
          </div>
        </div>
      </div>
    )
  }
}

export default Main
