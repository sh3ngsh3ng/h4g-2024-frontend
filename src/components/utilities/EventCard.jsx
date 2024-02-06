import { 
    Box, 
    Heading, 
    SimpleGrid, 
    Text , 
    Flex, 
    Button, 
    Stack,
    Tag,
    Image
} from "@chakra-ui/react";
import Logo from "../../static/Images/big-at-heart-logo/logo.png";

const event = {
    name: "Help the Homeless",
    organization: "Red Cross",
    skills: ["communication", "leadership", "teamwork"],
    month: "Feb",
    day: "14",
}

export const EventCard = () => {
    return (
        <>
        <SimpleGrid columns={4}>
            <Box maxW="xs" borderWidth="5px" borderRadius="lg" overflow="hidden">
                <Flex>
                    <Box paddingRight="40px">
                        <Heading as='h1' size='md'>
                            {event.name}
                        </Heading>
                        <Text>
                            by {event.organization}
                        </Text>
                    </Box>
                    <Box padding="10px">
                        <Button colorScheme="red">
                            Join
                        </Button>
                    </Box>
                </Flex>
                <Stack direction="row">
                    {event.skills.map((skill) => (
                        <Tag color="red" bgColor="pink.100" borderRadius="full">
                            {skill}
                        </Tag>
                        ))}
                </Stack>
                <Image src={Logo} alt="Big at Heart Logo" />
            </Box>
        </SimpleGrid>
        </>
    )
}

export default EventCard;