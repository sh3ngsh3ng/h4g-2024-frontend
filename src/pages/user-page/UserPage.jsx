import { auth } from "../../firebase/firebase";
import Navbar from "../../components/navbar/Navbar";
import {
  Box,
  Stack,
  Button,
  Tabs,
  TabList,
  Tab,
  Flex,
  MenuButton,
  Menu,
  MenuItem,
  MenuList,
  MenuGroup,
  SimpleGrid,
} from "@chakra-ui/react";
import { ArrowDownIcon, ChevronDownIcon } from "@chakra-ui/icons";
import EventCard from "../../components/utilities/EventCard";
import PastEventCard from "../../components/utilities/PastEventCard";
import { useEffect } from "react";
import { retrieveAllEvents } from "../../components/actions/eventsAction";
import { USER_DASHBOARD_READ_DETAILS } from "../../components/constants/user";
import { useDispatch, useSelector } from "react-redux";
import { changeUserDashboard } from "../../components/actions/userActions";
import EventDetails from "../../components/utilities/EventDetails";
import ProfilePage from "../profile-page/ProfilePage";
import ProfileForm from "../../components/forms/ProfileForm";
import { paleRed } from "../../components/constants/color";

export default function UserPage() {
  const dispatch = useDispatch();

  useEffect(() => {
    // retrieve all events on user page loaded (move to login)
    dispatch(retrieveAllEvents());
  }, []);

  // go to view event
  const goToEventDetailsPage = () => {
    dispatch(changeUserDashboard(USER_DASHBOARD_READ_DETAILS));
  };

  const userDashboardMode = useSelector((state) => state.userDashboard.mode);
  const allEvents = useSelector((state) => state.events.allEvents);

  const renderDashboard = () => {
    if (userDashboardMode == "USER_DASHBOARD_READ_CURRENT") {
      const currentEvents = allEvents?.filter((event) => !event.isCompleted);
      return (
        <Box backgroundColor={paleRed} borderRadius={8}>
        <SimpleGrid columns={[1, 2, 3]} justifyItems="center">
          {currentEvents?.map((event) => {
            return (
              <EventCard
                data={event}
                type="user"
                action={goToEventDetailsPage}
              />
            );
          })}
        </SimpleGrid>
        </Box>
      );
    } else if (userDashboardMode == "USER_DASHBOARD_READ_PAST") {
      const pastEvents = allEvents?.filter((event) => event.isCompleted);
      console.log("opastevehts: ", pastEvents);
      return pastEvents?.map((event) => {
        return <PastEventCard event={event} />;
      });
    } else if (userDashboardMode == "USER_DASHBOARD_READ_DETAILS") {
      return <EventDetails />;
    } else if (userDashboardMode == "USER_PROFILE") {
      return <ProfilePage />;
    }
  };

    const renderUserActionButtons = () => {
        if (userDashboardMode !== "USER_DASHBOARD_READ_DETAILS") {
            return (
                <Tabs variant='enclosed'>
                    <Flex justifyContent="space-between" alignItems="center">
                        <TabList>
                            <Tab onClick={() => dispatch(changeUserDashboard("USER_DASHBOARD_READ_CURRENT"))}>Current</Tab>
                            <Tab onClick={() => dispatch(changeUserDashboard("USER_DASHBOARD_READ_PAST"))}>Past</Tab>
                        </TabList>
                        <Stack direction="row" spacing={4}>
                            <Button variant='outline'
                                colorScheme="black"
                                borderColor="red"
                                borderWidth="2px"
                                rightIcon={<ArrowDownIcon />}
                                bgColor="red.100">
                                Sort
                            </Button>
                            <Menu>
                                <MenuButton as={Button}
                                    variant='outline'
                                    colorScheme="black"
                                    borderColor="red"
                                    borderWidth="2px"
                                    rightIcon={<ArrowDownIcon />}
                                    bgColor="red.100">
                                    Filter
                                </MenuButton>
                                <MenuList borderWidth="2px" borderColor="red" bg="red.100" padding="0">
                                    <MenuGroup title="Filter">
                                        <div style={{ borderTop: "2px solid red", width: "100%", margin: "0px" }}></div>
                                        <MenuItem>
                                            Event Type
                                        </MenuItem>
                                        <div style={{ borderTop: "0.5px solid black", width: "100%", margin: "0px" }}></div>
                                        <MenuItem>
                                            Skills
                                        </MenuItem>
                                        <div style={{ borderTop: "0.5px solid black", width: "100%", margin: "0px" }}></div>
                                        <MenuItem>
                                            Category
                                        </MenuItem>
                                    </MenuGroup>
                                </MenuList>
                            </Menu>
                        </Stack>
                    </Flex>
                </Tabs>
            )
        } else {
            return (
                <Button onClick={() => dispatch(changeUserDashboard("USER_DASHBOARD_READ_CURRENT"))} colorScheme="blue">Back</Button>
            )
        }
    }

    return (
        <>
            <Box h="100%" w="100%" p={3}>
                <Navbar />
                {userDashboardMode !== "USER_PROFILE" ? renderUserActionButtons() : null}
                {renderDashboard()}
            </Box>
        </>
    );
  }
