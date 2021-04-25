import * as React from 'react';
const classNames = (...classes: any[]) => classes.filter(Boolean).join(' ');

export interface Props {
  dot: string;
  size: string;
  name: string;
  image: string;
  rounded: boolean;
  className: string;
}

const setSize = (avatarSize: string) => {
  if (avatarSize === '6') return 'w-6 h-6 text-xs';
  if (avatarSize === '8') return 'w-8 h-8 text-xs';
  if (avatarSize === '12') return 'w-12 h-12 text-sm';
  if (avatarSize === '14') return 'w-14 h-14 text-base';
  if (avatarSize === '16') return 'w-16 h-16 text-lg';
  if (avatarSize === '20') return 'w-20 h-20 text-xl';
  if (avatarSize === '24') return 'w-24 h-24 text-2xl';
  if (avatarSize === '28') return 'w-28 h-28 text-3xl';
  else return 'w-10 h-10 text-sm';
};

const setIconSize = (avatarSize: string) => {
  if (avatarSize === '6') return 'w-3 h-3';
  if (avatarSize === '8') return 'w-4 h-4';
  if (avatarSize === '12') return 'w-6 h-6';
  if (avatarSize === '14') return 'w-6 h-6';
  if (avatarSize === '16') return 'w-8 h-8';
  if (avatarSize === '20') return 'w-10 h-10';
  if (avatarSize === '24') return 'w-12 h-12';
  if (avatarSize === '28') return 'w-14 h-14';
  else return 'w-5 h-5';
};

const setDotSize = (avatarSize: string) => {
  if (avatarSize === '6') return 'w-1.5 h-1.5 ring';
  if (avatarSize === '12') return 'w-2.5 h-2.5 ring';
  if (avatarSize === '14') return 'w-3 h-3 ring';
  if (avatarSize === '16') return 'w-3.5 h-3.5 ring';
  if (avatarSize === '20') return 'w-4 h-4 ring-4';
  if (avatarSize === '24') return 'w-5 h-5 ring-4';
  if (avatarSize === '28') return 'w-6 h-6 ring-4';
  else return 'w-2 h-2 ring';
};

const setRounded = (rounded: boolean) => {
  if (rounded) return 'rounded';
  else return 'rounded-full';
};

const setDotColor = (color: string) => {
  if (color === 'gray') return 'bg-gray-500';
  else if (color === 'red') return 'bg-red-500';
  else if (color === 'yellow') return 'bg-yellow-500';
  else if (color === 'green') return 'bg-green-500';
  else if (color === 'blue') return 'bg-blue-500';
  else if (color === 'indigo') return 'bg-indigo-500';
  else if (color === 'purple') return 'bg-purple-500';
  else if (color === 'pink') return 'bg-pink-500';
  else if (color === 'primary') return 'bg-primary';
  else return '';
};

const renderContent = (
  image: string,
  name: string,
  rounded: boolean,
  size: string
) => {
  if (image) {
    return (
      <img
        className={classNames(
          'object-cover object-center w-full h-full',
          setRounded(rounded)
        )}
        src={image}
      />
    );
  } else if (name) return <span>{name.charAt(0).toUpperCase()}</span>;
  return (
    <svg
      className={classNames('text-gray-400', setIconSize(size))}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="currentColor"
    >
      <path d="M7.5 6.5C7.5 8.981 9.519 11 12 11s4.5-2.019 4.5-4.5S14.481 2 12 2 7.5 4.019 7.5 6.5zM20 21h1v-1c0-3.859-3.141-7-7-7h-4c-3.86 0-7 3.141-7 7v1h1 1 14H20z" />
    </svg>
  );
};

const renderDot = (dot: string, size: string) => {
  if (dot) {
    return (
      <span
        aria-hidden="true"
        className={classNames(
          'absolute bottom-0 right-0 rounded-full ring-white',
          setDotColor(dot),
          setDotSize(size)
        )}
      />
    );
  } else return '';
};

export const Avatar: React.FC<Props> = ({
  className,
  image,
  name,
  dot,
  size,
  rounded,
  ...props
}) => {
  const finalClass = classNames(
    className,
    'relative flex items-center justify-center flex-shrink-0 font-bold text-gray-800 uppercase bg-gray-100 select-none',
    setSize(size),
    setRounded(rounded)
  );
  return (
    <div {...props} role="alert" className={finalClass}>
      {renderContent(image, name, rounded, size)}
      {renderDot(dot, size)}
    </div>
  );
};
