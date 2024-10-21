import "./Footer.css";

const Footer = () => {
  return (
    <footer>
      <div className="inner">
        <p className="copyright">©codeit - 2024</p>

        <ul className="privacy">
          <li>
            <a href="privacy.html">Privacy Policy</a>
          </li>

          <li>
            <a href="faq.html">FAQ</a>
          </li>
        </ul>

        <ul className="sns">
          <li>
            <a
              className="facebook"
              href="https://www.facebook.com"
              target="_blank"
            ></a>
          </li>

          <li>
            <a className="twitter" href="https://x.com" target="_blank"></a>
          </li>

          <li>
            <a
              className="youtube"
              href="https://www.youtube.com"
              target="_blank"
            ></a>
          </li>

          <li>
            <a
              className="instagram"
              href="https://www.instagram.com"
              target="_blank"
            ></a>
          </li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
