import React from "react";
import "../Style/Faqs.css";
import Accordion from 'react-bootstrap/Accordion';
import Container from 'react-bootstrap/Container';

function Faqs() {
    return (<>
    <div className="faqs">
        <Container className="faqs-head">
            <div>
                <h1>Frequently Asked Questions.</h1>
                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Tempore officia minus blanditiis tenetur eos exercitationem maxime, voluptate tempora sit veniam provident velit distinctio voluptatibus vel omnis numquam doloribus illum rem.    </p>
            </div>
            <Accordion defaultActiveKey="0" flush className="faqs-accor">
                <Accordion.Item eventKey="0" className="faqs-acc-item">
                    <Accordion.Header>Halaman</Accordion.Header>
                    <Accordion.Body className="faqs-item">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                    eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
                    minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                    aliquip ex ea commodo consequat. Duis aute irure dolor in
                    reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
                    pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
                    culpa qui officia deserunt mollit anim id est laborum.
                    </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="0" className="faqs-acc-item">
                    <Accordion.Header>Halaman</Accordion.Header>
                    <Accordion.Body className="faqs-item">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                    eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
                    minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                    aliquip ex ea commodo consequat. Duis aute irure dolor in
                    reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
                    pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
                    culpa qui officia deserunt mollit anim id est laborum.
                    </Accordion.Body>
                </Accordion.Item>
            </Accordion>
        </Container>
    </div>
    </>);
}

export default Faqs;