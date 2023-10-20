import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSpinner } from "@fortawesome/free-solid-svg-icons";

const LoadingIcon = () => {
  const iconStyle = {
    fontSize: "3rem",
    marginTop: "50px",
  };

  return (
    <div className="loading-icon" style={iconStyle}>
      <FontAwesomeIcon icon={faSpinner} spin /> ... Loading
    </div>
  );
};

export default LoadingIcon;
