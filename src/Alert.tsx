import * as React from 'react';
const classNames = (...classes: any[]) => classes.filter(Boolean).join(' ');

export interface Props {
  children: React.ReactNode;
  variant: string;
  solid: boolean;
  icon: boolean;
  closable: boolean;
  className: string;
}

const setPadding = (closable: boolean) => {
  if (closable) return 'py-4 pl-4 pr-10';
  else return 'p-4';
};

const setIcon = (icon: boolean) => {
  if (icon) return 'flex space-x-2.5';
  else return '';
};

const setColor = (variant: string, solid: boolean) => {
  if (solid) {
    if (variant === 'red') return 'border-red-100 text-red-100 bg-red-800';
    else if (variant === 'green')
      return 'border-green-100 text-green-100 bg-green-800';
    else if (variant === 'yellow')
      return 'border-yellow-100 text-yellow-100 bg-yellow-800';
    else if (variant === 'blue')
      return 'border-blue-100 text-blue-100 bg-blue-800';
    else if (variant === 'indigo')
      return 'border-indigo-100 text-indigo-100 bg-indigo-800';
    else if (variant === 'purple')
      return 'border-purple-100 text-purple-100 bg-purple-800';
    else if (variant === 'pink')
      return 'border-pink-100 text-pink-100 bg-pink-800';
    else return 'border-gray-100 text-gray-100 bg-gray-800';
  }
  if (variant === 'red') return 'border-red-800 text-red-800 bg-red-100';
  else if (variant === 'green')
    return 'border-green-800 text-green-800 bg-green-100';
  else if (variant === 'yellow')
    return 'border-yellow-800 text-yellow-800 bg-yellow-100';
  else if (variant === 'blue')
    return 'border-blue-800 text-blue-800 bg-blue-100';
  else if (variant === 'indigo')
    return 'border-indigo-800 text-indigo-800 bg-indigo-100';
  else if (variant === 'purple')
    return 'border-purple-800 text-purple-800 bg-purple-100';
  else if (variant === 'pink')
    return 'border-pink-800 text-pink-800 bg-pink-100';
  else return 'border-gray-800 text-gray-800 bg-gray-100';
};

export const Alert: React.FC<Props> = ({
  children,
  solid,
  icon,
  closable,
  className,
  variant,
  ...props
}) => {
  const finalClass = classNames(
    className,
    'relative transition w-full text-sm font-medium rounded',
    setColor(variant, solid),
    setIcon(icon),
    setPadding(closable)
  );
  return (
    <div {...props} role="alert" className={finalClass}>
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
    </div>
  );
};
