import React, {useEffect, useState} from 'react';
import {BoxConverter} from './ConverterStyled';
import CurrencySelect from './CurrencySelect';

import icon from '../images/icon.png';
const APIURL = 'https://api.exchangeratesapi.io/latest'
// const EXC_URL = 'https://api.exchangeratesapi.io/latest?base=BRL&symbols=USD'


const Converter = () => {
  const [currencyValues, setCurrencyValues] = useState([]);
  const [inputValue, setInputValue] = useState(0);
  const [fromValue, setFromValue] = useState();
  const [toValue, setToValue] = useState();
  const [exchangeValue, setExchangeValue] = useState()

  useEffect(() => {
    fetch(APIURL)
      .then(response => response.json())
      .then(data => {
        const currencies = Object.keys(data.rates);
        // const firstCurrency = Object.keys(data.rates)[0]
        // console.log('firstCurrency', firstCurrency)

        setCurrencyValues([data.base, ...currencies])
        // setFromValue(data.base)
        // setToValue()
      })
      .catch(err => console.log(err))
  }, [toValue])


  useEffect(() => {
    if(fromValue != null && toValue != null) {
      fetch(`${APIURL}?base=${fromValue}&symbols=${toValue}`)
        .then(response => response.json())
        .then(data => {
          console.log(data.rates[toValue]);
          setExchangeValue(data.rates[toValue])
        })
    }
  }, [fromValue, toValue])

  const handleInput = (e) => {
    setInputValue(e.target.value)
  }
 
  return (
    <BoxConverter>
      <header>
        <h1>Currency Converter</h1>
      </header>
      <form>
        <input
          type="number"
          value={inputValue}
          onChange={handleInput}
        />
        <CurrencySelect
          currencyValues={currencyValues}
          fromValue={fromValue}
          onChangeValue={e => setFromValue(e.target.value)}    
        />
        <img src={icon} alt="icon" />
        <CurrencySelect
          currencyValues={currencyValues}    
          toValue={toValue}
          onChangeValue={e => setToValue(e.target.value)}       
        />
      </form>
      <div>
        <p>Valor convertido:</p>
        <p className="sign"> 
          R$ <span>{parseFloat(exchangeValue).toFixed(2)} </span>
        </p>
      </div>
    </BoxConverter>
  );
}

export default Converter;
