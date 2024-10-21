import "./Footer.css";

const Footer = () => {
  return (
    <footer>
      <div class="inner">
        <p class="copyright">©codeit - 2024</p>

        <ul class="privacy">
          <li>
            <a href="privacy.html">Privacy Policy</a>
          </li>

          <li>
            <a href="faq.html">FAQ</a>
          </li>
        </ul>

        <ul class="sns">
          <li>
            <a
              class="facebook"
              href="https://www.facebook.com"
              target="_blank"
            ></a>
          </li>

          <li>
            <a class="twitter" href="https://x.com" target="_blank"></a>
          </li>

          <li>
            <a
              class="youtube"
              href="https://www.youtube.com"
              target="_blank"
            ></a>
          </li>

          <li>
            <a
              class="instagram"
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
