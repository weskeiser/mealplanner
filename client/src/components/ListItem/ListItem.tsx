import { MouseEventHandler } from 'react';

export interface IListItem {
  children: any;
  className?: string;
  onClick?: MouseEventHandler<HTMLLIElement> | undefined;
}

export const ListItem = ({ className, children, onClick }: IListItem) => {
  return (
    <li className={className} onClick={onClick}>
      {children}
    </li>
  );
};
