import React from "react"
import styles from "./Resume.module.css"
import Experience from "../General/Experience/Experience"

const Resume = () => {
  return (
    <div className={styles.resume}>
      <Experience
        location={"Calgary"}
        about={"Queen's University is one of my favourite places"}
      />
      <Experience
        location={"Kingston, Queen's University"}
        about={"Queen's University is one of my favourite places"}
      />
      <Experience
        location={"Toronto"}
        about={"Queen's University is one of my favourite places"}
      />
    </div>
  )
}

export default Resume
