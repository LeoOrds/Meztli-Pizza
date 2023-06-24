import  Container  from "react-bootstrap/Container";
import  Row  from "react-bootstrap/Row";
import  Col  from "react-bootstrap/Col";
import "../Style/Footer.css";
import { FiFacebook } from 'react-icons/fi';
import { FiInstagram } from 'react-icons/fi';
import { FiTwitter } from 'react-icons/fi';
import { HiOutlinePhone } from 'react-icons/hi';
import { AiOutlineMail } from 'react-icons/ai';
import {Link} from 'react-router-dom';

function Footer(){
    
return(<>
<div className="footer">
    <Container>
        <Row>
            <Col lg={6}>
                <div className="footer-col">
                    <h3>Follow Us</h3>
                </div>
                <div className="text-center footer-icon">
                    <Link to='https://www.facebook.com/profile.php?id=100093038534526' className="foote-link"><FiFacebook className="icons"/></Link>
                    <Link to='' className="foote-link"><FiInstagram className="icons"/></Link>
                    <Link to='' className="foote-link"><FiTwitter className="icons" /></Link>
                </div>
                <div className="footer-col">
                    <h3>Call Us</h3>
                </div>
                <div className="text-center footer-icon1">
                    <HiOutlinePhone className="icon"/> 09062502964
                </div>
                <div className="text-center footer-icon1">
                    <HiOutlinePhone className="icon"/> 09369955095
                </div>
                <div className="footer-col">
                    <h3>Email Us</h3>
                </div>
                <div className="text-center footer-icon1">
                    <AiOutlineMail className="icon"/> 19giovannimendoza97@gmail.com
                </div>
                <div className="text-center footer-icon1">
                    <AiOutlineMail className="icon"/> tiksilee@gmail.com
                </div>
            </Col>
            <Col lg={6}>
                <div className="footer-col">
                    <h3>Contact us</h3>
                </div>
                <form name="submit-to-google-sheet">
                        <input type="text" name="Name" placeholder="Your Name" required />
                        <input type="email" name="Email" placeholder="Your Email" required />
                        <textarea name="Message" rows="6" placeholder="Your Message" required ></textarea>
                        <button type="submit" className="seemore-btn btn-2">Submit</button>
                    </form>
                    <span id="msg"></span>
            </Col>
        </Row>
        <Row>
            <Col>
            <div className="footer-res text-center">    
                <hr />
                <p>Meztlis's Pizza 2023. All Rights Reserved</p>  
            </div>
            </Col>
        </Row>
    </Container>
    </div>
</>)
}

export default Footer;