import React from "react";
import { Box, Divider } from "@chakra-ui/react";


export default function MyDivider() {
  return (
  <Box height="25px">
    <Divider
      position="relative"
      varaint="solid"
      borderColor="grey"
      opacity="30%"
      borderWidth="1px"
      mt={5}
    />
  </Box>);
}
