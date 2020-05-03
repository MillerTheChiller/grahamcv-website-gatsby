import React, { useState } from "react"
import Layout from "../Components/Layout/Layout"
import StyledSelect from "../Components/StyledSelect/StyledSelect"
import styles from "./things.module.css"
import { amount_options, type_options } from "../utils/constants"

function Things() {
  const [amount, setAmount] = useState(amount_options[0])
  const [type, setType] = useState(type_options[0])
  return (
    <Layout>
      <div className={styles.thingsQueryRow}>
        <h1>What</h1>
        <div className={styles.selectWrapper}>
          <StyledSelect
            updateValue={setAmount}
            isMenuOpen={false}
            data={amount_options}
          />
        </div>
        <h1> of your favourite </h1>
        <div className={styles.selectWrapper}>
          <StyledSelect
            updateValue={setType}
            isMenuOpen={false}
            data={type_options}
          />
        </div>
        <h1>?</h1>
      </div>
      <div className={styles.thingsQueryReturn}>
        <h1>
          Here {amount.label} of my favourite {type.label}!
        </h1>
      </div>
    </Layout>
  )
}

export default Things
