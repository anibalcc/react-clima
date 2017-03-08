import React from 'react'
import {Link, IndexLink} from 'react-router'

class Nav extends React.Component{
  onSearch(e){
    e.preventDefault();
    alert("no imprementado todavia");
  }
  render(){
    return(
      <div className="top-bar">
        <div className="top-bar-left">
          <ul className="menu">
            <li className="menu-text">Site Title</li>
            <li><IndexLink to="/" activeClassName="active" activeStyle={{fontWeight:'bold'}}>Get Wather</IndexLink></li>
            <li><Link to="/about" activeClassName="active" activeStyle={{fontWeight:'bold'}}>About</Link></li>
            <li><Link to="/examples"activeClassName="active" activeStyle={{fontWeight:'bold'}}>Examples</Link></li>
          </ul>
        </div>
        <div className="top-bar-right">
          <form onSubmit={this.onSearch.bind(this)}>
            <ul className="menu">
              <li><input type="search" placeholder="Search Weather"/></li>
              <li><button type="submit" className="button" value="get Weather">Search</button></li>
            </ul>
        </form>
        </div>
      </div>
    );
  }
}

export default Nav


      // <div>
      //   <h3>nav component</h3>
      //   <IndexLink to="/" activeClassName="active" activeStyle={{fontWeight:'bold'}}>Get Wather</IndexLink>
      //   <Link to="/about" activeClassName="active" activeStyle={{fontWeight:'bold'}}>About</Link>
      //   <Link to="/examples"activeClassName="active" activeStyle={{fontWeight:'bold'}}>Examples</Link>
      // </div>
