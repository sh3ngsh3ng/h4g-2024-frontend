import { Box, Flex, Spacer } from "@chakra-ui/layout";
import {
  paleRed,
  palestRed,
  primaryRed,
  tertiaryRed,
} from "../constants/color";
import { CheckCircleIcon, WarningIcon } from "@chakra-ui/icons";
import { Button } from "@chakra-ui/button";

export default function DisplayCertHelper({ cert }) {
  return (
    <Box
      backgroundColor={paleRed}
      borderColor={primaryRed}
      borderWidth={2}
      borderRadius={8}
      height="50px"
      mt={4}
    >
      <Flex alignItems="center">
        <Box
          ml={2}
          mt={1.5}
          sx={{ ":hover": { cursor: "pointer" } }}
          onClick={() => window.open(cert)}
        >
          Cert
        </Box>
      </Flex>
    </Box>
  );
}
