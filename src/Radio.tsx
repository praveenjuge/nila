import * as React from 'react';
import { classNames } from './Utils';

export interface Props {
  id: string;
  label: string;
  solid: boolean;
  rounded: boolean;
  closable: boolean;
  className: string;
}

export const Radio: React.FC<Props> = ({
  id,
  solid,
  rounded,
  closable,
  className,
  label,
  ...props
}) => {
  const finalClass = classNames(
    className,
    'transition rounded-full border-gray-300 text-gray-600 shadow-sm focus:border-gray-300 focus:ring focus:ring-offset-0 focus:ring-gray-200 focus:ring-opacity-50 cursor-pointer'
  );
  return (
    <div className="inline-flex items-center space-x-1.5">
      <input id={id} {...props} className={finalClass} type="radio" />
      {label && (
        <label htmlFor={id} className="text-sm text-gray-800 cursor-pointer">
          {label}
        </label>
      )}
    </div>
  );
};
