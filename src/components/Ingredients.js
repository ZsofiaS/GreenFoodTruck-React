import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import '../styles/Ingredients.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCoffee } from '@fortawesome/free-solid-svg-icons';
import { fetchIngredients } from '../store/actions/order';
import Button from './Button.js';

const Ingredients = () => {
  const ingredients = useSelector((state) => state.order.ingredients);
  const dispatch = useDispatch();

  const [isOpen, setIsOpen] = useState(false);
  const [selected, setSelected] = useState(null);

  const makePurchase = (item) => {
    setSelected(item);
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    dispatch(fetchIngredients());
  }, [dispatch]);

  console.log(isOpen);

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
          <div className="ingredient-container" key={name}>
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
            <Button text="Purchase" actionOrder={() => makePurchase(item)} />
          </div>
        );
      })}
      {isOpen ? (
        <div className="modal">
          <h1>Open!</h1>
          <p>{selected}</p>
        </div>
      ) : (
        ''
      )}
    </section>
  );
};

export default Ingredients;
