import facebook from "./assets/img/icon_facebook.svg";
import instagram from "./assets/img/icon_instagram.svg";
import twitter from "./assets/img/icon_twitter.svg";
import mail from "./assets/img/icon_mail.svg";
import twitch from "./assets/img/icon_twitch.svg";

function Footer() {
  return (
    <footer>
      <div>
        <p>Jalan Suroyo No. 161 Mayangan Kota Probolonggo 672000</p>
        <p>binarcarrental@gmail.com</p>
        <p>081-233-334-808</p>
      </div>
      <div>
        <p>
          <a href="#service">Our Service</a>
        </p>
        <p>
          <a href="#why_us">Why Us</a>
        </p>
        <p>
          <a href="#testimonial">Testimonial</a>
        </p>
        <p>
          <a href="#FAQ">FAQ</a>
        </p>
      </div>
      <div>
        <p>Connect with us</p>
        <div className="socmed-icon">
          <img src={facebook} alt="facebook" />
          <img src={instagram} alt="instagram" />
          <img src={twitter} alt="twitter" />
          <img src={mail} alt="mail" />
          <img src={twitch} alt="twitch" />
        </div>
      </div>
      <div>
        <p>Copyright Binar 2022</p>
        <div style={{ width: "100px", height: "34px", backgroundColor: "rgba(13, 40, 166, 1)" }}></div>
      </div>
    </footer>
  );
}

export default Footer;
