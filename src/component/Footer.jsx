import { Container } from "react-bootstrap";
import Image from "react-bootstrap/Image";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Logo from "../assets/logo.png";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Facebook from "../assets/follow/facebook.png";
import Twitter from "../assets/follow/twitter.png";
import LinkedIn from "../assets/follow/linkedin.png";
import GitHub from "../assets/follow/cat.png";
import {FaAngleRight}  from "react-icons/fa6";


function Footer() {
  return (
    <>
      <section id="footer">
        <Container>
          <Row>
            <Col sm={12} md={5} lg={5}>
              <Image src={Logo} alt="Portfolio" height={50}></Image>
              <p className="mt-4">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Molestias deleniti sint necessitatibus asperiores consectetur excepturi temporibus quaerat, provident nam deserunt ratione doloremque! Quibusdam quae ad reiciendis laudantium vero rerum doloribus, totam facere molestiae corrupti explicabo.
              </p>
            </Col>
            <Col sm={12} md={3} lg={3}>
              <h4>Our Services</h4>
              <ul className="navbar-nav">
                <li className="nav-item">
                  <a className="nav-link active" aria-current="page" href="#">
                  <FaAngleRight /> Web Design
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#">
                  <FaAngleRight /> Web Development
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#">
                  <FaAngleRight /> Domain & Hosting
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#">
                  <FaAngleRight /> App Development
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#">
                  <FaAngleRight /> Plugin Development
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#">
                  <FaAngleRight /> Hardware Solution
                  </a>
                </li>
              </ul>
            </Col>
            <Col sm={12} md={4} lg={4}>
              <h4 className="mb-3">Newsletter</h4>
              <Form>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                  {/* <Form.Label>Email address</Form.Label> */}
                  <Form.Control
                    type="email"
                    placeholder="Enter email address"
                  />
                  <Form.Text className="text-muted">
                    We'll never share your email with anyone else.
                  </Form.Text>
                </Form.Group>
                <Button variant="outline-info" className="px-4">
                  Submit
                </Button>
              </Form>
              <div className="follow mt-4">
                <a
                  className="me-2"
                  href="http://"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img src={Facebook} alt="Facebook" />
                </a>
                <a
                  className="me-2"
                  href="http://"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img src={Twitter} alt="Facebook" />
                </a>
                <a
                  className="me-2"
                  href="http://"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img src={LinkedIn} alt="Facebook" />
                </a>
                <a
                  className="me-2"
                  href="http://"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img src={GitHub} alt="Facebook" />
                </a>
              </div>
            </Col>
            <Col sm={12} className="text-center mt-5">
              <p className="text-muted">
                Copyright @ 2023, All Right Reserved. Design and Develop By
                --Sadiqul Islam.
              </p>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
}

export default Footer;
