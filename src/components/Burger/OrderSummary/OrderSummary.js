import React from 'react'; 
import Wrapper from '../../../hoc/Wrapper';
import Button from '../../UI/Button/Button';

const OrderSummary = (props) => {
    const ingredientsSummary = Object.keys(props.ingredients).map( item => {
        return(
            <li key={item}>
                <span style={{textTransform: 'capitalize'}}>{item}: </span>
                {props.ingredients[item]}
            </li>
        );
    });

    return(
        <Wrapper>
            <h3>Your Order</h3>
            <p>A delicius burger with the following ingredients:</p>
            <ul>{ingredientsSummary}</ul>
            <p><strong>Total price:</strong> {props.price.toFixed(2)}</p>
            <p>Continue to checkout?</p>
            <Button btnType='Danger' clicked={props.purchaseCancelled}>CANCEL</Button>
            <Button btnType='Success' clicked={props.purchaseContinued}>CONTINUE</Button>
        </Wrapper>
    )
};

export default OrderSummary;