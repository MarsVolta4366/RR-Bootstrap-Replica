import Container from "react-bootstrap/Container"
import Row from "react-bootstrap/Row"
import Col from "react-bootstrap/Col"
import Card from "react-bootstrap/Card"

export default function StoreGallery() {
    return (
        <Container>
            <h1>Browse stores in Madison, WI</h1>
            <Row>
                <Col>
                    <Card style={{ border: "none", borderRadius: "0", borderBottom: "1px solid lightgray" }}>
                        <Card.Body style={{ textAlign: "left" }}>
                            <div style={{ display: "inline-block", margin: "2.5px" }}>
                                <img src="../../ALDILogo.webp" alt="ALDI logo" className="rounded-circle" style={{ border: "1px solid lightgray", width: "60px" }} />

                            </div>
                            <div style={{ display: "inline-block", verticalAlign: "middle", margin: "2.5px" }}>
                                <Card.Title>ALDI</Card.Title>
                                <Card.Subtitle className="mb-2 text-muted">Delivery • Pickup</Card.Subtitle>
                            </div>
                        </Card.Body>
                    </Card>
                </Col>
                <Col>
                    <Card style={{ border: "none", borderRadius: "0", borderBottom: "1px solid lightgray" }}>
                        <Card.Body style={{ textAlign: "left" }}>
                            <div style={{ display: "inline-block", margin: "2.5px" }}>
                                <img src="../../woodmansLogo.webp" alt="Woodman's logo" className="rounded-circle" style={{ border: "1px solid lightgray", width: "60px" }} />

                            </div>
                            <div style={{ display: "inline-block", verticalAlign: "middle", margin: "2.5px" }}>
                                <Card.Title>Woodman's Food Markets</Card.Title>
                                <Card.Subtitle className="mb-2 text-muted">Delivery</Card.Subtitle>
                            </div>
                        </Card.Body>
                    </Card>
                </Col>
                <Col>
                    <Card style={{ border: "none", borderRadius: "0", borderBottom: "1px solid lightgray" }}>
                        <Card.Body style={{ textAlign: "left" }}>
                            <div style={{ display: "inline-block", margin: "2.5px" }}>
                                <img src="../../costcoLogo.webp" alt="Costco logo" className="rounded-circle" style={{ border: "1px solid lightgray", width: "60px" }} />

                            </div>
                            <div style={{ display: "inline-block", verticalAlign: "middle", margin: "2.5px" }}>
                                <Card.Title>Costco</Card.Title>
                                <Card.Subtitle className="mb-2 text-muted">Delivery</Card.Subtitle>
                            </div>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
            <Row>
                <Col>
                    <Card style={{ border: "none", borderRadius: "0", borderBottom: "1px solid lightgray" }}>
                        <Card.Body style={{ textAlign: "left" }}>
                            <div style={{ display: "inline-block", margin: "2.5px" }}>
                                <img src="../../picknSaveLogo.webp" alt="Pick 'n Save logo" className="rounded-circle" style={{ border: "1px solid lightgray", width: "60px" }} />

                            </div>
                            <div style={{ display: "inline-block", verticalAlign: "middle", margin: "2.5px" }}>
                                <Card.Title>Pick 'n Save</Card.Title>
                                <Card.Subtitle className="mb-2 text-muted">Delivery</Card.Subtitle>
                            </div>
                        </Card.Body>
                    </Card>
                </Col>
                <Col>
                    <Card style={{ border: "none", borderRadius: "0", borderBottom: "1px solid lightgray" }}>
                        <Card.Body style={{ textAlign: "left" }}>
                            <div style={{ display: "inline-block", margin: "2.5px" }}>
                                <img src="../../theWineShopLogo.webp" alt="The Wine Shop logo" className="rounded-circle" style={{ border: "1px solid lightgray", width: "60px" }} />

                            </div>
                            <div style={{ display: "inline-block", verticalAlign: "middle", margin: "2.5px" }}>
                                <Card.Title>The Wine Shop</Card.Title>
                                <Card.Subtitle className="mb-2 text-muted">Delivery</Card.Subtitle>
                            </div>
                        </Card.Body>
                    </Card>
                </Col>
                <Col>
                    <Card style={{ border: "none", borderRadius: "0", borderBottom: "1px solid lightgray" }}>
                        <Card.Body style={{ textAlign: "left" }}>
                            <div style={{ display: "inline-block", margin: "2.5px" }}>
                                <img src="../../familyDollarLogo.webp" alt="Family Dollar logo" className="rounded-circle" style={{ border: "1px solid lightgray", width: "60px" }} />

                            </div>
                            <div style={{ display: "inline-block", verticalAlign: "middle", margin: "2.5px" }}>
                                <Card.Title>Family Dollar</Card.Title>
                                <Card.Subtitle className="mb-2 text-muted">Delivery</Card.Subtitle>
                            </div>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </Container>
    )
}