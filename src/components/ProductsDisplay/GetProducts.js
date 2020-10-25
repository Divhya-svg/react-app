import React, { Component } from 'react';
import {Card,Link,Body,Title,Subtitle,Text,Button} from 'react-bootstrap';
import { Table ,Row,Col} from 'reactstrap';


class GetProducts extends Component{
    render(){
        return(
            <Card style={{width:'17rem'}}>
                <Card.Img varient="top" src ="../../Images/P001.JPG" />
                <Card.Body>
                    <Card.Title><b>Asiatic Lilies</b></Card.Title>
                    <Card.Text>
                        <i>
                       Bright Yellow Asiatic Lilies imported from Foreign countries.
                        </i>
                    </Card.Text>
                    <Card.Text>
                       <b><i>MRP:</i></b> <strike><i>₹ 2000.00</i></strike>
                    </Card.Text>
                    <Card.Text>
                       <b><i>Deal Price:</i></b> <i>₹ 1495.00</i>
                    </Card.Text>
                    <Table>
                        <Row>
                            <Col>
                            <Button varient="primary">Buy</Button>
                            </Col>
                            <Col>
                            <Button varient="primary">AddToCart</Button>
                            </Col>
                        </Row>
                    </Table>
                </Card.Body>
            </Card>
        );
    }
}
export default GetProducts