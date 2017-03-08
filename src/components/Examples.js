import React from 'react'
import {Link} from 'react-router'

class Examples extends React.Component{
  render(){
    return(
      <div>
        <h2 className="text-center page-title">          Examples hola        </h2>
        <p>Here are a few examples locations to try out</p>
        <ol>
          <li>
            <Link to="/?location=Cusco">Cusco</Link>
          </li>
          <li>
            <Link to="/?location=Philadelphia">Philadelphia</Link>
          </li>
        </ol>
      </div>

    )
  }
}


export default Examples
