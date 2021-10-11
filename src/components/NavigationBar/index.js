import { Navbar, Container } from "react-bootstrap";
import { FaHome } from "react-icons/fa";

const NavigationBar = () => {
  return (
    <div>
      <Navbar bg="light" variant="light">
        <Container>
          <div>
            <a href="/">{<FaHome />}</a>
          </div>
          <div id="nav-item-container">
            <a className="nav-link" href="/about-me">
              About me
            </a>
          </div>
          <div id="nav-item-container">
            <a className="nav-link" href="/contact">
              Contact me
            </a>
          </div>
          <div id="nav-item-container"></div>
          <div id="nav-item-container">
            <a className="nav-link" href="/projects">
              Projects
            </a>
          </div>
        </Container>
      </Navbar>
    </div>
  );
};

export default NavigationBar;
