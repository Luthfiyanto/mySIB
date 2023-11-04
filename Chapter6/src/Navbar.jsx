import OffCanvas from "./OffCanvas";

function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg">
      <div className="container py-3">
        <a className="navbar-brand" href="#" id="title-box">
          Binar
        </a>
        <div>
          <button className="navbar-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasNavbar" aria-controls="#offcanvasNavbar" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>

          <OffCanvas />
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
