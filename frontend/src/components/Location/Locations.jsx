import React, { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import "./Locations.css";

const Locations = React.memo(({ locations }) => {
  const navigate = useNavigate();

  const hanleNavigate = useCallback(() => {
    navigate("/rooms");
  }, []);
  return (
    <div className="location-card">
      <div className="location-container">
        <div className="location-image">
          <img src={locations.limageurls[0]} alt={locations.lname} />
        </div>

        <div className="location-overlay">
          <h2 className="location-title">{locations.lname}</h2>

          <div className="location-details">
            <p className="reviews">
              <span className="label">Reviews:</span> {locations.lreviews}
            </p>
            <p className="phone">
              <span className="label">Phone Number:</span>{" "}
              {locations.lphonenumber}
            </p>
            <p className="address">
              <span className="label">Located In:</span> {locations.llocated}
            </p>
          </div>
          <button className="booking-button" onClick={hanleNavigate}>
            Book Now
          </button>
        </div>
      </div>
    </div>
  );
});

export default Locations;
