import "../../styles/navbar.css";

export default function Navbar() {
  return (
    <nav className="navbar">
      <div className="nav-left">
        <a href="#">HOME</a>
        <a href="#">ABOUT</a>
        <a href="#">EVENTS</a>
      </div>

      <div className="nav-center">
        <h1 className="logo">
          <span className="logo-l">꥟</span>
          <span className="logo-rest">LUXORT</span>
        </h1>
      </div>

      <div className="nav-right">
        <span className="globe-icon">🌐</span>
        <span className="lang">EN</span>
        <span className="phone">+123 7564 8970</span>
        <a href="#" className="login">LOGIN ↗</a>
      </div>
    </nav>
  );
}
