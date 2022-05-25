import { FC } from 'react';

export interface IListItem {
  children: any;
  rest?: any;
  className: string;
}

export const ListItem: FC<IListItem> = ({ children, ...rest }) => {
  return <li {...rest}>{children}</li>;
};
