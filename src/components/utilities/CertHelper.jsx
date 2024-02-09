import { Box, Flex, Spacer } from "@chakra-ui/layout";
import { paleRed, primaryRed } from "../constants/color";
import { CheckCircleIcon, WarningIcon } from "@chakra-ui/icons";

export default function CertHelper({ fullUrl, url, isVerified }) {
  console.log("full url:", fullUrl)
  return (
    <Box backgroundColor={paleRed} borderColor={primaryRed} borderWidth={2} borderRadius={8} height="40px" mt={4}>
      <Flex alignItems="center">
        <Box ml={2} mt={1.5}><a href={fullUrl} target="_blank">{url}</a></Box>
        <Spacer />
        {isVerified ? <CheckCircleIcon mr={2} mt={1.5} color="green" /> : <WarningIcon mr={2} mt={1.5} color="red" />}
      </Flex>
    </Box>
  )
}