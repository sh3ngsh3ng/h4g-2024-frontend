import LoginForm from "../../components/forms/LoginForm";
import SignUpForm from "../../components/forms/SignUpForm";
import AuthTab from "../../components/utilities/AuthTab";
import Carousel from "../../components/utilities/Carousel";
import { Box, Flex, Show, Hide } from "@chakra-ui/react";
import { useState } from "react";

export default function AuthPage() {
  return (
    <Box h="100vh" w="100vw">
      <Flex h="100%" w="100%">
        {/* hide if phone */}
        <Show above="lg">
          <Box w="50%" maxH="full" padding={5}>
            <Carousel />
          </Box>
        </Show>

        <Box w={{ base: "100%", lg: "50%" }} padding={5}>
          <AuthTab tab1={<LoginForm />} tab2={<SignUpForm />} />
        </Box>
      </Flex>
    </Box>
  );
}
