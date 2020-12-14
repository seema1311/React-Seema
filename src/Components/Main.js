import {Component} from 'react'
import Top from './Top'
import Footer from './Footer'
import Home from './Home'
import {Route} from 'react-router-dom'
class Main extends Component{
    constructor()
    {
   super()
    }
    render()
    {
        return <div><Route exact path ="/" render= { ()=> (<div>
               <Top place="login" />
               <Footer/>
               <Top place="footer" />
               </div>)}/>
               <Route exact path ="/home" render= { ()=> (<div>
                <Top place="header" />
                <Home/>
                <Top place="footer" />
                </div>)}/>
                </div>
            
    }
}
export default Main
