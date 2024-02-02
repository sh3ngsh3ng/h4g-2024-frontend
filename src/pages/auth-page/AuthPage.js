import LoginForm from "../../components/forms/LoginForm";
import SignUpForm from "../../components/forms/SignUpForm";
import Carousel from "../../components/utilities/Carousel"
import { useRadioGroup, Box, HStack, useRadio, Flex, Container } from "@chakra-ui/react";
import { Show, Hide } from '@chakra-ui/react'
import { useState } from "react";

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


    const [formMode, setFormMode] = useState("Login")

    function renderForm() {
        if (formMode == "Login") {
            return <LoginForm />
        } else if (formMode == "SignUp") {
            return <SignUpForm />
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
            <Flex>
                {/* hide if phone */}
                <Show above="lg"><Box w="50%" padding={5}><Carousel /></Box></Show>

                <Box w={{ base: "100%", lg: "50%" }} padding={5}>
                    <RadioToggle />
                    {renderForm()}
                </Box>
            </Flex>
        </>

    );
}
