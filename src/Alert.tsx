import * as React from 'react';
const classNames = (...classes: any[]) => classes.filter(Boolean).join(' ');

export interface Props {
  children: React.ReactNode;
  variant: string;
  solid: boolean;
  className: string;
}

const setColor = (variant: string, solid: boolean) => {
  if (solid) {
    if (variant === 'red') return 'text-red-100 bg-red-800';
    else if (variant === 'green') return 'text-green-100 bg-green-800';
    else if (variant === 'yellow') return 'text-yellow-100 bg-yellow-800';
    else if (variant === 'blue') return 'text-blue-100 bg-blue-800';
    else if (variant === 'indigo') return 'text-indigo-100 bg-indigo-800';
    else if (variant === 'purple') return 'text-purple-100 bg-purple-800';
    else if (variant === 'pink') return 'text-pink-100 bg-pink-800';
    else return 'text-gray-100 bg-gray-800';
  }
  if (variant === 'red') return 'text-red-800 bg-red-100';
  else if (variant === 'green') return 'text-green-800 bg-green-100';
  else if (variant === 'yellow') return 'text-yellow-800 bg-yellow-100';
  else if (variant === 'blue') return 'text-blue-800 bg-blue-100';
  else if (variant === 'indigo') return 'text-indigo-800 bg-indigo-100';
  else if (variant === 'purple') return 'text-purple-800 bg-purple-100';
  else if (variant === 'pink') return 'text-pink-800 bg-pink-100';
  else return 'text-gray-800 bg-gray-100';
};

export const Alert: React.FC<Props> = ({
  children,
  solid,
  className,
  variant,
  ...props
}) => {
  const finalClass = classNames(
    className,
    'transition w-full p-4 text-sm font-medium rounded',
    setColor(variant, solid)
  );
  return (
    <div {...props} role="alert" className={finalClass}>
      {children}
    </div>
  );
};
