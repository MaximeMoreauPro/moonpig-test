import React from 'react';

type DataDisplayerUIProps<D, P> = {
  isLoading: boolean;
  data: D[];
  additionalProps: P;
  ComponentUI: React.FC<{ items: D[] } & P>;
  noDataMessage: string;
};

export function DataDisplayerUI<D, P>({
  isLoading,
  data,
  ComponentUI,
  noDataMessage,
  additionalProps,
}: DataDisplayerUIProps<D, P>) {
  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (data.length) {
    return <ComponentUI items={data} {...additionalProps} />;
  }

  return <div>{noDataMessage}</div>;
}
