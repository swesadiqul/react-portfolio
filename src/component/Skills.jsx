import { Container } from "react-bootstrap";
import Card from "react-bootstrap/Card";
import Badge from "react-bootstrap/Badge";
import Stack from "react-bootstrap/Stack";
import Image from "react-bootstrap/Image";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Python from "../assets/skills/python.png";
import HTML from "../assets/skills/html-5.png";
import CSS from "../assets/skills/css-3.png";
import JavaScript from "../assets/skills/js.png";
import ReactJs from "../assets/skills/science.png";
import Bootstrap from "../assets/skills/bootstrap.png";
import Django from "../assets/skills/django.png";

function Skills() {
  return (
    <>
      <div id="skills">
        <Container>
          <Stack direction="horizontal" gap={2}>
            <Badge pill bg="dark" text="white">
              Skills
            </Badge>
          </Stack>
          <h3 className="m-0">
            My <span className="text-info">Advantages</span>
          </h3>
          <hr className="col-1 m-0 text-info" />
          <Row className="align-items-center">
            <Col sm={12} md={2} lg={2}>
              <Card border="info" className="mt-4 text-center shadow">
                <Card.Body>
                  <Row className="align-items-center">
                    <Col>
                      <Card.Title className="fs-6 mt-3">Python</Card.Title>
                    </Col>
                    <Col>
                      <Image src={Python} alt="Web Design" />
                    </Col>
                  </Row>
                </Card.Body>
              </Card>
            </Col>
            <Col sm={12} md={2} lg={2}>
              <Card border="info" className="mt-4 text-center shadow">
                <Card.Body>
                  <Row className="align-items-center">
                    <Col>
                      <Card.Title className="fs-6 mt-3">Django</Card.Title>
                    </Col>
                    <Col>
                      <Image src={Django} alt="Django" />
                    </Col>
                  </Row>
                </Card.Body>
              </Card>
            </Col>
            <Col sm={12} md={2} lg={2}>
              <Card border="info" className="mt-4 text-center shadow">
                <Card.Body>
                  <Row className="align-items-center">
                    <Col>
                      <Card.Title className="fs-6 mt-3">DRF</Card.Title>
                    </Col>
                    <Col>
                      <Image src={Python} alt="DRF" />
                    </Col>
                  </Row>
                </Card.Body>
              </Card>
            </Col>
            <Col sm={12} md={2} lg={2}>
              <Card border="info" className="mt-4 text-center shadow">
                <Card.Body>
                  <Row className="align-items-center">
                    <Col>
                      <Card.Title className="fs-6 mt-3">HTML</Card.Title>
                    </Col>
                    <Col>
                      <Image src={HTML} alt="HTML" />
                    </Col>
                  </Row>
                </Card.Body>
              </Card>
            </Col>
            <Col sm={12} md={2} lg={2}>
              <Card border="info" className="mt-4 text-center shadow">
                <Card.Body>
                  <Row className="align-items-center">
                    <Col>
                      <Card.Title className="fs-6 mt-3">CSS</Card.Title>
                    </Col>
                    <Col>
                      <Image src={CSS} alt="CSS" />
                    </Col>
                  </Row>
                </Card.Body>
              </Card>
            </Col>
            <Col sm={12} md={2} lg={2}>
              <Card border="info" className="mt-4 text-center shadow">
                <Card.Body>
                  <Row className="align-items-center">
                    <Col>
                      <Card.Title className="fs-6 mt-3">JavaScript</Card.Title>
                    </Col>
                    <Col>
                      <Image src={JavaScript} alt="JavaScript" />
                    </Col>
                  </Row>
                </Card.Body>
              </Card>
            </Col>
            <Col sm={12} md={2} lg={2}>
              <Card border="info" className="mt-4 text-center shadow">
                <Card.Body>
                  <Row className="align-items-center">
                    <Col>
                      <Card.Title className="fs-6 mt-3">jQuery</Card.Title>
                    </Col>
                    <Col>
                      <Image src={Python} alt="jQuery" />
                    </Col>
                  </Row>
                </Card.Body>
              </Card>
            </Col>
            <Col sm={12} md={2} lg={2}>
              <Card border="info" className="mt-4 text-center shadow">
                <Card.Body>
                  <Row className="align-items-center">
                    <Col>
                      <Card.Title className="fs-6 mt-3">React</Card.Title>
                    </Col>
                    <Col>
                      <Image src={ReactJs} alt="React Js" />
                    </Col>
                  </Row>
                </Card.Body>
              </Card>
            </Col>
            <Col sm={12} md={2} lg={2}>
              <Card border="info" className="mt-4 text-center shadow">
                <Card.Body>
                  <Row className="align-items-center">
                    <Col>
                      <Card.Title className="fs-6 mt-3">Bootstrap</Card.Title>
                    </Col>
                    <Col>
                      <Image src={Bootstrap} alt="Bootstrap" />
                    </Col>
                  </Row>
                </Card.Body>
              </Card>
            </Col>
            <Col sm={12} md={2} lg={2}>
              <Card border="info" className="mt-4 text-center shadow">
                <Card.Body>
                  <Row className="align-items-center">
                    <Col>
                      <Card.Title className="fs-6 mt-3">Tailwind</Card.Title>
                    </Col>
                    <Col>
                      <Image src={Python} alt="Tailwind" />
                    </Col>
                  </Row>
                </Card.Body>
              </Card>
            </Col>
            <Col sm={12} md={2} lg={2}>
              <Card border="info" className="mt-4 text-center shadow">
                <Card.Body>
                  <Row className="align-items-center">
                    <Col>
                      <Card.Title className="fs-6 mt-3">UnitTest</Card.Title>
                    </Col>
                    <Col>
                      <Image src={Python} alt="Web Design" />
                    </Col>
                  </Row>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
}

export default Skills;
