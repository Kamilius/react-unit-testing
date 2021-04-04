import { fireEvent, render } from "@testing-library/react";

import { LoginForm } from "./LoginForm";
import { LoginInfo } from "./LoginForm.types";

type Props = {
  onSubmit?(info: LoginInfo): void;
}

const setup = ({ onSubmit = jest.fn() }: Props) =>
  render(<LoginForm onSubmit={onSubmit} />);

describe(`organisms/LoginForm`, () => {
  it(`should return user info on form submit`, () => {
    // Arrange
    const username = 'username';
    const password = 'password';
    const onSubmitSpy = jest.fn();
    const { getByLabelText, getByRole } = setup({ onSubmit: onSubmitSpy });
    const usernameInput = getByLabelText(/username/i);
    const passwordInput = getByLabelText(/password/i);
    const submitButton = getByRole('button');

    // Act
    fireEvent.change(usernameInput, { target: { value: username } });
    fireEvent.change(passwordInput, { target: { value: password } });
    fireEvent.click(submitButton);

    // Assert
    expect(onSubmitSpy).toHaveBeenCalledWith({ username, password });
  });
});
