export type ComponentPassThrough<
  T extends React.ElementType,
  Props
> = React.ComponentPropsWithoutRef<T> & {
  component?: T;
} & Props;

export const classNames = (...classes: any[]) =>
  classes.filter(Boolean).join(' ');

export const setColor = (color: string, variant: string) => {
  if (variant === 'solid') {
    if (color === 'red') return 'border-red-100 text-red-100 bg-red-800';
    else if (color === 'green')
      return 'border-green-100 text-green-100 bg-green-800';
    else if (color === 'yellow')
      return 'border-yellow-100 text-yellow-100 bg-yellow-800';
    else if (color === 'blue')
      return 'border-blue-100 text-blue-100 bg-blue-800';
    else if (color === 'indigo')
      return 'border-indigo-100 text-indigo-100 bg-indigo-800';
    else if (color === 'purple')
      return 'border-purple-100 text-purple-100 bg-purple-800';
    else if (color === 'pink')
      return 'border-pink-100 text-pink-100 bg-pink-800';
    return 'border-gray-100 text-gray-100 bg-gray-800';
  }
  if (color === 'red') return 'border-red-800 text-red-800 bg-red-100';
  else if (color === 'green')
    return 'border-green-800 text-green-800 bg-green-100';
  else if (color === 'yellow')
    return 'border-yellow-800 text-yellow-800 bg-yellow-100';
  else if (color === 'blue') return 'border-blue-800 text-blue-800 bg-blue-100';
  else if (color === 'indigo')
    return 'border-indigo-800 text-indigo-800 bg-indigo-100';
  else if (color === 'purple')
    return 'border-purple-800 text-purple-800 bg-purple-100';
  else if (color === 'pink') return 'border-pink-800 text-pink-800 bg-pink-100';
  return 'border-gray-800 text-gray-800 bg-gray-100';
};

export const setRounded = (rounded: boolean) => {
  if (rounded) return 'rounded';
  return 'rounded-full';
};
