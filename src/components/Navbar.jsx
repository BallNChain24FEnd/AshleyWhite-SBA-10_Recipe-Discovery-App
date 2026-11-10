import { Link, NavLink } from "react-router-dom";

export default function Navbar() {
  return (
    <header>
      <nav aria-label="Main navigation">
        {/* App title links home */}
        <Link to="/" className="brand">
          Global Recipe Discovery App
        </Link>

        <ul>
          <li>
            <NavLink to="/" end>
              Home
            </NavLink>
          </li>
          <li>
            <NavLink to="/favorites">
              Favorites
            </NavLink>
          </li>
          <li>
            <NavLink to="/search">
              Search
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
}