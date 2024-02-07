import {
    Box,
    Heading,
    Text,
    Flex,
    Button,
    Stack,
    Tag,
} from "@chakra-ui/react";
import stock from "../../static/Images/event-image/stock.png";

export const EventCard = ({ data, type, action }) => {
    return (
        <>
            <Box maxW="xs" borderWidth="1px" height="250px" borderRadius="lg" overflow="hidden" position="relative">
                <Flex justifyContent="space-between">
                    <Box 
                        lineHeight={0} 
                        padding="10px">
                        <Heading as='h1' size='md'>
                            {data.name}
                        </Heading>
                        <Text fontSize="sm">
                            by {data.organization}
                        </Text>
                    </Box>
                    <Box padding="10px">
                        {
                            type == "admin" ? <Button colorScheme="red" onClick={action}>Edit</Button> : <Button colorScheme="red" onClick={action}>Join</Button>
                        }

                    </Box>
                </Flex>
                <Stack direction="row" padding="10px">
                    {data.skills.map((skill) => (
                        <Tag color="red" bgColor="red.100" borderRadius="full">
                            {skill}
                        </Tag>
                    ))}
                </Stack>
                <div 
                    style={{height: "160px", backgroundImage: `url(${stock})`}} 
                    position="relative">
                </div>
                <Box
                    position="absolute"
                    bottom="10px"
                    right="10px"
                    backgroundColor="rgba(255,255,255,1)"
                    padding="10px"
                    borderRadius="lg"
                    borderColor="red"
                    borderWidth="2px"
                    width="55px"
                    height="55px"
                    justifyContent="center"
                    alignItems="center">
                    <Text 
                        color="red" 
                        lineHeight="1" 
                        align="center" 
                        fontWeight="bold">
                        {data.month}
                            <br/> 
                        {data.day}
                    </Text>
                </Box>
            </Box>
        </>
    )
}

export default EventCard;