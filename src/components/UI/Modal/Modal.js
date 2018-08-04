import React from 'react';
import Wrapper from '../../../hoc/Wrapper';
import Backdrop from '../Backdrop/Backdrop';
import classes from './Modal.css';

const Modal = (props) =>  (
    <Wrapper>
        <Backdrop show={props.show} clicked={props.modalClosed}/>
        <div className={classes.Modal}
            style={{
                visibility : props.show ? 'visible' : 'hidden'
            }}
        >
            {props.children}
        </div>
    </Wrapper>
);

export default Modal;