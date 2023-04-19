import { Col, Container, Row } from "react-bootstrap";

export default function Footer() {
    const currentYear = new Date().getFullYear;
    const gitHubUrl = "https://github.com/jas356"

    return(
        <footer>
           <Container>
            <Row>
                <Col className="text-cener">
                     <p>&copy; {currentYear} Jasmine Henry
                        <br />
                    <a href={gitHubUrl}
                    target="_blank"
                    rel="noreferrer">Code in Github</a></p>
                </Col>
            </Row>
            </Container> 
        </footer>
    )
}