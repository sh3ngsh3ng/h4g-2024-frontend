
import Navbar from "../../components/navbar/Navbar"
import { Box, Stack, Button, Icon } from "@chakra-ui/react"
import { ArrowDownIcon } from "@chakra-ui/icons"
import EventCard from "../../components/utilities/EventCard"

export default function AdminPage() {

    // Retrieve data from backend 
    // 1) Volunteering events
    // 2) User data - experience, volunteer hours, name, etc

    return (
        <>
            <Box h="100%" w="100%" p={3}>
                <Navbar />
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