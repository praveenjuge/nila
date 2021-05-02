import * as React from 'react';
import { classNames, setColor, setRounded } from './Utils';

export interface Props {
  color: string;
  variant: string;
  rounded: boolean;
  closable: boolean;
  className: string;
  children: React.ReactNode;
}

const setPadding = (closable: boolean) => {
  if (closable) return 'py-4 pl-4 pr-10';
  return 'p-4';
};

export const Badge: React.FC<Props> = ({
  color,
  variant,
  rounded,
  children,
  closable,
  className,
  ...props
}) => {
  const finalClass = classNames(
    className,
    'px-3 py-1 text-xs font-medium',
    setColor(color, variant),
    setRounded(rounded),
    setPadding(closable)
  );
  return (
    <span {...props} className={finalClass}>
      {children}
      {closable && (
        <button
          aria-label="closable"
          className="absolute top-3 right-2 p-1.5 transition rounded opacity-75 hover:opacity-100"
        >
          <svg
            aria-hidden="true"
            className="flex-shrink-0 w-4 h-4"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fillRule="evenodd"
              d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
              clipRule="evenodd"
            />
          </svg>
        </button>
      )}
    </span>
  );
};
