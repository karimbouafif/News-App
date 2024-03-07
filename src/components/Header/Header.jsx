import "../../assets/sass/layout/_header.scss";
import logo from "../../assets/images/newslogo.png";
import Navigation from "../nav/nav";
import About from "../About/about";
function Header() {

console.log(logo.default);

  return (
    <div>
      <Navigation/>
    <header className="header">
      <div className="header__logo-box">
        <img src={logo} alt="Logo" className="header__logo" />
      </div>

      <div className="header__text-box">
        <h1 className="heading-primary">
          <span className="heading-primary--main">NewsPulse</span>
          <span className="heading-primary--sub">Stay Ahead Stay Informed</span>
        </h1>

        <a href="#section-tours" className="btn btn--white btn--animated">Discover our news</a>
      </div>
    </header>
    <About/>
    </div>
  );
}

export default Header;
