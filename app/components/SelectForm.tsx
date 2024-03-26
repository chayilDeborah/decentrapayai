"use client"
import React, { useState } from 'react';
import TokenInput from './SelectToken';

const SelectForm: React.FC = () => {
  const [amount, setAmount] = useState('');
  const [token, setToken] = useState('');

  const handleAmountChange = (value: string) => {
    setAmount(value);
  };

  const handleTokenChange = (value: string) => {
    setToken(value);
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    // Handle form submission here
    console.log(`Submitted amount: ${amount}, token: ${token}`);
  };

  return (
    <form onSubmit={handleSubmit} className="flex justify-center mt-8">
     <TokenInput value={token} onChange={handleTokenChange} showLogos={true} />
      <button type="submit" className="ml-2 p-2 bg-blue-500 text-white rounded">
        Submit
      </button>
    </form>
  );
};

export default SelectForm;
