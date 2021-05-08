import React from 'react';
import cx from 'clsx';
import { DefaultProps, Sizes, useId } from './Utils';

interface CheckboxProps
  extends DefaultProps,
    Omit<React.ComponentPropsWithoutRef<'input'>, 'type' | 'size'> {
  id?: string;
  size?: Sizes;
  color?: string;
  label?: React.ReactNode;
  elementRef?: React.ForwardedRef<HTMLInputElement>;
}

export function Checkbox({
  id,
  size,
  color,
  label,
  onChange,
  disabled,
  className,
  elementRef,
  ...others
}: CheckboxProps) {
  const uuid = useId(id);

  return (
    <div className="inline-flex items-center space-x-1.5">
      <input
        id={uuid}
        {...others}
        type="checkbox"
        ref={elementRef}
        onChange={onChange}
        disabled={disabled}
        className={cx(
          className,
          'transition rounded shadow-sm focus:ring focus:ring-offset-0 focus:ring-opacity-75 cursor-pointer border-gray-300 focus:border-gray-300 focus:ring-gray-200',
          color ? color : 'text-gray-600'
        )}
      />
      {label && (
        <label htmlFor={uuid} className="text-sm text-gray-800 cursor-pointer">
          {label}
        </label>
      )}
    </div>
  );
}
