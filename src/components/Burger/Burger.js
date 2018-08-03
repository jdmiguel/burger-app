import React from 'react';
import BurgerIngredient from './BurgerIngredient/BurgerIngredient'; 
import classes from './Burger.css';

const burger = (props) => {
    let transformedIngredients = 
        Object.keys(props.ingredients)
              .map( (ingredientKey) => {
                return [...Array(props.ingredients[ingredientKey])].map( (_, i) => {
                                return <BurgerIngredient key={ingredientKey + i} type={ingredientKey} />
                            })
              })
              .reduce( (prev,next) => {
                return [...prev,...next]
              }) ;

    if(transformedIngredients.length === 0) transformedIngredients = <p>Please start adding ingredients</p>;

    //console.log('transformedIngredients',transformedIngredients);

    return(
        <div className={classes.Burger}>
            <BurgerIngredient type="bread-top"></BurgerIngredient>
            {
                transformedIngredients
            }
            <BurgerIngredient type="bread-bottom"></BurgerIngredient>
        </div>
    );
};

export default burger;