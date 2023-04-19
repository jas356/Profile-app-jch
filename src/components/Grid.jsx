import { Col, Container, Row } from "react-bootstrap";


export default function Grid() {
    return(
        <section>
            <Container className="grid-container">
                <Row>
                    <Col sm={12} md={4}>
                        <h2 className="text-center">Why Boca Code</h2>
                        <p>Boca Code is a software engineering school that offers comprehensive and immersive programs to prepare individuals for successful careers in the tech industry. </p>
                    </Col>

                    <Col sm={12} md={4}>
                        <h2 className="text-center">Exciting Project?</h2>
                        <p>An exciting project is one that captures your imagination, challenges you, and has the potential to make a significant impact. It could be something that you have been thinking about for a long time or a new idea that has just popped into your mind. The key is that it inspires you and motivates you to take action.</p>
                    </Col>

                    <Col sm={12} md={4}>
                        <h2 className="text-center">Ideal Work Place?</h2>
                        <p>What makes a project exciting is highly subjective and varies from person to person. What matters most is that the project aligns with your interests, values, and goals and challenges you to grow and learn. With passion, dedication, and hard work, an exciting project can lead to personal fulfillment, professional success, and a positive impact on the world.</p>
                    </Col>
                </Row>
            </Container>
        </section>
    )
}