import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import Icon from "../components/Icon";

const DropdownDiv = styled.div`
  display: inline-block;
  width: 100%;
  margin-top: ${props => props.marginTop};

  .Dropdown__select-container {
    position: relative;
  }

  .Dropdown__select-arrow {
    position: absolute !important;
    top: 16px !important;
    right: 16px !important;
    line-height: 0 !important;
    pointer-events: none !important;
  }

  .Dropdown__select-error {
    margin-top: 8px;
    color: red;
    font-size: 14px;
    line-height: 20px;
    font-weight: 400;
  }

  label {
    display: block;
    font-size: 16px;
    line-height: 24px;
    font-weight: 400;
    margin-bottom: 8px;
    font-weight: 500;
    text-align: left;
  }

  select {
    font-size: 16px;
    line-height: 24px;
    font-weight: 400;
    display: inline-block;
    width: 100%;
    border-color: ${props => (props.isInvalid ? `#FF5A5F` : `#f1e324`)};
    border-width: 2px;
    outline: 0;
    border-radius: 4px;
    cursor: pointer;
    padding: 10px 15px;
    appearance: none;
    height: 48px;
    background-color: black;
    color: white !important;

    &::-ms-expand {
      display: none;
    }

    &:hover {
      border-color: ${props => (props.isInvalid ? `#ff5a5f` : `#f1e324`)};
      box-shadow: none;
    }

    &:focus {
      border-color: #f1e324;
    }

    &:disabled {
      opacity: 0.5;
      pointer-events: none;
    }
  }
`;

class FilmsDropdown extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: this.props.value || ""
    };
    this.onChange = this.onChange.bind(this);
  }

  onChange(e) {
    const selectedValue = e.target.value;
    this.setState({
      value: selectedValue
    });
    this.props.onChange(selectedValue);
  }

  render() {
    const {
      name,
      label,
      className,
      marginTop,
      errorMessage,
      isDisabled,
      isInvalid,
      placeholder,
      options
    } = this.props;
    const { value } = this.state;
    return (
      <DropdownDiv
        className={`Dropdown ${className}`}
        marginTop={marginTop}
        isInvalid={isInvalid}
      >
        {label && <label>{label}</label>}
        <div className="Dropdown__select-container">
          <select
            onChange={this.onChange}
            disabled={isDisabled}
            name={name}
            value={value}
          >
            <option value="">{placeholder}</option>
            {options.map(option => (
              <option key={option.label} value={option.value}>
                {option.label}
              </option>
            ))}
          </select>
          <Icon name="down-arrow" className="Dropdown__select-arrow" />
        </div>
        {isInvalid && <p className="Dropdown__select-error">{errorMessage}</p>}
      </DropdownDiv>
    );
  }
}

FilmsDropdown.defaultProps = {
  name: "",
  label: "",
  className: "",
  marginTop: "",
  errorMessage: "This field is required",
  value: "",
  isDisabled: false,
  isInvalid: false,
  placeholder: "Placeholder",
  options: [],
  onChange: value => console.log(value)
};

FilmsDropdown.propTypes = {
  name: PropTypes.string,
  label: PropTypes.string,
  className: PropTypes.string,
  marginTop: PropTypes.string,
  errorMessage: PropTypes.string,
  value: PropTypes.string,
  isDisabled: PropTypes.bool,
  isInvalid: PropTypes.bool,
  placeholder: PropTypes.string,
  options: PropTypes.arrayOf(PropTypes.shape({})),
  onChange: PropTypes.func.isRequired
};

export default FilmsDropdown;
