import {ChangeEvent, FocusEvent, useEffect, useState} from 'react';
import {useNavigate} from "react-router-dom";
import styles from './Registration.module.css'

const Registration = () => {
    const [name, setName] = useState('')
    const [login, setLogin] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [nameDirty, setNameDirty] = useState(false)
    const [loginDirty, setLoginDirty] = useState(false)
    const [emailDirty, setEmailDirty] = useState(false)
    const [passwordDirty, setPasswordDirty] = useState(false)
    const [nameError, setNameError] = useState('Имя не может быть пустым')
    const [loginError, setLoginError] = useState('Логин не может быть пустым')
    const [emailError, setEmailError] = useState('Email не может быть пустым')
    const [passwordError, setPasswordError] = useState('Пароль не может быть пустым')
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

    const loginHandler = (e: ChangeEvent<HTMLInputElement>) => {
        setLogin(e.target.value)
        if (e.target.value.length < 3) {
            setLoginError('Логин должен содержать хотя бы 3 символа')
            if (!e.target.value) {
                setLoginError('Логин не может быть пустым')
            }
        } else {
            setLoginError('')
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
        if (e.target.value.length < 3) {
            setPasswordError('Пароль должен содержать хотя бы 3 символа')
            if (!e.target.value) {
                setPasswordError('Пароль не может быть пустым')
            }
        } else {
            setPasswordError('')
        }
    }

    const blurHandler = (e: FocusEvent<HTMLInputElement, Element>) => {
        switch (e.target.name) {
            case 'name':
                setNameDirty(true)
                break
            case 'login':
                setLoginDirty(true)
                break
            case 'email':
                setEmailDirty(true)
                break
            case 'password':
                setPasswordDirty(true)
                break
        }
    }

    const redirectToAnotherPage = () => {
        navigate('/')
    }


    return <div className="Registration">
        <form className={styles.form}>
            <h1>Регистрация</h1>
            {(nameDirty && nameError) && <div className={styles.error}>{nameError}</div> }
            <input className={styles.input} onChange={e => nameHandler(e)}
                   value={name} onBlur={e => blurHandler(e)}
                   name='name' type='text' placeholder='Введите имя...'/>
            {(loginDirty && loginError) && <div className={styles.error}>{loginError}</div> }
            <input className={styles.input} onChange={e => loginHandler(e)}
                   value={login} onBlur={e => blurHandler(e)}
                   name='login' type='text' placeholder='Введите логин...'/>
            {(emailDirty && emailError) && <div className={styles.error}>{emailError}</div> }
            <input className={styles.input} onChange={e => emailHandler(e)}
                   value={email} onBlur={e => blurHandler(e)}
                   name='email' type='text' placeholder='Введите email...'/>
            {(passwordDirty && passwordError) && <div className={styles.error}>{passwordError}</div> }
            <input className={styles.input} onChange={e => passwordHandler(e)}
                   value={password} onBlur={e => blurHandler(e)}
                   name='password' type='password' placeholder='Введите пароль...'/>
            <button onClick={redirectToAnotherPage} disabled={!formValid} type='submit'>Регистрация</button>
        </form>
    </div>
};

export default Registration;