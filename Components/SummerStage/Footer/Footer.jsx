import React, { useState } from 'react'
import styles from './Footer.module.css'
import ContactModal from './ContactModale'
import Legal from './Legal'
const Footer = () => {
  const [toggle, setToggle] = useState()
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')
  const [submitted, setSubmitted] = useState(false)
  const [data, setData] = useState()
  const handleOnClick = () => {
    setToggle(!toggle)
  }
  
  return (
    <div className={styles.FooterContainer}>
          <ContactModal />
          <Legal />
    </div>
  )
}

export default Footer