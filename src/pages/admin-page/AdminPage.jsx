
import Navbar from "../../components/navbar/Navbar"
import { Box, Stack, Button, Tabs, TabList, Tab, Flex, Grid, GridItem, SimpleGrid } from "@chakra-ui/react"
import EventCard from "../../components/utilities/EventCard"
import { useDispatch, useSelector } from "react-redux"
import { ADMIN_DASHBOARD_MODE_CREATE, ADMIN_DASHBOARD_MODE_READ, ADMIN_DASHBOARD_MODE_UPDATE } from "../../components/constants/admin"
import EventsForm from "../../components/forms/EventForm"
import { changeAdminDashboard, clearForm, setEditForm } from "../../components/actions/adminActions"

export default function AdminPage() {
    const dispatch = useDispatch()

    const adminDashboardMode = useSelector((state) => state.adminDashboard.mode)

    // save all events on redux
    const testEvents = [
        {
            name: "Help the Homeless",
            organization: "Red Cross",
            skills: ["communication", "leadership", "teamwork"],
            month: "Feb",
            day: "14",
            description: "No one should have less"
        },
        {
            name: "Help the Homemore",
            organization: "Yellow Cross",
            skills: ["leadership", "teamwork"],
            month: "Mar",
            day: "20",
            description: "We want more"
        },
        {
            name: "Help the Homeequal",
            organization: "Green Cross",
            skills: ["teamwork"],
            month: "Dec",
            day: "31",
            description: "We want equality"
        }
    ]

    const goToNewEventForm = () => {
        dispatch(changeAdminDashboard(ADMIN_DASHBOARD_MODE_CREATE))
    }

    const exitEventForm = () => {
        dispatch(clearForm())
        dispatch(changeAdminDashboard(ADMIN_DASHBOARD_MODE_READ))
    }

    const goToEditEventForm = () => {
        // set events to edit here before changing to events form
        // dispatch(setEditForm(testEvents[0]))
        dispatch(changeAdminDashboard(ADMIN_DASHBOARD_MODE_UPDATE))
    }

    const renderDashboard = () => {
        if (adminDashboardMode == ADMIN_DASHBOARD_MODE_READ) {
            return (
                <SimpleGrid columns={[1, 2, 3]} justifyItems="center">
                    {
                        testEvents.map((event) => {
                            return (
                                <EventCard data={event} type="admin" action={goToEditEventForm} />
                            )
                        })
                    }
                </SimpleGrid>

            )
        } else if (adminDashboardMode == ADMIN_DASHBOARD_MODE_CREATE) {
            dispatch(clearForm())
            return <EventsForm />
        } else if (adminDashboardMode == ADMIN_DASHBOARD_MODE_UPDATE) {
            dispatch(setEditForm(testEvents[1]))
            return <EventsForm type="edit" /> // pass in a single event if it is update
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