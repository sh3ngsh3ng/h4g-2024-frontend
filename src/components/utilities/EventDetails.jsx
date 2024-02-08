import {
    Box,
    Heading,
    Text,
    Button,
    Flex
} from "@chakra-ui/react";
import { useDispatch } from "react-redux";
import { setEditForm } from "../actions/adminActions";
import { setViewEvent } from "../actions/userActions";

export const EventDetails = ({data}) => {
    const dispatch = useDispatch()
    console.log("data: ", data)
    return (
        <> 
        <Box width="50%" borderWidth="2px" borderColor="blue">
            <Flex justifyContent="space-between">
                <Box>
                    <Heading textColor="red">
                        {data.name}
                    </Heading>
                    <Text fontSize="lg">
                        {data.startDate}
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
                    {data.description}
                </Text>
            </Box>
        </Box>
        </>
    )
}

export default EventDetails;