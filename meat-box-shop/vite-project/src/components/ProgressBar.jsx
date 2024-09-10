// // src/components/ProgressBar.jsx
// import React from "react";

// function ProgressBar({ step }) {
//   const progressStyle = {
//     display: "flex",
//     justifyContent: "space-between",
//     alignItems: "center",
//     maxWidth: "50%",
//     margin: "20px auto",
//   };

//   const stepStyle = (isActive) => ({
//     width: "32px",
//     height: "32px",
//     borderRadius: "50%",
//     backgroundColor: isActive ? "#ff7f00" : "#e0e0e0",
//     color: isActive ? "#ffffff" : "#a0a0a0",
//     display: "flex",
//     justifyContent: "center",
//     alignItems: "center",
//     fontSize: "18px",
//     fontWeight: "bold",
//   });

//   const lineStyle = {
//     flexGrow: 1,
//     height: "2px",
//     backgroundColor: "#e0e0e0",
//   };

//   const stepTextStyle = (isActive) => ({
//     marginTop: "8px",
//     fontSize: "14px",
//     color: isActive ? "#333" : "#a0a0a0",
//     fontWeight: isActive ? "bold" : "normal",
//   });

//   return (
//     <div style={progressStyle}>
//       <div style={{ textAlign: "center" }}>
//         <div style={stepStyle(step >= 1)}>1</div>
//         <div style={stepTextStyle(step >= 1)}>Select size</div>
//       </div>
//       <div style={lineStyle} />
//       <div style={{ textAlign: "center" }}>
//         <div style={stepStyle(step >= 2)}>2</div>
//         <div style={stepTextStyle(step >= 2)}>Content</div>
//       </div>
//       <div style={lineStyle} />
//       <div style={{ textAlign: "center" }}>
//         <div style={stepStyle(step >= 3)}>3</div>
//         <div style={stepTextStyle(step >= 3)}>Delivery</div>
//       </div>
//     </div>
//   );
// }

// export default ProgressBar;

// src/components/ProgressBar.jsx
import React from "react";

function ProgressBar({ step }) {
  const progressStyle = {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    maxWidth: "50%",
    margin: "20px auto",
  };

  const stepStyle = (isCompleted, isCurrent) => ({
    width: "32px",
    height: "32px",
    borderRadius: "50%",
    backgroundColor: isCurrent
      ? "#ff7f00"
      : isCompleted
      ? "#4CAF50"
      : "#e0e0e0",
    color: "#ffffff",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    fontSize: "18px",
    fontWeight: "bold",
  });

  const lineStyle = {
    flexGrow: 1,
    height: "2px",
    backgroundColor: "#e0e0e0",
  };

  const lineCompletedStyle = {
    flexGrow: 1,
    height: "2px",
    backgroundColor: "#4CAF50", // Green color for completed step
  };

  const stepTextStyle = (isCurrent) => ({
    marginTop: "8px",
    fontSize: "14px",
    color: isCurrent ? "#ff7f00" : "#333",
    fontWeight: isCurrent ? "bold" : "normal",
  });

  return (
    <div style={progressStyle}>
      <div style={{ textAlign: "center" }}>
        <div style={stepStyle(true, step === 1)}>1</div>
        <div style={stepTextStyle(step === 1)}>Select size</div>
      </div>
      <div style={step >= 2 ? lineCompletedStyle : lineStyle} />
      <div style={{ textAlign: "center" }}>
        <div style={stepStyle(step >= 2, step === 2)}>2</div>
        <div style={stepTextStyle(step === 2)}>Content</div>
      </div>
      <div style={step >= 3 ? lineCompletedStyle : lineStyle} />
      <div style={{ textAlign: "center" }}>
        <div style={stepStyle(step >= 3, step === 3)}>3</div>
        <div style={stepTextStyle(step === 3)}>Delivery</div>
      </div>
    </div>
  );
}

export default ProgressBar;
