import { FormControl, FormLabel } from "@chakra-ui/form-control";
import { Input } from "@chakra-ui/input";
import { Box, Flex, Heading } from "@chakra-ui/layout";
import { white } from "../constants/color";

export default function EventDetails( {onInputChange, formToEdit }) {
  return (
    <Box
      width="95%"
      backgroundColor={white}
      borderRadius={8}
    >
      <Heading size="md" padding="10px">
        Event Details
      </Heading>
      <div
        style={{
          border: "0.5px solid rgba(128, 128, 128, 0.5)",
          width: "100%",
          margin: "0px",
        }}
      ></div>
      <FormControl padding={3} pb={8}>
        <Flex direction="row" width="full" >
          <Box width="50%" paddingRight={2}>
            <Input
              placeholder="Event Name"
              name="name"
              value={formToEdit?.name}
              onChange={onInputChange}
              background="gray.200"
            />
          </Box>
          <Box width="50%" paddingLeft={2}>
            <Input
              placeholder="Organization"
              name="organization"
              value={formToEdit?.organization}
              onChange={onInputChange}
              background="gray.200"
            />
          </Box>
        </Flex>
        <Flex direction="row" width="full" marginTop={5}>
          <Box width="50%" paddingRight={2}>
            <FormLabel>Start Date</FormLabel>
            <Input
              size="md"
              type="date"
              name="startDate"
              value={formToEdit?.startDate}
              onChange={onInputChange}
              background="gray.200"
            />
          </Box>
          <Box width="50%" paddingLeft={2}>
            <FormLabel>End Date</FormLabel>
            <Input
              type="date"
              name="endDate"
              value={formToEdit?.endDate}
              onChange={onInputChange}
              background="gray.200"
            />
          </Box>
        </Flex>
      </FormControl>
    </Box>
  );
}
