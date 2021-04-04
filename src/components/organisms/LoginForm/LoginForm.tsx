import React, { useState } from 'react';

import { LoginInfo } from "./LoginForm.types";

import { LabeledInput } from "../../molecules";

type Props = {
  onSubmit(info: LoginInfo): void;
}

export const LoginForm: React.FC<Props> = ({ onSubmit }) => {
  const [username, setUsername] = useState<string>('');
  const [password, setPassword] = useState<string>('');

  const handleFormSubmit = () => {
    onSubmit({
      username,
      password
    })
  }

  return <div>
    <LabeledInput
      value={username}
      labelText="Username"
      id="username"
      onChange={setUsername}
    />
    <LabeledInput
      value={password}
      labelText="Password"
      type="password"
      id="password"
      onChange={setPassword}
    />
    <button onClick={handleFormSubmit}>Submit</button>
  </div>
};
