"use client"
// components/TokenInput.tsx
import Image from 'next/image';
import React from 'react';
import eth from '../assets/eth.png'
import sol from '../assets/sol.png';


interface TokenInputProps {
  value: string;
  onChange: (value: string) => void;
  showLogos?: boolean; // Add a prop to indicate whether to show logos or not
}

const TokenInput: React.FC<TokenInputProps> = ({ value, onChange, showLogos = false }) => {
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    onChange(event.target.value);
  };

  return (
    <div className="flex">
      <input
        type="number"
        value={value}
        onChange={handleChange}
        className="w-1/2 mr-2 p-2 border rounded"
        placeholder="Enter amount"
      />
      <select
        value={value}
        // onChange={handleChange}
        className="w-1/2 p-2 border rounded"
      >
        <option value="ETH">ETH</option>
        <option value="SOL">SOL</option>
        {/* Add more token options here */}
      </select>
      {showLogos && (
        <>
          {/* Render logos here */}
           <Image src={eth} alt="ETH Logo" /> 
           <Image src={sol} alt="SOL Logo" className='w-[30px]'/>
        </>
      )}
    </div>
  );
};

export default TokenInput;
