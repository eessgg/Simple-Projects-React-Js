import React from 'react';

const CurrencySelect = ({rates, setFromValue, values}) => {
  return (
    <select name="curr01" id="currency1" onChange={setFromValue}>
      {
        Object.keys(rates).map((rate, index) => (
          <option key={index} value={`${rate}${index}`}>{rate}{values}</option>
        ))
      }
    </select>
  );
}

export default CurrencySelect;
