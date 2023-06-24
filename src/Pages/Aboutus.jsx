import React from "react";
import "../Style/Aboutus.css";
import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import {Link} from 'react-router-dom';
import { SiFacebook } from 'react-icons/si';
import { SiInstagram } from 'react-icons/si';
import { SiTwitter } from 'react-icons/si';

function AboutUs() {
    return (<>
    <div className="about-us">
        <Container>
            <div className="about-header">
                <Row>
                    <Col className="about-header1">
                    <h1>About Us</h1>
                    </Col>
                </Row>
            <Row>
                <Col lg={6} className="text-center">
                    <img src="./images/meztli-logo.jpg" className="img-fluid"/>
                </Col>
                <Col lg={6} className="about-text text-center">
                    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptatum deserunt provident voluptas quibusdam accusamus necessitatibus iure magni, rem id, placeat numquam voluptatem, quia praesentium iste. Assumenda in suscipit ipsam unde?</p>
                </Col>
            </Row>
            </div>
            <Row>
                <Col className="about-header2">
                    <h1>Meet the TEAM</h1>
                </Col>
            </Row>
            <Row>
                <Col className="d-flex justify-content-end" style={{paddingBottom: '2%'}}>
                <Card className="about-card">
                    <Card.Img variant="top" src="./images/gio.jpg" />
                    <Card.Body className="about-card-body">
                        <h1 className="about-card-title">Giovanni Reloza Mendoza</h1>
                        <p className="about-card-text">
                        Chief Excecutive Officer
                        </p>
                        <div className="profile-icon">
                        <Link to='https://www.facebook.com/giovanni.mendoza.75873'><SiFacebook href="" className="about-prof-icon"/></Link>
                        <Link><SiInstagram href="" className="about-prof-icon"/></Link>
                        <Link><SiTwitter href="" className="about-prof-icon"/></Link>
                        </div>
                    </Card.Body>
                </Card>
                </Col>
                <Col className="d-flex justify-content-start" style={{paddingBottom: '2%'}}>
                <Card className="about-card">
                    <Card.Img variant="top" src="./images/trixie.jpg" />
                    <Card.Body className="about-card-body">
                        <h1 className="about-card-title">Ma. Trixie Lee Mendoza</h1>
                        <p className="about-card-text">
                        Operations Manager
                        </p>
                        <div className="profile-icon">
                        <Link to='https://www.facebook.com/tiksilee.128'><SiFacebook href="" className="about-prof-icon"/></Link>
                        <Link><SiInstagram href="" className="about-prof-icon"/></Link>
                        <Link><SiTwitter href="" className="about-prof-icon"/></Link>
                        </div>
                    </Card.Body>
                </Card>
                </Col>
            </Row>
            <Row>
            <Col className="d-flex justify-content-end">
                <Card className="about-card">
                    <Card.Img variant="top" src="./images/grad-pic.jpg" />
                    <Card.Body className="about-card-body">
                        <h1 className="about-card-title">Victor Louis Ordonio</h1>
                        <p className="about-card-text">
                        Web Developer
                        </p>
                        <div className="profile-icon">
                        <Link to='https://www.facebook.com/AltarKnight27/'><SiFacebook href="" className="about-prof-icon"/></Link>
                        <Link><SiInstagram href="" className="about-prof-icon"/></Link>
                        <Link><SiTwitter href="" className="about-prof-icon"/></Link>
                        </div>
                    </Card.Body>
                </Card>
                </Col>
                <Col className="d-flex justify-content-start">
                <Card className="about-card">
                    <Card.Img variant="top" src="./images/cean.jpg" />
                    <Card.Body className="about-card-body">
                        <h1 className="about-card-title">Cean the Great</h1>
                        <p className="about-card-text">
                        Purchasing Manager
                        </p>
                        <div className="profile-icon">
                        <Link to='https://www.facebook.com/avocadoshake17'><SiFacebook href="" className="about-prof-icon"/></Link>
                        <Link><SiInstagram href="" className="about-prof-icon"/></Link>
                        <Link><SiTwitter href="" className="about-prof-icon"/></Link>
                        </div>
                    </Card.Body>
                </Card>
                </Col>
            </Row>
        </Container>
    </div>
    </>);
}

export default AboutUs;