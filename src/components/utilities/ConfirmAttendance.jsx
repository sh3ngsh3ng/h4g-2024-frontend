import { Card, CardBody, CardFooter, CardHeader } from "@chakra-ui/card";
import { Box, Heading, Stack, StackDivider, Text } from "@chakra-ui/layout";
import { paleRed, palestRed, primaryRed, tertiaryRed } from "../constants/color";
import { Button } from "@chakra-ui/button";

export default function ConfirmAttendance({width, handleMarkAttendance}) {
  return (
    <Card align='center' variant="filled" backgroundColor={paleRed} pt={50}>
  <CardHeader>
    <Heading size='md'> Mark Attendance</Heading>
  </CardHeader>
  <CardBody>
    <Text>Please confirm that you have attended the event.</Text>
  </CardBody>
  <CardFooter>
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
        width={width}
        height="36px"
        onClick={handleMarkAttendance}
      >
        Confirm
      </Button>
  </CardFooter>
</Card>
  );
}
