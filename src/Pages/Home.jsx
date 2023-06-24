import React from "react";
import "../Style/Home.css";
import videoBg from "../Pages/videos/bidyo2.mp4";
import Container from "react-bootstrap/Container";
import {Link} from "react-router-dom";


function Home() {
    return (<>
    <div className="body-home home-container">
        <div className="main">
            <video src={videoBg} autoPlay muted loop />
            <div className="content"  >
                <h1>You can't buy happiness. But you can buy pizza <br /> and that's kind of the same thing.</h1>
                <button><Link to="/Products" className="button-link">Order Now</Link></button>
            </div>
        </div>
            <Container className="text-center home-texts">
                <h1>Welcome to Meztli's Pizza</h1>
                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptas voluptatum magni saepe aperiam vero fugit consequuntur excepturi est minus voluptatem, fugiat facere debitis maxime totam exercitationem voluptatibus laudantium consequatur mollitia.</p>
                
            </Container>
    </div>
    </>);
}

export default Home;