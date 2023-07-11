import { Container } from "react-bootstrap";
import Card from "react-bootstrap/Card";
import Badge from "react-bootstrap/Badge";
import Stack from "react-bootstrap/Stack";
import Image from "react-bootstrap/Image";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";

function Resume() {
  return (
    <>
      <Container>
        <div id="resume">
          <Stack direction="horizontal" gap={2}>
            <Badge pill bg="dark" text="white">
              Resume
            </Badge>
          </Stack>
          <h3 className="m-0">
            Education & <span className="text-info">Experience</span>
          </h3>
          <hr className="col-1 m-0 text-info" />
          <Card border="info" className="mt-4 shadow">
            <Card.Body>
              <Row className="align-items-center">
                <Col sm={6} lg={2}>
                  <Image
                    src="https://media.licdn.com/dms/image/D5603AQEUMOM4rr02WA/profile-displayphoto-shrink_800_800/0/1667243156897?e=2147483647&v=beta&t=rCToe3FHnANdcrh-DL-rYDkcpjZnzKrRaQiSyynGsks"
                    width={200}
                    height={100}
                    thumbnail
                  />
                </Col>
                <Col sm={6} lg={10}>
                  <Row className="align-items-center justify-content-around">
                    <Col sm={8} lg={8}>
                      <Badge pill bg="dark" text="white">
                        2022-Present
                      </Badge>
                      <Card.Title className="fs-2">
                        Software Developer
                      </Card.Title>
                      <Card.Subtitle className="fs-5">
                        Universe Soft Care
                      </Card.Subtitle>
                      <Card.Text className="mt-3 text-muted">
                        Sr. Software Developer(Python)
                      </Card.Text>
                    </Col>
                    <Col sm={4} lg={4} className="text-end">
                      <a
                        className="btn btn-outline-info"
                        href="#"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Contact Me
                      </a>
                    </Col>
                  </Row>
                </Col>
              </Row>
            </Card.Body>
          </Card>
          <Card border="info" className="mt-4 shadow">
            <Card.Body>
              <Row className="align-items-center">
                <Col sm={6} lg={2}>
                  <Image
                    src="https://universesoftcare.com/media/CustomerImage/Untitled-f1.jpg"
                    width={200}
                    height={100}
                    thumbnail
                  />
                </Col>
                <Col sm={6} lg={10}>
                  <Row className="align-items-center justify-content-around">
                    <Col sm={8} lg={8}>
                      <Badge pill bg="dark" text="white">
                        2022-Present
                      </Badge>
                      <Card.Title className="fs-2">
                        Developer and Trainer
                      </Card.Title>
                      <Card.Subtitle className="fs-5">
                        Universe IT Institute
                      </Card.Subtitle>
                      <Card.Text className="mt-3 text-muted">
                        Sr. Faculty(Python)
                      </Card.Text>
                    </Col>
                    <Col sm={4} lg={4} className="text-end">
                      <a
                        className="btn btn-outline-info"
                        href="#"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Contact Me
                      </a>
                    </Col>
                  </Row>
                </Col>
              </Row>
            </Card.Body>
          </Card>
          <Card border="info" className="mt-4 shadow">
            <Card.Body>
              <Row className="align-items-center">
                <Col sm={6} lg={2}>
                  <Image
                    src="data:image/png;base64,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"
                    width={200}
                    height={100}
                    thumbnail
                  />
                </Col>
                <Col sm={6} lg={10}>
                  <Row className="align-items-center justify-content-around">
                    <Col sm={8} lg={8}>
                      <Badge pill bg="dark" text="white">
                        2022-2022
                      </Badge>
                      <Card.Title className="fs-2">Python Developer</Card.Title>
                      <Card.Subtitle className="fs-5">
                        Universe Info Tech
                      </Card.Subtitle>
                      <Card.Text className="mt-3 text-muted">
                        Jr. Python Developer
                      </Card.Text>
                    </Col>
                    <Col sm={4} lg={4} className="text-end">
                      <a
                        className="btn btn-outline-info"
                        href="#"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Contact Me
                      </a>
                    </Col>
                  </Row>
                </Col>
              </Row>
            </Card.Body>
          </Card>
          <Card border="info" className="mt-4 shadow">
            <Card.Body>
              <Row className="align-items-center">
                <Col sm={6} lg={2}>
                  <Image
                    src="data:image/jpeg;base64,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"
                    width={200}
                    height={100}
                    thumbnail
                  />
                </Col>
                <Col sm={6} lg={10}>
                  <Row className="align-items-center justify-content-around">
                    <Col sm={8} lg={8}>
                      <Badge pill bg="dark" text="white">
                        2017-2021
                      </Badge>
                      <Card.Title className="fs-2">
                        Diploma In Engineering
                      </Card.Title>
                      <Card.Subtitle className="fs-5">
                        Thakurgaon Polytechnic Institute
                      </Card.Subtitle>
                      <Card.Text className="mt-3 text-muted">
                        Thakurgaon Silk Factory, Baliadangi Rd, Thakurgaon
                      </Card.Text>
                    </Col>
                    <Col sm={4} lg={4} className="text-end">
                      <a
                        className="btn btn-outline-info"
                        href="#"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Admission
                      </a>
                    </Col>
                  </Row>
                </Col>
              </Row>
            </Card.Body>
          </Card>
          <Card border="info" className="mt-4 shadow">
            <Card.Body>
              <Row className="align-items-center">
                <Col sm={6} lg={2}>
                  <Image
                    src="data:image/jpeg;base64,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"
                    width={200}
                    height={100}
                    thumbnail
                  />
                </Col>
                <Col sm={6} lg={10}>
                  <Row className="align-items-center justify-content-around">
                    <Col sm={8} lg={8}>
                      <Badge pill bg="dark" text="white">
                        2015-2016
                      </Badge>
                      <Card.Title className="fs-2">
                        Dakhil Examination
                      </Card.Title>
                      <Card.Subtitle className="fs-5">
                        Dhap Shyampur Khayrathi Si. Dakhil Madrasah, Rangpur
                      </Card.Subtitle>
                      <Card.Text className="mt-3 text-muted">
                        G6H9+HXF, Gopalpur
                      </Card.Text>
                    </Col>
                    <Col sm={4} lg={4} className="text-end">
                      <a
                        className="btn btn-outline-info"
                        href="#"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Admission
                      </a>
                    </Col>
                  </Row>
                </Col>
              </Row>
            </Card.Body>
          </Card>
        </div>
      </Container>
    </>
  );
}

export default Resume;
