import * as React from 'react';
import { classNames } from './Utils';

export interface Props {
  color: string;
  variant: string;
  rounded: boolean;
  className?: string;
  children?: React.ReactNode;
}

const setColor = (color: string, variant: string) => {
  if (variant === 'outline') {
    if (color === 'red')
      return 'text-red-700 hover:text-red-50 bg-transparent hover:bg-red-700 border-red-700 focus:border-red-300 focus:ring-red-300';
    else if (color === 'green')
      return 'text-green-700 hover:text-green-50 bg-transparent hover:bg-green-700 border-green-700 focus:border-green-300 focus:ring-green-300';
    else if (color === 'yellow')
      return 'text-yellow-700 hover:text-yellow-50 bg-transparent hover:bg-yellow-700 border-yellow-700 focus:border-yellow-300 focus:ring-yellow-300';
    else if (color === 'blue')
      return 'text-blue-700 hover:text-blue-50 bg-transparent hover:bg-blue-700 border-blue-700 focus:border-blue-300 focus:ring-blue-300';
    else if (color === 'indigo')
      return 'text-indigo-700 hover:text-indigo-50 bg-transparent hover:bg-indigo-700 border-indigo-700 focus:border-indigo-300 focus:ring-indigo-300';
    else if (color === 'purple')
      return 'text-purple-700 hover:text-purple-50 bg-transparent hover:bg-purple-700 border-purple-700 focus:border-purple-300 focus:ring-purple-300';
    else if (color === 'pink')
      return 'text-pink-700 hover:text-pink-50 bg-transparent hover:bg-pink-700 border-pink-700 focus:border-pink-300 focus:ring-pink-300';
    return 'text-gray-700 hover:text-gray-50 bg-transparent hover:bg-gray-700 border-gray-700 focus:border-gray-300 focus:ring-gray-300';
  }
  if (variant === 'light') {
    if (color === 'red')
      return 'text-red-900 bg-red-50 hover:bg-red-100 border-red-200 hover:border-red-300 focus:border-red-300 focus:ring-red-300';
    else if (color === 'green')
      return 'text-green-900 bg-green-50 hover:bg-green-100 border-green-200 hover:border-green-300 focus:border-green-300 focus:ring-green-300';
    else if (color === 'yellow')
      return 'text-yellow-900 bg-yellow-50 hover:bg-yellow-100 border-yellow-200 hover:border-yellow-300 focus:border-yellow-300 focus:ring-yellow-300';
    else if (color === 'blue')
      return 'text-blue-900 bg-blue-50 hover:bg-blue-100 border-blue-200 hover:border-blue-300 focus:border-blue-300 focus:ring-blue-300';
    else if (color === 'indigo')
      return 'text-indigo-900 bg-indigo-50 hover:bg-indigo-100 border-indigo-200 hover:border-indigo-300 focus:border-indigo-300 focus:ring-indigo-300';
    else if (color === 'purple')
      return 'text-purple-900 bg-purple-50 hover:bg-purple-100 border-purple-200 hover:border-purple-300 focus:border-purple-300 focus:ring-purple-300';
    else if (color === 'pink')
      return 'text-pink-900 bg-pink-50 hover:bg-pink-100 border-pink-200 hover:border-pink-300 focus:border-pink-300 focus:ring-pink-300';
    return 'text-gray-900 bg-gray-50 hover:bg-gray-100 border-gray-200 hover:border-gray-300 focus:border-gray-300 focus:ring-gray-300';
  }
  if (color === 'gray')
    return 'text-gray-50 bg-gray-700 hover:bg-gray-800 border-gray-700 hover:border-gray-800 focus:border-gray-300 focus:ring-gray-300';
  else if (color === 'red')
    return 'text-red-50 bg-red-700 hover:bg-red-800 border-red-700 hover:border-red-800 focus:border-red-300 focus:ring-red-300';
  else if (color === 'green')
    return 'text-green-50 bg-green-700 hover:bg-green-800 border-green-700 hover:border-green-800 focus:border-green-300 focus:ring-green-300';
  else if (color === 'yellow')
    return 'text-yellow-50 bg-yellow-700 hover:bg-yellow-800 border-yellow-700 hover:border-yellow-800 focus:border-yellow-300 focus:ring-yellow-300';
  else if (color === 'blue')
    return 'text-blue-50 bg-blue-700 hover:bg-blue-800 border-blue-700 hover:border-blue-800 focus:border-blue-300 focus:ring-blue-300';
  else if (color === 'indigo')
    return 'text-indigo-50 bg-indigo-700 hover:bg-indigo-800 border-indigo-700 hover:border-indigo-800 focus:border-indigo-300 focus:ring-indigo-300';
  else if (color === 'purple')
    return 'text-purple-50 bg-purple-700 hover:bg-purple-800 border-purple-700 hover:border-purple-800 focus:border-purple-300 focus:ring-purple-300';
  else if (color === 'pink')
    return 'text-pink-50 bg-pink-700 hover:bg-pink-800 border-pink-700 hover:border-pink-800 focus:border-pink-300 focus:ring-pink-300';
  return 'text-gray-800 bg-white hover:bg-gray-100 border-gray-200 hover:border-gray-300 focus:border-gray-300 focus:ring-gray-300';
};

export const Button: React.FC<Props> = ({
  color,
  variant,
  rounded,
  children,
  className,
  ...props
}) => {
  const finalClass = classNames(
    className,
    'w-auto inline-flex items-center justify-center px-3 py-2 space-x-1 text-sm font-medium transition border rounded select-none focus:outline-none focus:ring-2',
    setColor(color, variant)
  );
  return (
    <button {...props} className={finalClass}>
      {children}
    </button>
  );
};
