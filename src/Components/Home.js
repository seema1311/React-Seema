import {Component} from 'react'
import photo1 from '../photos/photo1.jpg'
import photo2 from '../photos/photo2.png'
import photo3 from '../photos/photo3.jpg'

class Home extends Component{
        // slideIndex=1;
        // Index=1;
        Count=1;
         slideIndex = 1;
    plusSlides(n) { console.log("plus")
        this.showSlides(this.slideIndex += n);
    }

    showSlides(n) {
        console.log("start")
    var i;
    var slides = document.getElementsByClassName("Slides");
    console.log(slides.length)
    console.log(slides[0])
    if (n > slides.length) {this.slideIndex = 1}    
    if (n < 1) {this.slideIndex = slides.length}
    for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";  
    }
    slides[this.slideIndex-1].style.display = "block"
    console.log(slides[this.slideIndex-1].style.display)

}
componentDidMount(){
    console.log("did")
    this.showSlides(1);
}

    render(){ 
   console.log("render")
        return <div className="middle">
                    <div className="Slides fade">
                    <img src={photo1} alt="error" style={{width:"100%", height:"470px"}} ></img>
                    </div>
                    <div className="Slides fade">
                    <img src={photo2} alt="error" style={{width:"100%", height:"470px"}} ></img>
                    </div>
                    <div className="Slides fade" >
                    <img src={photo3} alt="error" style={{width:"100%", height:"470px"}}></img>
                    </div>
                    <button class="prev" onClick={()=>this.plusSlides(-1)}>&#10094;</button>
                    <button class="next" onClick={()=>this.plusSlides(1)}>&#10095;</button>

               </div>
    }
}
export default Home


