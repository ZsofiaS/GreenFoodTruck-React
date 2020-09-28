import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import '../styles/Ingredients.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCoffee } from '@fortawesome/free-solid-svg-icons';
import { fetchIngredients } from '../store/actions/order';

const Ingredients = () => {
  const ingredients = useSelector((state) => state.order.ingredients);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchIngredients());
  }, [dispatch]);

  return (
    <section className="Ingredients">
      <h1 className="Ingredients-title">Ingredients available</h1>
      {Object.entries(ingredients).map((item) => {
        const [name, amount] = item;
        const isGrams = name.split('(')[1].includes('g');
        const isRunningLow = () => {
          if ((isGrams && amount < 100) || (!isGrams && amount < 6)) {
            return true;
          }
        };

        return (
          <div className="ingredient-container">
            <p>
              <FontAwesomeIcon
                className="coffee"
                icon={faCoffee}
                size="lg"
                color="#993399"
              />
              {name}: <span className="ingredient">{amount}</span>
              {isRunningLow() ? <span className="low">Low in stock</span> : ''}
            </p>
          </div>
        );
      })}
    </section>
  );
};

export default Ingredients;
