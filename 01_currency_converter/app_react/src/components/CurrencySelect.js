import React from 'react';

const CurrencySelect = ({currencyValues, fromValue, onChangeValue}) => {
  return (
    <select id="dropdown" value={fromValue} onChange={onChangeValue}>
      {currencyValues.map(currency => (
          <option value={currency} key={currency}> {currency} </option>
      ))}
    </select>
  );
}

export default CurrencySelect;
