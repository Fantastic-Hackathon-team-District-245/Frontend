import React, {ReactNode} from 'react';
import classes from "./NavButton.module.css";

interface Props {
    children?: ReactNode
}

const NavButton = ({children, ...props}: Props) => {
    return (
        <button {...props} className={classes.navBtn}>
            {children}
        </button>
    );
};

export default NavButton;