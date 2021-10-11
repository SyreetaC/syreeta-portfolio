import { FaEnvelope, FaGithubAlt, FaLinkedin } from "react-icons/fa";
import "./Footer.css";

const Footer = () => {
  return (
    <div className="footerContainer">
      <div className="footerItem">
        <a href="mailto:syreeta.cummings@gmail.com">{<FaEnvelope />}</a>
      </div>
      <div className="footerItem">
        <a href="https://github.com/SyreetaC">{<FaGithubAlt />}</a>
      </div>
      <div className="footerItem">
        <a href="https://www.linkedin.com/in/syreeta-c/">{<FaLinkedin />}</a>
      </div>
    </div>
  );
};

export default Footer;
