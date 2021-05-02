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

export const Input: React.FC<Props> = ({
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
    'block w-full text-sm py-2.5 rounded-md transition border-gray-200 shadow-sm focus:ring-2 focus:outline-none focus:border-gray-600 focus:ring-gray-600'
  );
  return (
    <>
      {label && (
        <label
          htmlFor={id}
          className="flex mb-1 text-sm text-gray-700"
        >
          {label}
        </label>
      )}
      <input type="text" id={id} {...props} className={finalClass} />
    </>
  );
};
