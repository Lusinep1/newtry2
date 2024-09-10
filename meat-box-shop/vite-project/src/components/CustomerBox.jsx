// //src/components/CustomerBox.jsx
// import React from "react";
// import Button from "./Button";

// function CustomerBox() {
//   return (
//     <div style={styles.container}>
//       <div style={styles.imageContainer}>
//         <img
//           src="/images/customerbox.jpg"
//           alt="The regular customer box"
//           style={styles.image}
//         />
//       </div>
//       <div style={styles.textContainer}>
//         <h2 style={styles.title}>The regular customer box</h2>
//         <p style={styles.description}>
//           Subscribe to our most popular meat box and enjoy everyday food and
//           select details only for subscribers. From the farm to your home.
//         </p>
//         <ul style={styles.features}>
//           <li style={styles.featureItem}>✔️ You choose the content</li>
//           <li style={styles.featureItem}>✔️ Organic & KRAV-labelled</li>
//           <li style={styles.featureItem}>✔️ No binding period</li>
//         </ul>
//         <p style={styles.price}>Fr. SEK 1,395</p>
//         <a href="/loyaltybox-start" style={styles.button}>
//           READ MORE
//         </a>
//       </div>
//     </div>
//   );
// }

// const styles = {
//   container: {
//     display: "flex",
//     alignItems: "center",
//     justifyContent: "space-between",
//     padding: "20px",
//     backgroundColor: "#fff",
//     boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
//     borderRadius: "8px",
//     maxWidth: "1200px",
//     margin: "20px auto",
//   },
//   imageContainer: {
//     flex: "1 1 50%",
//   },
//   image: {
//     width: "100%",
//     borderRadius: "8px",
//   },
//   textContainer: {
//     // border: "2px solid green",
//     flex: "1 1 50%",
//     marginLeft: "30px",
//   },
//   title: {
//     fontSize: "42px",
//     color: "#4e4e4e",
//   },
//   description: {
//     fontSize: "24px",
//     color: "#4e4e4e",
//     // marginBottom: "15px",
//   },
//   features: {
//     listStyleType: "none",
//     padding: "0",
//     // marginBottom: "15px",
//   },
//   featureItem: {
//     fontSize: "16px",
//     color: "#4e4e4e",
//     marginBottom: "5px",
//   },
//   price: {
//     fontSize: "22px",
//     color: "green",
//     marginBottom: "15px",
//     fontWeight: "bold",
//   },
//   button: {
//     display: "inline-block",
//     padding: "10px 20px",
//     backgroundColor: "#f68b1e",
//     color: "#fff",
//     textDecoration: "none",
//     borderRadius: "5px",
//     fontSize: "16px",
//   },
//   //Responsive design adjustments
//   "@media (max-width: 800px)": {
//     container: {
//       flexDirection: "column", // Side by side layout for screens 800px and wider
//     },
//     textContainer: {
//       paddingLeft: "20px",
//       textAlign: "left", // Left align text on larger screens
//     },
//     button: {
//       alignSelf: "flex-start", // Align the button to the start on larger screens
//     },
//   },
// };

// export default CustomerBox;

// src/components/CustomerBox.jsx
import React from "react";
import Button from "./Button"; // Import the Button component

function CustomerBox() {
  return (
    <div style={styles.container}>
      <div style={styles.imageContainer}>
        <img
          src="/images/customerbox.jpg"
          alt="The regular customer box"
          style={styles.image}
        />
      </div>
      <div style={styles.textContainer}>
        <h2 style={styles.title}>The regular customer box</h2>
        <p style={styles.description}>
          Subscribe to our most popular meat box and enjoy everyday food and
          select details only for subscribers. From the farm to your home.
        </p>
        <ul style={styles.features}>
          <li style={styles.featureItem}>✔️ You choose the content</li>
          <li style={styles.featureItem}>✔️ Organic & KRAV-labelled</li>
          <li style={styles.featureItem}>✔️ No binding period</li>
        </ul>
        <p style={styles.price}>Fr. SEK 1,395</p>
        {/* Replace the anchor tag with the new Button component */}
        <Button variant="contained" color="warning" href="/loyaltybox-start">
          READ MORE
        </Button>
      </div>
    </div>
  );
}

const styles = {
  container: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    padding: "20px",
    backgroundColor: "#fff",
    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
    borderRadius: "8px",
    maxWidth: "1200px",
    margin: "20px auto",
  },
  imageContainer: {
    flex: "1 1 50%",
  },
  image: {
    width: "100%",
    borderRadius: "8px",
  },
  textContainer: {
    flex: "1 1 50%",
    marginLeft: "30px",
  },
  title: {
    fontSize: "40px",
    color: "#4e4e4e",
  },
  description: {
    fontSize: "24px",
    color: "#4e4e4e",
  },
  features: {
    listStyleType: "none",
    padding: "0",
  },
  featureItem: {
    fontSize: "16px",
    color: "#4e4e4e",
    marginBottom: "5px",
  },
  price: {
    fontSize: "22px",
    color: "green",
    marginBottom: "15px",
    fontWeight: "bold",
  },
};

export default CustomerBox;
