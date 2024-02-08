import { Box, Container } from "@chakra-ui/layout";
import Navbar from "../../components/navbar/Navbar";
import { paleRed } from "../../components/constants/color";
import AttendanceTable from "../../components/tables/AttendanceTable";

export default function AttendancePage() {
  return (
    <Box width="100%" height="100%" p={3}>
      <Navbar/>
      <Box backgroundColor={paleRed} p={3} borderRadius={8} mr={2}>
        Attendance here
        <AttendanceTable/>
      </Box>
    </Box>
  )
}