import { MouseEventHandler } from 'react';

export interface IListItem {
  children: any;
  className?: string;
  onClick?: MouseEventHandler<HTMLLIElement> | undefined;
  rest?: any;
}

export const ListItem = ({
  className,
  children,
  onClick,
  ...rest
}: IListItem) => {
  return (
    <li className={className} onClick={onClick} {...rest}>
      {children}
    </li>
  );
};
