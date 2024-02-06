
import Navbar from "../../components/navbar/Navbar"
import { Box, Stack, Button, Tabs, TabList, Tab, Flex } from "@chakra-ui/react"
import EventCard from "../../components/utilities/EventCard"
import { useDispatch, useSelector } from "react-redux"
import { ADMIN_DASHBOARD_MODE_CREATE, ADMIN_DASHBOARD_MODE_READ, ADMIN_DASHBOARD_MODE_UPDATE } from "../../components/constants/admin"
import EventsForm from "../../components/forms/EventForm"
import { changeAdminDashboard } from "../../components/actions/adminActions"

export default function AdminPage() {
    const dispatch = useDispatch()

    const adminDashboardMode = useSelector((state) => state.adminDashboard.mode)

    const goToNewEventForm = () => {
        dispatch(changeAdminDashboard(ADMIN_DASHBOARD_MODE_CREATE))
    }

    const exitEventForm = () => {
        dispatch(changeAdminDashboard(ADMIN_DASHBOARD_MODE_READ))
    }


    const renderDashboard = () => {
        if (adminDashboardMode == ADMIN_DASHBOARD_MODE_READ) {
            return <h1>READ</h1> // list render all events here
        } else if (adminDashboardMode == ADMIN_DASHBOARD_MODE_CREATE) {
            return <EventsForm />
        } else if (adminDashboardMode == ADMIN_DASHBOARD_MODE_UPDATE) {
            return <EventsForm /> // pass in a single event if it is update
        }
    }

    const renderAdminActionButtons = () => {
        if (adminDashboardMode == ADMIN_DASHBOARD_MODE_READ) {
            return <Button onClick={goToNewEventForm} colorScheme="blue">Create Event</Button>
        } else if (adminDashboardMode == ADMIN_DASHBOARD_MODE_UPDATE) {
            return (
                <Stack direction="row">
                    <Button bgColor="white">Cancel</Button>
                    <Button bgColor="red">Save</Button>
                </Stack>
            )
        } else if (adminDashboardMode == ADMIN_DASHBOARD_MODE_CREATE) {
            return <Button bgColor="white" onClick={exitEventForm}>Cancel</Button>
        }
    }

    return (
        <>
            <Box h="100%" w="100%" p={3}>
                <Navbar />
                <Tabs variant='enclosed'>
                    <Flex justifyContent="space-between" alignItems="center">
                        <TabList>
                            <Tab>All Events</Tab>
                        </TabList>
                        {/* Add a Button component at the end of the TabList */}
                        {renderAdminActionButtons()}
                    </Flex>
                </Tabs>
                {renderDashboard()}
            </Box>
        </>
    )
}