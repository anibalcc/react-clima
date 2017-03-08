import React from 'react'


class About extends React.Component{
  render(){
    return(
      <div >
        <h2 className="text-center page-title">About</h2>
        <p>Esta es una aplicacion hecho con reect </p>
        <p>Algunas herramientas usadas</p>
        <ul>
          <li>
            <a href="https://facebook.github.io/react/"> React</a>
          </li>
          <li>
            <a href="http://foundation.zurb.com/"> Foundation</a>
          </li>
        </ul>
      </div>

    )
  }
}


export default About
