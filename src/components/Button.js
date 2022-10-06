import React from "react";
import "../styles/button.css";

const Button = (props) => {
  console.log(props);
  return (
    <div>
      {props.type === "primary" && (
        <button className="mavi" onClick={props.tikla}>
          {props.buttonText}
        </button>
      )}
      {props.type === "secondary" && (
        <button className="secondary" onClick={props.tikla}>
          {props.buttonText}
        </button>
      )}
      {props.type === "danger" && (
        <button className="danger" onClick={props.tikla}>
          {props.buttonText}
        </button>
      )}
      {props.type === "warn" && (
        <button className="warn" onClick={props.tikla}>
          {props.buttonText}
        </button>
      )}
      {props.type === "info" && (
        <button className={props.type} onClick={props.tikla}>
          {props.buttonText}
        </button>
      )}
    </div>
  );
};
export default Button;
