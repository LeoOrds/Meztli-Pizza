import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import "../Style/Navbar.css";
import {Link} from 'react-router-dom';

function CollapsibleExample() {
  return (<>
   <div className="nav-top">
   <Navbar collapseOnSelect expand="lg" variant="dark" fixed='top' className=' navcolor'>
    
   <div href="#home" className='nav-logo'>
            <img
              alt=""
              src="./images/meztli-logo.jpg"
              width="50"
              height="50"
              className="d-inline-block "
            />{' '}
            Meztli's Pizza
          </div>
      <Container className='nav-container'>
      <Navbar.Brand className='nav-logo1'> <img
              alt=""
              src="./images/meztli-logo.jpg"
              width="30"
              height="30"
              className="d-inline-block align-top"
            />{' '}
            Meztli's Pizza</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav"  className='nav-burger'/>
        <Navbar.Collapse id="responsive-navbar-nav" className='text-center'>
          <Nav className="nav-item" activeKey={0}>
            <Nav.Link eventKey={0}><Link to='/' className='nav-link'><h2>Home</h2></Link> </Nav.Link>
            <Nav.Link eventKey={1}><Link to='/Aboutus' className='nav-link'><h2>About Us</h2></Link></Nav.Link>
            <Nav.Link eventKey={2}><Link to='/Faqs' className='nav-link'><h2>Faq's</h2></Link></Nav.Link>
            <Nav.Link eventKey={3}><Link to='/Products' className='nav-link'><h2>Products</h2></Link></Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
   </div>
 </>
 );
}

export default CollapsibleExample;