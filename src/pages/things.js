import React from "react"
import Layout from "../Components/Layout/Layout"
import Select from "react-select"
import styles from "./things.module.css"

const amount_options = [
  { value: "one", label: "is one" },
  { value: "all", label: "are all" },
]

const type_options = [
  { value: "books", label: "books" },
  { value: "music", label: "music" },
  { value: "movies", label: "movies" },
  { value: "blogs", label: "blogs" },
  { value: "youtube", label: "Youtube videos" },
  { value: "other", label: "essays" },
]

const colourStyles = {
  container: (styles, state) => ({
    ...styles,
    width: `100px`,
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
    color: "#4795b0",
    fontWeight: "600",
    fontSize: "20px",
    color: "#4795b0",
    lineHeight: "35px",
  }),
  singleValue: styles => ({
    ...styles,
    fontWeight: "600",
    fontSize: "2rem",
    color: "#4795b0",
    lineHeight: "35px",
  }),
}

const things = () => {
  return (
    <Layout>
      <div className={styles.thingsQueryRow}>
        <h1>What</h1>
        <div className={styles.selectWrapper}>
          <Select
            components={{
              DropdownIndicator: () => null,
              IndicatorSeparator: () => null,
            }}
            styles={colourStyles}
            defaultValue={amount_options[0]}
            width="200px"
            options={amount_options}
          />
        </div>
        <h1> of your favourite </h1>
        <div className={styles.selectWrapper}>
          <Select
            defaultValue={type_options[0]}
            components={{
              DropdownIndicator: () => null,
              IndicatorSeparator: () => null,
            }}
            options={type_options}
            styles={colourStyles}
            width="100px"
          />
        </div>
        <h1>?</h1>
      </div>
    </Layout>
  )
}

export default things
