import "./LoginForm.css";
import React, { useState } from "react";
import { Link } from "react-router-dom";
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

export default function LoginForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = (event) => {
    event.preventDefault();
    console.log(email, password);
  };
  return (
    <>
      <FormControl>
        <Input
          id="login-email"
          type="text"
          placeholder="Email Address"
          name="email"
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
        >
          Login
        </Button>
      </FormControl>

      <MyDivider/>

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
          leftIcon={<LinkIcon/>}
        >
          Log In With Google
        </Button>
    </>
  );
}
