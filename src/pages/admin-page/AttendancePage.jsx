import { Box, Container } from "@chakra-ui/layout";
import Navbar from "../../components/navbar/Navbar";
import {
  paleRed,
  palestRed,
  primaryRed,
  tertiaryRed,
} from "../../components/constants/color";
import AttendanceTable from "../../components/tables/AttendanceTable";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router";
import { useEffect } from "react";
import {
  adminCompleteEvent,
  adminGenerateQr,
  listEventAttendance,
} from "../../components/actions/adminActions";
import {
  EVENT_ATTENDANCE_RESET,
  EVENT_COMPLETE_RESET,
  GENERATE_EVENT_QR_RESET,
  MARK_EVENT_ATTENDANCE_RESET,
} from "../../components/constants/admin";
import Loading from "../../components/utilities/Loading";
import { Button } from "@chakra-ui/button";
import { Show } from "@chakra-ui/media-query";
import AttendanceHelper from "../../components/utilities/AttendanceHelper";
import { saveAs } from "file-saver";
import { displayError, displaySuccess } from "../../services/alertServices";

export default function AttendancePage() {
  const param = useParams();
  const dispatch = useDispatch();
  const eventAttendance = useSelector((state) => state.eventAttendance);
  const markEventAttendance = useSelector((state) => state.markEventAttendance);
  const generateEventQr = useSelector((state) => state.generateEventQr);
  const eventComplete = useSelector(state => state.eventComplete);

  const { qr } = generateEventQr;

  const { success } = markEventAttendance;

  const { loading, data, error, slug, eventName } = eventAttendance;


  const {loading:completeLoading, success:completeSuccess, error:completeError} = eventComplete;

  const handleGenerateQr = () => {
    dispatch(adminGenerateQr({ slug: param.slug }));
  };

  const handleRefreshTable = () => {
    dispatch({ type: EVENT_ATTENDANCE_RESET });
  };

  const handleCompleteEvent = () => {
    dispatch(adminCompleteEvent({slug: param.slug}));
  }

  useEffect(() => {
    if (success) {
      dispatch({ type: EVENT_ATTENDANCE_RESET });
      dispatch({ type: MARK_EVENT_ATTENDANCE_RESET });
    }
    if (!data) {
      dispatch(listEventAttendance({ slug: param.slug }));
    }

    if (data && slug != param.slug) {
      dispatch(listEventAttendance({ slug: param.slug }));
    }

    if (completeSuccess) {
      displaySuccess("You have successfully send out cert to volunteers!");
      dispatch( { type: EVENT_COMPLETE_RESET})
    }

    if (completeError) {
      displayError(completeError);
      dispatch( { type: EVENT_COMPLETE_RESET})
    }

    if (qr && qr.qr) {
      window.open(qr.qr.secure_url);
      dispatch({ type: GENERATE_EVENT_QR_RESET });
    }
  }, [param, data, success, qr, completeSuccess, completeError]);

  return (
    <Box width="100%" height="100%" p={3}>
      <Navbar />
      {!loading && (
        <Box backgroundColor={paleRed} p={3} borderRadius={8} mr={2}>
          <Show above="lg">
            <AttendanceHelper
              width="20%"
              mr={2}
              handleGenerateQr={handleGenerateQr}
              handleRefreshTable={handleRefreshTable}
              handleCompleteEvent={handleCompleteEvent}
            ></AttendanceHelper>
          </Show>

          <Show below="lg">
            <AttendanceHelper
              width="full"
              mb={2}
              handleGenerateQr={handleGenerateQr}
              handleRefreshTable={handleRefreshTable}
              handleCompleteEvent={handleCompleteEvent}
            ></AttendanceHelper>
          </Show>
          <AttendanceTable data={data} eventName={eventName} />
        </Box>
      )}
      {loading && <Loading />}
    </Box>
  );
}
