import React from "react"
import Select from "react-select"
import styles from "./StyledSelect.module.css"

const colourStyles = {
  container: (styles, state) => ({
    ...styles,
    width: `200px`,
  }),
  control: styles => ({
    ...styles,
    color: "4795b0",
    border: "none",
    backgroundColor: "#1e2125",
  }),
  option: (styles, { data, isDisabled, isFocused, isSelected }) => {
    return {
      ...styles,
      color: "#4795b0",
      color: isSelected ? "#1e2125" : "#4795b0",
      color: isFocused ? "1e2125" : "#4795b0",

      backgroundColor: isFocused ? "#4795b0" : "#1e2125",
      ":active": {
        ...styles[":active"],
        color: isSelected ? "#1e2125" : "#4795b0",
        backgroundColor: isSelected ? "#4795b0" : "#1e2125",
      },
    }
  },
  menu: base => ({
    ...base,
    borderRadius: 0,
    marginTop: 0,
    backgroundColor: "#1e2125",
    color: "white",
  }),
  menuList: base => ({
    ...base,
    // kill the white space on first and last option
    padding: 0,
  }),
  input: styles => ({
    ...styles,
    fontWeight: "600",
    fontSize: "20px",
    color: "white",
    lineHeight: "35px",
  }),
  singleValue: styles => ({
    ...styles,
    fontWeight: "600",
    fontSize: "2rem",
    color: "white",
    lineHeight: "35px",
  }),
  placeholder: styles => ({
    ...styles,
    fontWeight: "600",
    fontSize: "2rem",
    color: "white",
    lineHeight: "35px",
  }),
}

const StyledSelect = ({ data, isMenuOpen, updateValue }) => {
  return (
    <div className={styles.selectWrapper}>
      <Select
        onChange={e => updateValue(e)}
        defaultValue={data[0]}
        defaultMenuIsOpen={isMenuOpen}
        components={{
          DropdownIndicator: () => null,
          IndicatorSeparator: () => null,
        }}
        options={data}
        styles={colourStyles}
      />
    </div>
  )
}

export default StyledSelect
