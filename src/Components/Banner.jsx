import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import f1 from "./../assets/f1.jpg"
import f2 from "./../assets/f2.jpg"
import f3 from "./../assets/f3.jpg"
import f4 from "./../assets/f4.jpg"
import f5 from "./../assets/f5.jpg"
import f6 from "./../assets/f6.jpg"
import "./banner.css"


const Banner = () => {
    return (
     <div className="md:h-6">
           <Carousel autoPlay infiniteLoop interval={2000} showThumbs={true}>
            <div>
                <img src={f1}/>
            </div>
            <div>
                <img src={f2}/>
            </div>
            <div>
                <img src={f3}/>
            </div>
            <div>
                <img src={f4}/>
            </div>
            <div>
                <img src={f5}/>
            </div>
            <div>
                <img src={f6}/>
            </div>
        </Carousel>
     </div>
    );
};

export default Banner;