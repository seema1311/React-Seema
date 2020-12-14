import {Component} from 'react'
import profile from '../photos/profile.jpg'
import logo from '../photos/logo.png'
class Top extends Component{
    render()
    {   if(this.props.place==="header")
        return <div className="top">
                  <div className="shiftleft">
                  <img className="photo" src={profile} alt="profile" id="profile"/>
                  <h2>Seema Devi</h2>
                  </div>
                  <div className="shiftright">
                  <h5>Cognizant</h5>
                   <img className="logo" src={logo} alt="Logo" id="logo"></img>
                  </div>
               </div>  
        else if(this.props.place==="footer")   
        return <div className="footer"></div> 
        else if(this.props.place==="login")
        return <div className="login"></div>

    }
}
export default Top

    