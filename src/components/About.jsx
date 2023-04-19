import { Col, Row, Container } from "react-bootstrap";

export default function About() {
    return(
        <main>
            <Container className="bg-danger">
                <Row className="text-center">
                    <Col sm={12} md={6}>
                        <img src="https://picsum.photos/300/300" alt="profile"
                        className="rounded-circle" />
                    </Col>

                    <Col>
                        <h1 className="mt-3">Jasmine Henry</h1>
                        <p>There are countless great women in the world, from historical figures who have paved the way for social justice and human rights to everyday heroes who make a positive impact in their communities. What makes a woman great is her strength, resilience, compassion, and determination to make a difference in the world.</p>
                    
                    </Col>
                </Row>
            </Container>
        </main>
    )
}