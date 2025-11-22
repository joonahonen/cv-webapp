import Link from "../Link";

// Footer component: Footer of the website
function Footer() {
  return (
    <>
      <div>
        <h2>Contact me</h2>
        <p>
          Email: joona.ahonen68@gmail.com
          <br />
          LinkedIn: <Link href="https://www.linkedin.com/in/joona-ahonen-b9239a38b/" children="Joona Ahonen"></Link>
          <br />

        </p>
      </div>
      <div>
        <p>© 2025 Joona Otso Ahonen</p>
        <Link href="https://github.com/joonahonen/cv-webapp" children="Website Source Code"/>
      </div>
    </>
  );
}

export default Footer;
