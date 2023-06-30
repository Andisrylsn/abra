import React from "react";
import { useState } from "react";
import { Carousel, Container, Row, Col, Image } from "react-bootstrap";
import perpamsi from ".././assets/images/Content/direktoriperpamsi.jpg";
import perpamsi1 from ".././assets/images/Content/pamsi.jpg";
import kiprahperpamsi from ".././assets/images/Content/kiprahperpamsi.jpg";
import limapuluhtahunperpamsi from ".././assets/images/Content/limapuluhtahunperpamsi.jpg";
import pabsi from ".././assets/images/Content/pabsi.jpg";
import pamsi from ".././assets/images/Content/pamsi.jpg";
import pamsijawatimur from ".././assets/images/Content/pamsijawatimur.jpg";
import perpamsi2016 from ".././assets/images/Content/Perpamsi 2016.jpg";
import perpamsi2014 from ".././assets/images/Content/perpamsi2014.jpg";
import pln from ".././assets/images/Content/pln.jpg";
import ppamsi from ".././assets/images/Content/ppamsi.jpg";
import whitebackground from ".././assets/images/white background.jpg";

export default function Portfolio() {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex) => {
    setIndex(selectedIndex);
  };

  const portfolio = [
    {
      image: perpamsi,
      name: "Direktori PERPAMSI",
    },

    {
      image: perpamsi1,
      name: "PERPAMSI",
    },

    {
      image: kiprahperpamsi,
      name: "Kiprah PERPAMSI",
    },

    {
      image: limapuluhtahunperpamsi,
      name: "Lima Puluh Tahun PERPAMSI",
    },

    {
      image: pabsi,
      name: "PABSI",
    },

    {
      image: pamsi,
      name: "PAMSI",
    },

    {
      image: pamsijawatimur,
      name: "PAMSI Jawa Timur",
    },

    {
      image: perpamsi2016,
      name: "PERPAMSI 2016",
    },

    {
      image: perpamsi2014,
      name: "PERPAMSI 2014",
    },

    {
      image: pln,
      name: "PLN",
    },

    {
      image: ppamsi,
      name: "PERPAMSI 2019",
    },
  ];
  return (
    <Container id="portfolio" className="portfolio" fluid>
      <Row>
        <Col>
          <Container className="header-section">
            <h1>OUR PORTFOLIO</h1>
            <h6>Media and advertising company that helps you enlarge the business</h6>
          </Container>
        </Col>
      </Row>
      <Row>
        <Col className="custome-col">
          <Carousel activeIndex={index} onSelect={handleSelect} fade>
            {/* <Carousel.Item className="carousel-item">
              <Image className="d-block w-100 image-view " src="https://source.unsplash.com/1200x800/?work" alt="First slide" fluid />
              <Carousel.Caption>
                <h3>
                  <ReactTypingEffect speed={100} eraseSpeed={0} text={["Lets see our portfolio"]} />
                </h3>
                <p>Swipe</p>
              </Carousel.Caption>
            </Carousel.Item> */}
            {portfolio.map((ports, index) => (
              <Carousel.Item className="carousel-item" key={index}>
                <Image className="d-block w-100 image-view " src={whitebackground} alt="First slide" fluid />
                <Carousel.Caption>
                  <Image src={ports.image} height={300} width={200}></Image>
                  <h5>{ports.name}</h5>
                </Carousel.Caption>
              </Carousel.Item>
            ))}
          </Carousel>
        </Col>
      </Row>
    </Container>
  );
}
