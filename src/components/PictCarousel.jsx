import { Col, Row, Container, Carousel } from "react-bootstrap";

export default function PictCarousel() {
    return(
        <section>
            <Container className="carousel-container">
                <Row>
                    <Col className="p-0">
                        <Carousel fade>
                            <Carousel.Item>
                                <img src="https://picsum.photos/300/200?random=1"
                                className="d-block w-100"
                                alt="slide 1" />
                                <Carousel.Caption>
                                <h2>First Item</h2>
                                <p>First item are great because that are the first.</p>
                                </Carousel.Caption>
                            </Carousel.Item>

                            <Carousel.Item>
                                <img src="https://picsum.photos/300/200?random=2"
                                className="d-block w-100"
                                alt="slide 2" />
                                <Carousel.Caption>
                                    <h2>Second Item</h2>
                                    <p>Second item because its second best.</p>
                                </Carousel.Caption>
                            </Carousel.Item>

                            <Carousel.Item>
                                <img src="https://picsum.photos/300/200?random=3"
                                className="d-block w-100"
                                alt="slide 3" />
                                <Carousel.Caption>
                                    <h2>Third Item</h2>
                                    <p>Third item because third is third best</p>
                                </Carousel.Caption>
                            </Carousel.Item>
                        </Carousel>
                    </Col>
                </Row>
            </Container>
        </section>
    )
}