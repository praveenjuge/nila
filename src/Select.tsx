import React from 'react';
import cx from 'clsx';
import { DefaultProps, Sizes, useId } from './Utils';

interface SelectItem {
  value: string;
  label: string;
  disabled?: boolean;
}

interface SelectProps extends DefaultProps {
  id?: string;
  size?: Sizes;
  name?: string;
  icon?: boolean;
  color?: string;
  invalid?: boolean;
  data: SelectItem[];
  required?: boolean;
  placeholder?: string;
  label?: React.ReactNode;
}

export function Select({
  id,
  size,
  data,
  color,
  label,
  className,
  placeholder,
  required = false,
  ...others
}: SelectProps) {
  const uuid = useId(id);

  const options = data.map(item => (
    <option key={item.value} value={item.value} disabled={item.disabled}>
      {item.label}
    </option>
  ));

  if (placeholder) {
    options.unshift(
      <option key="placeholder" value="" selected disabled hidden>
        {placeholder}
      </option>
    );
  }

  return (
    <>
      {label && (
        <label htmlFor={uuid} className="flex mb-1 text-sm text-gray-700">
          {label}
        </label>
      )}
      <select
        id={uuid}
        {...others}
        aria-required={required}
        required={required}
        className={cx(
          className,
          'block w-full text-sm py-2.5 rounded-md transition border-gray-200 shadow-sm focus:ring-2 focus:outline-none focus:border-gray-600 focus:ring-gray-600'
        )}
      >
        {options}
      </select>
    </>
  );
}
