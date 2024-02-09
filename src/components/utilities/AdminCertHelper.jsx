import { Box, Flex, Spacer } from "@chakra-ui/layout";
import {
  paleRed,
  palestRed,
  primaryRed,
  tertiaryRed,
} from "../constants/color";
import { CheckCircleIcon, WarningIcon } from "@chakra-ui/icons";
import { Button } from "@chakra-ui/button";

export default function AdminCertHelper({ cert, onVerify }) {
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
          onClick={() => window.open(cert.cert)}
        >
          {cert.cert}
        </Box>
        <Spacer />
        <Button
          backgroundColor={paleRed}
          borderColor={primaryRed}
          color={primaryRed}
          variant="outline"
          sx={{
            ":hover": {
              backgroundColor: palestRed,
              ":focus": { backgroundColor: tertiaryRed },
            },
          }}
          height="36px"
          mr={4}
          mt={1}
          onClick={() => onVerify(cert._id)}
        >
          Verify
        </Button>
        {cert.isVerified ? (
          <CheckCircleIcon mr={2} mt={1.5} color="green" />
        ) : (
          <WarningIcon mr={2} mt={1.5} color="red" />
        )}
      </Flex>
    </Box>
  );
}
