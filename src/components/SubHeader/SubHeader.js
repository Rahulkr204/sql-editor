import React from "react";
import "./SubHeader.css";

function SubHeader({ text }) {
    return <div className="subheader">{text}</div>;
}

export default React.memo(SubHeader);
