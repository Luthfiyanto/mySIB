import NavbarItem from "./NavbarItem";
import SuccessButton from "./components/Button";

function OffCanvas() {
  const navItems = [
    {
      title: "Our Services",
      href: "/#service",
    },
    {
      title: "Why us",
      href: "/#why_us",
    },
    {
      title: "Testimonial",
      href: "/#testimonial",
    },
    {
      title: "FAQ",
      href: "/#FAQ",
    },
  ];

  return (
    <div className="offcanvas offcanvas-end" tabIndex="-1" id="offcanvasNavbar" aria-labelledby="offcanvasNavbarLabel">
      <div className="offcanvas-header">
        <h5 className="offcanvas-title" id="offcanvasNavbarLabel">
          BCR
        </h5>
        <button type="button" className="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
      </div>
      <div className="offcanvas-body">
        <div className="navbar-nav nav-item">
          {navItems.map((item) => (
            <NavbarItem key={item.title} navTitle={item.title} navHref={item.href} />
          ))}
          <SuccessButton text={"Register"} />
        </div>
      </div>
    </div>
  );
}

export default OffCanvas;
