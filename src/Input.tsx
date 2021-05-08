import React from 'react';
import cx from 'clsx';
import { DefaultProps, Sizes, useId } from './Utils';

interface InputProps extends DefaultProps {
  id?: string;
  size?: Sizes;
  name?: string;
  icon?: boolean;
  color?: string;
  invalid?: boolean;
  required?: boolean;
  label?: React.ReactNode;
  elementRef?: React.ForwardedRef<HTMLInputElement>;
}

export function Input({
  id,
  size,
  color,
  label,
  className,
  elementRef,
  invalid = false,
  required = false,
  ...others
}: InputProps) {
  const uuid = useId(id);

  return (
    <>
      {label && (
        <label htmlFor={uuid} className="flex mb-1 text-sm text-gray-700">
          {label}
        </label>
      )}
      <input
        id={uuid}
        {...others}
        type="text"
        ref={elementRef}
        aria-required={required}
        aria-invalid={invalid}
        className={cx(
          className,
          'block w-full text-sm py-2.5 rounded-md transition border-gray-200 shadow-sm focus:ring-2 focus:outline-none focus:border-gray-600 focus:ring-gray-600'
        )}
      />
    </>
  );
}
