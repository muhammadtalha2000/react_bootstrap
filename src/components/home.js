import 'bootstrap/dist/css/bootstrap.min.css';
import {Carousel} from 'react-bootstrap';


function Home () {
    return(
        <div>
            <h1 className="head">Home Page</h1>
            <Carousel>
  <Carousel.Item>
    <img
      className="sliderimage"
      src="https://www.w3schools.com/howto/img_nature_wide.jpg"
      alt="First slide"
    />
    <Carousel.Caption>
      {/* <h3>Web Development</h3> */}
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img 
      className="sliderimage"
     src="https://www.w3schools.com/howto/img_snow_wide.jpg"
      alt="Second slide"
    />

    <Carousel.Caption>
      {/* <h3>Responsive Design</h3> */}
    
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img 
      className="sliderimage"
    src="https://www.w3schools.com/howto/img_lights_wide.jpg"
      alt="Third slide"
    />

    <Carousel.Caption>
      {/* <h3>Advance Technologies</h3> */}

    </Carousel.Caption>
  </Carousel.Item>
</Carousel>

        </div>
    )
}

export default Home;