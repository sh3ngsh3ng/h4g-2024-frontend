
import Navbar from "../../components/navbar/Navbar"
import { Box, Stack, Button, Tabs, TabList, Tab, Flex, Grid, GridItem, SimpleGrid } from "@chakra-ui/react"
import EventCard from "../../components/utilities/EventCard"
import { useDispatch, useSelector } from "react-redux"
import { ADMIN_DASHBOARD_MODE_CREATE, ADMIN_DASHBOARD_MODE_READ, ADMIN_DASHBOARD_MODE_UPDATE, EVENT_FORM_TEMPLATE } from "../../components/constants/admin"
import EventsForm from "../../components/forms/EventForm"
import { changeAdminDashboard, clearForm, setEditForm } from "../../components/actions/adminActions"
import { retrieveAllEvents } from "../../components/actions/eventsAction"
import { useEffect } from "react"

export default function AdminPage() {
    const dispatch = useDispatch()

    useEffect(() => {
        // retrieve all events on admin page loaded (move to login)
        dispatch(retrieveAllEvents())
    }, [])

    const adminDashboardMode = useSelector((state) => state.adminDashboard.mode)
    const allEvents = useSelector((state) => state.events.allEvents)

    // go to form to add new event
    const goToNewEventForm = () => {
        dispatch(clearForm())
        dispatch(changeAdminDashboard(ADMIN_DASHBOARD_MODE_CREATE))
    }

    // send new event form to backend
    const createNewEvent = () => {

    }

    // exit event form back to all events 
    const exitEventForm = () => {
        dispatch(clearForm())
        dispatch(changeAdminDashboard(ADMIN_DASHBOARD_MODE_READ))
    }

    // go to edit event
    const goToEditEventForm = () => {
        dispatch(changeAdminDashboard(ADMIN_DASHBOARD_MODE_UPDATE))
    }

    const renderDashboard = () => {
        if (adminDashboardMode == ADMIN_DASHBOARD_MODE_READ) {
            return (
                <SimpleGrid columns={[1, 2, 3]} justifyItems="center">
                    {
                        allEvents?.map((event) => {
                            return (
                                <EventCard data={event} type="admin" action={goToEditEventForm} />
                            )
                        })
                    }
                </SimpleGrid>
            )
        } else if (adminDashboardMode == ADMIN_DASHBOARD_MODE_CREATE) {
            dispatch(clearForm())
            // dispatch(setEditForm(EVENT_FORM_TEMPLATE))
            return <EventsForm />
        } else if (adminDashboardMode == ADMIN_DASHBOARD_MODE_UPDATE) {
            return <EventsForm type="edit" />
        }
    }

    const renderAdminActionButtons = () => {
        if (adminDashboardMode == ADMIN_DASHBOARD_MODE_READ) {
            return <Button onClick={goToNewEventForm} colorScheme="blue">Create Event</Button>
        } else if (adminDashboardMode == ADMIN_DASHBOARD_MODE_UPDATE) {
            return (
                <Stack direction="row">
                    <Button onClick={exitEventForm} bgColor="white">Cancel</Button>
                    <Button bgColor="red">Save</Button>
                </Stack>
            )
        } else if (adminDashboardMode == ADMIN_DASHBOARD_MODE_CREATE) {
            return (
                <Stack direction="row">
                    <Button onClick={exitEventForm} bgColor="white">Cancel</Button>
                    <Button bgColor="green">Save</Button>
                </Stack>
            )
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