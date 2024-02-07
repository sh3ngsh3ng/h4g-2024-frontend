import { auth } from "../../firebase/firebase"
import Navbar from "../../components/navbar/Navbar"
import { Box, Stack, Button, Tabs, TabList, Tab, Flex } from "@chakra-ui/react"
import { ArrowDownIcon } from "@chakra-ui/icons"
import EventCard from "../../components/utilities/EventCard"

export default function UserPage() {

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

    // Retrieve data from backend 
    // 1) Volunteering events
    // 2) User data - experience, volunteer hours, name, etc
    return (
        <>
            <Box h="100%" w="100%" p={3}>
                <Navbar />
                <Tabs variant='enclosed'>
                    <Flex justifyContent="space-between" alignItems="center">
                        <TabList>
                            <Tab>Current</Tab>
                            <Tab>Past</Tab>
                        </TabList>
                        <Stack direction="row" spacing={4}>
                            <Button rightIcon={<ArrowDownIcon />} bgColor="pink">
                                Sort
                            </Button>
                            <Button>
                                Filter
                            </Button>
                        </Stack>
                    </Flex>
                </Tabs>

                {/*<EventCard />*/}
            </Box>
        </>
    )
}