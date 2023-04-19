import { Col, Container, Row } from "react-bootstrap";

export default function Quote() {
    return(
        <section>
            <Container className="quote-container bg-info">
                <Row className="text-center">
                    <Col>
                        <p><q>You have power over your mind — not outside events. Realize this, and you will find strength.</q></p> - Marcus Aurelius 
                    </Col>
                </Row>
            </Container>
        </section>
    )
}