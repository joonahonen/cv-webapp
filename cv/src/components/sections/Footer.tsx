import Link from "../Link";
import "./Footer.css";

// Footer component: Footer of the website
function Footer() {
  return (
    <>
      <div className="footer-div">
        <div className="contact-me">
          <h2>Contact me</h2>
          <div className="contact-info">
            <div>Email: joona.ahonen68@gmail.com</div>
            <div>
              LinkedIn:{" "}
              <Link
                href="https://www.linkedin.com/in/joona-ahonen-b9239a38b/"
                children="Joona Ahonen"
              ></Link>
            </div>
          </div>
        </div>
        <div className="source-code">
          <p>© 2025 Joona Otso Ahonen</p>
          <Link
            href="https://github.com/joonahonen/cv-webapp"
            children="Website Source Code"
          />
        </div>
      </div>
    </>
  );
}

export default Footer;
