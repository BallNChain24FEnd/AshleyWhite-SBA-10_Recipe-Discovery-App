import { useState } from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";

export default function Navbar() {
  // Store search input
  const [search, setSearch] = useState("");
  const navigate = useNavigate();

  function handleSubmit(e) {
    e.preventDefault();

    // Search only when text is entered
    if (!search.trim()) return;

    navigate(`/search?query=${encodeURIComponent(search.trim())}`);
    setSearch("");
  }

  return (
    <header>
      <nav aria-label="Main navigation">
        {/* App title */}
        <Link to="/" className="brand">
          Global Recipe Discovery App
        </Link>

        <ul>
          <li><NavLink to="/" end>Home</NavLink></li>
          <li><NavLink to="/favorites">Favorites</NavLink></li>
          <li><NavLink to="/search">Search</NavLink></li>
        </ul>

        {/* Recipe search form */}
        <form onSubmit={handleSubmit} className="search-form" role="search">
          <label htmlFor="recipe-search" className="sr-only">
            Search recipes by name
          </label>

          <input
            id="recipe-search"
            type="search"
            placeholder="Search recipes..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />

          <button type="submit">Search</button>
        </form>
      </nav>
    </header>
  );
}