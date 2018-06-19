import React  from 'react';
import {BrowserRouter as Router,Link,Route} from 'react-router-dom'
import App from '../App'
const Header= () => (
    <Router>
        <div>
    <div className="header-section">
    <div className="logo-section"></div>
    <div className="navbar-section">
       <div className="navbar-item"><Link to='/'>Home</Link></div>
       <div className="navbar-item"><Link to='/home'>Section</Link></div>
       <div className="navbar-item"><Link to='/details/'>Details</Link></div>
       <div className="navbar-item"><Link to='/contact'>Contact</Link></div>
     </div>
     </div>
     <div>
     <Route path='/:id'  component={App} />
     </div>
     </div>
     </Router>
  
 
)
export default Header