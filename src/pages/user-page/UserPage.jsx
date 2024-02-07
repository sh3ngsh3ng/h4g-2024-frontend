import { auth } from "../../firebase/firebase"
import Navbar from "../../components/navbar/Navbar"
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
} from "@chakra-ui/react"
import { ArrowDownIcon, ChevronDownIcon } from "@chakra-ui/icons"
import EventCard from "../../components/utilities/EventCard"
import PastEventCard from "../../components/utilities/PastEventCard"

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

    const Aevent = {
        name: "Event Name",
        organization: "Organiser",
        skills: ["Skill1", "Skill2", "Skill3"],
        date: "10 December 2023"
    }

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
                            <Button variant='outline' 
                                colorScheme="black" 
                                borderColor="red" 
                                borderWidth="2px" 
                                rightIcon={<ArrowDownIcon />} 
                                bgColor="red.100">
                                Sort
                            </Button>
                            <Menu>
                                <MenuButton as = {Button} 
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

                {/*<PastEventCard 
                    event = {Aevent}/>*/}
            </Box>
        </>
    )
}