import React, { useState } from "react";
import {
  BarChart3,
  Plus,
  Users,
  CheckCircle,
  Clock,
  MoreHorizontal,
  ArrowUpRight,
  Home,
  Settings,
  LogOut,
  Bell,
  User,
  Menu,
  X,
  Vote,
  Calendar,
  Search,
  Filter,
} from "lucide-react";
import Profile from "./Profile";
import SettingsPage from "./Settings";
import "./Dashboard.css";

const Dashboard = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [activeComponent, setActiveComponent] = useState("dashboard");
  const [electionFilter, setElectionFilter] = useState("all");

  // Sample data
  const voters = [
    { id: 1, name: "Alice Johnson", voted: true, lastActive: "2 hours ago", status: "active" },
    { id: 2, name: "Bob Smith", voted: true, lastActive: "1 day ago", status: "active" },
    { id: 3, name: "Carol White", voted: false, lastActive: "3 days ago", status: "inactive" },
    { id: 4, name: "David Brown", voted: true, lastActive: "1 hour ago", status: "active" },
    { id: 5, name: "Eve Wilson", voted: false, lastActive: "5 days ago", status: "inactive" },
  ];

  const elections = [
    {
      id: 1,
      title: "Student Council President",
      status: "active",
      startDate: "2024-03-15",
      endDate: "2024-03-20",
      totalVotes: 45,
      candidates: ["John Smith", "Sarah Johnson", "Mike Brown"],
    },
    {
      id: 2,
      title: "Faculty Board Election",
      status: "upcoming",
      startDate: "2024-04-01",
      endDate: "2024-04-05",
      totalVotes: 0,
      candidates: ["Dr. Williams", "Prof. Davis", "Dr. Miller"],
    },
    {
      id: 3,
      title: "Club President Election",
      status: "completed",
      startDate: "2024-02-10",
      endDate: "2024-02-15",
      totalVotes: 78,
      candidates: ["Emma Wilson", "James Taylor"],
    },
  ];

  // Render the active component
  const renderComponent = () => {
    switch (activeComponent) {
      case "profile":
        return <Profile />;
      case "settings":
        return <SettingsPage />;
      case "voters":
        return (
          <div className="content-section">
            <div className="section-header">
              <div className="search-bar">
                <Search size={20} />
                <input type="text" placeholder="Search voters..." />
              </div>
              <button className="filter-btn">
                <Filter size={20} />
                Filter
              </button>
            </div>

            <div className="voters-stats">
              <div className="stat-card">
                <h3>Total Voters</h3>
                <p className="stat-value">87</p>
              </div>
              <div className="stat-card">
                <h3>Active Voters</h3>
                <p className="stat-value">65</p>
              </div>
              <div className="stat-card">
                <h3>Voted Today</h3>
                <p className="stat-value">12</p>
              </div>
            </div>

            <div className="voters-table">
              <table>
                <thead>
                  <tr>
                    <th>Voter Name</th>
                    <th>Status</th>
                    <th>Voted</th>
                    <th>Last Active</th>
                    <th>Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {voters.map((voter) => (
                    <tr key={voter.id}>
                      <td>
                        <div className="voter-info">
                          <User size={20} />
                          <span>{voter.name}</span>
                        </div>
                      </td>
                      <td>
                        <span className={`status-badge ${voter.status}`}>
                          {voter.status}
                        </span>
                      </td>
                      <td>
                        <span className={`voted-status ${voter.voted ? 'yes' : 'no'}`}>
                          {voter.voted ? 'Yes' : 'No'}
                        </span>
                      </td>
                      <td>{voter.lastActive}</td>
                      <td>
                        <button className="action-btn">
                          <MoreHorizontal size={18} />
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        );
      case "elections":
        return (
          <div className="content-section">
            <div className="section-header">
              <div className="filter-tabs">
                <button 
                  className={`filter-tab ${electionFilter === 'all' ? 'active' : ''}`}
                  onClick={() => setElectionFilter('all')}
                >
                  All Elections
                </button>
                <button 
                  className={`filter-tab ${electionFilter === 'active' ? 'active' : ''}`}
                  onClick={() => setElectionFilter('active')}
                >
                  Active
                </button>
                <button 
                  className={`filter-tab ${electionFilter === 'upcoming' ? 'active' : ''}`}
                  onClick={() => setElectionFilter('upcoming')}
                >
                  Upcoming
                </button>
                <button 
                  className={`filter-tab ${electionFilter === 'completed' ? 'active' : ''}`}
                  onClick={() => setElectionFilter('completed')}
                >
                  Completed
                </button>
              </div>
              <button className="create-btn">
                <Plus size={20} /> Create Election
              </button>
            </div>

            <div className="elections-grid">
              {elections.map((election) => (
                <div key={election.id} className="election-card">
                  <div className="election-card-header">
                    <h3>{election.title}</h3>
                    <span className={`status-badge ${election.status}`}>
                      {election.status}
                    </span>
                  </div>
                  <div className="election-card-content">
                    <div className="election-info">
                      <Calendar size={18} />
                      <span>{election.startDate} - {election.endDate}</span>
                    </div>
                    <div className="election-info">
                      <Vote size={18} />
                      <span>{election.totalVotes} votes</span>
                    </div>
                    <div className="candidates-list">
                      <h4>Candidates:</h4>
                      <ul>
                        {election.candidates.map((candidate, index) => (
                          <li key={index}>{candidate}</li>
                        ))}
                      </ul>
                    </div>
                  </div>
                  <div className="election-card-actions">
                    <button className="action-btn primary">View Details</button>
                    <button className="action-btn secondary">
                      {election.status === 'completed' ? 'View Results' : 'Manage'}
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        );
      default:
        return (
          <>
            <div className="dashboard-stats">
              <div className="dashboard-card">
                <div className="card-title">Total Elections</div>
                <div className="card-value">
                  <BarChart3 size={28} /> 5
                </div>
              </div>
              <div className="dashboard-card">
                <div className="card-title">Total Voters</div>
                <div className="card-value">
                  <Users size={28} /> 87
                </div>
              </div>
              <div className="dashboard-card">
                <div className="card-title">Completed Elections</div>
                <div className="card-value">
                  <CheckCircle size={28} /> 3
                </div>
              </div>
            </div>

            <div className="recent-activity">
              <h2>Recent Activity</h2>
              <div className="activity-list">
                <div className="activity-item">
                  <div className="activity-icon vote">
                    <Vote size={20} />
                  </div>
                  <div className="activity-details">
                    <p>New vote recorded in "Student Council President"</p>
                    <span>2 minutes ago</span>
                  </div>
                </div>
                <div className="activity-item">
                  <div className="activity-icon user">
                    <User size={20} />
                  </div>
                  <div className="activity-details">
                    <p>New voter registered: Alice Johnson</p>
                    <span>1 hour ago</span>
                  </div>
                </div>
                <div className="activity-item">
                  <div className="activity-icon complete">
                    <CheckCircle size={20} />
                  </div>
                  <div className="activity-details">
                    <p>"Club President Election" has ended</p>
                    <span>2 days ago</span>
                  </div>
                </div>
              </div>
            </div>
          </>
        );
    }
  };

  return (
    <div>
      {/* className="dashboard-root">
       Mobile sidebar toggle 
      <button
      className="fixed bottom-4 right-4 z-50 flex h-10 w-10 items-center justify-center rounded-full bg-blue-600 text-white shadow-lg md:hidden"
      onClick={() => setIsSidebarOpen(!isSidebarOpen)}
    >
      {isSidebarOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
    </button>  */}

      {/* Sidebar */}
      <aside className="dashboard-sidebar">
        <div className="sidebar-section">
          <h2>Main</h2>
          <ul className="sidebar-links">
            <li>
              <button 
                onClick={() => setActiveComponent("dashboard")} 
                className={`sidebar-link ${activeComponent === "dashboard" ? "active" : ""}`}
              >
                <Home size={20} /> Dashboard
              </button>
            </li>
            <li>
              <button 
                onClick={() => setActiveComponent("elections")} 
                className={`sidebar-link ${activeComponent === "elections" ? "active" : ""}`}
              >
                <BarChart3 size={20} /> Elections
              </button>
            </li>
            <li>
              <button 
                onClick={() => setActiveComponent("voters")} 
                className={`sidebar-link ${activeComponent === "voters" ? "active" : ""}`}
              >
                <Users size={20} /> Voters
              </button>
            </li>
          </ul>
        </div>
        <div className="sidebar-section">
          <h2>Account</h2>
          <ul className="sidebar-links">
            <li>
              <button 
                onClick={() => setActiveComponent("profile")} 
                className={`sidebar-link ${activeComponent === "profile" ? "active" : ""}`}
              >
                <User size={20} /> Profile
              </button>
            </li>
            <li>
              <button 
                onClick={() => setActiveComponent("settings")} 
                className={`sidebar-link ${activeComponent === "settings" ? "active" : ""}`}
              >
                <Settings size={20} /> Settings
              </button>
            </li>
            <li>
              <button className="sidebar-link">
                <LogOut size={20} /> Logout
              </button>
            </li>
          </ul>
        </div>
      </aside>

      {/* Main Content */}
      <main className="dashboard-main">
        <div className="dashboard-header">
          <div>
            <h1>{activeComponent.charAt(0).toUpperCase() + activeComponent.slice(1)}</h1>
            <p>Welcome back, John Doe</p>
          </div>
          {activeComponent === "dashboard" && (
            <button className="create-btn">
              <Plus size={20} /> Create New Election
            </button>
          )}
        </div>
        {renderComponent()}
      </main>
    </div>
  );
};

export default Dashboard; 