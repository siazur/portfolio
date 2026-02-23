import "./style.css";
import resumeFile from "./../../img/Anastasia_Mazurkevich_Frontend_developer_CV.pdf"

const Header = () => {
    return (
        <header className="header">
          <div className="header__wrapper">
              <h1 className="header__title">
                  <strong>Hi, my name is <em>Anastasia</em></strong><br />
                  a frontend developer
              </h1>
              <div className="header__text">
                  <p>with passion for learning and creating.</p>
              </div>
              <a href={resumeFile} download className="btn">Download CV</a>
          </div>
        </header>
    );
};

export default Header;