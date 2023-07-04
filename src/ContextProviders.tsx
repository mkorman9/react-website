import React, { PropsWithChildren } from 'react';
import { AuthProvider } from './hooks/auth';

const CONTEXT_PROVIDERS: React.FC<PropsWithChildren<unknown>>[] = [AuthProvider];

const ContextProviders = (props: PropsWithChildren<unknown>) => {
  return (
    <>
      {CONTEXT_PROVIDERS.reduceRight((current, Component) => {
        return <Component>{current}</Component>;
      }, props.children)}
    </>
  );
};

export default ContextProviders;
