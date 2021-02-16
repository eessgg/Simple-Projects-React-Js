import React, { useEffect, useState } from 'react';
import styled from 'styled-components';

import icon from '../images/icon.png';
import CurrencySelect from './CurrencySelect';
const url = 'https://api.exchangeratesapi.io/latest'

const BoxConverter = styled.div`
  font-size: 1.3em;
  text-align: center;
  padding: 10px;
  background: #fff;
  font-family: 'Ropa Sans', sans-serif;  
  border-radius: 3px;

  form {
    padding: 10px;
    display: flex;
    justify-content: space-between;    
  }

  form input {
    width: 130px;
    padding: 10px;
    margin: 5px;
    border-radius: 3px;
    border: 1px solid grey;
  }
  form select {
    width: 90px;
    margin: 5px;
    border-radius: 3px;
  }
  form img {
    width: 32px;
    height: 34px;
    margin: 5px;
  }
  span {
    font-size: 52px;
  }
`;

const Converter = () => {
  const [rateValue, setRateValue] = useState('');
  const [fromValue, setFromValue] = useState('');
  const [toValue, setToFromValue] = useState('');
  const [value, setValue] = useState(0)
  const [currentFruit, setCurrentFruit] = useState('')
  
  const changeFruit = (newFruit) => {
    setCurrentFruit(newFruit)
  }

  const getData =() => {
    fetch(url)
      .then(response => response.json())
      .then(data => {
        const rates = data.rates;
        console.log(data)
        setRateValue(rates)
      })
      .catch(err => console.log(err))
  }

  useEffect(() => {
    getData()
  }, [])

  const onChange = (event) => {
    setValue(event.target.value);
  };

  const calcCurrency = () => {
    // const currencyResult = value;
    console.log(fromValue, toValue)
  }

  return (
    <BoxConverter>
      <header><h1>Currency Converter</h1></header>
      <form>
        <input type="number" value={value} onChange={onChange} />
        <CurrencySelect rates={rateValue} values={fromValue} click={setFromValue} />
        <img src={icon} alt="icon"/>
        <CurrencySelect rates={rateValue} toValue={e => setToFromValue(e.target.value)} />


        <select 
          onChange={(event) => changeFruit(event.target.value)}
          value={currentFruit}
        >
          <option value="apples">Red Apples</option>
          <option value="oranges">Outrageous Oranges</option>
          <option value="tomatoes">Technically a Fruit Tomatoes</option>
          <option value="bananas">Bodacious Bananas</option>
        </select>



      </form>
      <div>
        <p>Valor convertido:</p>
        <p className="sign">R$ <span> {currentFruit} </span></p>
      </div>
      <button onClick={calcCurrency}>CLICK</button>
    </BoxConverter>
  );
}

export default Converter;
