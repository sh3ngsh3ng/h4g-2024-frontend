import LoginForm from "../../components/forms/LoginForm";
import SignUpForm from "../../components/forms/SignUpForm";
import { Radio, RadioGroup, useRadioGroup, Box, HStack, useRadio } from "@chakra-ui/react";

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

function Example() {
  const options = ["Login", "Sign Up"];

  const { getRootProps, getRadioProps } = useRadioGroup({
    name: "framework",
    defaultValue: "react",
    onChange: console.log,
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

export default function AuthPage() {
  return (
    <>
      <h1>Auth Page</h1>
      <div>Carousel Component</div>
      <button>Toggle Forms - Radio Button</button>
      {/* if mode = signup  */}
      <SignUpForm />
      <LoginForm />
      <Example />
    </>
  );
}
