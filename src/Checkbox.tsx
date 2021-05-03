import * as React from 'react';
import { classNames } from './Utils';

export interface Props {
  id: string;
  label: string;
  color: string;
  className: string;
}

export const Checkbox: React.FC<Props> = ({
  id,
  label,
  color,
  className,
  ...props
}) => {
  const finalClass = classNames(
    className,
    'transition rounded shadow-sm focus:ring focus:ring-offset-0 focus:ring-opacity-75 cursor-pointer border-gray-300 focus:border-gray-300 focus:ring-gray-200',
    color ? color : 'text-gray-600'
  );
  return (
    <div className="inline-flex items-center space-x-1.5">
      <input id={id} {...props} className={finalClass} type="checkbox" />
      {label && (
        <label htmlFor={id} className="text-sm text-gray-800 cursor-pointer">
          {label}
        </label>
      )}
    </div>
  );
};
