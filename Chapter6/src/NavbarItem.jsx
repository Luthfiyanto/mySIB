function NavbarItem({ navHref, navTitle }) {
  return (
    <div>
      <a className="nav-link" href={navHref}>
        {navTitle}
      </a>
    </div>
  );
}

export default NavbarItem;
