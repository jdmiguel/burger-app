import React from 'react';
import Wrapper from '../../../hoc/Wrapper';
import Backdrop from '../Backdrop/Backdrop';
import classes from './Modal.css';

const Modal = (props) =>  (
    <Wrapper>
        <Backdrop show={props.show} clicked={props.modalClosed}/>
        <div className={classes.Modal}
            style={{
                opacity : props.show ? '1' : '0'
            }}
        >
            {props.children}
        </div>
    </Wrapper>
);

export default Modal;