import React, { useEffect, useState, useRef } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import '../styles/Ingredients.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faCoffee,
  faMinus,
  faPlus,
  faCloud,
} from '@fortawesome/free-solid-svg-icons';

import { fetchIngredients } from '../store/actions/order';
import Button from './Button.js';

const Ingredients = () => {
  const ingredients = useSelector((state) => state.order.ingredients);
  const dispatch = useDispatch();

  const [hidden, setHidden] = useState(true);
  const [selected, setSelected] = useState(null);
  const [purchased, setPurchased] = useState(0);
  // const myRef = useRef();

  // const detectClickOutside = (e) => {
  //   if (!myRef.current.contains(e.target)) {
  //     setHidden(true);
  //   }
  // };

  const toggleHide = () => {
    setHidden(!hidden);
  };

  const makePurchase = (item) => {
    setSelected(item);
    toggleHide();
    if (item[0].split('(')[1].includes('g')) {
      setPurchased(500);
    } else {
      setPurchased(1);
    }
  };

  const increment = () => {
    if (selected[0].split('(')[1].includes('g')) {
      setPurchased(purchased + 500);
    } else {
      setPurchased(purchased + 1);
    }
  };

  const decrement = () => {
    if (selected[0].split('(')[1].includes('g') && purchased > 500) {
      setPurchased(purchased - 500);
    } else if (!selected[0].split('(')[1].includes('g') && purchased > 0) {
      setPurchased(purchased - 1);
    }
  };

  useEffect(() => {
    dispatch(fetchIngredients());
    // document.addEventListener('mousedown', detectClickOutside);
    // return () => document.removeEventListener('mousedown', detectClickOutside);
  }, [dispatch]);

  console.log(selected);

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
      {!hidden ? (
        <div className="modal">
          <h1>Open!</h1>
          <p>{selected[0]}</p>
          <FontAwesomeIcon
            icon={faMinus}
            size="lg"
            color="#993399"
            onClick={decrement}
          />
          <p>{purchased}</p>
          <FontAwesomeIcon
            icon={faPlus}
            size="lg"
            color="#993399"
            onClick={increment}
          />
          <FontAwesomeIcon
            icon={faCloud}
            size="lg"
            color="#993399"
            onClick={toggleHide}
          />
        </div>
      ) : (
        ''
      )}
    </section>
  );
};

export default Ingredients;
