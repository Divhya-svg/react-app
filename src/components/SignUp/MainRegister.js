import React from 'react';
import Register from './Register';
import {Container,Row,Col} from 'reactstrap';
import Footer from '../shared/footer.component';
import Header from '../shared/header.component';

const MainRegister=()=>{
    return(
        <Container>
            <Row>
                <Col>
                <Header/>
                </Col>
            </Row>
            <Row>
                <Col md={4}>
                    <Register/>
                </Col>
            </Row>
            <Row>
                <Col>
                <Footer/>
                </Col>
            </Row>
        </Container>
    )
}

export default MainRegister;