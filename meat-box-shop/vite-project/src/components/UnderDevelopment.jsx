// src/components/UnderDevelopment.jsx
import React from "react";

function UnderDevelopment() {
  const styles = {
    container: {
      height: "100vh",
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
      textAlign: "center",
      padding: "20px",
      fontSize: "24px",
      backgroundColor: "#f7f7f7",
      color: "#333",
    },
    text: {
      marginBottom: "20px",
    },
    developerNote: {
      fontSize: "18px",
      marginTop: "20px",
      color: "#888",
    },
  };

  return (
    <div style={styles.container}>
      <div style={styles.text}>
        My dear friends, this page is under development. The developer is my
        sister, and it's taking her a little longer than expected to create this
        page. Please bear with her. This is her Instagram account -{" "}
        <a
          href="https://www.instagram.com/lusinepapanyan/"
          target="_blank"
          rel="noopener noreferrer"
        >
          @sisterInstagram
        </a>
        . If you want to give her a new website idea (and potentially slow down
        this website's progress even more), feel free to reach out to her!
      </div>
      <div style={styles.developerNote}>
        Developer humor: "Please ignore this message. I will try to finish this
        website—if I’m still on speaking terms with my brother." 😅
      </div>
    </div>
  );
}

export default UnderDevelopment;
