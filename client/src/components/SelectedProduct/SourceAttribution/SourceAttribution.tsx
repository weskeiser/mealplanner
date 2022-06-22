import { FC } from 'react';
import * as Styled from './SourceAttribution.styled';

const SourceAttribution: FC = () => {
  return (
    <Styled.SourceAttribution
      href="www.matvaretabellen.no"
      title='"Matvaretabellen 2021. Mattilsynet. www.matvaretabellen.no"'
    >
      Kilde: Matvaretabellen.no
    </Styled.SourceAttribution>
  );
};

export default SourceAttribution;
