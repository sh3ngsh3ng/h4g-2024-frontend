import {
    Box,
    Heading,
    Text,
    Button,
    Flex,
    Center
} from "@chakra-ui/react";
import { useDispatch, useSelector } from "react-redux";
import { setEditForm } from "../actions/adminActions";
import { setViewEvent } from "../actions/userActions";

export const EventDetails = () => {
    const dispatch = useDispatch()
    const event = useSelector(state => state.userEvents.eventToView)
    console.log("data: ", event)
    return (
        <> 
        <Box h="100%" w="100%" p={3}>
            <Center>
            <Box width="50%" borderWidth="2px" borderColor="blue">
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
        </Center>
        </Box>
        </>
    )
}

export default EventDetails;