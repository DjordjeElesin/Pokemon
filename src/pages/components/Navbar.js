import Link from 'next/link';

export default function Navbar() {
  return (
    <nav className="navbar">
      <ul className="navbarList">
        <li className="listItem logo">
          <img src="/media/pokemon_icon.png"/>
        </li>
        <li  className="listItem">
          <Link href="/">Home</Link>
        </li>
        <li className="listItem">
          <Link href="/battle-arena">Battle Arena</Link>
        </li>
        <li className="listItem">
          <Link href="/pokedex">Pokedex</Link>
        </li>
        <li className="listItem about">
          <Link href="/About">About</Link>
        </li>
      </ul>
    </nav>
  );
}
