import { cloneElement } from 'react';

function ProviderComposer({ contexts, children }) {
  return contexts.reduceRight(
    (kids, parent) =>
      cloneElement(parent, {
        children: kids,
      }),
    children
  );
}

function ContextProvider({ children }) {
  return (
    <ProviderComposer
      contexts={
        [
          // Context components
        ]
      }
    >
      {children}
    </ProviderComposer>
  );
}

export { ContextProvider };
