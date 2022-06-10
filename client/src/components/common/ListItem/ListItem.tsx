import { FC } from 'react';

export interface IListItem {
  children: any;
  className: string;
  onKeyDown?: any;
  tabIndex?: number;
  props?: any;
  onClick?: any;
}

export const ListItem: FC<IListItem> = ({ ...props }) => {
  return <li {...props} />;
};
