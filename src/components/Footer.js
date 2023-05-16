import'./FooterStyle.css'
import footerLogo from "./Footer/footer_logo.png"
import footerFacebook from "./Footer/facebook.png"
import footerLinkedin from "./Footer/linkedin.png"
import footerInstagram from "./Footer/instagram.png"
import footerTwitter from "./Footer/twitter.png"

function Footer () {
  return (
   <section className="footer-bg" src="Footer/footer-backgroud.png" alt="">
    <div className="container-footer">
      <div className="footer-content">
        <img className="footer-logo" src={footerLogo} alt="" />
        <ul className="footer-links">
          <li><a href="#">ABOUT</a></li>
          <li><a href="#">SERVICE</a></li>
          <li><a href="#">FEATURES</a></li>
          <li><a href="#">CONTACT</a></li>
        </ul>
      </div>
      <div className="icon-footer">
        <img className="facebook-icon" src={footerFacebook} alt="" />
        <img className="linkedin-icon" src={footerLinkedin} alt="" />
        <img className="instagram-icon" src={footerInstagram} alt="" />
        <img className="twitter-icon" src={footerTwitter} alt="" />
      </div>
      <div className="copyright-line">
        <div className="line">
          <span className="divider" />
          <p className="copyright">
            Copyright &#169; premium info tech sdn bhd. All rights reserved.</p>
        </div>
      </div>
    </div>
  </section>
 );
}

export default Footer
