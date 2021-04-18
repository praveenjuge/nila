import React from 'react';

export interface ButtonProps {
  children: React.ReactNode;
}

export const Button = ({ children, ...props }: ButtonProps) => (
  <button
    {...props}
    className="px-3 py-2 text-sm text-white bg-blue-700 rounded focus:ring focus:outline-none"
  >
    {children}
  </button>
);
