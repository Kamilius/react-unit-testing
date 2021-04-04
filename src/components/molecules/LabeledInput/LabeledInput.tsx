import React from 'react';

type Props = {
  labelText?: string;
  value: string;
  id?: string;
  type?: 'text' | 'password';

  onChange(value: string): void;
};

export const LabeledInput: React.FC<Props> = ({ labelText, value, id = 'input', type = "text", onChange }) => {
  const handleOnChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    onChange(event.target.value);
  };

  return <div>
    <label htmlFor={id}>{labelText}</label>
    <input id={id} type={type} value={value} onChange={handleOnChange} />
  </div>;
};
