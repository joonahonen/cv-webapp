import Link from "../Link";

// Footer component: Footer of the website
function Footer() {
  return (
    <>
      <div className="footer-div">
        <div className="contact-me">
          <h2>Contact me</h2>
          <p>
            Email: joona.ahonen68@gmail.com
            <br />
            LinkedIn: <Link href="https://www.linkedin.com/in/joona-ahonen-b9239a38b/" children="Joona Ahonen"></Link>
            <br />
          </p>
        </div>
        <div className="source-code">
          <p>© 2025 Joona Otso Ahonen</p>
          <Link href="https://github.com/joonahonen/cv-webapp" children="Website Source Code"/>
        </div>
      </div>
    </>
  );
}

export default Footer;
