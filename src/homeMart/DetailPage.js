import {ButtonGroup, Card, Col,Button, Container,Dropdown,Table, DropdownButton, Form, Row} from "react-bootstrap";
import {useState} from "react";


const DetailPage= () => {
    const [count,setCount]=useState(0)
    return<>

        <Container>
            <Row>
                <Col md={8} >
                    <img src= "{detail.image}"  />
                </Col>
                <Col md={4}>
                    <Card  >
                        <Card.Header  as="h5" >"paki"</Card.Header >
                        <Card.Body className="mt-3">
                            <Card.Title className="m-3">"paki"</Card.Title>
                            <Button  className="m-3"  size= "sm" onClick={()=>setCount(count-1)} disabled={count<1} >-</Button>

                            {count}
                            <Button size= "sm" className="m-3"  onClick={()=>setCount(count+1)} disabled={count>4} >+</Button>

                            <div>
                                <DropdownButton
                                    as={ButtonGroup}
                                    className="m-3"
                                    id={`dropdown-button-drop`}
                                    size="sm"
                                    title="Select Drink"
                                >
                                    <Dropdown.Item eventKey="1">Pepsi</Dropdown.Item>
                                    <Dropdown.Item eventKey="2">Fanta</Dropdown.Item>
                                    <Dropdown.Item eventKey="3">Sprite</Dropdown.Item>
                                    <Dropdown.Divider />
                                    <Dropdown.Item eventKey="4">Sting</Dropdown.Item>
                                </DropdownButton>

                            </div>


                            <Form>

                                <Form.Check type= "checkbox" className="m-3"  >
                                    <Form.Check.Input type= "checkbox"    />
                                    <Form.Check.Label> Fries</Form.Check.Label>
                                    <Form.Control.Feedback type="valid">You did it!</Form.Control.Feedback>
                                </Form.Check>


                                <Form.Check type= "checkbox" className="m-3"  >
                                    <Form.Check.Input type= "checkbox"    />
                                    <Form.Check.Label>Loaded Fries</Form.Check.Label>
                                    <Form.Control.Feedback type="valid">You did it!</Form.Control.Feedback>
                                </Form.Check>


                                <Form.Check type= "checkbox" className="m-3"  >
                                    <Form.Check.Input type= "checkbox"    />
                                    <Form.Check.Label>Cheese Fries</Form.Check.Label>
                                    <Form.Control.Feedback type="valid">You did it!</Form.Control.Feedback>
                                </Form.Check>

                            </Form>


                            <Button variant="outline-success  ">Place Order</Button>{' '}
                        </Card.Body>

                    </Card>
                </Col>
            </Row>
            <Row>
                <Table striped bordered hover size="sm">
                    <thead>
                    <tr>

                        <th className="text-center bg-primary"   colSpan="4" > COMMENTS</th>

                    </tr>
                    </thead>
                    <thead>
                    <tr>
                        <th>#</th>
                        <th> Name</th>
                        <th>Comment</th>
                        <th>Raiting</th>
                    </tr>
                    </thead>
                    <tbody>
                    <tr>
                        <td>1</td>
                        <td>Mark</td>
                        <td>Otto</td>
                        <td>@mdo</td>
                    </tr>
                    <tr>
                        <td>2</td>
                        <td>Jacob</td>
                        <td>Thornton</td>
                        <td>@fat</td>
                    </tr>

                    </tbody>
                </Table>
            </Row>
        </Container>
    </>
}
export default DetailPage