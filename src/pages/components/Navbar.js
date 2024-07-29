
export default function Navbar() {
  return (
    <nav className="navbar">
      <ul className="navbarList">
        <li className="listItem logo">
          <img src="/media/pokemon_icon.png"/>
        </li>
        <li  className="listItem">
          <a href="/">Home</a>
        </li>
        <li className="listItem">
          <a href="/">Battle Arena</a>
        </li>
        <li className="listItem">
          <a href="/">Pokedex</a>
        </li>
        <li className="listItem about">
          <a href="/">About</a>
        </li>
      </ul>
    </nav>
  );
}
