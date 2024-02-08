import EventDetails from "../../components/utilities/EventDetails"
import { Box, Center } from "@chakra-ui/react"

const event = {
    "volunteers": [],
    "_id": "65be5303d902fb6dc95d3127",
    "name": "1300",
    "slug": "1300",
    "organization": "charity10",
    "description": "Test event 10",
    "startDate": "2024-12-12T00:00:00.000Z",
    "maxHoursGiven": 25,
    "interest": [],
    "skills": [],
    "isCompleted": true,
    "createdAt": "2024-02-03T14:51:47.612Z",
    "updatedAt": "2024-02-03T14:51:47.612Z",
    "__v": 0
};

export default function EventViewPage() {
    return (
        <>
        <Box h="100%" w="100%" p={3}>
            <Center>
                <EventDetails data={event}/>
            </Center>
        </Box>
        </>
    )
}