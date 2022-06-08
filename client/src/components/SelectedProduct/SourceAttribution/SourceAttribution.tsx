import { FC } from 'react';

interface SourceAttributionProps {
  selectedProductClass: string;
}

const SourceAttribution: FC<SourceAttributionProps> = ({
  selectedProductClass,
}) => {
  return (
    <a
      className={selectedProductClass + '__source-attribution'}
      href="www.matvaretabellen.no"
      title='"Matvaretabellen 2021. Mattilsynet. www.matvaretabellen.no"'
    >
      Kilde: Matvaretabellen.no
    </a>
  );
};

export default SourceAttribution;
