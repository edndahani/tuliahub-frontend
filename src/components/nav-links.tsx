import { NavLink } from "react-router-dom";

type navLinksProps = {
  classNam?: string;
};

const links = [
  {
    label: "Rentals",
    to: "/rentals",
  },
  {
    label: "Venues",
    to: "/venues",
  },
  {
    label: "Refreshments",
    to: "/refreshments",
  },
  {
    label: "About Us",
    to: "/about-us",
  },
];

const NavLinks = ({ classNam }: navLinksProps) => {
  return (
    <nav className={`${classNam}`}>
      {links.map(({ label, to }) => (
        <NavLink
          key={label}
          to={to}
          className="text-sm text-muted-foreground transition-all duration-200 aria-[current=page]:text-primary hover:text-hover"
        >
          {label}
        </NavLink>
      ))}
    </nav>
  );
};

export default NavLinks;
