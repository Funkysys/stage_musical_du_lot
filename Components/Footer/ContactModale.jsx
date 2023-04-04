import React, { useState } from 'react'
import styles from './Footer.module.css'

const Footer = () => {
    const [toggle, setToggle] = useState()
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [message, setMessage] = useState('')
    const [submitted, setSubmitted] = useState(false)
    const [emailRequired, setEmailRequired] = useState(true)
    const [nameRequired, setNameRequired] = useState(true)

    const handleOnClick = () => {
        setToggle(!toggle)
    }
    const handleOnSubmit = async () => {
        event.preventDefault()
        const data = {
            name,
            email,
            message
        }
        const mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,4})+$/;
        if (data.email && data.email.match(mailformat)) {
            setEmailRequired(true)
        } else {
            return setEmailRequired(false)
        }
        if (data.name) {
            setNameRequired(true)
        } else {
            return setNameRequired(false)
        }
        const endpoint = '/api/contact'
        const options = {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
                body: JSON.stringify(data)
        }
        const response = await fetch(endpoint, options)
            if (response.status === 200) {
                setSubmitted(true)
                setName('')
                setEmail('')
                setMessage('')
            } else {
                <h3>Veuillez réessayer plus tard</h3>
            }
        }

    return (
        toggle ?
            <div className={styles.contactContainer}>
                <button className={styles.closeButton} onClick={handleOnClick}>X</button>
                {!submitted ?
                    <>
                        < form className={styles.main} >
                            < div className={styles.inputGroup} >
                                < label htmlFor='name' className={styles.inputLabel}>Nom</label>
                                {!nameRequired && <p className='text-danger fs-6'>Votre nom est obligatoire</p>}
                                < input
                                    type='text'
                                    name='name'
                                    className={styles.inputField}
                                    onChange={(e) => { setName(e.target.value) }}
                                />
                            </div>
                            < div className={styles.inputGroup} >
                                < label htmlFor='email' className={styles.inputLabel}>Email</label>
                                {!emailRequired && <p className='text-danger fs-6'>Votre email est obligatoire</p>}
                                < input
                                    type='email'
                                    name='email'
                                    className={styles.inputField}
                                    onChange={(e) => { setEmail(e.target.value) }}
                                />
                            </div>
                            < div className={styles.inputGroup} >
                                < label htmlFor='message' className={styles.inputLabel}>Message</label>
                                < textarea
                                    type='text'
                                    name='message'
                                    className={styles.textArea}
                                    onChange={(e) => { setMessage(e.target.value) }}
                                />
                            </div>
                            < button
                                type='submit'
                                onClick={handleOnSubmit}
                                className={styles.submitButton}
                            >
                                Envoyer
                            </button>
                        </form >
                    </>
                    :
                    <h3 className={styles.message}>Merci pour votre message, nous vous répondons au plus vite ! Sans réponse de notre part, contactez nous au  0630182644, Merci</h3>
                }
            </div>
            :
            <button className={styles.contactButton} onClick={handleOnClick}>Nous contacter</button>
    )
}

export default Footer