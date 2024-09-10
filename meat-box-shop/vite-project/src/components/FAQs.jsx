// // src/components/FAQs.jsx
// import React from "react";

// function FAQs() {
//   return (
//     <div style={styles.faqsContainer}>
//       <h2 style={styles.heading}>Frequently Asked Questions</h2>
//       <div style={styles.faq}>
//         <h3>What is a Loyalty Box?</h3>
//         <p>A loyalty box is a subscription to regular deliveries...</p>
//       </div>
//       <div style={styles.faq}>
//         <h3>How do I choose the contents?</h3>
//         <p>You can customize your box contents...</p>
//       </div>
//     </div>
//   );
// }

// const styles = {
//   faqsContainer: {
//     padding: "20px",
//     backgroundColor: "#fff",
//     borderRadius: "8px",
//     boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
//   },
//   heading: {
//     fontSize: "28px",
//     marginBottom: "20px",
//   },
//   faq: {
//     marginBottom: "20px",
//   },
// };

// export default FAQs;

// src/components/FAQs.jsx
import React, { useState } from "react";

function FAQs() {
  const [activeIndex, setActiveIndex] = useState(null);

  const faqs = [
    {
      question: "What is in the box?",
      answer:
        "The farm society offers selected meat details of organic and KRAV-marked meat from Swedish organic farms. You choose from beef, pork, chicken and meat in season such as lamb and game in the autumn. We offer whole pieces, sliced ​​meat and minced meat. All meat is fresh, cut and vacuum-packed and can be put straight into the freezer. The range also includes delicacies from Swedish food artisans.",
    },
    {
      question: "What is a Loyalty Box?",
      answer:
        "A loyalty box is a subscription to regular deliveries of selected meats and food crafts from Swedish organic farms.",
    },
    {
      question: "How do I choose the contents?",
      answer:
        "You can customize your box contents based on your preferences and seasonal availability.",
    },
    {
      question: "How often do I receive the box?",
      answer:
        "You can choose the frequency of deliveries that best suits your needs, with the option to pause or adjust delivery schedules.",
    },
  ];

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div style={styles.faqsContainer}>
      <h2 style={styles.heading}>Frequently Asked Questions</h2>
      {faqs.map((faq, index) => (
        <div key={index} style={styles.faq}>
          <div style={styles.question} onClick={() => toggleFAQ(index)}>
            <span>{faq.question}</span>
            <span style={styles.toggleIcon}>
              {activeIndex === index ? "-" : "+"}
            </span>
          </div>
          {activeIndex === index && (
            <div style={styles.answer}>
              <p>{faq.answer}</p>
            </div>
          )}
        </div>
      ))}
    </div>
  );
}

const styles = {
  faqsContainer: {
    padding: "20px",
    backgroundColor: "#fff", // Matching the beige background
    borderRadius: "8px",
    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
    // width: "100%", // To ensure it takes up a good portion of the page width
    // margin: "auto", // Center the container
  },
  heading: {
    fontSize: "28px",
    marginBottom: "20px",
    color: "#4e4e4e",
    fontWeight: "bold",
  },
  faq: {
    marginBottom: "20px",
    borderBottom: "1px solid #ddd", // Separate each FAQ with a light border
    paddingBottom: "10px",
  },
  question: {
    fontSize: "18px",
    fontWeight: "bold",
    cursor: "pointer",
    display: "flex",
    justifyContent: "space-between", // Space between question and toggle icon
    color: "#4e4e4e",
  },
  toggleIcon: {
    fontSize: "24px", // Make the toggle icon more prominent
  },
  answer: {
    marginTop: "10px",
    fontSize: "16px",
    color: "#4e4e4e",
  },
};

export default FAQs;
