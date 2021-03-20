//
// Import Menu CSS //
//
import "./menu.css";

//
// Fonction Menu//
//
function Menu() {
  return (
    <nav className="menuContainer">
      <ul className="list">
        <li className="puce">
          <a className="newPage" href="#">
            Accueil
          </a>
        </li>
        <li className="puce">
          <a className="newPage" href="#">
            Articles
          </a>
        </li>
        <li className="puce">
          <a className="newPage" href="#">
            Contact
          </a>
        </li>
      </ul>
    </nav>
  );
}
export default Menu;
