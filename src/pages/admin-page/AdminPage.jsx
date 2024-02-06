
import Navbar from "../../components/navbar/Navbar"
import { Box, Stack, Button, Tabs, TabList, Tab } from "@chakra-ui/react"
import { ArrowDownIcon } from "@chakra-ui/icons"
import EventCard from "../../components/utilities/EventCard"
import { useDispatch, useSelector } from "react-redux"
import { ADMIN_DASHBOARD_MODE_READ, ADMIN_DASHBOARD_MODE_UPDATE } from "../../components/constants/admin"
import EventsForm from "../../components/forms/EventForm"

export default function AdminPage() {

    const adminDashboardMode = useSelector((state) => state.adminDashboard.mode)

    const renderDashboard = () => {
        if (adminDashboardMode == ADMIN_DASHBOARD_MODE_READ) {
            return <h1>READ</h1> // list render all events here
        } else if (adminDashboardMode == ADMIN_DASHBOARD_MODE_UPDATE) {
            return <EventsForm /> // pass in a single event if it is update
        }
    }

    return (
        <>
            <Box h="100%" w="100%" p={3}>
                <Navbar />
                <Tabs variant='enclosed'>
                    <TabList>
                        <Tab>All Events</Tab>
                    </TabList>
                </Tabs>
                <Stack direction="row" spacing={4}>
                    <Button rightIcon={<ArrowDownIcon />} bgColor="pink">
                        Sort
                    </Button>
                    <Button>
                        Filter
                    </Button>
                </Stack>
                {renderDashboard()}
            </Box>
        </>
    )
}