import React from 'react';
import Aux from '../../../hoc/Aux';
import Backdrop from '../Backdrop/Backdrop';
import classes from './Modal.css';

const Modal = (props) =>  (
    <Aux>
        <Backdrop show={props.show} clicked={props.modalClosed}/>
        <div className={classes.Modal}
            style={{
                opacity : props.show ? '1' : '0'
            }}
        >
            {props.children}
        </div>
    </Aux>
);

export default Modal;