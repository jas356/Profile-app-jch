import { Col, Container, Row } from "react-bootstrap";

export default function Video() {
    return(
        <section>
            <Container className="">
                <Row>
                  <Col>
                  <h2>Video</h2>
                  <p>Bunnies are great because they were the first to Hip Hop to the Hippity Hop.</p>
                  <iframe width="100%" height="315" src="https://www.youtube.com/embed/8NdarlPjF2E" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                  </Col>  
                </Row>
            </Container>
        </section>
    )
}