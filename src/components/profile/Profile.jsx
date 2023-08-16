import React from "react";
import profileStyles from "./profile.module.css";

function Profile({ isOpen }) {
  return (
    <div className={profileStyles.profile}>
      <div
        className={`${profileStyles.details} ${
          isOpen ? profileStyles.opened : null
        }`}
      >
        <i className={`bx bx-user ${profileStyles.icon}`} />
        <div className={profileStyles.credentials}>
          <span className="name" style={{ fontSize: "15px" }}>
            Username
          </span>
          <span className="job" style={{ fontSize: "12px" }}>
            Level
          </span>
        </div>
      </div>
      <i className={`bx bx-log-out ${profileStyles.exit}`} />
    </div>
  );
}

export default Profile;
