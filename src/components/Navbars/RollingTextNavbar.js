import React from "react";
import { Link } from "react-router-dom";
import "./RollingTextNavbar.css";

const RollingTextNavbar = () => {
  const [rollingTextPosition, setRollingTextPosition] = React.useState(100);

  React.useEffect(() => {
    const interval = setInterval(() => {
      setRollingTextPosition((prev) => (prev <= -100 ? 100 : prev - 1));
    }, 25);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="rolling-text-container">
      <div className="rolling-text" style={{ transform: `translateX(${rollingTextPosition}%)` }}>
        <p>Welcome to Fugic NEXT LEVEL CHEMISTRY - "MADE IN INDIA"</p>
      </div>
    </div>
  );
};

export default RollingTextNavbar;
