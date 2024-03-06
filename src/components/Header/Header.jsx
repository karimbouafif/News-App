import "../../assets/sass/layout/_header.scss";
import logo from "../../assets/images/newslogo.png";

function Header() {

console.log(logo.default);

  return (
    <header className="header">
      <div className="header__logo-box">
        <img src={logo} alt="Logo" className="header__logo" />
      </div>

      <div className="header__text-box">
        <h1 className="heading-primary">
          <span className="heading-primary--main">Outdoors</span>
          <span className="heading-primary--sub">is where life happens</span>
        </h1>

        <a href="#section-tours" className="btn btn--white btn--animated">Discover our news</a>
      </div>
    </header>
  );
}

export default Header;
