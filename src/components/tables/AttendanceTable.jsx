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
import { useDispatch, useSelector } from "react-redux";
import { adminMarkAttendance, adminUnmarkAttendance } from "../actions/adminActions";
import { useParams } from "react-router";

export default function AttendanceTable({data, eventName}) {
  const dispatch = useDispatch();
  const param = useParams();


  const handleMarkButton = (uid) => {
    dispatch(adminMarkAttendance({ slug: param.slug, uid}))
  }

  const handleUnmarkButton = (uid) => {
    dispatch(adminUnmarkAttendance({ slug: param.slug, uid}))
  }

  return (
    <>
    {data && (<Box m={5} backgroundColor="white" borderRadius={8}>
      <TableContainer borderRadius={8}>
        <Box height={10} p={2} mr={2} ml={2} fontSize="18px" fontWeight="500">
          {eventName && eventName}
        </Box>
        <Table variant="simple">
          <TableCaption mt={0}>Attendance List of ##event name##</TableCaption>
          <Thead backgroundColor={tertiaryRed} sx={{ color: primaryRed }}>
            <Tr>
              <Th color={white}>Name</Th>
              <Th color={white}>Email</Th>
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
                <Td width="25%">{item.name}</Td>
                <Td width="20%">{item.email}</Td>
                <Td width="20%">{item.school}</Td>
                <Td width="10%">{item.age}</Td>
                <Td width="10%">{item.isAttend ? "Yes" : "No"}</Td>
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
                        onClick={() => handleUnmarkButton(item.user)}
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
                        onClick={() => handleMarkButton(item.user)}
                      />
                    </Box>
                  </Flex>
                </Td>
              </Tr>
            ))}
          </Tbody>
        </Table>
      </TableContainer>
    </Box>)}
    </>
  );
}
