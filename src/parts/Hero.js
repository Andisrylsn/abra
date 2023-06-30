import { Carousel, Container, Row, Col, Button, Image } from "react-bootstrap";
import ReactTypingEffect from "react-typing-effect";
import { useState } from "react";

export default function Hero() {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex) => {
    setIndex(selectedIndex);
  };

  return (
    <Container fluid>
      <Row>
        <Col className="custome-col">
          <Carousel activeIndex={index} onSelect={handleSelect} fade>
            <Carousel.Item className="carousel-item">
              <Image className="d-block w-100 image-view " src="https://source.unsplash.com/1200x800/?work" alt="First slide" fluid />
              <Carousel.Caption>
                <h3>
                  <ReactTypingEffect speed={100} eraseSpeed={0} text={["WELCOME TO ABRA"]} />
                </h3>
                <p>Media and advertising company that helps you enlarge the business.</p>
                <Button variant="secondary" href="/">
                  ABOUT US
                </Button>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <Image className="d-block w-100 image-view" src="https://source.unsplash.com/1200x800/?work" alt="Second slide" fluid />
              <Carousel.Caption>
                <h3>OUR SERVICES</h3>
                <p>ABRA services for customers</p>
                <Button variant="secondary" href="/#services">
                  More about our services
                </Button>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <Image className="d-block w-100 image-view" src="https://source.unsplash.com/1200x800/?work" alt="Third slide" fluid />
              <Carousel.Caption>
                <h3>OUR PARTNERS</h3>
                <p>ABRA PARTNERS</p>
                <Button variant="secondary" href="/more#ourclients">
                  OUR Partners
                </Button>
              </Carousel.Caption>
            </Carousel.Item>
          </Carousel>
        </Col>
      </Row>
    </Container>
  );
}
