import "./LoginForm.css";
import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import {
  Input,
  Button,
  Container,
  FormControl,
  FormHelperText,
  Divider,
  Center,
  Box,
  AbsoluteCenter,
} from "@chakra-ui/react";
import { LinkIcon } from "@chakra-ui/icons";
import {
  redButtonActive,
  redButtonFocus,
  redButtonHover,
  white,
  primaryWordColor,
  grey,
} from "../constants/color";
import MyDivider from "../utilities/MyDivider";
import { useDispatch, useSelector } from "react-redux";
import { loginUser, loginUserWithEmailAndPassword } from "../actions/userActions";

export default function LoginForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const userLogin = useSelector((state) => state.userLogin);
  const { loading, user, error } = userLogin;

  const handleLogin = (event) => {
    event.preventDefault();
    dispatch(loginUserWithEmailAndPassword(email, password));
  };

  const handleLoginWithGoogle = (event) => {
    event.preventDefault();
    dispatch(loginUser());
  };

  useEffect(() => {
    if (user) {
        navigate("/");
    }

    if (error) {
        window.confirm(error);
    }
  }, [userLogin])

  return (
    <>
      <FormControl>
        <Input
          id="login-email"
          type="text"
          placeholder="Email Address"
          name="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          m="10px"
          borderColor={"gray.400"}
          focusBorderColor="red.600"
          height="48px"
        />
        <Input
          id="login-pwd"
          m="10px"
          type="password"
          placeholder="Password"
          name="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          borderColor={"gray.400"}
          focusBorderColor="red.600"
          height="48px"
        />
        <FormHelperText textAlign={"center"}>
          <Link
            to="/login"
            style={{
              color: primaryWordColor,
              textDecoration: "underline",
            }}
          >
            Forget Password?
          </Link>
        </FormHelperText>
        <Button
          mt={5}
          backgroundColor={redButtonActive}
          color={white}
          sx={{
            ":hover": {
              backgroundColor: redButtonHover,
              ":focus": { backgroundColor: redButtonFocus },
            },
          }}
          width="full"
          height="48px"
          onClick={handleLogin}
        >
          Login
        </Button>
      </FormControl>

      <MyDivider />

      <Button
        backgroundColor={white}
        borderColor={grey}
        color={grey}
        variant="outline"
        sx={{
          ":hover": {
            backgroundColor: white,
            ":focus": { backgroundColor: white },
          },
        }}
        width="full"
        height="36px"
        leftIcon={<LinkIcon />}
        onClick={handleLoginWithGoogle}
      >
        Log In With Google
      </Button>
    </>
  );
}
