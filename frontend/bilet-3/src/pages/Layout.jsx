// import Home from "./Home";
import "./Layout.scss";
import { Link } from "react-router-dom";
import { Outlet } from "react-router-dom";


function Layout() {
  return (
    <>
      <div className="contanav" >  
      <nav className="container">
        <div className="Tastyarea">
          <button className="btntasty">
            <a href="">Tasty</a>
          </button>
        </div>
        <div className="rightside">
          <Link className="txtfontsize hvrhome" to="/home">Home</Link>
          <a className="txtfontsize" href="">Menu</a>
          <a className="txtfontsize" href="">Specialties</a>
          <a className="txtfontsize" href="">Reservations</a>
          <a className="txtfontsize" href="">Blog</a>
          <a className="txtfontsize" href="">About</a>
          <a className="txtfontsize" href="">Contact</a>
          <Link className="txtfontsize" to="/basket">Basket</Link>
          <Link className="txtfontsize" to="/favorites">Favorites</Link>
        </div>
      </nav>
      </div>
      <Outlet />
    </>
  );
}

export default Layout;
