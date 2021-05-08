import React from 'react';
import cx from 'clsx';
import { DefaultProps, Sizes, useId } from './Utils';

interface RadioProps
  extends DefaultProps,
    Omit<React.ComponentPropsWithoutRef<'input'>, 'size'> {
  id?: string;
  size?: Sizes;
  color?: string;
  label?: React.ReactNode;
  elementRef?: React.ForwardedRef<HTMLInputElement>;
}

export function Radio({
  id,
  size,
  color,
  label,
  disabled,
  className,
  elementRef,
  ...others
}: RadioProps) {
  const uuid = useId(id);

  return (
    <div className="inline-flex items-center space-x-1.5">
      <input
        id={uuid}
        {...others}
        type="radio"
        ref={elementRef}
        disabled={disabled}
        className={cx(
          className,
          'transition rounded-full border-gray-300 shadow-sm focus:border-gray-300 focus:ring focus:ring-offset-0 focus:ring-gray-200 focus:ring-opacity-50 cursor-pointer',
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
