import {Col, Container, Row} from "react-bootstrap";
import {Link} from "react-router-dom";
import logo from './candle.png';

function Home(props) {
    return (
        <Container>
            <h1 className="mt-4"></h1>
            <Row>
                <Col className="mainSectionLeft">
                    <img src={logo} alt="Candle" height="250"/>
                </Col>

                <Col className="mainSectionRight">
                    <h1 className="shopTitle">Ye Old Candle Shoppe</h1>
                    <br/>
                    <p>Buy from us and get a nice smelling candle! See all of our <Link to="/products">products</Link>.</p>
                </Col>


            </Row>
        </Container>
    );
}

export default Home;