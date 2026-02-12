import { Link } from "react-router-dom";
import "./Sidebar.css";

const Sidebar = () => {
  return (
    <div className="sidebar bg-dark text-white p-3">
      <h4 className="text-center">Dashboard</h4>
      <ul className="nav flex-column mt-4">
        <li className="nav-item">
          <Link className="nav-link text-white" to="/dashboard">🏠 Dashboard</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link text-white" to="/tasks">📝 Tasks</Link>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
