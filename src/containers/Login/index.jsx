import React, { useState } from "react";
import CustomInput from "../../components/CustomInput";
import CustomButton from "../../components/CustomButton";
import { textInputProps, collections } from "../../constants";
import { buttonProps } from "../../constants";
import { useAuth } from "../../hooks";
import { useFirestore } from "../../hooks";
import { firebaseAuth } from "../../firebase";
import { useHistory } from "react-router";
const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const auth = useAuth();
  const history = useHistory();
  const handleChange = (e) => {
    switch (e.target.id) {
      case "email":
        setEmail(e.target.value);
        break;
      case "password":
        setPassword(e.target.value);
        break;

      default:
        break;
    }
  };
  const handleClick = async () => {
    if (!email && !password && !email.includes("@")) return;

    const user = await auth.signIn(email, password);
    if (typeof user == "string") alert(user);
    else {
      setEmail("");
      setPassword("");
      history.push("/todo");
    }
  };
  return (
    <div className="container">
      <CustomInput
        id="email"
        onChange={handleChange}
        label={textInputProps.email.label}
        type={textInputProps.email.type}
        value={email}
      ></CustomInput>
      <CustomInput
        id="password"
        onChange={handleChange}
        label={textInputProps.password.label}
        type={textInputProps.password.type}
        value={password}
      ></CustomInput>
      <CustomButton
        onClick={handleClick}
        color={buttonProps.color.primary}
        text={buttonProps.text.submit}
      />
    </div>
  );
};
export default Login;
