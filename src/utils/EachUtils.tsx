import { ReactNode, Children } from "react";
interface EachUtilsProps<T> {
  of: T[];
  render: (item: T, index: number) => ReactNode;
  onError?: (error: Error) => void; // Callback error
}

function eachUtils<T>({ of, render, onError }: EachUtilsProps<T>): ReactNode[] {
  try {
    return Children.toArray(of.map((item, index) => render(item, index)));
  } catch (error) {
    if (onError && error instanceof Error) {
      onError(error);
    }
    return [];
  }
}



export default eachUtils;
