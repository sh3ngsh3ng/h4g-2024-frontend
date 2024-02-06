import { auth } from "../../firebase/firebase"
import Navbar from "../../components/navbar/Navbar"
import { Box, Stack, Button, Tabs, TabList, Tab } from "@chakra-ui/react"
import { ArrowDownIcon } from "@chakra-ui/icons"
import EventCard from "../../components/utilities/EventCard"

export default function UserPage() {

    // Retrieve data from backend 
    // 1) Volunteering events
    // 2) User data - experience, volunteer hours, name, etc

    return (
        <>
            <Box h="100%" w="100%" p={3}>
                <Navbar />
                <Tabs variant='enclosed'>
                    <TabList>
                        <Tab>Current</Tab>
                        <Tab>Past</Tab>
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
                <EventCard />
            </Box>
        </>
    )
}