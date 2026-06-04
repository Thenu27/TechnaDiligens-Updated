import "./Footer.css";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-grid">

        <div className="footer-brand">
          <h2>TechnaDiligens</h2>
          <p>Building amazing web exeperiences for everyday people since 2024.</p>
        </div>

        <div className="footer-links">
          <h4>Links</h4>
          <ul>
            <li><a href="/">Home</a></li>
            <li><a href="/about">About</a></li>
            <li><a href="/model">Models</a></li>
            <li><a href="/contact">Contact</a></li>
            <li><a href="/projects">Projects</a></li>

          </ul>
        </div>

        <div className="footer-contact">
          <h4>Contact</h4>
          <p>Colombo, Srilanka</p>
          <p><a href="mailto:technadiligens@gmail.com">technadiligens@gmail.com</a></p>
          <p><a href="tel:+94766411765">+94 76 641 1765</a></p>
        </div>

      </div>

      <div className="footer-bottom">
        <p>© {new Date().getFullYear()} Acme Co. All rights reserved.</p>
      </div>
    </footer>
  );
}