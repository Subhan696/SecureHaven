import React, { useState } from 'react';
import { Bell, Lock, Eye, Moon, Globe, Shield, BellRing, Palette } from 'lucide-react';
import './Settings.css';

const Settings = () => {
  const [settings, setSettings] = useState({
    notifications: {
      email: true,
      push: true,
      sms: false,
      desktop: true,
    },
    privacy: {
      profileVisibility: 'public',
      showEmail: false,
      showLocation: true,
    },
    appearance: {
      darkMode: false,
      fontSize: 'medium',
      language: 'en',
    },
    security: {
      twoFactorAuth: false,
      loginAlerts: true,
      deviceHistory: true,
    },
  });

  const handleNotificationChange = (type) => {
    setSettings((prev) => ({
      ...prev,
      notifications: {
        ...prev.notifications,
        [type]: !prev.notifications[type],
      },
    }));
  };

  const handlePrivacyChange = (setting, value) => {
    setSettings((prev) => ({
      ...prev,
      privacy: {
        ...prev.privacy,
        [setting]: value,
      },
    }));
  };

  const handleAppearanceChange = (setting, value) => {
    setSettings((prev) => ({
      ...prev,
      appearance: {
        ...prev.appearance,
        [setting]: value,
      },
    }));
  };

  const handleSecurityChange = (setting) => {
    setSettings((prev) => ({
      ...prev,
      security: {
        ...prev.security,
        [setting]: !prev.security[setting],
      },
    }));
  };

  return (
    <div className="settings-container">
      <div className="settings-header">
        <h1>Settings</h1>
        <p>Manage your account settings and preferences</p>
      </div>

      <div className="settings-content">
        {/* Notifications Section */}
        <section className="settings-section">
          <div className="section-header">
            <Bell className="section-icon" />
            <h2>Notifications</h2>
          </div>
          <div className="settings-options">
            <div className="setting-item">
              <div className="setting-info">
                <label>Email Notifications</label>
                <span>Receive email updates about your account</span>
              </div>
              <label className="toggle">
                <input
                  type="checkbox"
                  checked={settings.notifications.email}
                  onChange={() => handleNotificationChange('email')}
                />
                <span className="toggle-slider"></span>
              </label>
            </div>
            <div className="setting-item">
              <div className="setting-info">
                <label>Push Notifications</label>
                <span>Receive push notifications on your devices</span>
              </div>
              <label className="toggle">
                <input
                  type="checkbox"
                  checked={settings.notifications.push}
                  onChange={() => handleNotificationChange('push')}
                />
                <span className="toggle-slider"></span>
              </label>
            </div>
          </div>
        </section>

        {/* Privacy Section */}
        <section className="settings-section">
          <div className="section-header">
            <Lock className="section-icon" />
            <h2>Privacy</h2>
          </div>
          <div className="settings-options">
            <div className="setting-item">
              <div className="setting-info">
                <label>Profile Visibility</label>
                <span>Control who can see your profile</span>
              </div>
              <select
                value={settings.privacy.profileVisibility}
                onChange={(e) => handlePrivacyChange('profileVisibility', e.target.value)}
              >
                <option value="public">Public</option>
                <option value="private">Private</option>
                <option value="friends">Friends Only</option>
              </select>
            </div>
          </div>
        </section>

        {/* Appearance Section */}
        <section className="settings-section">
          <div className="section-header">
            <Moon className="section-icon" />
            <h2>Appearance</h2>
          </div>
          <div className="settings-options">
            <div className="setting-item">
              <div className="setting-info">
                <label>Dark Mode</label>
                <span>Switch between light and dark themes</span>
              </div>
              <label className="toggle">
                <input
                  type="checkbox"
                  checked={settings.appearance.darkMode}
                  onChange={() => handleAppearanceChange('darkMode', !settings.appearance.darkMode)}
                />
                <span className="toggle-slider"></span>
              </label>
            </div>
            <div className="setting-item">
              <div className="setting-info">
                <label>Language</label>
                <span>Choose your preferred language</span>
              </div>
              <select
                value={settings.appearance.language}
                onChange={(e) => handleAppearanceChange('language', e.target.value)}
              >
                <option value="en">English</option>
                <option value="es">Spanish</option>
                <option value="fr">French</option>
                <option value="de">German</option>
              </select>
            </div>
          </div>
        </section>

        {/* Security Section */}
        <section className="settings-section">
          <div className="section-header">
            <Shield className="section-icon" />
            <h2>Security</h2>
          </div>
          <div className="settings-options">
            <div className="setting-item">
              <div className="setting-info">
                <label>Two-Factor Authentication</label>
                <span>Add an extra layer of security to your account</span>
              </div>
              <label className="toggle">
                <input
                  type="checkbox"
                  checked={settings.security.twoFactorAuth}
                  onChange={() => handleSecurityChange('twoFactorAuth')}
                />
                <span className="toggle-slider"></span>
              </label>
            </div>
            <div className="setting-item">
              <div className="setting-info">
                <label>Login Alerts</label>
                <span>Get notified of new sign-ins to your account</span>
              </div>
              <label className="toggle">
                <input
                  type="checkbox"
                  checked={settings.security.loginAlerts}
                  onChange={() => handleSecurityChange('loginAlerts')}
                />
                <span className="toggle-slider"></span>
              </label>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Settings; 