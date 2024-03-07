import "../../assets/sass/layout/_header.scss";
import Navigation from "../nav/nav";
import About from "../About/about";
import Feature from "../Feature/Feature";
function Header() {

  return (
    <div>
      <Navigation/>
    <header className="header">
      {/* <div className="header__logo-box">
        <img alt="logo" className="header__logo" />
      </div> */}

      <div className="header__text-box">
        <h1 className="heading-primary">
          <span className="heading-primary--main">NewsPulse</span>
          <span className="heading-primary--sub">Stay Ahead Stay Informed</span>
        </h1>

        <a href="#section-tours" className="btn btn--white btn--animated">Discover our news</a>
      </div>
    </header>
    <About/>
    <Feature/>
    </div>
  );
}

export default Header;
