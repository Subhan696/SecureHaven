import React, { useState } from 'react';
import { User, Mail, Phone, MapPin, Camera } from 'lucide-react';
import './Profile.css';

const Profile = () => {
  const [profileData, setProfileData] = useState({
    name: 'John Doe',
    email: 'john.doe@example.com',
    phone: '+1 234 567 890',
    location: 'New York, USA',
    bio: 'Election administrator with 5 years of experience in managing digital voting systems.',
    avatar: 'https://via.placeholder.com/150'
  });

  const handleEditProfile = (e) => {
    e.preventDefault();
    // Handle profile edit logic here
    alert('Profile edit functionality will be implemented here');
  };

  return (
    <div className="profile-container">
      <div className="profile-header">
        <h1>Profile</h1>
        <p>Manage your personal information</p>
      </div>

      <div className="profile-content">
        <div className="profile-avatar-section">
          <div className="avatar-wrapper">
            <img src={profileData.avatar} alt="Profile" className="profile-avatar" />
            <button className="camera-button">
              <Camera size={20} />
            </button>
          </div>
        </div>

        <form className="profile-form" onSubmit={handleEditProfile}>
          <div className="form-group">
            <label>
              <User size={20} />
              <span>Full Name</span>
            </label>
            <input
              type="text"
              value={profileData.name}
              onChange={(e) => setProfileData({ ...profileData, name: e.target.value })}
            />
          </div>

          <div className="form-group">
            <label>
              <Mail size={20} />
              <span>Email</span>
            </label>
            <input
              type="email"
              value={profileData.email}
              onChange={(e) => setProfileData({ ...profileData, email: e.target.value })}
            />
          </div>

          <div className="form-group">
            <label>
              <Phone size={20} />
              <span>Phone</span>
            </label>
            <input
              type="tel"
              value={profileData.phone}
              onChange={(e) => setProfileData({ ...profileData, phone: e.target.value })}
            />
          </div>

          <div className="form-group">
            <label>
              <MapPin size={20} />
              <span>Location</span>
            </label>
            <input
              type="text"
              value={profileData.location}
              onChange={(e) => setProfileData({ ...profileData, location: e.target.value })}
            />
          </div>

          <div className="form-group">
            <label>Bio</label>
            <textarea
              value={profileData.bio}
              onChange={(e) => setProfileData({ ...profileData, bio: e.target.value })}
              rows={4}
            />
          </div>

          <div className="form-actions">
            <button type="submit" className="save-button">Save Changes</button>
            <button type="button" className="cancel-button">Cancel</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Profile; 