import "../styles/footer.css";

const Footer = () => {
  return (
    <div className="footer-container">
      {/* <h1>Footer component</h1> */}
      <div className="footer-row">
        <div className="socials column">
          <h1>FOLLOW US</h1>
          <p>Yes, we are social</p>
          <div className="icons">
            <i className="fab fa-facebook-f"></i>
            <i className="fab fa-whatsapp-f"></i>
            <i className="fab fa-twitter-f"></i>
            <i className="fab fa-instagram-f"></i>
          </div>
        </div>
        <div className="logo column">
          <h1>LOGO</h1>
        </div>
        <div className="contact-us column">
          <h1>CONTACT US</h1>
          <p className="phone">071 234 5678</p>
          <p className="email">school@gmail.com</p>
          <p>
            41 Juta Street. Braamfontein <br />
            Johannesburg, 2001
          </p>
        </div>
      </div>
      <hr />
      <div className="footer">
        School Name &copy; 2023. All rights reserved.
      </div>
    </div>
  );
};

export default Footer;
