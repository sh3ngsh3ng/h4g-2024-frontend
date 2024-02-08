import {
    Box,
    Text,
    Heading,
    Stack,
    Tag,
    Flex
} from "@chakra-ui/react";

//borderWidth at the box is for visual purposes only will remove later
export const PastEventCard = ({ event }) => {
    return (
        <>

            <Box height="55px" borderWidth="2px" borderRadius="lg">
                <Flex justifyContent="space-between">
                    <Box>
                        <Stack direction="row" justifyContent="center" alignItems="center" >
                            <Heading as='h1' size='md' padding="10px">
                                {event?.name}
                            </Heading>
                            <Text fontSize="sm" paddingTop="10px">
                                by {event?.organization}
                            </Text>
                            <Stack direction="row" padding="8px">
                                {event?.skills.map((skill) => (
                                    <Tag color="red" bgColor="red.100" borderRadius="full">
                                        {skill}
                                    </Tag>
                                ))}
                            </Stack>
                        </Stack>
                    </Box>
                    <Text color="red" fontWeight="bold" paddingTop="10px" paddingRight="10px">
                        {event?.date}
                    </Text>
                </Flex>
            </Box>
        </>
    )
}

export default PastEventCard;