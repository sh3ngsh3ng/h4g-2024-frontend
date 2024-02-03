import LoginForm from "../../components/forms/LoginForm";
import SignUpForm from "../../components/forms/SignUpForm";
import AuthTab from "../../components/utilities/AuthTab";
import Carousel from "../../components/utilities/Carousel";
import { Box, Flex } from "@chakra-ui/react";
import { Show, Hide } from "@chakra-ui/react";
import { useState } from "react";

export default function AuthPage() {
  return (
    <>
      <Flex>
        {/* hide if phone */}
        <Show above="lg">
          <Box w="50%" padding={5}>
            <Carousel />
          </Box>
        </Show>

        <Box w={{ base: "100%", lg: "50%" }} padding={5}>
          <AuthTab tab1={<LoginForm />} tab2={<SignUpForm />} />
        </Box>
      </Flex>
    </>
  );
}
