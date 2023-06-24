import { useState } from 'react';
import Carousel from 'react-bootstrap/Carousel';
import "../Style/Products.css";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import {Link} from "react-router-dom";
import Card from 'react-bootstrap/Card';


function Products() {
    const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex) => {
    setIndex(selectedIndex);
  };

    return (<>
    <div className="products-body">
    <div className="products">
        <Container>
        <Carousel activeIndex={index} onSelect={handleSelect}>
        <Carousel.Item>
            <img
            className="d-block w-100"
            src="./pizza-carousel/pizza-carousel-1.jpg/"
            alt="First slide"
            />
            <Carousel.Caption>
            <h3>First slide label</h3>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
            </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
            <img
            className="d-block w-100"
            src="./pizza-carousel/pizza-carousel-2.jpg/"
            alt="Second slide"
            />

            <Carousel.Caption>
            <h3>Second slide label</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
            <img
            className="d-block w-100"
            src="./pizza-carousel/pizza-carousel-3.jpg/"
            alt="Third slide"
            />

            <Carousel.Caption>
            <h3>Third slide label</h3>
            <p>
                Praesent commodo cursus magna, vel scelerisque nisl consectetur.
            </p>
            </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
            <img
            className="d-block w-100"
            src="./pizza-carousel/pizza-carousel-4.jpg/"
            alt="Third slide"
            />

            <Carousel.Caption>
            <h3>Third slide label</h3>
            <p>
                Praesent commodo cursus magna, vel scelerisque nisl consectetur.
            </p>
            </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
            <img
            className="d-block w-100"
            src="./pizza-carousel/pizza-carousel-5.jpg/"
            alt="Third slide"
            />

            <Carousel.Caption>
            <h3>Third slide label</h3>
            <p>
                Praesent commodo cursus magna, vel scelerisque nisl consectetur.
            </p>
            </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
            <img
            className="d-block w-100"
            src="./pizza-carousel/pizza-carousel-6.jpg/"
            alt="Third slide"
            />

            <Carousel.Caption>
            <h3>Third slide label</h3>
            <p>
                Praesent commodo cursus magna, vel scelerisque nisl consectetur.
            </p>
            </Carousel.Caption>
        </Carousel.Item>
        </Carousel>
        </Container>
    </div>
    <div className="products-cards">
        <Container>
            <Row>
                <Col className='pizza-cards'>
                <Card className='pizza-card-size'>
                    <Card.Img variant="top" src="./pizza-cards/pizza-card-1.png" />
                    <Card.Body className='pizza-card-body'>
                        <h1 className='card-title'>Creamy Spinach</h1>
                        <Card.Text className='card-text'>
                        Creamy Spinach topped with mozarella cheese and cheese melt
                        </Card.Text>
                        
                    </Card.Body>
                    <div className="color-card">
                        <button><Link to="https://www.facebook.com/profile.php?id=100093038534526" className="card-button-link">Order Now</Link></button>
                    </div>
                    </Card>
                </Col>
                <Col className='pizza-cards'>
                <Card className='pizza-card-size'>
                    <Card.Img variant="top" src="./pizza-cards/pizza-card-2.png" />
                    <Card.Body className='pizza-card-body'>
                        <h1 className='card-title'>Overload</h1>
                        <Card.Text className='card-text'>
                        Pepperoni, ham, bacon, bell pepper, pineapple, mozarella cheese, cheese melt
                        </Card.Text>
                        
                    </Card.Body>
                    <div className="color-card">
                        <button><Link to="https://www.facebook.com/profile.php?id=100093038534526" className="card-button-link">Order Now</Link></button>
                    </div>
                    </Card>
                </Col>
                <Col className='pizza-cards'>
                <Card className='pizza-card-size'>
                    <Card.Img variant="top" src="./pizza-cards/pizza-card-3.png" />
                    <Card.Body className='pizza-card-body'>
                        <h1 className='card-title'>Hawaiian</h1>
                        <Card.Text className='card-text'>
                        Ham, pineapple, bell pepper, mozarella cheese, cheese melt
                        </Card.Text>
                        
                    </Card.Body>
                    <div className="color-card">
                        <button><Link to="https://www.facebook.com/profile.php?id=100093038534526" className="card-button-link">Order Now</Link></button>
                    </div>
                    </Card>
                </Col>
                <Col className='pizza-cards'>
                <Card className='pizza-card-size'>
                    <Card.Img variant="top" src="./pizza-cards/pizza-card-4.png" />
                    <Card.Body className='pizza-card-body'>
                        <h1 className='card-title'>Pepperoni</h1>
                        <Card.Text className='card-text'>
                        Pepperoni, bell pepper, mozarella chease, cheese melt
                        </Card.Text>
                        
                    </Card.Body>
                    <div className="color-card">
                        <button><Link to="https://www.facebook.com/profile.php?id=100093038534526" className="card-button-link">Order Now</Link></button>
                    </div>
                    </Card>
                </Col>
                <Col className='pizza-cards'>
                <Card className='pizza-card-size'>
                    <Card.Img variant="top" src="./pizza-cards/pizza-card-5.png" />
                    <Card.Body className='pizza-card-body'>
                        <h1 className='card-title'>Bacon and Cheese</h1>
                        <Card.Text className='card-text'>
                        Some quick example text to build on the card title and make up the
                        bulk of the card's content.
                        </Card.Text>
                        
                    </Card.Body>
                    <div className="color-card">
                        <button><Link to="https://www.facebook.com/profile.php?id=100093038534526" className="card-button-link">Order Now</Link></button>
                    </div>
                    </Card>
                </Col>
                <Col className='pizza-cards'>
                <Card className='pizza-card-size'>
                    <Card.Img variant="top" src="./pizza-cards/pizza-card-6.png" />
                    <Card.Body className='pizza-card-body'>
                        <h1 className='card-title'>Creamy Bacon</h1>
                        <Card.Text className='card-text'>
                        Bacon, bell pepper, onions, mushroom, mozarella cheese, cheese melt
                        </Card.Text>
                        
                    </Card.Body>
                    <div className="color-card">
                        <button><Link to="https://www.facebook.com/profile.php?id=100093038534526" className="card-button-link">Order Now</Link></button>
                    </div>
                    </Card>
                </Col>
                <Col className='pizza-cards'>
                <Card className='pizza-card-size'>
                    <Card.Img variant="top" src="./pizza-cards/pizza-card-7.png" />
                    <Card.Body className='pizza-card-body'>
                        <h1 className='card-title'>Ham and Cheese</h1>
                        <Card.Text className='card-text'>
                        Some quick example text to build on the card title and make up the
                        bulk of the card's content.
                        </Card.Text>
                        
                    </Card.Body>
                    <div className="color-card">
                        <button><Link to="https://www.facebook.com/profile.php?id=100093038534526" className="card-button-link">Order Now</Link></button>
                    </div>
                    </Card>
                </Col>
                <Col className='pizza-cards'>
                <Card className='pizza-card-size'>
                    <Card.Img variant="top" src="./pizza-cards/pizza-card-8.png" />
                    <Card.Body className='pizza-card-body'>
                        <h1 className='card-title'>Shitake Mushroom</h1>
                        <Card.Text className='card-text'>
                        Some quick example text to build on the card title and make up the
                        bulk of the card's content.
                        </Card.Text>
                        
                    </Card.Body>
                    <div className='color-card'>
                    <button><Link to="https://www.facebook.com/profile.php?id=100093038534526" className="card-button-link">Order Now</Link></button>
                    </div>
                    </Card>
                </Col>
            </Row>
        </Container>
    </div>
    </div>
    </>);
}

export default Products;