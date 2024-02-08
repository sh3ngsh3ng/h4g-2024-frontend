import { AbsoluteCenter, Box } from "@chakra-ui/layout";
import Navbar from "../../components/navbar/Navbar";
import { paleRed } from "../../components/constants/color";
import ConfirmAttendance from "../../components/utilities/ConfirmAttendance";
import { Show } from "@chakra-ui/media-query";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router";
import { userMarkAttendance } from "../../components/actions/userActions";
import { useEffect } from "react";
import { displaySuccess } from "../../services/alertServices";

export default function MarkAttendancePage() {
  const dispatch = useDispatch();
  const param = useParams();

  const markEventAttendance = useSelector((state) => state.markEventAttendance);

  const { success } = markEventAttendance;

  const handleMarkAttendance = () => {
    dispatch(userMarkAttendance({slug: param.slug, token: param.token}))
  }

  useEffect(() => {
    if (success) {
      displaySuccess("You have successfully mark your attendance, you may close the screen now");
    }
  }, [success])

  return (
    <Box width="100%" height="100%" p={3}>
    <Navbar />
    <Show above="lg">
      <Box backgroundColor={paleRed} width="60%" height="60%" sx={{ mx: "auto", mt: 10 }} borderRadius={8}>
        <ConfirmAttendance handleMarkAttendance={handleMarkAttendance}/>
      </Box>
      </Show>

      <Show below="lg">
      <Box backgroundColor={paleRed} width="100%" height="60%" sx={{ mx: "auto", mt: 10, mr: 5 }} borderRadius={8}>
        <ConfirmAttendance handleMarkAttendance={handleMarkAttendance} width="full"/>
      </Box>
      </Show>
  </Box>
  )
}