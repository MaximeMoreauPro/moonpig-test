import React from 'react';

type DataDisplayerUIProps<D, P = {}> = {
  isLoading: boolean;
  data: D[];
  additionalProps: P;
  ComponentUI: React.FC<{ items: D[] } & P>;
  noDataMessage: string;
};

/**
 * Generic component to display data
 * @param isLoading - boolean to indicate if data is loading
 * @param data - data to display (array of D items)
 * @param ComponentUI - UI Component to display data (must have items prop of type D[] and optional additionalProps of type P)
 * @param noDataMessage - message to display if data is empty
 * @param additionalProps - additional props of type P to pass to ComponentUI
 */
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
