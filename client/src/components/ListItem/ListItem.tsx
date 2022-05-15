export interface IListItem {
  children: any;
  className: string;
}

export const ListItem = ({ className, children }: IListItem) => {
  return (
    <li className={className}>
      <div>{children}</div>
    </li>
  );
};
