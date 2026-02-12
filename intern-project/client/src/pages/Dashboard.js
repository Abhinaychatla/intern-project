import Sidebar from "../components/Sidebar";
import Navbar from "../components/Navbar";

const Dashboard = () => {
  return (
    <div>
      {/* Sidebar */}
      <Sidebar />

      {/* Main Content Area */}
      <div style={{ marginLeft: "240px" }}>
        <Navbar />

        <div className="container mt-4">
          <h2>Welcome to your Dashboard 🎉</h2>
          <p>You are successfully logged in.</p>

          <div className="row mt-4">
            <div className="col-md-4">
              <div className="card text-white bg-primary mb-3">
                <div className="card-body">
                  <h5 className="card-title">Tasks</h5>
                  <p className="card-text">
                    Manage and organize your tasks easily.
                  </p>
                </div>
              </div>
            </div>

            <div className="col-md-4">
              <div className="card text-white bg-success mb-3">
                <div className="card-body">
                  <h5 className="card-title">Productivity</h5>
                  <p className="card-text">
                    Track your daily work efficiently.
                  </p>
                </div>
              </div>
            </div>

            <div className="col-md-4">
              <div className="card text-white bg-warning mb-3">
                <div className="card-body">
                  <h5 className="card-title">Profile</h5>
                  <p className="card-text">
                    Update your personal information.
                  </p>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Dashboard;
