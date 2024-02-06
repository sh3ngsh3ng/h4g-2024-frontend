import {
    Box,
    Heading,
    SimpleGrid,
    Text,
    Flex,
    Button,
    Stack,
    Tag,
    Image
} from "@chakra-ui/react";
import Logo from "../../static/Images/big-at-heart-logo/logo.png";

export const EventCard = ({ data, type, action }) => {
    return (
        <>
            {/* <SimpleGrid columns={4}> */}
            <Box maxW="xs" borderWidth="5px" borderRadius="lg" overflow="hidden">
                <Flex>
                    <Box paddingRight="40px">
                        <Heading as='h1' size='md'>
                            {data.name}
                        </Heading>
                        <Text>
                            by {data.organization}
                        </Text>
                    </Box>
                    <Box padding="10px">
                        {
                            type == "admin" ? <Button colorScheme="red" onClick={action}>Edit</Button> : <Button colorScheme="red" onClick={action}>Join</Button>
                        }

                    </Box>
                </Flex>
                <Stack direction="row">
                    {data.skills.map((skill) => (
                        <Tag color="red" bgColor="pink.100" borderRadius="full">
                            {skill}
                        </Tag>
                    ))}
                </Stack>
                <Image src={Logo} alt="Big at Heart Logo" />
            </Box>
            {/* </SimpleGrid> */}
        </>
    )
}

export default EventCard;