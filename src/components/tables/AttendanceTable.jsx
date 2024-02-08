import {
  Table,
  Thead,
  Tbody,
  Tfoot,
  Tr,
  Th,
  Td,
  TableCaption,
  TableContainer,
  Box,
  Flex,
  Center,
} from "@chakra-ui/react";
import { CheckIcon, CloseIcon } from "@chakra-ui/icons";
import { paleRed, primaryRed, tertiaryRed, white } from "../constants/color";

export default function AttendanceTable() {
  const data = [
    { name: "test", school: "test", age: "test", isAttend: "test" },
    { name: "test", school: "test", age: "test", isAttend: "test" },
    { name: "test", school: "test", age: "test", isAttend: "test" },
  ];
  return (
    <Box m={5} backgroundColor="white" borderRadius={8}>
      <TableContainer borderRadius={8}>
        <Box height={10} p={2} mr={2} ml={2} fontSize="18px" fontWeight="500">
          Event Name
        </Box>
        <Table variant="simple">
          <TableCaption mt={0}>Attendance List of ##event name##</TableCaption>
          <Thead backgroundColor={tertiaryRed} sx={{ color: primaryRed }}>
            <Tr>
              <Th color={white}>Name</Th>
              <Th color={white}>School</Th>
              <Th color={white}>Age</Th>
              <Th color={white}>Is Attend?</Th>
              <Th isNumeric color={white}>
                Action
              </Th>
            </Tr>
          </Thead>
          <Tbody>
            {data.map((item) => (
              <Tr>
                <Td>{item.name}</Td>
                <Td>{item.school}</Td>
                <Td width="15%">{item.age}</Td>
                <Td width="15%">{item.isAttend}</Td>
                <Td isNumeric width="10%">
                  <Flex justifyContent="flex-end">
                    <Box
                      backgroundColor={paleRed}
                      width={7}
                      p={1}
                      mr={2}
                      borderRadius={8}
                    >
                      <CloseIcon
                        boxSize={3}
                        color="red.500"
                        mr={1}
                        mb={1}
                        sx={{ ":hover": { cursor: "pointer" } }}
                      />
                    </Box>
                    <Box
                      backgroundColor={paleRed}
                      width={7}
                      p={1}
                      borderRadius={8}
                    >
                      <CheckIcon
                        color="green.500"
                        mb={0.5}
                        mr={0.2}
                        sx={{ ":hover": { cursor: "pointer" } }}
                      />
                    </Box>
                  </Flex>
                </Td>
              </Tr>
            ))}
          </Tbody>
        </Table>
      </TableContainer>
    </Box>
  );
}
