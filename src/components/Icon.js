import React from "react";
import PropTypes from "prop-types";

const icon = {
  "down-arrow": {
    path: (
      <g
        strokeLinecap="square"
        strokeLinejoin="miter"
        strokeWidth="2"
        fill="currentColor"
        stroke="currentColor"
      >
        <polyline
          fill="none"
          stroke="currentColor"
          strokeMiterlimit="10"
          points="2,7 12,17 22,7 "
          transform="translate(0, 0)"
        />
      </g>
    ),
    viewBox: "0 0 24 24"
  },
  error: {
    path: (
      <g stroke="currentColor">
        <circle
          fill="none"
          strokeWidth="2"
          strokeLinecap="round"
          strokeMiterlimit="10"
          cx="12"
          cy="12"
          r="11"
          strokeLinejoin="round"
        />
        <line
          fill="none"
          strokeWidth="2"
          strokeLinecap="round"
          strokeMiterlimit="10"
          x1="12"
          y1="7"
          x2="12"
          y2="13"
          strokeLinejoin="round"
        />
        <circle
          fill="currentColor"
          data-stroke="none"
          cx="12"
          cy="17"
          r="1"
          strokeLinejoin="round"
          strokeLinecap="round"
        />
      </g>
    ),
    viewBox: "0 0 24 24"
  }
};

class Icon extends React.Component {
  render() {
    const { name, color, size, className } = this.props;
    let selectedIcon = icon[name];
    return (
      <svg
        className={`Icon ${className}`}
        width={size}
        height={size}
        color={color}
        viewBox={selectedIcon.viewBox}
        style={{ flexShrink: 0 }}
      >
        {selectedIcon.path}
      </svg>
    );
  }
}

Icon.defaultProps = {
  name: "left-arrow",
  size: 16,
  color: "#f1e324",
  className: ""
};

Icon.propTypes = {
  name: PropTypes.string,
  size: PropTypes.number,
  color: PropTypes.string,
  className: PropTypes.string
};

export default Icon;
