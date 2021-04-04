import { fireEvent, render } from "@testing-library/react";

import { LabeledInput } from './LabeledInput';

type Props = {
  labelText?: string;
  value?: string;
  id?: string;
  type?: 'text' | 'password';

  onChange?(value: string): void;
};

const setup = ({ value = '', labelText = '', onChange = jest.fn(), type }: Props = {}) =>
  render(<LabeledInput value={value} labelText={labelText} onChange={onChange} type={type} />);

describe(`molecules/LabeledInput`, () => {
  it(`should properly render component`, () => {
    // arrange
    const labelText = 'Username';
    const value = 'input';

    // act
    const { getByText, getByDisplayValue } = setup({ labelText, value });
    const input = getByDisplayValue(new RegExp(value, 'i'));

    expect(getByText(new RegExp(labelText, 'i'))).toBeInTheDocument();
    expect(input).toBeInTheDocument();
    expect(input).toHaveAttribute('type', 'text');
  });

  it(`should return input value, when user types anything`, () => {
    // Arrange
    const labelText = 'Username';
    const value = 'admin';
    const onChangeSpy = jest.fn();
    const { getByRole } = setup({ labelText, onChange: onChangeSpy });

    fireEvent.change(getByRole('textbox'), { target: { value } });

    expect(onChangeSpy).toHaveBeenCalledWith(value);
  });

  it(`should change input type to 'password'`, () => {
    const value = 'input';
    const { getByDisplayValue } = setup({ value, type: 'password' });

    const input = getByDisplayValue(new RegExp(value, 'i'));

    expect(input).toBeInTheDocument();
    expect(input).toHaveAttribute('type', 'password');
  });
});
