import Navbar from "../../components/navbar/Navbar";
import {
  Box,
  Stack,
  Button,
  Tabs,
  TabList,
  Tab,
  Flex,
  Grid,
  GridItem,
  SimpleGrid,
} from "@chakra-ui/react";
import EventCard from "../../components/utilities/EventCard";
import { useDispatch, useSelector } from "react-redux";
import {
  ADMIN_DASHBOARD_MODE_CREATE,
  ADMIN_DASHBOARD_MODE_READ,
  ADMIN_DASHBOARD_MODE_UPDATE,
  EVENT_FORM_TEMPLATE,
} from "../../components/constants/admin";
import EventsForm from "../../components/forms/EventForm";
import {
  adminCreateEvent,
  adminUpdateEvent,
  changeAdminDashboard,
  clearForm,
  setEditForm,
} from "../../components/actions/adminActions";
import { retrieveAllEvents } from "../../components/actions/eventsAction";
import { useEffect, useMemo } from "react";
import {
  paleRed,
  palestRed,
  primaryRed,
  tertiaryRed,
} from "../../components/constants/color";
import Loading from "../../components/utilities/Loading";

export default function AdminPage() {
  const dispatch = useDispatch();
  const formToEdit = useSelector((state) => state.adminEvents.formToEdit);
  const adminDashboardMode = useSelector((state) => state.adminDashboard.mode);
  const allEvents = useSelector((state) => state.events.allEvents);
  const loading = useSelector((state) => state.events.loading)
  useEffect(() => {
    // retrieve all events on admin page loaded (move to login)
    dispatch(retrieveAllEvents());
  }, []);

  // go to form to add new event
  const goToNewEventForm = () => {
    dispatch(clearForm());
    dispatch(changeAdminDashboard(ADMIN_DASHBOARD_MODE_CREATE));
  };

  // send new event form to backend

  const submitNewEvent = () => {
    console.log("loading: ", loading)
    dispatch(adminCreateEvent(formToEdit));
  };

  const updateEvent = () => {
    console.log("form to edit?? :", formToEdit)
    dispatch(adminUpdateEvent(formToEdit));
  };

  // exit event form back to all events
  const exitEventForm = () => {
    dispatch(clearForm());
    dispatch(changeAdminDashboard(ADMIN_DASHBOARD_MODE_READ));
  };

  // go to edit event
  const goToEditEventForm = () => {
    dispatch(changeAdminDashboard(ADMIN_DASHBOARD_MODE_UPDATE));
  };

  const renderDashboard = () => {
    if (adminDashboardMode == ADMIN_DASHBOARD_MODE_READ) {
      return (
        <Box backgroundColor={paleRed} borderRadius={8}>
          <SimpleGrid columns={[1, 2, 3]} justifyItems="center">
            {allEvents?.map((event) => {
              return (
                <EventCard
                  data={event}
                  type="admin"
                  action={goToEditEventForm}
                />
              );
            })}
          </SimpleGrid>
        </Box>
      );
    } else if (adminDashboardMode == ADMIN_DASHBOARD_MODE_CREATE) {
      // dispatch(clearForm())
      // dispatch(setEditForm(EVENT_FORM_TEMPLATE))
      return loading ? <Loading /> : <EventsForm />;
    } else if (adminDashboardMode == ADMIN_DASHBOARD_MODE_UPDATE) {
      return <EventsForm type="edit" />;
    }
  };

  const renderAdminActionButtons = () => {
    if (adminDashboardMode == ADMIN_DASHBOARD_MODE_READ) {
      return (
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
          mr={2}
          height="36px"
          onClick={() => goToNewEventForm()}
        >
          Create Event
        </Button>
      );
    } else if (adminDashboardMode == ADMIN_DASHBOARD_MODE_UPDATE) {
      return (
        <Stack direction="row">
          <Button onClick={exitEventForm} bgColor="white">
            Cancel
          </Button>
          <Button
            onClick={() => updateEvent()}
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
            mr={6}
          >
            Update
          </Button>
        </Stack>
      );
    } else if (adminDashboardMode == ADMIN_DASHBOARD_MODE_CREATE) {
      return (
        <Stack direction="row">
          <Button onClick={exitEventForm} bgColor="white">
            Cancel
          </Button>
          <Button
            onClick={() => submitNewEvent()}
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
            mr={6}
          >
            Save
          </Button>
        </Stack>
      );
    }
  };

  return (
    <>

      <Box h="100%" w="100%" p={3}>
        <Navbar />
        <Tabs variant="enclosed">
          <Flex justifyContent="space-between" alignItems="center">
            <Box backgroundColor={paleRed} borderRadius={8}>
              <TabList>
                <Tab>All Events</Tab>
              </TabList>
            </Box>
            {/* Add a Button component at the end of the TabList */}
            {renderAdminActionButtons()}
          </Flex>
        </Tabs>
        {renderDashboard()}
      </Box>
    </>
  );
}
