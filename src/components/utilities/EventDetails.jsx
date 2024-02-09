import {
    Box,
    Heading,
    Text,
    Button,
    Flex,
    Center,
    Image
} from "@chakra-ui/react";
import { useDispatch, useSelector } from "react-redux";
import { setEditForm } from "../actions/adminActions";
import { setViewEvent } from "../actions/userActions";
import EventImage from "../../static/Images/event-image/stock.png"

// need pop up to show the event details that will be used in the join button here will keep it here for now
export const EventDetails = () => {
    const dispatch = useDispatch()
    const event = useSelector(state => state.userEvents.eventToView)
    console.log("data: ", event)
    return (
        <> 
        <Box h="100%" w="100%" p={3}>
                <Flex direction="column" borderWidth="2px" justifyContent="center">
                    <Box width="50%" borderWidth="2px" borderColor="blue" borderRadius="lg" mb={4}>
                        <Flex justifyContent="space-between">
                            <Box>
                                <Heading textColor="red">
                                    {event.name}
                                </Heading>
                                <Text fontSize="lg">
                                    {event.startDate}
                                </Text>
                            </Box>
                            {/*<Box padding="10px">
                            {
                                        type == "admin" ? <Button colorScheme="red" onClick={() => {
                                            action()
                                            dispatch(setEditForm(data))
                                        }}>Edit</Button> : <Button colorScheme="red" onClick={() => {
                                            action() 
                                        }}>Join</Button>
                                    }

                                </Box>*/}
                            </Flex>
                        <Box>
                            <Text>
                                {event.description}
                            </Text>
                        </Box>
                    </Box>
                    <Image src={EventImage} alt="Event Image" borderRadius="lg" width="50%" borderWidth="2px"/>
                </Flex>
        </Box>
        </>
    )
}

export default EventDetails;