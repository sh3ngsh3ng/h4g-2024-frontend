import { useSelector } from "react-redux";
import LoginForm from "../../components/forms/LoginForm";
import SignUpForm from "../../components/forms/SignUpForm";
import Carousel from "../../components/utilities/Carousel";
import {
  useRadioGroup,
  Box,
  HStack,
  useRadio,
  Flex,
  Container,
  Center,
  Grid,
  GridItem,
  AbsoluteCenter,
  Show,
  Hide,
} from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { useParams } from "react-router";
import AuthTab from "../../components/utilities/AuthTab";

function RadioCard(props) {
  const { getInputProps, getRadioProps } = useRadio(props);

  const input = getInputProps();
  const checkbox = getRadioProps();

  return (
    <Box as="label">
      <input {...input} />
      <Box
        {...checkbox}
        cursor="pointer"
        borderWidth="1px"
        borderRadius="md"
        boxShadow="md"
        _checked={{
          bg: "red.600",
          color: "white",
          borderColor: "red.600",
        }}
        _focus={{
          boxShadow: "outline",
        }}
        px={5}
        py={3}
      >
        {props.children}
      </Box>
    </Box>
  );
}

export default function AuthPage() {
  const [formMode, setFormMode] = useState("Login");
  const [event, setEvent] = useState("");
  const [token, setToken] = useState("");

  const userRegister = useSelector((state) => state.userRegister);
  const { loading } = userRegister;

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    setEvent(params.get("event"));
    setToken(params.get("token"));
  }, [window.location.search]);

  function renderForm() {
    if (formMode === "Login") {
      return <LoginForm token={token} event={event} />;
    } else if (formMode === "SignUp") {
      return <SignUpForm />;
    }
  }

  function RadioToggle() {
    const options = ["Login", "SignUp"];

    const { getRootProps, getRadioProps } = useRadioGroup({
      name: "authMode",
      defaultValue: "Login",
      onChange: (value) => setFormMode(value),
    });

    const group = getRootProps();

    return (
      <HStack {...group}>
        {options.map((value) => {
          const radio = getRadioProps({ value });
          return (
            <RadioCard key={value} {...radio}>
              {value}
            </RadioCard>
          );
        })}
      </HStack>
    );
  }

  return (
    <>
      {/* Webpage design */}
      <Show above="lg">
        <Grid templateColumns="repeat(10, 1fr)">
          <GridItem colSpan={5}>
            <Carousel />
          </GridItem>
          <GridItem colSpan={5}>
            <Box height="15%"></Box>
            <Box height="50%" width="60%" m="auto">
              <Center mb={8}>
                {" "}
                <AuthTab changeForm={setFormMode} />
              </Center>
              {renderForm()}
            </Box>
          </GridItem>
        </Grid>
      </Show>

      {/* Phone design */}
      <Show below="lg">
        <Box height="50%" width="80%" m="auto">
          <Center mb={8}>
            {" "}
            <AuthTab changeForm={setFormMode} />
          </Center>
          {renderForm()}
        </Box>
      </Show>
    </>
  );
}
