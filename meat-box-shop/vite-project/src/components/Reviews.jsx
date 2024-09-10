// src/components/Reviews.jsx
import React, { useState, useRef } from "react";

const reviewsData = {
  all: [
    {
      name: "Tommy A.",
      rating: 4,
      date: "1 month ago",
      review:
        "Great box, but two products were missing. However, they were promptly addressed. Will buy again.",
      source: "all",
    },
    {
      name: "Agneta N.",
      rating: 5,
      date: "4 months ago",
      review:
        "Very pleasant service when I called. My issue was handled smoothly. Satisfied customer.",
      source: "all",
    },
    {
      name: "Elin E.",
      rating: 5,
      date: "March 28",
      review:
        "Such great meat, incredibly tasty! I think this is the third or fourth time we've received the meat.",
      source: "facebook",
    },
    {
      name: "Marie L.",
      rating: 5,
      date: "January 9",
      review: "Fantastic products from Swedish farms and dedicated staff.",
      source: "google",
    },
    {
      name: "Cecilia H.",
      rating: 5,
      date: "8 months ago",
      review:
        "Tried the small Christmas box for Christmas 2022 and it was a complete success, so we will do it again!",
      source: "all",
    },
  ],
  facebook: [
    {
      name: "Elin E.",
      rating: 5,
      date: "March 28",
      review:
        "Such great meat, incredibly tasty! I think this is the third or fourth time we've received the meat.",
      source: "facebook",
    },
  ],
  google: [
    {
      name: "Marie L.",
      rating: 5,
      date: "January 9",
      review: "Fantastic products from Swedish farms and dedicated staff.",
      source: "google",
    },
  ],
};

function Reviews() {
  const [activeTab, setActiveTab] = useState("all");
  const reviewsContainerRef = useRef(null);

  const filteredReviews = reviewsData[activeTab];

  const handleScrollRight = () => {
    if (reviewsContainerRef.current) {
      reviewsContainerRef.current.scrollLeft += 300;
    }
  };

  return (
    <div style={styles.container}>
      <div style={styles.tabs}>
        <span
          style={activeTab === "all" ? styles.activeTab : styles.tab}
          onClick={() => setActiveTab("all")}
        >
          All reviews <span style={styles.rating}>4.6</span>
        </span>
        <span
          style={activeTab === "facebook" ? styles.activeTab : styles.tab}
          onClick={() => setActiveTab("facebook")}
        >
          Facebook <span style={styles.rating}>4.7</span>
        </span>
        <span
          style={activeTab === "google" ? styles.activeTab : styles.tab}
          onClick={() => setActiveTab("google")}
        >
          Google <span style={styles.rating}>4.3</span>
        </span>
      </div>
      <div style={styles.reviewsContainer}>
        <div style={styles.reviews} ref={reviewsContainerRef}>
          {filteredReviews.map((review, index) => (
            <ReviewCard key={index} review={review} />
          ))}
        </div>
        <button style={styles.scrollButton} onClick={handleScrollRight}>
          &gt;
        </button>
      </div>
    </div>
  );
}

function ReviewCard({ review }) {
  const [expanded, setExpanded] = useState(false);

  return (
    <div style={styles.card}>
      <div style={styles.header}>
        <h4 style={styles.name}>{review.name}</h4>
        <div style={styles.stars}>
          {"★".repeat(review.rating)}{" "}
          <span style={styles.grayStars}>{"★".repeat(5 - review.rating)}</span>
        </div>
      </div>
      <p style={styles.date}>{review.date}</p>
      <p style={expanded ? styles.fullReview : styles.shortReview}>
        {review.review}
      </p>
      {expanded ? (
        <span style={styles.readMore} onClick={() => setExpanded(false)}>
          Read less
        </span>
      ) : (
        review.review.length > 100 && (
          <span style={styles.readMore} onClick={() => setExpanded(true)}>
            Read more
          </span>
        )
      )}
    </div>
  );
}

const styles = {
  container: {
    width: "100%",
    maxWidth: "1200px",
    margin: "20px auto",
    padding: "20px",
    backgroundColor: "#f9f9f9",
    borderRadius: "8px",
  },
  tabs: {
    display: "flex",
    justifyContent: "center",
    marginBottom: "20px",
    borderBottom: "2px solid #ccc",
  },
  tab: {
    padding: "10px 20px",
    cursor: "pointer",
    fontWeight: "bold",
    color: "#777",
  },
  activeTab: {
    padding: "10px 20px",
    cursor: "pointer",
    fontWeight: "bold",
    color: "#000",
    borderBottom: "2px solid #000",
  },
  rating: {
    marginLeft: "5px",
    color: "#777",
  },
  reviewsContainer: {
    display: "flex",
    alignItems: "center",
    position: "relative",
  },
  reviews: {
    display: "flex",
    overflowX: "auto",
    scrollBehavior: "smooth",
    paddingBottom: "10px",
  },
  card: {
    flex: "0 0 220px",
    backgroundColor: "#fff",
    borderRadius: "8px",
    padding: "15px",
    margin: "10px",
    boxShadow: "0 0 10px rgba(0,0,0,0.1)",
    minWidth: "220px",
    maxWidth: "220px",
    height: "auto",
  },
  header: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    marginBottom: "10px",
  },
  name: {
    margin: 0,
    marginRight: "8px", // Padding between name and stars
  },
  stars: {
    display: "flex",
    color: "#FFD700",
  },
  grayStars: {
    color: "#ccc",
  },
  date: {
    fontSize: "12px",
    color: "#777",
    marginBottom: "10px",
  },
  shortReview: {
    whiteSpace: "nowrap",
    overflow: "hidden",
    textOverflow: "ellipsis",
  },
  fullReview: {
    whiteSpace: "normal",
  },
  readMore: {
    color: "#007BFF",
    cursor: "pointer",
    fontSize: "14px",
    marginTop: "10px",
  },

  // needs to be changed
  //   scrollButton: {
  //     position: "absolute",
  //     right: 0,
  //     top: "50%",
  //     transform: "translateY(-50%)",
  //     backgroundColor: "rgba(17, 17, 17, 0.5)", //added
  //     boxShadow: "rgba(0, 0, 0, 0.3) 0px 4px 12px 0px", //added
  //     fill: "rgb(255, 255, 255)", //added
  //     border: "none",
  //     fontSize: "24px",
  //     cursor: "pointer",
  //     color: "#000",
  //   },

  scrollButton: {
    position: "absolute",
    right: "0",
    top: "50%",
    transform: "translateY(-50%)",
    backgroundColor: "rgba(17, 17, 17, 0.5)",
    border: "none",
    borderRadius: "50%", // Make the button circular
    boxShadow: "rgba(0, 0, 0, 0.3) 0px 4px 12px 0px",
    padding: "9px",
    cursor: "pointer",
    fontSize: "18px",
    zIndex: 10, // Ensure the button is above other elements
  },
};

export default Reviews;
