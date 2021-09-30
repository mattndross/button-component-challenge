import React from "react";
import "./Button.css";
import MaterialIcon, { colorPalette } from "material-icons-react";

export default function Button(props) {
  return (
    <button
      className={`button 
            button__${props.variant}
            button__${props.disabledShadow && "disabled-shadow"}
            button__${props.size}
            button__${props.color}
            button__${props.onHover && "on-hover"}
            `}
      disabled={props.disabled}
    >
      <MaterialIcon icon={props.startIcon} />
      Default
      <MaterialIcon icon={props.endIcon} />
    </button>
  );
}
