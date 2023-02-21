import { memo } from 'react';

type Props = Readonly<{
  children?: JSX.Element;
  dataTestId: string;
  disabled: boolean;
  onClick: () => void;
}>;
export const Button = memo(
  ({ dataTestId, disabled, children, onClick }: Props) => (
    <button
      data-testid={dataTestId}
      disabled={disabled}
      onClick={onClick}
      className="p-1 rounded-full bg-blue-300 mx-1 disabled:cursor-not-allowed disabled:bg-gray-400"
    >
      {children}
    </button>
  )
);
