import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import Icon from "../components/Icon";

const ErrorStyle = styled.div`
  padding: 16px;
  border-radius: 4px;
  background-color: red;
  color: white;
  font-family: sans-serif, system-ui;

  h1 {
    padding-bottom: 4px;
    display: flex;
    align-items: center;
    font-size: 24px;
    svg {
      padding-right: 8px;
      fill: white !important;
    }
  }
`;
const Error = ({ title, message }) => (
  <ErrorStyle>
    <h1>
      <Icon name="error" size={24} /> <span>{title}</span>
    </h1>
    <p>{message}</p>
  </ErrorStyle>
);

Error.defaultProps = {
  title: "Error",
  message:
    "An error occured. Please refresh the page or check your internet connection."
};

Error.propTypes = {
  title: PropTypes.string,
  message: PropTypes.string
};

export default Error;
