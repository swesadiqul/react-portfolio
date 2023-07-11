import { Container } from "react-bootstrap";
import Card from "react-bootstrap/Card";
import Image from "react-bootstrap/Image";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from 'react-bootstrap/Button';
import Facebook from '../assets/follow/facebook.png'
import Twitter from '../assets/follow/twitter.png'
import LinkedIn from '../assets/follow/linkedin.png'
import GitHub from '../assets/follow/cat.png'

function About() {
  return (
    <>
      <Container>
        <Card border="info" id="about" className="shadow">
          <Row className="align-items-center">
            <Col xs={12} md={4} className="text-center">
              <Image
                src="https://res.cloudinary.com/practicaldev/image/fetch/s--4MGu2Aj4--/c_fill,f_auto,fl_progressive,h_320,q_auto,w_320/https://dev-to-uploads.s3.amazonaws.com/uploads/user/profile_image/724081/42575e68-46f3-456d-a995-6a4d2393dae1.jpg"
                width={200}
                height={200}
                roundedCircle
                thumbnail
              />
              <div className="follow mt-4">
                <a className="me-2" href="http://" target="_blank" rel="noopener noreferrer">
                    <img src={Facebook} alt="Facebook" />
                </a>
                <a className="me-2" href="http://" target="_blank" rel="noopener noreferrer">
                    <img src={Twitter} alt="Facebook" />
                </a>
                <a className="me-2" href="http://" target="_blank" rel="noopener noreferrer">
                    <img src={LinkedIn} alt="Facebook" />
                </a>
                <a className="me-2" href="http://" target="_blank" rel="noopener noreferrer">
                    <img src={GitHub} alt="Facebook" />
                </a>
              </div>
              <Button variant="outline-info" className="mt-3" size="lg">Download Resume</Button>
            </Col>
            <Col xs={12} md={8}>
              <Card.Body>
                <Card.Title className="mt-4 fs-2">Md. Sadiqul Islam</Card.Title>
                <Card.Subtitle className="fs-5 mb-3">
                  Software Developer
                </Card.Subtitle>
                <Card.Text>
                  I have over 4 years of extensive knowledge and experience in
                  Python programming, and I am also a Python Django trainer.
                  Professionally, I have more than 1 year of hands-on experience
                  as a software developer, specializing in Python, Django,
                  Django Rest Framework, unit testing, HTML, CSS (including
                  Sass), Git and GitHub, and Bootstrap. As a trainer, I leverage
                  my expertise to educate and guide aspiring developers in
                  Python and Django. I have a deep understanding of these
                  technologies and can effectively communicate complex concepts
                  in a clear and understandable manner. In addition to my
                  training role, I have successfully developed efficient and
                  reliable software applications, with a focus on creating
                  visually appealing user interfaces and responsive designs
                  using HTML, CSS, and Bootstrap. My proficiency in version
                  control systems like Git and GitHub enables me to ensure
                  effective collaboration and streamlined code management within
                  development teams. Furthermore, my commitment to code quality
                  and extensive knowledge of unit testing methodologies ensures
                  the delivery of robust and bug-free applications. With my
                  comprehensive skill set and experience as a Python Django
                  trainer, I bring valuable expertise to both software
                  development projects and the education of future developers.
                </Card.Text>
              </Card.Body>
            </Col>
          </Row>
        </Card>
      </Container>
    </>
  );
}

export default About;
