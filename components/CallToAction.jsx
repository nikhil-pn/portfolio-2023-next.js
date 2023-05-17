import React from "react";
import Arrow from "./Arrow";




const CallToAction = ({ text, action, icon }) => {
    return (
        <div
            className="call-to-action"
            onClick={action}
        >
            <span className="text-action  ">{text}</span>
            {icon ? <div className="icon">{icon}</div> : <Arrow />}
        </div>
    );
};

export default CallToAction;