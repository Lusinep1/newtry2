import React from "react";
import MyChoices from "./MyChoices";
import PointsTracker from "./PointsTracker";
import GoAheadButton from "./GoAheadButton"; // Assuming you already have GoAheadButton
import styles from "./LoyaltyBoxSmall.module.css";

const Sidebar = ({
  selectedProducts,
  totalPoints,
  maxPoints,
  onGoAheadClick,
}) => {
  return (
    <div className={styles.sidebar}>
      <MyChoices selectedProducts={selectedProducts} />
      <PointsTracker currentPoints={totalPoints} maxPoints={maxPoints} />
      <div className={styles.goAheadButtonWrapper}>
        <GoAheadButton
          active={totalPoints === maxPoints}
          onClick={onGoAheadClick}
        />
      </div>
    </div>
  );
};

export default Sidebar;
