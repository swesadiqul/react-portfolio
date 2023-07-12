import { Container } from "react-bootstrap";
import Card from "react-bootstrap/Card";
import Badge from "react-bootstrap/Badge";
import Stack from "react-bootstrap/Stack";
import Image from "react-bootstrap/Image";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import WebDesign from '../assets/services/web-design.png'
import WebDevelopment from '../assets/services/web-development.png'
import AppDevelopment from '../assets/services/app-development.png'
import APIDevelopment from '../assets/services/miscellaneous.png'
import SEOMarketing from '../assets/services/seo.png'
import PluginDevelopment from '../assets/services/plug-in.png'
import HardwareSolution from '../assets/services/computer.png'
import DomainHosting from '../assets/services/domain.png'

function Services() {
  return (
    <>
      <Container>
        <div id="resume">
          <Stack direction="horizontal" gap={2}>
            <Badge pill bg="dark" text="white">
              Services
            </Badge>
          </Stack>
          <h3 className="m-0">
            My Available <span className="text-info">Services</span>
          </h3>
          <hr className="col-1 m-0 text-info" />
          <Row className="align-items-center">
            <Col sm={12} md={3} lg={3}>
              <Card border="info" className="mt-4 text-center shadow">
                <Card.Body>
                  <Image src={WebDesign} alt="Web Design" />
                  <Card.Title className="fs-4 mt-3">Web Design</Card.Title>
                  <Card.Text className="mt-3 text-muted">
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Non, quia!
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
            <Col sm={12} md={3} lg={3}>
              <Card border="info" className="mt-4 text-center shadow">
                <Card.Body>
                  <Image src={WebDevelopment} alt="Web Development" />
                  <Card.Title className="fs-4 mt-3">Web Development</Card.Title>
                  <Card.Text className="mt-3 text-muted">
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Non, quia!
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
            <Col sm={12} md={3} lg={3}>
              <Card border="info" className="mt-4 text-center shadow">
                <Card.Body>
                  <Image src={AppDevelopment} alt="App Development" />
                  <Card.Title className="fs-4 mt-3">App Development</Card.Title>
                  <Card.Text className="mt-3 text-muted">
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Non, quia!
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
            <Col sm={12} md={3} lg={3}>
              <Card border="info" className="mt-4 text-center shadow">
                <Card.Body>
                  <Image src={SEOMarketing} alt="SEO / Marketing" />
                  <Card.Title className="fs-4 mt-3">SEO / Marketing</Card.Title>
                  <Card.Text className="mt-3 text-muted">
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Non, quia!
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
            <Col sm={12} md={3} lg={3}>
              <Card border="info" className="mt-4 text-center shadow">
                <Card.Body>
                  <Image src={APIDevelopment} alt="API Development" />
                  <Card.Title className="fs-4 mt-3">API Development</Card.Title>
                  <Card.Text className="mt-3 text-muted">
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Non, quia!
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
            <Col sm={12} md={3} lg={3}>
              <Card border="info" className="mt-4 text-center shadow">
                <Card.Body>
                  <Image src={PluginDevelopment} alt="Plugin Development" />
                  <Card.Title className="fs-4 mt-3">Plugin Development</Card.Title>
                  <Card.Text className="mt-3 text-muted">
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Non, quia!
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
            <Col sm={12} md={3} lg={3}>
              <Card border="info" className="mt-4 text-center shadow">
                <Card.Body>
                  <Image src={DomainHosting} alt="Domain & Hosting" />
                  <Card.Title className="fs-4 mt-3">Domain & Hosting</Card.Title>
                  <Card.Text className="mt-3 text-muted">
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Non, quia!
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
            <Col sm={12} md={3} lg={3}>
              <Card border="info" className="mt-4 text-center shadow">
                <Card.Body>
                  <Image src={HardwareSolution} alt="Hardware Solution" />
                  <Card.Title className="fs-4 mt-3">Hardware Solution</Card.Title>
                  <Card.Text className="mt-3 text-muted">
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Non, quia!
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </div>
      </Container>
    </>
  );
}

export default Services;
