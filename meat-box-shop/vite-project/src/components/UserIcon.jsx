import React from "react";
import { Link } from "react-router-dom";

function UserIcon() {
  const user = true; // This should eventually come from AuthContext

  return (
    <div style={styles.userIcon}>
      <Link to={user ? "/account" : "/login"}>👤</Link>
    </div>
  );
}

const styles = {
  userIcon: {
    fontSize: "24px",
  },
};

export default UserIcon;
