import { Link } from "react-router-dom";
import "./Header.css";
export default function Header() {
  function handleLogOut() {
    window.localStorage.removeItem("email");
    window.location.pathname = "/";
  }
  return (
    <nav id="nav">
      <div id="navA">
        <Link to="/" id="navR">
          Home
        </Link>
        <Link to="/about" id="navR">
          About
        </Link>
      </div>
      {!window.localStorage.getItem("email") ? (
        <div id="navA">
          <Link to="/register" id="navR">
            Register
          </Link>
          <Link to="/login" id="navR">
            login
          </Link>
        </div>
      ) : (
        <>
          <Link style={{ width: "150px" }} to="/dashboard" id="navR">
            Dashboard
          </Link>
          <div id="navR" onClick={handleLogOut}>
            Log out
          </div>
        </>
      )}
    </nav>
  );
}
