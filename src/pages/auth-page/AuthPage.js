import LoginForm from "../../components/forms/LoginForm";
import SignUpForm from "../../components/forms/SignUpForm";
import Carousel from "../../components/utilities/Carousel";
import { Tabs, TabList, TabPanels, Tab, TabPanel, Box, Flex } from "@chakra-ui/react";
import { Show, Hide } from "@chakra-ui/react";
import { useState } from "react";

function AuthTabs() {
  return (
    <Tabs align="center" variant="solid-rounded" defaultIndex={0} colorScheme="red">
      <TabList>
        <Tab>Login</Tab>
        <Tab>Sign Up</Tab>
      </TabList>
      <TabPanels>
        <TabPanel>
          <LoginForm />
        </TabPanel>
        <TabPanel>
          <SignUpForm />
        </TabPanel>
      </TabPanels>
    </Tabs>
  );
}

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
          <AuthTabs />
        </Box>
      </Flex>
    </>
  );
}
