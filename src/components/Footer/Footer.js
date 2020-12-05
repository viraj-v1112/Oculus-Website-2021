import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import './Footer.css';
import { Social_List } from '../../shared/FooterText';

const Footer = () => {
  return (
    <div className='back'>
      <Container fluid>
        <Row xs={1} sm={1} lg={4}>
          <Col>
            <ul>
              <div id='logo'></div>
              <p className='college-name-text'>
                SARDAR PATEL INSTITUTE OF TECHNOLOGY
              </p>
              <p className='college-add-text'>
                Munshi Nagar, Andheri(W), Mumbai-400058
              </p>
            </ul>
          </Col>
          <Col>
            <ul>
              <li className='col-2-text'>Events</li>
              <li className='col-2-text'>Donation Drive</li>
              <li className='col-2-text'>Sponsors</li>
              <li className='col-2-text'>Our Team</li>
              <li className='col-2-text'>Downloads</li>
            </ul>
          </Col>
          <Col>
            <ul>
              <li className='col-3-head'>Contact Us</li>
              <li className='col-3-sub'>+917083054655</li>
              <li className='col-2-text'></li>
              <li className='col-3-head'>Join Us on</li>
              <ul id='social'>
                <div
                //className='col-lg-12 col-sm-12 ml-5'
                //style={{ marginLeft: '3.5rem' }}
                >
                  {Social_List.map((social) => (
                    <li>
                      <a href={social.link}>{social.icon}</a>
                    </li>
                  ))}
                </div>
              </ul>
            </ul>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Footer;
