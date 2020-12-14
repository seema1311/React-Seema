import {Component} from 'react'
class Footer extends Component{
    constructor()
    { super()
        this.handleSubmit=this.handleSubmit.bind(this)
    }
    render()
    {
        return (<div>
            
            <div className="form">
            <h1>Please login to get in</h1>
            <form onSubmit={this.handleSubmit}>
            <input type="text" placeholder="Link" ref={this.link}/>
            <input type="text" placeholder="Description" ref={this.description}/>
            <button>Submit</button>
            </form>
            </div>
         </div>
        )
        
    }
    handleSubmit(event){
        console.log("handle addphoto called")
         event.preventDefault();
         window.open('/home',"_self")
       
        //      this.props.history.push('/')
        
          
    }
}
export default Footer