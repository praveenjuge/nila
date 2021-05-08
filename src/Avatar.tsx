import React from 'react';
import cx from 'clsx';
import { DefaultProps } from './Utils';

interface AvatarProps
  extends DefaultProps,
    React.ComponentPropsWithoutRef<'div'> {
  dot?: string;
  alt?: string;
  src?: string;
  size?: string;
  name?: string;
  icon?: boolean;
  color?: string;
  rounded?: boolean;
}

const setSize = (size?: string) => {
  if (size === '6') return 'w-6 h-6 text-xs';
  if (size === '8') return 'w-8 h-8 text-xs';
  if (size === '12') return 'w-12 h-12 text-sm';
  if (size === '14') return 'w-14 h-14 text-base';
  if (size === '16') return 'w-16 h-16 text-lg';
  if (size === '20') return 'w-20 h-20 text-xl';
  if (size === '24') return 'w-24 h-24 text-2xl';
  if (size === '28') return 'w-28 h-28 text-3xl';
  return 'w-10 h-10 text-sm';
};

const setIconSize = (size?: string) => {
  if (size === '6') return 'w-3 h-3';
  if (size === '8') return 'w-4 h-4';
  if (size === '12') return 'w-6 h-6';
  if (size === '14') return 'w-6 h-6';
  if (size === '16') return 'w-8 h-8';
  if (size === '20') return 'w-10 h-10';
  if (size === '24') return 'w-12 h-12';
  if (size === '28') return 'w-14 h-14';
  return 'w-5 h-5';
};

const setDotSize = (size?: string) => {
  if (size === '6') return 'w-1.5 h-1.5 ring';
  if (size === '14') return 'w-3 h-3 ring';
  if (size === '16') return 'w-3.5 h-3.5 ring';
  if (size === '20') return 'w-4 h-4 ring-4';
  if (size === '24') return 'w-5 h-5 ring-4';
  if (size === '28') return 'w-6 h-6 ring-4';
  return 'w-2 h-2 ring';
};

const renderContent = (
  src?: string,
  name?: string,
  rounded?: boolean,
  size?: string
) => {
  if (src) {
    return (
      <img
        className={cx(
          'object-cover object-center w-full h-full',
          rounded ? 'rounded' : 'rounded-full'
        )}
        src={src}
      />
    );
  } else if (name) return name.charAt(0).toUpperCase();
  return (
    <svg
      className={cx('text-gray-400', setIconSize(size))}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="currentColor"
    >
      <path d="M7.5 6.5C7.5 8.981 9.519 11 12 11s4.5-2.019 4.5-4.5S14.481 2 12 2 7.5 4.019 7.5 6.5zM20 21h1v-1c0-3.859-3.141-7-7-7h-4c-3.86 0-7 3.141-7 7v1h1 1 14H20z" />
    </svg>
  );
};

export function Avatar({
  icon,
  color,
  dot,
  size,
  name,
  src,
  rounded,
  children,
  className,
  ...others
}: AvatarProps) {
  return (
    <div
      {...others}
      className={cx(
        className,
        'relative flex items-center justify-center flex-shrink-0 font-bold text-gray-800 uppercase bg-gray-100 select-none',
        rounded ? 'rounded' : 'rounded-full',
        setSize(size)
      )}
    >
      {renderContent(src, name, rounded, size)}
      {dot && (
        <span
          aria-hidden="true"
          className={cx(
            'absolute bottom-0 right-0 rounded-full ring-white',
            dot,
            setDotSize(size)
          )}
        />
      )}
    </div>
  );
}
