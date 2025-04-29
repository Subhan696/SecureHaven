import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
  BarChart3,
  Plus,
  Users,
  CheckCircle,
  Clock,
  ArrowUpRight,
} from "lucide-react";

const DashboardContent = () => {
  const [tab, setTab] = useState("active");

  return (
    <>
      <div className="dashboard-header">
        <div>
          <h1>Dashboard</h1>
          <p>Welcome back, John Doe</p>
        </div>
        <Link to="/create">
          <button className="create-btn">
            <Plus size={20} /> Create New Election
          </button>
        </Link>
      </div>

      {/* Stats Cards */}
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

      {/* Tabs */}
      <div className="dashboard-tabs">
        <button
          className={`dashboard-tab${tab === "active" ? " active" : ""}`}
          onClick={() => setTab("active")}
        >
          Active Elections
        </button>
        <button
          className={`dashboard-tab${tab === "completed" ? " active" : ""}`}
          onClick={() => setTab("completed")}
        >
          Completed
        </button>
        <button
          className={`dashboard-tab${tab === "upcoming" ? " active" : ""}`}
          onClick={() => setTab("upcoming")}
        >
          Upcoming
        </button>
      </div>

      {/* Election List */}
      <div className="election-list">
        {tab === "active" && (
          <>
            <h2>Active Elections</h2>
            <p>Currently running elections</p>
            <div className="election-item">
              <div className="election-item-header">
                <div className="election-item-title">Student Council President</div>
                <span className="election-item-status">Active</span>
              </div>
              <div className="election-item-footer">
                <span className="voters">
                  <Users size={18} /> 32 voters
                </span>
                <Link to="/results/1" className="results-link">
                  View Results <ArrowUpRight size={16} />
                </Link>
              </div>
            </div>
            <div className="election-item">
              <div className="election-item-header">
                <div className="election-item-title">Faculty Board Election</div>
                <span className="election-item-status">Active</span>
              </div>
              <div className="election-item-footer">
                <span className="voters">
                  <Users size={18} /> 18 voters
                </span>
                <Link to="/results/2" className="results-link">
                  View Results <ArrowUpRight size={16} />
                </Link>
              </div>
            </div>
          </>
        )}
        {tab === "completed" && (
          <>
            <h2>Completed Elections</h2>
            <p>Past elections with final results</p>
            <div className="election-item">
              <div className="election-item-header">
                <div className="election-item-title">Club President Election</div>
                <span className="election-item-status" style={{background:'#e5e7eb',color:'#22305b'}}>Completed</span>
              </div>
              <div className="election-item-footer">
                <span className="voters">
                  <Users size={18} /> 24 voters
                </span>
                <Link to="/results/3" className="results-link">
                  View Results <ArrowUpRight size={16} />
                </Link>
              </div>
            </div>
          </>
        )}
        {tab === "upcoming" && (
          <>
            <h2>Upcoming Elections</h2>
            <p>Scheduled future elections</p>
            <div className="election-item">
              <div className="election-item-header">
                <div className="election-item-title">Homecoming Committee</div>
                <span className="election-item-status" style={{background:'#fbbf24',color:'#22305b'}}>Upcoming</span>
              </div>
              <div className="election-item-footer">
                <span className="voters">
                  <Clock size={18} /> Starts in 32 days
                </span>
                <button className="results-link" style={{background:'none',border:'none',color:'#2563eb',padding:0,cursor:'pointer'}}>Edit Election</button>
              </div>
            </div>
          </>
        )}
      </div>
    </>
  );
};

export default DashboardContent; 