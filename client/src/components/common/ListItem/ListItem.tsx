import { FC } from 'react';

export interface IListItem {
  children: any;
  className: string;
  onKeyDown?: any;
  tabIndex?: number;
  rest?: any;
  onClick?: any;
}

export const ListItem: FC<IListItem> = ({ children, ...rest }) => {
  return <li {...rest}>{children}</li>;
};
