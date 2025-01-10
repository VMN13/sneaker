import React, { useState } from "react";
import "./App.css";

export const Tooltip = ({ infotext, children }) => {
const [showTooltip, setShowTooltip] = useState(false);

return (
  <div 
    className="tooltip-container"
    onMouseEnter={() => 
    setShowTooltip(true)}
    onMouseLeave={() => 
    setShowTooltip(false)}>
{children}
<div 
  className={`tooltip ${showTooltip ? "open" : ""}`}>
    {infotext}
<div 
  className="arrow" />
</div>
  </div>
  );
  };

export default Tooltip;


