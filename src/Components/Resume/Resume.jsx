import React from "react"
import styles from "./Resume.module.css"
import Experience from "../General/Experience/Experience"

const Resume = () => {
  return (
    <div className={styles.resume}>
      <Experience location={"Calgary"} about={" "} />
      <Experience location={"Kingston, Queen's University"} about={" "} />
      <Experience location={"Toronto"} about={" "} />
    </div>
  )
}

export default Resume
