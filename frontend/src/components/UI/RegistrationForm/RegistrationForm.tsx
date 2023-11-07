import React, {ChangeEvent, FocusEvent, useEffect, useState} from 'react';
import {Link, useNavigate} from 'react-router-dom';
import styles from "./RegistrationForm.module.css"

const RegistrationForm = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmationPassword, setConfirmationPassword] = useState('');
    const [nameDirty, setNameDirty] = useState(false);
    const [emailDirty, setEmailDirty] = useState(false);
    const [passwordDirty, setPasswordDirty] = useState(false);
    const [confirmationPasswordDirty, setConfirmationPasswordDirty] = useState(false);
    const [nameError, setNameError] = useState('Имя не может быть пустым');
    const [loginError, setLoginError] = useState('Логин не может быть пустым');
    const [emailError, setEmailError] = useState('Email не может быть пустым');
    const [passwordError, setPasswordError] = useState('Пароль не может быть пустым');
    const [confirmationPasswordError, setConfirmationPasswordError] = useState('Подтверждение пароля не может быть пустым');
    const [formValid, setFormValid] = useState(false)
    const navigate = useNavigate()

    useEffect(() => {
        if (nameError || loginError || emailError || passwordError) {
            setFormValid(false)
        } else {
            setFormValid(true)
        }
    }, [nameError, loginError, emailError, passwordError])

    const nameHandler = (e: ChangeEvent<HTMLInputElement>) => {
        setName(e.target.value)
        if (e.target.value.length > 0) {
            setNameError('')
        } else {
            setNameError('Имя не может быть пустым')
        }
    }

    const emailHandler = (e: ChangeEvent<HTMLInputElement>) => {
        setEmail(e.target.value)
        const re = /^(([^<>()[\].,;:\s@"]+(\.[^<>()[\].,;:\s@"]+)*)|(".+"))@(([^<>()[\].,;:\s@"]+\.)+[^<>()[\].,;:\s@"]{2,})$/i;
        if (!re.test(String(e.target.value).toLowerCase())) {
            setEmailError('Некорректный email')
            if (!e.target.value) {
                setEmailError('Email не может быть пустой')
            }
        } else {
            setEmailError('')
        }
    }

    const passwordHandler = (e: ChangeEvent<HTMLInputElement>) => {
        setPassword(e.target.value)
        if (e.target.value.length < 8) {
            setPasswordError('Пароль должен содержать хотя бы 8 символа')
            if (!e.target.value) {
                setPasswordError('Пароль не может быть пустым')
            }
        } else {
            setPasswordError('')
        }
    }

    const confirmationPasswordHandler = (e: ChangeEvent<HTMLInputElement>) => {
        setConfirmationPassword(e.target.value)
        if (e.target.value != password) {
            setConfirmationPasswordError('Пароли не одинаковые')
            if (!e.target.value) {
                setConfirmationPasswordError('Пароль не может быть пустым')
            }
        } else {
            setConfirmationPasswordError('')
        }
    }

    const blurHandler = (e: FocusEvent<HTMLInputElement, Element>) => {
        switch (e.target.name) {
            case 'name':
                setNameDirty(true)
                break;
            case 'email':
                setEmailDirty(true)
                break;
            case 'password':
                setPasswordDirty(true)
                break;
            case 'confirmationPassword':
                setConfirmationPasswordDirty(true)
                break;
        }
    }

    const redirectToAnotherPage = () => {
        navigate('/')
    }

    return (
        <form className={styles.registration_form_container}>
            <h1 className={styles.form_title}>Регистрация</h1>
            <div className={styles.form_fields}>
                {(nameDirty && nameError) && <div className={styles.error}>{nameError}</div>}
                <input className={styles.form_field} onChange={e => nameHandler(e)}
                       value={name} onBlur={e => blurHandler(e)}
                       name='name' type='text' placeholder='Имя'/>
                {(emailDirty && emailError) && <div className={styles.error}>{emailError}</div>}
                <input className={styles.form_field} onChange={e => emailHandler(e)}
                       value={email} onBlur={e => blurHandler(e)}
                       name='email' type='text' placeholder='Почта'/>
                {(passwordDirty && passwordError) && <div className={styles.error}>{passwordError}</div>}
                <input className={styles.form_field} onChange={e => passwordHandler(e)}
                       value={password} onBlur={e => blurHandler(e)}
                       name='password' type='password' placeholder='Пароль'/>
                {(confirmationPasswordDirty && confirmationPasswordError) && <div className={styles.error}>{confirmationPasswordError}</div>}
                <input className={styles.form_field} onChange={e => confirmationPasswordHandler(e)}
                       value={confirmationPassword} onBlur={e => blurHandler(e)}
                       name='confirmationPassword' type='password' placeholder='Подвердите пароль'/>
            </div>
            <div className={styles.form_buttons}>
                <button className={styles.button} onClick={redirectToAnotherPage} disabled={!formValid}
                        type='submit'>Регистрация
                </button>
                <div className={styles.divider}>или</div>
                <Link to={"/googleRegistration"}>
                    <a className={styles.button + ` ` + styles.google_button}>Google</a>
                </Link>
            </div>
        </form>
    );
};

export default RegistrationForm;