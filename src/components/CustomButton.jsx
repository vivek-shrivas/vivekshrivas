import PropTypes from "prop-types";
import "./css/CustomButton.css";

const CustomButton = ({ url, buttonName }) => {
  const handleClick = () => {
    try {
      // Open the PDF URL in the same window
      window.location.href = url;
    } catch (error) {
      console.error("Error opening PDF:", error);
      // Handle error (e.g., display a message to the user)
    }
  };

  return (
    <div className="custom-btn-cnt delay-280">
      <button className="custom-button" onClick={handleClick}>
        {buttonName}
      </button>
    </div>
  );
};

CustomButton.propTypes = {
  url: PropTypes.string.isRequired,
  buttonName: PropTypes.string.isRequired,
};

export default CustomButton;
