import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";

const Navbar = () => {
  const { logout } = useContext(AuthContext);

  return (
    <nav className="navbar navbar-light bg-light">
      <div className="container-fluid d-flex justify-content-end">
        <button className="btn btn-danger" onClick={logout}>
          Logout
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
