import {ChangeEvent, FocusEvent, useEffect, useState} from 'react';
import styles from './Registration.module.css'
import RegistrationForm from "../UI/RegistrationForm/RegistrationForm";
import Loader from "../UI/Loader/Loader";

const Registration = () => {
    const [state, setState] = useState({
        isLoading: true,
    })

    useEffect(() => {
        setTimeout(() => setState({isLoading: false}), 2000);
    }, [state])

    return (
        <div className={styles.registration}>
            <div className={styles.circle}></div>
            {state.isLoading ? <Loader/> : <RegistrationForm/>}
        </div>);
};

export default Registration;